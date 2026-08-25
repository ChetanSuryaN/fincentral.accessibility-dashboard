// AccountCard.jsx - Extreme Accessibility Visual Metaphor Account Card
import React from 'react';
import { ArrowRight, Volume2, CheckCircle2, Sprout, Landmark, Factory } from 'lucide-react';

const visualIcons = {
  'savings': Landmark,       // Piggy bank / Safe bank deposit
  'mutual-funds': Sprout,    // Growing plant / Basket of 50 companies
  'demat': Factory           // Company Factory / Shares
};

export const AccountCard = ({ account, translations, onSelect, onSpeak, highContrast }) => {
  const t = translations;
  const accTrans = t.accounts[account.id] || {};
  const Icon = visualIcons[account.id] || Landmark;

  const themeStyles = {
    'savings': {
      border: highContrast ? 'border-emerald-400 bg-black' : 'border-emerald-500/40 bg-slate-900',
      iconBg: highContrast ? 'bg-emerald-400 text-black' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
      btnBg: highContrast ? 'bg-emerald-400 text-black hover:bg-emerald-300 font-extrabold' : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/50',
      badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-700'
    },
    'mutual-funds': {
      border: highContrast ? 'border-teal-400 bg-black' : 'border-teal-500/40 bg-slate-900',
      iconBg: highContrast ? 'bg-teal-400 text-black' : 'bg-teal-500/20 text-teal-400 border border-teal-500/30',
      btnBg: highContrast ? 'bg-teal-400 text-black hover:bg-teal-300 font-extrabold' : 'bg-teal-600 hover:bg-teal-500 text-white shadow-teal-950/50',
      badge: 'bg-teal-950/80 text-teal-300 border-teal-700'
    },
    'demat': {
      border: highContrast ? 'border-blue-400 bg-black' : 'border-blue-500/40 bg-slate-900',
      iconBg: highContrast ? 'bg-blue-400 text-black' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      btnBg: highContrast ? 'bg-blue-400 text-black hover:bg-blue-300 font-extrabold' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-950/50',
      badge: 'bg-blue-950/80 text-blue-300 border-blue-700'
    }
  };

  const currentTheme = themeStyles[account.id] || themeStyles.savings;

  return (
    <div 
      className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border-2 shadow-xl hover:-translate-y-1 ${currentTheme.border}`}
    >
      <div>
        {/* Top Bar with Big Visual Icon & Audio Button */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center p-3.5 shadow-md ${currentTheme.iconBg}`}>
            <Icon className="w-9 h-9" />
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full border ${
              highContrast ? 'bg-yellow-400 text-black border-black font-extrabold' : currentTheme.badge
            }`}>
              {accTrans.badge || account.badge}
            </span>

            {/* Individual Voice Speaker Button */}
            <button
              type="button"
              onClick={() => onSpeak(accTrans.voiceText || accTrans.tagline)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer ${
                highContrast 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
              title="Listen to description"
            >
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.listen}</span>
            </button>
          </div>
        </div>

        {/* Visual Metaphor & Title */}
        <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${
          highContrast ? 'text-yellow-300' : 'text-emerald-400'
        }`}>
          {accTrans.metaphor}
        </p>

        <h3 className={`text-2xl font-extrabold tracking-tight mb-3 ${
          highContrast ? 'text-white' : 'text-slate-100 group-hover:text-white'
        }`}>
          {accTrans.name || account.name}
        </h3>

        <p className={`text-sm sm:text-base leading-relaxed mb-6 font-medium ${
          highContrast ? 'text-yellow-100' : 'text-slate-300'
        }`}>
          {accTrans.tagline || account.tagline}
        </p>

        {/* Plain-Language 3 Features */}
        <div className="space-y-2.5 mb-7">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{accTrans.feature1}</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{accTrans.feature2}</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{accTrans.feature3}</span>
          </div>
        </div>
      </div>

      {/* Large Big CTA Button */}
      <button
        type="button"
        onClick={() => onSelect(account.id)}
        className={`w-full py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer shadow-lg ${currentTheme.btnBg}`}
      >
        <span>{accTrans.actionBtn}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};
