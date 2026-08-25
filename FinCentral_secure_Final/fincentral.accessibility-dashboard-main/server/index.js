import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 4000);
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-before-production';
const DB_FILE = path.join(__dirname, 'data', 'db.json');

if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, JSON.stringify({ users: [], history: [] }, null, 2));
const readDb = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
const writeDb = (db) => fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '10kb' }));
app.use('/api/auth', rateLimit({ windowMs: 15 * 60 * 1000, limit: 60, standardHeaders: true, legacyHeaders: false }));

function signUser(user) {
  return jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '2h' });
}
function publicUser(user) { return { id: user.id, name: user.name, email: user.email, createdAt: user.createdAt }; }

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: 'Authentication required.' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const db = readDb();
    const user = db.users.find(u => u.id === payload.sub);
    if (!user) return res.status(401).json({ message: 'User account no longer exists.' });
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ message: 'Session expired. Please sign in again.' });
  }
}

function addHistory(userId, type, description, req) {
  const db = readDb();
  db.history.unshift({
    id: crypto.randomUUID(),
    userId, type, description,
    ip: req.ip,
    createdAt: new Date().toISOString()
  });
  db.history = db.history.slice(0, 10000);
  writeDb(db);
}

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'FinCentral API' }));

app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name?.trim() || !email?.trim() || !password) return res.status(400).json({ message: 'Name, email and password are required.' });
  if (password.length < 8) return res.status(400).json({ message: 'Password must contain at least 8 characters.' });
  const normalizedEmail = email.trim().toLowerCase();
  const db = readDb();
  if (db.users.some(u => u.email === normalizedEmail)) return res.status(409).json({ message: 'An account with this email already exists.' });

  const user = {
    id: crypto.randomUUID(),
    name: name.trim().slice(0, 80),
    email: normalizedEmail,
    passwordHash: await bcrypt.hash(password, 12),
    createdAt: new Date().toISOString()
  };
  db.users.push(user);
  writeDb(db);
  addHistory(user.id, 'register', 'Created a FinCentral account', req);
  res.status(201).json({ token: signUser(user), user: publicUser(user) });
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body || {};
  const db = readDb();
  const user = db.users.find(u => u.email === String(email || '').trim().toLowerCase());
  if (!user || !(await bcrypt.compare(password || '', user.passwordHash))) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }
  addHistory(user.id, 'login', 'Signed in to FinCentral', req);
  res.json({ token: signUser(user), user: publicUser(user) });
});

app.get('/api/auth/me', requireAuth, (req, res) => res.json({ user: publicUser(req.user) }));

app.get('/api/history', requireAuth, (req, res) => {
  const db = readDb();
  res.json({ history: db.history.filter(item => item.userId === req.user.id).slice(0, 100) });
});

app.post('/api/history', requireAuth, (req, res) => {
  const allowed = new Set(['dashboard_view', 'account_sync', 'logout', 'login', 'register']);
  const type = allowed.has(req.body?.type) ? req.body.type : 'dashboard_view';
  const description = String(req.body?.description || 'Activity recorded').slice(0, 200);
  addHistory(req.user.id, type, description, req);
  res.status(201).json({ ok: true });
});

app.use((_req, res) => res.status(404).json({ message: 'Endpoint not found.' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error.' });
});

app.listen(PORT, () => console.log(`FinCentral API listening on http://localhost:${PORT}`));
