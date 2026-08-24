// Footer.jsx - Multilingual Accessible Footer
import React from 'react';
import { ShieldCheck, Lock, Globe, CheckCircle2 } from 'lucide-react';

export const Footer = ({ translations, highContrast }) => {
  const t = translations;

  return (
    <footer className={`mt-20 border-t py-10 transition-colors ${
      highContrast 
        ? 'bg-black border-amber-400 text-yellow-300' 
        : 'bg-slate-950/90 border-slate-800/80 text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Compliance Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-slate-800/60 text-xs font-semibold">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-200">{t.rbiCompliant}</p>
              <p className="text-slate-400">{t.footerGovt}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-200">256-Bit TLS Security</p>
              <p className="text-slate-400">{t.footerPrivacy}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-slate-200">Multilingual Voice Support</p>
              <p className="text-slate-400">English • हिंदी • ಕನ್ನಡ</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs">
          <p className="text-slate-400">
            {t.footerCopyright}
          </p>
          <div className="flex items-center gap-4 text-xs font-bold text-emerald-400">
            <span>{t.networkOnline}</span>
            <span>•</span>
            <span>Accessibility Grade AAA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
