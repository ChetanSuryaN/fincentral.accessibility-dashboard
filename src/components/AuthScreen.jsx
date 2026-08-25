import React, { useState } from 'react';
import { LockKeyhole, UserPlus, LogIn, ShieldCheck, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { authApi } from '../api.js';

export function AuthScreen({ onAuthenticated }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (form.password.length < 8) return setError('Password must contain at least 8 characters.');
    setBusy(true);
    try {
      const result = mode === 'login'
        ? await authApi.login({ email: form.email, password: form.password })
        : await authApi.register(form);
      localStorage.setItem('fincentral_token', result.token);
      localStorage.setItem('fincentral_user', JSON.stringify(result.user));
      onAuthenticated(result.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-7">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-9 h-9" />
          </div>
          <h1 className="mt-4 text-3xl font-black">FinCentral</h1>
          <p className="mt-1 text-slate-400">Secure, accessible financial dashboard</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-2xl">
          <div className="flex gap-2 p-1 rounded-xl bg-slate-950 mb-6">
            <button type="button" onClick={() => { setMode('login'); setError(''); }}
              className={`flex-1 py-2.5 rounded-lg font-bold text-sm ${mode === 'login' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}>
              <LogIn className="w-4 h-4 inline mr-2" />Sign in
            </button>
            <button type="button" onClick={() => { setMode('register'); setError(''); }}
              className={`flex-1 py-2.5 rounded-lg font-bold text-sm ${mode === 'register' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}>
              <UserPlus className="w-4 h-4 inline mr-2" />Create account
            </button>
          </div>

          <div className="mb-5">
            <h2 className="text-xl font-extrabold">{mode === 'login' ? 'Welcome back' : 'Create your secure account'}</h2>
            <p className="text-sm text-slate-400 mt-1">Only authenticated users can access your dashboard and activity history.</p>
          </div>

          <form onSubmit={submit} className="space-y-4">
            {mode === 'register' && (
              <label className="block text-sm font-semibold">Full name
                <input required value={form.name} onChange={e => setForm({...form,name:e.target.value})}
                  className="mt-1.5 w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
              </label>
            )}
            <label className="block text-sm font-semibold">Email address
              <input required type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})}
                className="mt-1.5 w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500" />
            </label>
            <label className="block text-sm font-semibold">Password
              <div className="relative">
                <input required minLength={8} type={showPassword ? 'text' : 'password'} value={form.password}
                  onChange={e => setForm({...form,password:e.target.value})}
                  className="mt-1.5 w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-emerald-500" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" aria-label="Show password">
                  {showPassword ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
                </button>
              </div>
              <span className="text-xs text-slate-500">Minimum 8 characters.</span>
            </label>

            {error && <div role="alert" className="p-3 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-sm font-semibold">
              <AlertCircle className="w-4 h-4 inline mr-2"/>{error}
            </div>}

            <button disabled={busy} className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 font-extrabold">
              {busy ? 'Please wait…' : mode === 'login' ? 'Sign in securely' : 'Create secure account'}
            </button>
          </form>

          <div className="mt-6 flex items-start gap-2 text-xs text-slate-500">
            <LockKeyhole className="w-4 h-4 shrink-0 mt-0.5"/>
            Passwords are hashed on the server and are never stored in plain text.
          </div>
        </div>
      </div>
    </div>
  );
}
