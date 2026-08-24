// App.jsx - Extreme Accessibility Multilingual Application Container
import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Breadcrumbs } from './components/Breadcrumbs.jsx';
import { DashboardHome } from './components/DashboardHome.jsx';
import { AccountActionView } from './components/AccountActionView.jsx';
import { AuthFormView } from './components/AuthFormView.jsx';
import { AggregatedSummary } from './components/AggregatedSummary.jsx';
import { Footer } from './components/Footer.jsx';
import { ACCOUNT_TYPES, SYSTEM_STATS } from './data/accountsConfig.js';
import { TRANSLATIONS } from './data/translations.js';
import { useTTS } from './hooks/useTTS.js';

export function App() {
  // Multilingual state: 'en' | 'hi' | 'kn'
  const [currentLang, setCurrentLang] = useState('en');
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  // Central Navigation State
  const [route, setRoute] = useState({
    view: 'home',
    accountId: null,
    action: null
  });

  const [lastSubmission, setLastSubmission] = useState(null);

  // Active translation dictionary
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];

  // Native Web Speech TTS Hook
  const { speak, stop, isSpeaking } = useTTS(currentLang);

  // Navigation handlers
  const handleNavigate = (targetRoute) => {
    stop();
    setRoute(targetRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAccount = (accountId) => {
    stop();
    setRoute({
      view: 'account',
      accountId: accountId,
      action: null
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAction = (action) => {
    stop();
    setRoute(prev => ({
      ...prev,
      view: 'auth',
      action: action
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmitSuccess = (submissionData) => {
    stop();
    setLastSubmission(submissionData);
    setRoute(prev => ({
      ...prev,
      view: 'summary'
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetToHome = () => {
    stop();
    setRoute({
      view: 'home',
      accountId: null,
      action: null
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTriggerGlobalTTS = () => {
    if (route.view === 'home') {
      speak(`${t.heroTitle}. ${t.heroDesc}`);
    } else if (route.view === 'account' && route.accountId) {
      const acc = t.accounts[route.accountId];
      speak(`${acc.name}. ${acc.tagline}. ${t.actionPromptTitle}.`);
    } else if (route.view === 'auth') {
      speak(`${route.action === 'create' ? t.createTitle : t.loginTitle}. ${t.termsConsent}`);
    } else if (route.view === 'summary') {
      if (route.accountId === 'savings') speak(t.savingsAI.balanceSpeech);
      else if (route.accountId === 'mutual-funds') speak(`${t.mutualFundsAI.analogyText} ${t.mutualFundsAI.navExplanation}`);
      else if (route.accountId === 'demat') speak(t.dematAI.varianceGainText);
    }
  };

  const currentAccountConfig = ACCOUNT_TYPES.find(acc => acc.id === route.accountId) || null;

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors ${
      highContrast 
        ? 'bg-black text-yellow-300' 
        : 'bg-slate-950 text-slate-100'
    } ${largeText ? 'text-lg' : 'text-base'}`}>
      
      {/* 1. Global Multilingual Accessibility Navbar */}
      <Navbar 
        currentLang={currentLang}
        onSelectLang={(lang) => {
          stop();
          setCurrentLang(lang);
        }}
        translations={t}
        highContrast={highContrast}
        onToggleContrast={() => setHighContrast(!highContrast)}
        largeText={largeText}
        onToggleLargeText={() => setLargeText(!largeText)}
        isSpeaking={isSpeaking}
        onTriggerGlobalTTS={handleTriggerGlobalTTS}
        onStopTTS={stop}
        onReset={handleResetToHome}
      />

      {/* 2. Top Translated Breadcrumb Navigation Path */}
      <Breadcrumbs 
        route={route} 
        accountId={route.accountId}
        translations={t}
        onNavigate={handleNavigate}
        onSpeak={speak}
        highContrast={highContrast}
      />

      {/* 3. Main Accessible Dynamic View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8">
        {route.view === 'home' && (
          <DashboardHome 
            accounts={ACCOUNT_TYPES} 
            translations={t}
            onSelectAccount={handleSelectAccount} 
            onSpeak={speak}
            stats={SYSTEM_STATS}
            highContrast={highContrast}
          />
        )}

        {route.view === 'account' && currentAccountConfig && (
          <AccountActionView 
            account={currentAccountConfig}
            translations={t}
            onSelectAction={handleSelectAction}
            onBack={handleResetToHome}
            onSpeak={speak}
            highContrast={highContrast}
          />
        )}

        {route.view === 'auth' && currentAccountConfig && route.action && (
          <AuthFormView 
            account={currentAccountConfig}
            action={route.action}
            translations={t}
            onSubmitSuccess={handleFormSubmitSuccess}
            onBack={() => setRoute({ view: 'account', accountId: route.accountId, action: null })}
            onSpeak={speak}
            highContrast={highContrast}
          />
        )}

        {route.view === 'summary' && currentAccountConfig && (
          <AggregatedSummary 
            account={currentAccountConfig}
            action={route.action || 'login'}
            translations={t}
            onReturnHome={handleResetToHome}
            onSpeak={speak}
            highContrast={highContrast}
          />
        )}
      </main>

      {/* 4. Accessible Footer */}
      <Footer 
        translations={t}
        highContrast={highContrast}
      />

    </div>
  );
}

export default App;
