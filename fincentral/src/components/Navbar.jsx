// Navbar.jsx - Multilingual Accessibility Toolkit Header
import React from 'react';
import { Volume2, VolumeX, Eye, Sun, Type, RefreshCw, Layers, ShieldCheck, Activity, Globe } from 'lucide-react';

export const Navbar = ({ 
  currentLang, 
  onSelectLang, 
  translations, 
  highContrast, 
  onToggleContrast,
  largeText,
  onToggleLargeText,
  isSpeaking,
  onTriggerGlobalTTS,
  onStopTTS,
  onReset
}) => {
  const t = translations;

  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'hi', label: 'हिंदी', short: 'हिं' },
    { code: 'kn', label: 'ಕನ್ನಡ', short: 'ಕನ್ನ' }
  ];

  return (
    <header className={`w-full sticky top-0 z-40 transition-colors border-b ${
      highContrast 
        ? 'bg-black border-amber-400 text-yellow-300' 
        : 'bg-slate-950/95 border-slate-800 text-slate-100 backdrop-blur-md'
    }`}>
      
      {/* Top Accessibility Bar */}
      <div className={`px-4 sm:px-8 py-2 border-b text-xs flex flex-wrap items-center justify-between gap-3 ${
        highContrast 
          ? 'bg-amber-400 text-black font-bold border-black' 
          : 'bg-slate-900/80 border-slate-800/80 text-slate-300'
      }`}>
        
        {/* Left: Trust & Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{t.networkOnline}</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="hidden sm:flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.rbiCompliant}</span>
          </div>
        </div>

        {/* Right: Accessibility Controls Toolbar */}
        <div className="flex items-center flex-wrap gap-2">
          
          {/* TTS Audio Guide Button */}
          <button
            type="button"
            onClick={() => isSpeaking ? onStopTTS() : onTriggerGlobalTTS()}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm ${
              isSpeaking
                ? 'bg-rose-600 text-white ring-2 ring-rose-400 animate-pulse'
                : highContrast
                  ? 'bg-black text-amber-300 border-2 border-black hover:bg-zinc-900'
                  : 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-600/30'
            }`}
            title={isSpeaking ? t.stopAudio : t.listenToScreen}
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isSpeaking ? t.stopAudio : t.voiceGuide}</span>
          </button>

          {/* High Contrast Toggle */}
          <button
            type="button"
            onClick={onToggleContrast}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
              highContrast
                ? 'bg-black text-yellow-300 border-2 border-yellow-300'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
            title="Toggle Ultra High-Contrast Mode"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{highContrast ? t.normalContrast : t.highContrast}</span>
          </button>

          {/* Large Font Size Toggle */}
          <button
            type="button"
            onClick={onToggleLargeText}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
              largeText
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
            title="Toggle Large Easy-Read Text Size"
          >
            <Type className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{largeText ? t.normalText : t.largeText}</span>
          </button>

          {/* Language Switcher Pill Group */}
          <div className="flex items-center p-0.5 rounded-lg bg-slate-950 border border-slate-700">
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-0.5 hidden sm:inline" />
            {languages.map(lang => {
              const isActive = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => onSelectLang(lang.code)}
                  className={`px-2.5 py-0.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? highContrast
                        ? 'bg-yellow-400 text-black shadow'
                        : 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  aria-pressed={isActive}
                >
                  {lang.label}
                </button>
              );
            })}
          </div>

        </div>

      </div>

      {/* Main App Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={onReset}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center p-2.5 transition-transform group-hover:scale-105 ${
            highContrast
              ? 'bg-yellow-400 text-black border-2 border-yellow-300'
              : 'bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 text-slate-950 shadow-lg shadow-emerald-950/40'
          }`}>
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xl font-extrabold tracking-tight ${
                highContrast ? 'text-yellow-300' : 'text-white group-hover:text-emerald-300'
              }`}>
                {t.appTitle}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                highContrast 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
              }`}>
                {t.appBadge}
              </span>
            </div>
            <p className={`text-xs ${highContrast ? 'text-yellow-200' : 'text-slate-400'}`}>
              {t.appTagline}
            </p>
          </div>
        </div>

        {/* User Badge & Reset */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              highContrast
                ? 'bg-yellow-400 text-black hover:bg-yellow-300 font-bold'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t.reset}</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-800 text-xs">
            <div className="w-8 h-8 rounded-full bg-emerald-900/60 border border-emerald-500/50 flex items-center justify-center font-bold text-emerald-300">
              CS
            </div>
            <div>
              <p className="font-semibold text-slate-200">{t.verifiedUser}</p>
              <p className="text-[10px] text-emerald-400">KYC Verified</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};
