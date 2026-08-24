// AggregatedSummary.jsx - Multilingual Accessible Portfolio Summary
import React, { useState } from 'react';
import { CheckCircle2, Volume2, Download, Layers, Sparkles, ArrowLeft } from 'lucide-react';
import { AIInsightsPanel } from './AIInsightsPanel.jsx';

export const AggregatedSummary = ({ account, action, translations, onReturnHome, onSpeak, highContrast }) => {
  const t = translations;
  const isCreate = action === 'create';
  const portfolio = account.mockPortfolio;
  const accTrans = t.accounts[account.id] || {};
  const [activeTab, setActiveTab] = useState('insights');

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      
      {/* Success Notification Banner */}
      <div className="p-5 rounded-3xl bg-emerald-950/60 border-2 border-emerald-500/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {t.syncSuccess}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-300 font-medium">
              {t.syncSuccessMsg}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            type="button"
            onClick={onReturnHome}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors cursor-pointer"
          >
            {t.home}
          </button>
        </div>
      </div>

      {/* Overview Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Card 1: Balance */}
        <div className={`p-6 rounded-3xl border-2 shadow-lg flex flex-col justify-between ${
          highContrast ? 'bg-black border-amber-400 text-yellow-300' : 'bg-slate-900 border-slate-800'
        }`}>
          <div>
            <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              {accTrans.shortName} Total
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">
              {portfolio.accountBalance}
            </h2>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold">
            <span className="text-emerald-400">{portfolio.change24h}</span>
            <span className="text-slate-400">100% Safe</span>
          </div>
        </div>

        {/* Card 2: Connected Institutions */}
        <div className={`p-6 rounded-3xl border-2 shadow-lg flex flex-col justify-between ${
          highContrast ? 'bg-black border-amber-400 text-yellow-300' : 'bg-slate-900 border-slate-800'
        }`}>
          <div>
            <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              Linked Institutions
            </p>
            <div className="mt-2 space-y-1">
              {portfolio.linkedInstitutions.map((inst, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span>{inst}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-bold text-emerald-400">
            {t.consentActive}
          </div>
        </div>

        {/* Card 3: Download Report */}
        <div className={`p-6 rounded-3xl border-2 shadow-lg flex flex-col justify-between ${
          highContrast ? 'bg-black border-amber-400 text-yellow-300' : 'bg-slate-900 border-slate-800'
        }`}>
          <div>
            <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              Easy Statement
            </p>
            <p className="text-xs text-slate-300 mt-2 font-medium">
              Save a simple one-page summary on your phone or print it for your family.
            </p>
          </div>
          <button
            type="button"
            onClick={() => alert("Statement downloaded in " + t.langName)}
            className="mt-4 w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{t.downloadPdf}</span>
          </button>
        </div>

      </div>

      {/* Interactive Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab('insights')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-extrabold transition-all cursor-pointer ${
            activeTab === 'insights'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{t.tabAiInsights}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('holdings')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-extrabold transition-all cursor-pointer ${
            activeTab === 'holdings'
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>{t.tabHoldings}</span>
        </button>
      </div>

      {/* Tab 1: Multilingual AI Insights Panel */}
      {activeTab === 'insights' && (
        <AIInsightsPanel 
          account={account} 
          translations={translations}
          onSpeak={onSpeak}
          highContrast={highContrast}
        />
      )}

      {/* Tab 2: Detailed Holdings Table */}
      {activeTab === 'holdings' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl animate-fadeIn">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase text-slate-400 bg-slate-950/60 border-y border-slate-800 font-bold">
                <tr>
                  <th className="py-3 px-4">Item</th>
                  <th className="py-3 px-4">Units</th>
                  <th className="py-3 px-4">Rate</th>
                  <th className="py-3 px-4">Total Value</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {portfolio.holdings.map((holding, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40">
                    <td className="py-3.5 px-4 font-bold text-white">{holding.name}</td>
                    <td className="py-3.5 px-4 text-xs font-semibold">{holding.units}</td>
                    <td className="py-3.5 px-4 text-xs font-semibold">{holding.nav}</td>
                    <td className="py-3.5 px-4 font-extrabold text-white">{holding.value}</td>
                    <td className="py-3.5 px-4 text-right font-bold text-emerald-400 text-xs">
                      {holding.gain}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
