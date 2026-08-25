// AuthFormView.jsx - Multilingual Accessible Form Interface
import React, { useState } from 'react';
import { Shield, Eye, EyeOff, CheckCircle, ArrowLeft, ArrowRight, Volume2, AlertCircle, Lock } from 'lucide-react';

export const AuthFormView = ({ account, action, translations, onSubmitSuccess, onBack, onSpeak, highContrast }) => {
  const t = translations;
  const isCreate = action === 'create';
  const accTrans = t.accounts[account.id] || {};

  const [formData, setFormData] = useState({
    fullName: 'Chetan Surya',
    panNumber: 'ABCDE1234F',
    phone: '9876543210',
    email: 'chetan@example.com',
    bank: 'State Bank of India (SBI)',
    customerId: 'SBI4928104',
    pin: '••••',
    consent: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const formSpeech = `${isCreate ? t.digitalOnboarding : t.secureLogin}. ${accTrans.name}. ${t.termsConsent}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setError(t.requiredField);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess({
        account,
        action,
        formData
      });
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fadeIn">
      
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t.backToDashboard}</span>
      </button>

      {/* Form Container */}
      <div className={`rounded-3xl p-6 sm:p-10 border-2 shadow-2xl ${
        highContrast ? 'bg-black border-amber-400 text-yellow-300' : 'bg-slate-900 border-slate-800'
      }`}>
        
        {/* Header */}
        <div className="border-b border-slate-800 pb-6 mb-6">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
              isCreate 
                ? 'bg-emerald-950 text-emerald-400 border-emerald-700' 
                : 'bg-blue-950 text-blue-400 border-blue-700'
            }`}>
              {isCreate ? t.digitalOnboarding : t.secureLogin}
            </span>

            <button
              type="button"
              onClick={() => onSpeak(formSpeech)}
              className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{t.listen}</span>
            </button>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {accTrans.name}
          </h2>
          <p className="text-slate-300 text-sm mt-1 font-medium">
            {isCreate ? t.createSub : t.loginSub}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {isCreate ? (
            <>
              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-slate-200">
                  {t.fullName} <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-slate-200">
                  {t.panNumber} <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.panNumber}
                  onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium uppercase font-mono focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-slate-200">
                  {t.mobileNumber} <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                />
              </div>
            </>
          ) : (
            <>
              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-slate-200">
                  {t.customerOrFolioId} <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.customerId}
                  onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-sm font-bold text-slate-200">
                  {t.secretPin} <span className="text-blue-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.pin}
                    onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Accessible Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-5 h-5 rounded border-slate-700 bg-slate-800 text-emerald-500 focus:ring-emerald-400 cursor-pointer"
              />
              <span className="text-sm text-slate-200 font-medium leading-snug">
                {t.termsConsent}
              </span>
            </label>
            {error && (
              <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1 font-bold">
                <AlertCircle className="w-3.5 h-3.5" /> {error}
              </p>
            )}
          </div>

          {/* Big Action Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all cursor-pointer shadow-xl ${
              isCreate
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/60'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-950/60'
            } ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span>{t.connectingText}</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>{isCreate ? t.submitCreate : t.submitLogin}</span>
              </span>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};
