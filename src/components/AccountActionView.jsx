// AccountActionView.jsx - Multilingual Accessible Account Choice Screen
import React from 'react';
import { UserPlus, LogIn, CheckCircle2, ArrowRight, ArrowLeft, Volume2, Landmark, Sprout, Factory } from 'lucide-react';

const visualIcons = {
  'savings': Landmark,
  'mutual-funds': Sprout,
  'demat': Factory
};

export const AccountActionView = ({ account, translations, onSelectAction, onBack, onSpeak, highContrast }) => {
  const t = translations;
  const accTrans = t.accounts[account.id] || {};
  const Icon = visualIcons[account.id] || Landmark;

  const choiceSpeech = `${accTrans.name}. ${t.actionPromptTitle}. ${t.createTitle}: ${t.createSub}. ${t.loginTitle}: ${t.loginSub}.`;

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      
      {/* Top Account Header Card */}
      <div className={`rounded-3xl p-6 sm:p-8 border-2 shadow-xl ${
        highContrast ? 'bg-black border-amber-400 text-yellow-300' : 'bg-slate-900 border-slate-800'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center p-3 flex-shrink-0">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {accTrans.metaphor}
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {accTrans.badge}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {accTrans.name}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-2xl font-medium">
                {accTrans.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center">
            {/* Audio Listen */}
            <button
              type="button"
              onClick={() => onSpeak(choiceSpeech)}
              className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow"
            >
              <Volume2 className="w-4 h-4" />
              <span>{t.listen}</span>
            </button>

            {/* Back Button */}
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToDashboard}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Choice Prompt */}
      <div>
        <div className="text-center max-w-lg mx-auto mb-6">
          <h2 className="text-2xl font-extrabold text-white">{t.actionPromptTitle}</h2>
          <p className="text-slate-300 text-sm sm:text-base mt-1 font-medium">
            {t.actionPromptSubtitle}
          </p>
        </div>

        {/* 2 Prominent Accessible Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: Create Account */}
          <div 
            onClick={() => onSelectAction('create')}
            className={`group relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 border-2 shadow-2xl ${
              highContrast
                ? 'bg-black border-emerald-400 hover:bg-zinc-950'
                : 'bg-gradient-to-b from-slate-900 to-slate-950 border-emerald-500/40 hover:border-emerald-400 hover:shadow-emerald-950/50'
            }`}
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UserPlus className="w-7 h-7" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-700 mb-2">
                  100% Digital
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {t.createTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2 font-medium">
                  {t.createSub}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Only Aadhaar & Mobile required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Free account opening • Zero fees</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-sm font-bold text-emerald-400 group-hover:underline">
                {t.createBtn}
              </span>
              <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Card 2: Login to Account */}
          <div 
            onClick={() => onSelectAction('login')}
            className={`group relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 border-2 shadow-2xl ${
              highContrast
                ? 'bg-black border-blue-400 hover:bg-zinc-950'
                : 'bg-gradient-to-b from-slate-900 to-slate-950 border-blue-500/40 hover:border-blue-400 hover:shadow-blue-950/50'
            }`}
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LogIn className="w-7 h-7" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-950 text-blue-300 text-xs font-bold border border-blue-700 mb-2">
                  Instant Link
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {t.loginTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2 font-medium">
                  {t.loginSub}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Secure Government Aggregator Gateway</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Voice summary generated in 1 second</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-400 group-hover:underline">
                {t.loginBtn}
              </span>
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
