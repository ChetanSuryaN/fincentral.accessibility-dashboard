// Breadcrumbs.jsx - Extreme Accessibility Translated Breadcrumb Navigation
import React from 'react';
import { Home, Volume2 } from 'lucide-react';

export const Breadcrumbs = ({ route, accountId, translations, onNavigate, onSpeak, highContrast }) => {
  const t = translations;

  // Build the breadcrumb segments dynamically based on active route and selected language
  const crumbs = [
    {
      id: 'home',
      label: t.home,
      icon: Home,
      target: { view: 'home', accountId: null, action: null },
      isActive: route.view === 'home'
    }
  ];

  if (accountId && route.view !== 'home') {
    const accTrans = t.accounts[accountId];
    const accountLabel = accTrans ? accTrans.name : accountId;
    crumbs.push({
      id: 'account',
      label: accountLabel,
      target: { view: 'account', accountId: accountId, action: null },
      isActive: route.view === 'account'
    });
  }

  if (route.action && (route.view === 'auth' || route.view === 'summary')) {
    const actionLabel = route.action === 'create' ? t.createTitle : t.loginTitle;
    crumbs.push({
      id: 'action',
      label: actionLabel,
      target: { view: 'auth', accountId: route.accountId, action: route.action },
      isActive: route.view === 'auth'
    });
  }

  if (route.view === 'summary') {
    crumbs.push({
      id: 'summary',
      label: t.tabAiInsights,
      target: { view: 'summary', accountId: route.accountId, action: route.action },
      isActive: true
    });
  }

  const breadcrumbSpeech = crumbs.map(c => c.label).join(' ➔ ');

  return (
    <nav 
      aria-label="Breadcrumb Navigation"
      className={`w-full px-4 sm:px-8 py-3 sticky top-28 z-30 transition-all border-b ${
        highContrast
          ? 'bg-black border-amber-400 text-yellow-300'
          : 'bg-slate-900/90 backdrop-blur-md border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* The Breadcrumb Path */}
        <ol className="flex items-center flex-wrap gap-2 text-sm sm:text-base font-semibold">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            const Icon = crumb.icon;

            return (
              <li key={crumb.id} className="flex items-center">
                {index > 0 && (
                  <span 
                    className={`mx-2 text-base font-bold flex-shrink-0 ${
                      highContrast ? 'text-yellow-400' : 'text-emerald-400'
                    }`} 
                    aria-hidden="true"
                  >
                    ➔
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => onNavigate(crumb.target)}
                  className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                    isLast
                      ? highContrast
                        ? 'bg-yellow-400 text-black font-extrabold ring-2 ring-yellow-300'
                        : 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm'
                      : highContrast
                        ? 'text-yellow-200 hover:text-white hover:bg-zinc-800 underline'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/90'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                  <span>{crumb.label}</span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Quick Audio Readout for Breadcrumb Location */}
        <button
          type="button"
          onClick={() => onSpeak(breadcrumbSpeech)}
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
            highContrast
              ? 'bg-yellow-400 text-black hover:bg-yellow-300'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
          }`}
          title="Hear current position aloud"
        >
          <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t.listen}</span>
        </button>

      </div>
    </nav>
  );
};
