// AIInsightsPanel.jsx - Low-Literacy Multilingual AI Summary & Audio Engine
import React, { useState } from 'react';
import { 
  Sparkles, Bot, Volume2, ArrowUpRight, ArrowDownRight, 
  CheckCircle2, ShieldCheck, PieChart, BarChart2, Sprout, Landmark, Factory
} from 'lucide-react';

export const AIInsightsPanel = ({ account, translations, onSpeak, highContrast }) => {
  const t = translations;
  const [selectedStockTicker, setSelectedStockTicker] = useState('RELIANCE');

  const stockData = t.dematAI.stocks[selectedStockTicker] || t.dematAI.stocks['RELIANCE'];

  return (
    <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 border-2 shadow-2xl animate-fadeIn ${
      highContrast 
        ? 'bg-black border-amber-400 text-yellow-300' 
        : 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-emerald-500/40 shadow-emerald-950/30'
    }`}>
      
      {/* Top AI Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-400 text-slate-950 flex items-center justify-center p-2.5 shadow-lg">
            <Sparkles className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                {t.tabAiInsights}
              </h3>
              <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700">
                Voice Enabled
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-medium">
              {t.appTagline}
            </p>
          </div>
        </div>

        {/* Listen to full summary button */}
        <button
          type="button"
          onClick={() => {
            if (account.id === 'savings') onSpeak(t.savingsAI.balanceSpeech);
            else if (account.id === 'mutual-funds') onSpeak(`${t.mutualFundsAI.analogyText} ${t.mutualFundsAI.navExplanation}`);
            else if (account.id === 'demat') onSpeak(`${t.dematAI.varianceGainText}. ${stockData.voiceSummary}`);
          }}
          className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg self-start sm:self-center"
        >
          <Volume2 className="w-4 h-4" />
          <span>{t.listenToScreen}</span>
        </button>
      </div>

      {/* Dynamic Account Specific AI Views */}
      <div className="pt-6 space-y-6">
        
        {/* ========================================================
            1. SAVINGS ACCOUNT: LOW-LITERACY TRAFFIC LIGHT AI VIEW
            ======================================================== */}
        {account.id === 'savings' && (
          <div className="space-y-6">
            
            {/* Traffic Light Safety Status Banner */}
            <div className="p-5 rounded-2xl bg-emerald-950/60 border-2 border-emerald-500/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xl shadow-md">
                  🟢
                </div>
                <div>
                  <h4 className="text-lg font-black text-white">{t.savingsAI.trafficLightSafe}</h4>
                  <p className="text-xs sm:text-sm text-emerald-300 font-medium mt-0.5">
                    {t.savingsAI.trafficLightDesc}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSpeak(t.savingsAI.balanceSpeech)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-300 text-xs font-bold border border-emerald-700 flex items-center gap-1.5 cursor-pointer self-start sm:self-center"
              >
                <Volume2 className="w-4 h-4" />
                <span>{t.listen}</span>
              </button>
            </div>

            {/* Balance & Simple Spending Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Available Bank Money */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <p className="text-xs uppercase font-bold text-slate-400">{t.savingsAI.balanceCardTitle}</p>
                <h3 className="text-3xl sm:text-4xl font-black text-white">₹ 4,32,850.75</h3>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300 font-medium">
                  {t.savingsAI.balanceComment}
                </div>
              </div>

              {/* Card 2: Recent Spending Trend */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <p className="text-xs uppercase font-bold text-slate-400">{t.savingsAI.recentSpendingTitle}</p>
                <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800 text-xs sm:text-sm text-emerald-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{t.savingsAI.spendingComment}</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between p-2 rounded-lg bg-slate-900">
                    <span>Swiggy Food</span>
                    <span className="font-bold text-white">₹ 640 (Down 12%)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-900">
                    <span>Electricity Bill</span>
                    <span className="font-bold text-white">₹ 2,450 (Paid)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CIBIL Bank Trust Score */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>{t.savingsAI.cibilTitle}</span>
                </h4>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-900 text-emerald-300 border border-emerald-700">
                  {t.savingsAI.cibilScoreDisplay}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                {t.savingsAI.cibilMeaning}
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs sm:text-sm text-emerald-300 font-medium">
                {t.savingsAI.cibilTip}
              </div>
            </div>

          </div>
        )}

        {/* ========================================================
            2. MUTUAL FUNDS: FRUIT BASKET ANALOGY AI VIEW
            ======================================================== */}
        {account.id === 'mutual-funds' && (
          <div className="space-y-6">
            
            {/* Fruit Basket Analogy Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-950/60 via-slate-950 to-emerald-950/60 border-2 border-teal-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-black text-white flex items-center gap-2">
                  <Sprout className="w-5 h-5 text-teal-400" />
                  <span>{t.mutualFundsAI.growthSummaryTitle}</span>
                </h4>
                <button
                  type="button"
                  onClick={() => onSpeak(`${t.mutualFundsAI.analogyText} ${t.mutualFundsAI.navExplanation}`)}
                  className="px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{t.listen}</span>
                </button>
              </div>

              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                {t.mutualFundsAI.analogyText}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-teal-300">
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-teal-800">
                  {t.mutualFundsAI.navExplanation}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-teal-800">
                  {t.mutualFundsAI.feeExplanation}
                </span>
              </div>
            </div>

            {/* Asset Allocation Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <p className="text-xs uppercase font-bold text-slate-400">{t.mutualFundsAI.allocationTitle}</p>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-bold text-emerald-300 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span>{t.mutualFundsAI.allocBig}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-bold text-blue-300 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span>{t.mutualFundsAI.allocSafe}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-bold text-purple-300 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                    <span>{t.mutualFundsAI.allocFast}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <p className="text-xs uppercase font-bold text-slate-400">{t.mutualFundsAI.riskLevelTitle}</p>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm sm:text-base text-slate-200 font-medium">
                  {t.mutualFundsAI.riskLevelDesc}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================
            3. DEMAT ACCOUNT: YESTERDAY VS TODAY & STOCK VOICE
            ======================================================== */}
        {account.id === 'demat' && (
          <div className="space-y-6">
            
            {/* Yesterday vs Today Profit Banner */}
            <div className="p-6 rounded-2xl bg-emerald-950/60 border-2 border-emerald-500/60 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1">
                <h4 className="text-lg font-black text-white">{t.dematAI.todayVsYesterdayTitle}</h4>
                <p className="text-base sm:text-lg font-extrabold text-emerald-300">
                  {t.dematAI.varianceGainText}
                </p>
                <div className="pt-2 flex flex-wrap gap-3 text-xs sm:text-sm font-bold text-slate-300">
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">{t.dematAI.todayValuation}</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">{t.dematAI.yesterdayValuation}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSpeak(t.dematAI.varianceGainText)}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow self-start md:self-center"
              >
                <Volume2 className="w-4 h-4" />
                <span>{t.listen}</span>
              </button>
            </div>

            {/* Clickable Companies List */}
            <div className="space-y-3">
              <p className="text-sm font-extrabold text-slate-200">
                {t.dematAI.clickStockPrompt}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['RELIANCE', 'TCS', 'HDFCBANK', 'INFY'].map(ticker => {
                  const s = t.dematAI.stocks[ticker];
                  const isSelected = selectedStockTicker === ticker;
                  return (
                    <button
                      key={ticker}
                      type="button"
                      onClick={() => {
                        setSelectedStockTicker(ticker);
                        onSpeak(s.voiceSummary);
                      }}
                      className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 border-emerald-400 ring-2 ring-emerald-400 shadow-xl'
                          : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span className="block font-black text-base text-white">{ticker}</span>
                      <span className="text-xs font-bold text-emerald-400 mt-1 block">{s.plainTrend}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Stock Voice & Plain Explanation Box */}
            {stockData && (
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h5 className="font-extrabold text-lg text-white flex items-center gap-2">
                    <Factory className="w-5 h-5 text-blue-400" />
                    <span>{selectedStockTicker}</span>
                  </h5>
                  <button
                    type="button"
                    onClick={() => onSpeak(stockData.voiceSummary)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{t.listen}</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  {stockData.voiceSummary}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stockData.simpleAdvice}
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
