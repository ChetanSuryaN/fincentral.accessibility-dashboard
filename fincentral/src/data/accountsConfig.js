// accountsConfig.js - Scalable configuration registry for FinCentral Account Types & AI Insights

export const ACCOUNT_TYPES = [
  {
    id: 'mutual-funds',
    name: 'Mutual Funds Account',
    shortName: 'Mutual Funds',
    category: 'Wealth & Investments',
    tagline: 'Track Net Asset Values (NAV), SIP portfolios, and AMFI-registered mutual fund holdings in real-time.',
    iconName: 'TrendingUp',
    accentColor: 'emerald',
    badge: 'SEBI / AMFI Registered',
    metrics: {
      activeInvestors: '1.4M+',
      avgReturns: '14.2% p.a.',
      partnerAMCs: '44 AMCs Linked'
    },
    features: [
      'Automated Daily NAV and Portfolio Rebalancing tracking',
      'Consolidated Account Statement (CAS) single-click import',
      'Systematic Investment Plan (SIP) auto-debit monitoring',
      'Zero-commission Direct Mutual Fund aggregation'
    ],
    createForm: {
      title: 'Open Instant Mutual Fund Onboarding',
      subtitle: 'Complete paperless digital KYC to link your AMC folios and start zero-commission investing.',
      fields: [
        { id: 'fullName', label: 'Full Legal Name', type: 'text', placeholder: 'e.g. Chetan Surya', required: true },
        { id: 'panNumber', label: 'Permanent Account Number (PAN)', type: 'text', placeholder: 'ABCDE1234F', required: true, pattern: '^[A-Z]{5}[0-9]{4}[A-Z]{1}$' },
        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'chetan@example.com', required: true },
        { id: 'phone', label: 'Aadhaar-linked Mobile', type: 'tel', placeholder: '+91 98765 43210', required: true },
        { id: 'investmentTier', label: 'Investment Experience', type: 'select', options: ['Beginner (< 1 yr)', 'Intermediate (1 - 3 yrs)', 'Experienced (3+ yrs)'], required: true },
        { id: 'consentKYC', label: 'I authorize FinCentral to fetch KYC records via C-KYC / KRA registries.', type: 'checkbox', required: true }
      ]
    },
    loginForm: {
      title: 'Link Existing Mutual Fund Folios',
      subtitle: 'Authenticate using your registered PAN and Folio PIN or OTP.',
      fields: [
        { id: 'folioId', label: 'PAN or Folio Identifier', type: 'text', placeholder: 'Enter registered PAN or AMC Folio ID', required: true },
        { id: 'mpin', label: '4-Digit Security PIN / Password', type: 'password', placeholder: '••••', required: true },
        { id: 'otpAuth', label: 'Enable Two-Factor Authentication (2FA)', type: 'checkbox', defaultChecked: true }
      ]
    },
    mockPortfolio: {
      accountBalance: '₹ 8,45,210.40',
      change24h: '+ ₹ 12,340 (+1.48%)',
      linkedInstitutions: ['HDFC Mutual Fund', 'ICICI Prudential AMC', 'SBI Mutual Fund', 'Nippon India AMC'],
      holdings: [
        { name: 'Nifty 50 Index Direct Growth', units: '342.18 units', nav: '₹ 248.50', value: '₹ 85,031', gain: '+18.4%' },
        { name: 'Flexi Cap Fund Direct Growth', units: '680.50 units', nav: '₹ 112.40', value: '₹ 76,488', gain: '+22.1%' },
        { name: 'Emerging Bluechip Equity Fund', units: '450.00 units', nav: '₹ 385.10', value: '₹ 1,73,295', gain: '+15.7%' },
        { name: 'Small Cap Quality Growth Direct', units: '1200.20 units', nav: '₹ 145.80', value: '₹ 1,74,989', gain: '+29.6%' }
      ]
    },
    aiInsights: {
      title: 'AI Mutual Fund Health & Performance Audit',
      summaryStatement: 'Portfolio performance is in the top 15th percentile of balanced growth folios. Total Expense Ratio is well-optimized at 0.48%.',
      fundPerformance: {
        weightedNav: '₹ 212.85',
        totalExpenseRatio: '0.48%',
        terBenchmark: 'Industry Avg: 1.15% (You save ₹ 5,660/yr)',
        returns3Y: '16.8% p.a.',
        returns5Y: '18.4% p.a.',
        xirr: '17.65%'
      },
      assetAllocation: [
        { label: 'Large-Cap Equity', percent: 60, color: 'bg-emerald-500', description: 'Core stability & bluechip dividend growth' },
        { label: 'Debt & Arbitrage Funds', percent: 30, color: 'bg-blue-500', description: 'Downside protection & liquidity buffer' },
        { label: 'Mid & Small-Cap Alpha', percent: 10, color: 'bg-purple-500', description: 'High-alpha capital appreciation' }
      ],
      riskProfile: {
        level: 'Moderate / Growth-Oriented',
        score: '6.8 / 10',
        assessment: 'Your mutual fund portfolio is resilient against 15% market corrections while capturing 88% of market upswings. The high debt allocation (30%) creates steady shock-absorption.',
        aiRecommendation: 'Consider increasing monthly SIP in Mid-cap by 5% if your horizon is >5 years to compound wealth faster.'
      }
    }
  },
  {
    id: 'demat',
    name: 'Demat Account',
    shortName: 'Demat & Equities',
    category: 'Capital Markets & Trading',
    tagline: 'Aggregate multi-broker equity holdings, CDSL/NSDL depository holdings, ETFs, and bond portfolios.',
    iconName: 'BarChart3',
    accentColor: 'blue',
    badge: 'CDSL / NSDL Compliant',
    metrics: {
      activeInvestors: '890K+',
      connectedBrokers: '18 Brokers',
      holdingSyncSpeed: 'Real-time T+1'
    },
    features: [
      'Multi-broker holding consolidation (Zerodha, Groww, AngelOne, Upstox)',
      'Direct CDSL and NSDL electronic holding statement verification',
      'Real-time P&L analytics, dividend tracking, and tax harvesting reports',
      'Corporate action alerts for splits, bonus issues, and buybacks'
    ],
    createForm: {
      title: 'Open / Link Digital Demat Account',
      subtitle: 'Connect your CDSL/NSDL BOID for instant multi-broker aggregation.',
      fields: [
        { id: 'fullName', label: 'Beneficiary Owner Name', type: 'text', placeholder: 'e.g. Chetan Surya', required: true },
        { id: 'panNumber', label: 'Permanent Account Number (PAN)', type: 'text', placeholder: 'ABCDE1234F', required: true },
        { id: 'depository', label: 'Primary Depository', type: 'select', options: ['CDSL (Central Depository Services Ltd)', 'NSDL (National Securities Depository Ltd)'], required: true },
        { id: 'boid', label: '16-Digit BO ID / Client ID', type: 'text', placeholder: '1208160000000000', required: true },
        { id: 'email', label: 'Registered Email', type: 'email', placeholder: 'chetan@example.com', required: true },
        { id: 'consentAA', label: 'Authorize RBI Account Aggregator data consent for holding statements.', type: 'checkbox', required: true }
      ]
    },
    loginForm: {
      title: 'Login to Depository / Broker Link',
      subtitle: 'Securely sync your Demat statements using your UCC or CDSL TPIN.',
      fields: [
        { id: 'uccId', label: 'Unique Client Code (UCC) / BOID', type: 'text', placeholder: 'Enter your 8 or 16-character Client ID', required: true },
        { id: 'tpin', label: '6-Digit CDSL/NSDL T-PIN', type: 'password', placeholder: '••••••', required: true },
        { id: 'biometricConsent', label: 'Trust this browser for rapid portfolio sync', type: 'checkbox', defaultChecked: true }
      ]
    },
    mockPortfolio: {
      accountBalance: '₹ 14,82,600.00',
      change24h: '+ ₹ 24,150 (+1.65%)',
      linkedInstitutions: ['Zerodha Broking', 'Groww Invest Tech', 'CDSL Depository Services'],
      holdings: [
        { name: 'Reliance Industries Ltd.', ticker: 'RELIANCE', units: '85 Shares', nav: '₹ 2,980.00', value: '₹ 2,53,300', gain: '+14.2%' },
        { name: 'Tata Consultancy Services', ticker: 'TCS', units: '40 Shares', nav: '₹ 4,120.00', value: '₹ 1,64,800', gain: '+9.8%' },
        { name: 'HDFC Bank Ltd.', ticker: 'HDFCBANK', units: '120 Shares', nav: '₹ 1,650.00', value: '₹ 1,98,000', gain: '+12.4%' },
        { name: 'Infosys Limited', ticker: 'INFY', units: '110 Shares', nav: '₹ 1,780.00', value: '₹ 1,95,800', gain: '+21.5%' }
      ]
    },
    aiInsights: {
      title: 'AI Equity Intelligence & Portfolio Variance',
      summaryStatement: 'Equities gained +1.65% today, driven by heavyweight energy and banking momentum. Beta sensitivity stands at a healthy 0.92.',
      variance: {
        todayValuation: '₹ 14,82,600.00',
        yesterdayValuation: '₹ 14,58,450.00',
        netDayGain: '+ ₹ 24,150.00',
        netDayPercent: '+1.65%',
        isPositive: true,
        summary: 'Your equity holding expanded by ₹ 24,150 compared to yesterday\'s official close.'
      },
      stockAnalysis: [
        {
          ticker: 'RELIANCE',
          name: 'Reliance Industries Ltd.',
          price: '₹ 2,980.00',
          dayChange: '+2.4%',
          trend5Day: 'Bullish Upward (+4.1% over 5 days)',
          keyTriggers: 'Expansion in green hydrogen projects and retail margin expansion announced in Q2 investor call.',
          sentiment: 'Bullish (92% Analyst Buy Rating)',
          aiTakeaway: 'Strong support established at ₹ 2,910. Institutional accumulation remains elevated.'
        },
        {
          ticker: 'TCS',
          name: 'Tata Consultancy Services',
          price: '₹ 4,120.00',
          dayChange: '+0.8%',
          trend5Day: 'Sideways Consolidation (+0.3% over 5 days)',
          keyTriggers: 'Mega deal wins in UK banking sector offset by mild margin pressures in legacy European contracts.',
          sentiment: 'Neutral / Accumulate on Dips',
          aiTakeaway: 'Solid defensive anchor generating ₹ 8,200 annual dividend yield.'
        },
        {
          ticker: 'HDFCBANK',
          name: 'HDFC Bank Ltd.',
          price: '₹ 1,650.00',
          dayChange: '+1.9%',
          trend5Day: 'Breakout Momentum (+3.2% over 5 days)',
          keyTriggers: 'Credit-to-deposit ratio normalized post-merger; FII net buying crossed ₹ 1,400 Cr this week.',
          sentiment: 'Strong Buy',
          aiTakeaway: 'Valuation discount has narrowed. AI models predict technical test of ₹ 1,720 resistance.'
        },
        {
          ticker: 'INFY',
          name: 'Infosys Limited',
          price: '₹ 1,780.00',
          dayChange: '+1.2%',
          trend5Day: 'Upward Channel (+2.8% over 5 days)',
          keyTriggers: 'Generative AI enterprise contracts ramping up; attrition stabilized at 12.8%.',
          sentiment: 'Bullish',
          aiTakeaway: 'Consistently beating consensus guidance. Strong dollar conversion tailwinds.'
        }
      ]
    }
  },
  {
    id: 'savings',
    name: 'Savings Account',
    shortName: 'Savings & Deposits',
    category: 'Banking & Liquidity',
    tagline: 'Connect bank accounts via the RBI Account Aggregator ecosystem for encrypted real-time cash flow sync.',
    iconName: 'Building2',
    accentColor: 'indigo',
    badge: 'RBI AA Framework',
    metrics: {
      activeInvestors: '3.2M+',
      supportedBanks: '32+ Scheduled Banks',
      consentSecurity: '256-bit Encrypted'
    },
    features: [
      'Encrypted RBI Account Aggregator (FIP / FIU) consent protocol',
      'Real-time cash balance, fixed deposit (FD), and recurring deposit (RD) tracking',
      'Intelligent expense categorization & recurring bill prediction',
      'High-yield savings sweep-in optimization recommendations'
    ],
    createForm: {
      title: 'Link Bank Savings Account via AA',
      subtitle: 'Securely link your bank using your registered mobile number and Bank OTP.',
      fields: [
        { id: 'bankName', label: 'Select Your Primary Bank', type: 'select', options: ['HDFC Bank', 'State Bank of India (SBI)', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank', 'Punjab National Bank'], required: true },
        { id: 'accountNumber', label: 'Savings Account Number', type: 'text', placeholder: '0000 1234 5678 9012', required: true },
        { id: 'ifscCode', label: 'Bank IFSC Code', type: 'text', placeholder: 'HDFC0001234', required: true },
        { id: 'phone', label: 'Bank Registered Mobile Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
        { id: 'consentRBI', label: 'I agree to provide electronic consent via RBI AA framework for 12 months (revocable anytime).', type: 'checkbox', required: true }
      ]
    },
    loginForm: {
      title: 'Secure Banking Consent Authorization',
      subtitle: 'Authenticate with your Banking ID or NetBanking credentials.',
      fields: [
        { id: 'customerId', label: 'Customer ID / NetBanking User ID', type: 'text', placeholder: 'Enter NetBanking Customer ID', required: true },
        { id: 'ipassword', label: 'NetBanking Password / IPIN', type: 'password', placeholder: '••••••••', required: true },
        { id: 'otpMethod', label: 'Send OTP via SMS to registered mobile', type: 'checkbox', defaultChecked: true }
      ]
    },
    mockPortfolio: {
      accountBalance: '₹ 4,32,850.75',
      change24h: 'Monthly Interest Credited: + ₹ 1,420',
      linkedInstitutions: ['HDFC Bank (Primary)', 'State Bank of India', 'ICICI Bank'],
      holdings: [
        { name: 'HDFC Classic Savings A/c (..4502)', units: 'Available Balance', nav: '3.5% p.a.', value: '₹ 2,15,400', gain: 'Active' },
        { name: 'SBI DigiSavings A/c (..8910)', units: 'Available Balance', nav: '3.0% p.a.', value: '₹ 67,450', gain: 'Active' },
        { name: 'ICICI Tax Saver Fixed Deposit', units: 'Matures Dec 2026', nav: '7.1% p.a.', value: '₹ 1,50,000', gain: 'Locked' }
      ]
    },
    aiInsights: {
      title: 'AI Liquidity, Cash Flow & Credit Health',
      summaryStatement: 'Your liquid emergency fund covers 6.8 months of average living expenses. Discretionary spending dropped 12% this week.',
      balanceHealth: {
        currentBalance: '₹ 4,32,850.75',
        runwayMonths: '6.8 Months',
        status: 'Optimal (Fully Capitalized)',
        aiComment: 'Your emergency fund is fully capitalized with sufficient liquidity buffer to withstand unforeseen shocks without liquidating investments.'
      },
      transactionsBreakdown: {
        summaryText: 'Food & dining spending is down 12% this week. Utility bills are automated and optimized.',
        recentItems: [
          { merchant: 'Swiggy Gourmet Delivery', category: 'Food & Dining', amount: '₹ 640.00', date: 'Today, 2:15 PM', trend: 'Down 12% vs last week', icon: 'Utensils' },
          { merchant: 'Tata Power Electricity Bill', category: 'Utilities', amount: '₹ 2,450.00', date: 'Yesterday', trend: 'Auto-debited on schedule', icon: 'Zap' },
          { merchant: 'Amazon India Retail', category: 'Shopping', amount: '₹ 1,890.00', date: '22 Aug 2026', trend: 'Within budget threshold', icon: 'ShoppingBag' },
          { merchant: 'Salary Auto-Credit (Tech Corp)', category: 'Income', amount: '+ ₹ 1,45,000.00', date: '20 Aug 2026', trend: 'Recurring Monthly', icon: 'ArrowDownLeft' }
        ]
      },
      cibilScore: {
        score: 765,
        maxScore: 900,
        rating: 'Excellent (Top 12%)',
        factors: [
          { title: 'Credit Utilization Ratio', value: '14%', status: 'Great (<30% ideal)' },
          { title: 'On-Time Payment Streak', value: '100%', status: '36 consecutive months' },
          { title: 'Credit Mix', value: 'Diverse', status: 'Secured + Unsecured' },
          { title: 'Recent Hard Inquiries', value: '0 Inquiries', status: 'Zero impact last 90 days' }
        ],
        tips: 'Maintaining your balance above ₹ 1,00,000 and keeping credit card utilization under 20% will help cross the 800 CIBIL threshold by Q4.'
      }
    }
  }
];

export const SYSTEM_STATS = {
  totalAssetsTracked: '₹ 27,60,661.15',
  connectedAccounts: 3,
  aggregatorStatus: 'Operational (100% Uptime)',
  lastSynced: 'Just now',
  encryptionStandard: 'AES-256 GCM'
};
