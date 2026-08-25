# FinCentral — Secure Accessibility Dashboard

This version adds a real backend authentication layer and a per-user activity History tab.

## Stack
- React + Vite frontend
- Express API
- bcryptjs password hashing
- JWT authentication
- Helmet, CORS and auth rate limiting
- JSON persistence for a lightweight demo (replace with PostgreSQL/MySQL for production)

## Run locally

1. Install Node.js 18+.
2. In the project root:
   ```bash
   npm install
   ```
3. Create `server/.env` from `server/.env.example` and set a strong `JWT_SECRET`.
4. Start the backend:
   ```bash
   npm run server
   ```
5. In another terminal start the frontend:
   ```bash
   npm run dev
   ```
   Or use `npm run dev:full`.

The frontend expects the API at `http://localhost:4000`. Set `VITE_API_URL` if your backend is hosted elsewhere.

## Authentication
Users must register or sign in before the dashboard is rendered. Passwords are hashed with bcrypt and never stored as plain text. Protected endpoints require a signed JWT.

## History
The History button in the navbar opens a user-specific activity feed. Login, registration, dashboard access and account connection events are recorded. A user can only retrieve their own history because the API filters records by the authenticated JWT subject.

## Production checklist
This project is suitable as a hackathon/demo foundation, not as a production banking system. For deployment, use HTTPS, a strong secret stored in a secret manager, a real database, secure httpOnly cookies/refresh-token rotation, email/OTP verification, CSRF protection where applicable, audit-log retention controls, and real bank/RBI Account Aggregator integrations. Never collect or store real banking passwords/PINs in this demo UI.
