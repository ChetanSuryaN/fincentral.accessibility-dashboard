import React, { useEffect, useState } from 'react';
import { History, Clock3, LogIn, UserPlus, Activity, RefreshCw, AlertCircle } from 'lucide-react';
import { authApi } from '../api.js';

const icons = { login: LogIn, register: UserPlus, account_sync: RefreshCw, dashboard_view: Activity };

export function HistoryView({ highContrast }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true); setError('');
    try { setItems((await authApi.history()).history || []); }
    catch (e) { setError(e.message); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn">
      <div className={`rounded-3xl p-6 border-2 ${highContrast ? 'bg-black border-amber-400' : 'bg-slate-900 border-slate-800'}`}>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm"><History className="w-5 h-5"/>Activity history</div>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">Your recent activity</h1>
            <p className="text-slate-400 text-sm mt-1">Only your authenticated account's events are shown here.</p>
          </div>
          <button onClick={load} className="p-3 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700" aria-label="Refresh history"><RefreshCw className="w-5 h-5"/></button>
        </div>
      </div>

      {error && <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300"><AlertCircle className="inline w-4 h-4 mr-2"/>{error}</div>}
      {loading ? <div className="text-center text-slate-400 py-10">Loading history…</div> : items.length === 0 ? (
        <div className="text-center py-12 bg-slate-900 rounded-3xl border border-slate-800 text-slate-400">No activity recorded yet.</div>
      ) : (
        <div className="space-y-3">
          {items.map(item => {
            const Icon = icons[item.type] || Activity;
            return <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center"><Icon className="w-5 h-5"/></div>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-white">{item.description}</p>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1"><Clock3 className="w-3.5 h-3.5"/>{new Date(item.createdAt).toLocaleString()}</p>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-950 px-2 py-1 rounded-full">{item.type.replace('_',' ')}</span>
            </div>
          })}
        </div>
      )}
    </div>
  );
}
