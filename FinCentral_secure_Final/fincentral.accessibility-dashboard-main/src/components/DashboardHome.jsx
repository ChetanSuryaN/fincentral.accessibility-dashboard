// DashboardHome.jsx - Extreme Accessibility Multilingual Landing Page
import React from 'react';
import { AccountCard } from './AccountCard.jsx';
import { ShieldCheck, Volume2, Lock, Zap, Landmark, Globe, CheckCircle2, Sparkles } from 'lucide-react';

export const DashboardHome = ({ accounts, onSelectAccount, translations, onSpeak, stats, highContrast }) => {
  const t = translations;

  const heroSpeech = `${t.heroTitle}. ${t.heroDesc} ${t.totalMoneyTracked}: ${stats.totalAssetsTracked}.`;

  return (
    <div className="space-y-10">
      
      {/* Accessible Hero Banner */}
      <section className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 border-2 shadow-2xl ${
        highContrast 
          ? 'bg-black border-amber-400 text-yellow-300' 
          : 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-slate-800'
      }`}>
        <div className="relative z-10 max-w-4xl space-y-4">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold ${
              highContrast
                ? 'bg-yellow-400 text-black'
                : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
            }`}>
              <Sparkles className="w-4 h-4" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Quick Hero Audio Button */}
            <button
              type="button"
              onClick={() => onSpeak(heroSpeech)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                highContrast
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>{t.listenToScreen}</span>
            </button>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
            highContrast ? 'text-white' : 'text-white'
          }`}>
            {t.heroTitle}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed max-w-3xl font-medium ${
            highContrast ? 'text-yellow-100' : 'text-slate-300'
          }`}>
            {t.heroDesc}
          </p>

          {/* Simple Metrics Snapshot */}
          <div className={`pt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t ${
            highContrast ? 'border-amber-400' : 'border-slate-800'
          }`}>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <p className="text-xs uppercase font-bold text-slate-400">{t.totalMoneyTracked}</p>
              <p className="text-xl font-extrabold text-white mt-0.5">{stats.totalAssetsTracked}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <p className="text-xs uppercase font-bold text-slate-400">{t.safeBanks}</p>
              <p className="text-xl font-extrabold text-emerald-400 mt-0.5">RBI Connected</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <p className="text-xs uppercase font-bold text-slate-400">{t.voiceSupported}</p>
              <p className="text-xl font-extrabold text-cyan-400 mt-0.5">EN • हिं • ಕನ್ನ</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <p className="text-xs uppercase font-bold text-slate-400">Security</p>
              <p className="text-xl font-extrabold text-blue-400 mt-0.5">256-Bit TLS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Account Categories Selection Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.categoriesTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1">
              {t.categoriesSubtitle}
            </p>
          </div>
        </div>

        {/* 3 Large Visual Metaphor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accounts.map((acc) => (
            <AccountCard 
              key={acc.id} 
              account={acc} 
              translations={translations}
              onSelect={onSelectAccount} 
              onSpeak={onSpeak}
              highContrast={highContrast}
            />
          ))}
        </div>
      </section>

      {/* 3 Trust Principles */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">{t.safeStorage}</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We never save your banking passwords or OTPs. All data stays strictly between you and your bank.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0">
            <Volume2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">Built-in Voice Assistance</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Click the speaker icon next to any section to hear clear voice explanations in English, Hindi, or Kannada.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 flex-shrink-0">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">RBI & SEBI Certified</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Built on official Indian digital public infrastructure ensuring 100% citizen data sovereignty.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
