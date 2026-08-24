// translations.js - Complete Hardcoded Multilingual Dictionary for English, Hindi, and Kannada
export const TRANSLATIONS = {
  en: {
    langName: 'English',
    bcp47: 'en-IN',
    appTitle: 'FinCentral',
    appBadge: 'Accessible Aggregator',
    appTagline: 'Simple, Voice-Assisted Financial Dashboard',
    networkOnline: 'Bank Network: 100% Active',
    rbiCompliant: 'Government & RBI Approved',
    verifiedUser: 'Chetan Surya (Verified)',
    language: 'Language',
    highContrast: 'High Contrast',
    normalContrast: 'Normal View',
    largeText: 'Large Text',
    normalText: 'Normal Text',
    voiceGuide: 'Audio Reader (TTS)',
    voiceActive: 'Speaking...',
    listenToScreen: 'Listen to this page',
    listen: 'Listen',
    stopAudio: 'Stop Audio',
    home: 'Home',
    reset: 'Start Over',

    // Dashboard
    heroBadge: 'Safe & Simple Financial Hub for Everyone',
    heroTitle: 'See All Your Money in One Safe Place',
    heroDesc: 'Choose an account below. You can listen to any section using the voice button, or switch languages anytime.',
    totalMoneyTracked: 'Total Money Tracked',
    safeBanks: '32+ Trusted Banks',
    voiceSupported: 'Voice in 3 Languages',
    safeStorage: '100% Safe (No passwords saved)',

    categoriesTitle: 'Choose What You Want to Check',
    categoriesSubtitle: 'Click on any card below or press the voice button to hear about it.',

    // Account Names & Metaphors
    accounts: {
      'savings': {
        name: 'Savings Bank Account',
        shortName: 'Savings',
        metaphor: 'Daily Money & Piggy Bank',
        tagline: 'Your money kept safely in bank accounts for daily expenses and family emergencies.',
        badge: 'Safe Bank Deposit',
        feature1: 'See your real balance in 1 click',
        feature2: 'Get voice updates on your spending',
        feature3: 'Safe emergency savings buffer',
        actionBtn: 'Open Savings Section',
        voiceText: 'Savings Bank Account. This is your daily safe money kept in the bank for expenses and emergencies.'
      },
      'mutual-funds': {
        name: 'Mutual Funds (Growing Plant)',
        shortName: 'Mutual Funds',
        metaphor: 'Growing Wealth Basket',
        tagline: 'Like planting a tree: your money is invested across India\'s 50 biggest companies to grow slowly and safely.',
        badge: 'Long-Term Growth',
        feature1: 'Basket of India\'s Top 50 companies',
        feature2: 'Grows steadily year after year',
        feature3: 'Very low charges, transparent growth',
        actionBtn: 'Open Mutual Funds Section',
        voiceText: 'Mutual Funds. Your money is invested across India\'s 50 biggest companies to grow steadily like a tree.'
      },
      'demat': {
        name: 'Demat & Shares (Company Factory)',
        shortName: 'Demat & Shares',
        metaphor: 'Company Ownership',
        tagline: 'Own small shares in companies like Tata, Reliance, and Infosys and track their daily values.',
        badge: 'Shares & Stock Market',
        feature1: 'See today vs yesterday share values',
        feature2: 'Simple green/red profit alerts',
        feature3: 'Listen to why share prices changed today',
        actionBtn: 'Open Demat Shares Section',
        voiceText: 'Demat and Shares. Own small pieces of big companies like Tata and Reliance, and track daily value changes with simple green and red colors.'
      }
    },

    // Action Screen (Create vs Login)
    actionPromptTitle: 'What would you like to do?',
    actionPromptSubtitle: 'You can connect an existing account or open a new one in simple steps.',
    createTitle: 'Open / Create New Account',
    createSub: 'Open a fresh account in 3 minutes with simple Aadhaar or Mobile verification.',
    createBtn: 'Start Simple Registration ➔',
    loginTitle: 'Connect Existing Account',
    loginSub: 'Already have this account? Connect it securely to see your balance and AI summary.',
    loginBtn: 'Connect & View Balance ➔',
    backToDashboard: '⬅ Back to Main Screen',

    // Form Strings
    digitalOnboarding: 'Simple Step-by-Step Registration',
    secureLogin: 'Safe Bank Connection',
    submitCreate: 'Confirm & Open Account ➔',
    submitLogin: 'Connect to Aggregator ➔',
    fullName: 'Your Full Name',
    panNumber: 'PAN Card Number',
    mobileNumber: 'Aadhaar Linked Mobile Number',
    emailAddress: 'Email Address (Optional)',
    bankSelection: 'Choose Your Bank',
    customerOrFolioId: 'Customer ID / Account ID',
    secretPin: 'Secret Security PIN / Password',
    termsConsent: 'I agree to safely connect my account (You can disconnect anytime).',
    requiredField: 'This is required to proceed',
    connectingText: 'Connecting safely to your bank...',

    // Post-Auth Success & Summary
    syncSuccess: 'Connected Successfully!',
    syncSuccessMsg: 'Your financial information is now safely connected and summarized in plain language.',
    tabAiInsights: '🤖 Easy AI Voice & Text Summary',
    tabHoldings: '📋 Detailed Account List',
    downloadPdf: 'Download Simple PDF Report',
    consentActive: 'Connection Status: ACTIVE & SAFE',

    // Low-Literacy AI Summaries
    savingsAI: {
      trafficLightSafe: '🟢 Status: SAFE & HEALTHY',
      trafficLightDesc: 'Your emergency money is well protected.',
      balanceSpeech: 'You have 4 lakh 32 thousand 850 rupees in your bank. Your emergency fund has enough money to cover your family for 6 full months. Your spending went down this week, which is very good.',
      balanceCardTitle: 'Your Available Bank Money',
      balanceComment: 'You have enough savings to run your household for 6.8 months safely without any debt.',
      recentSpendingTitle: 'Recent Money Spent',
      spendingComment: 'You spent less on food and shopping this week compared to last week. Good job saving!',
      cibilTitle: 'Bank Trust Score (CIBIL Score)',
      cibilScoreDisplay: '765 out of 900 (Excellent)',
      cibilMeaning: 'Banks trust you completely! You pay your bills on time, so banks will give you quick loans at cheap interest rates.',
      cibilTip: 'Tip: Keep paying your electricity and card bills before the due date to reach an even higher score.'
    },

    mutualFundsAI: {
      growthSummaryTitle: 'How Your Money is Growing',
      analogyText: 'Think of your mutual fund like a fruit basket filled with India\'s 50 biggest companies (Tata, Reliance, Infosys). When these companies make profits, your money grows.',
      navExplanation: '1 Basket Unit Cost: ₹ 212.85 | Annual Growth: +16.8% every year',
      feeExplanation: 'Very Low Fee: Only ₹ 48 for every ₹ 10,000 invested (You save ₹ 5,660 per year compared to regular agents).',
      allocationTitle: 'Where Your Money is Kept',
      allocBig: '60% in Top 50 Big Companies (Safe & Steady)',
      allocSafe: '30% in Government Reserve (Protected)',
      allocFast: '10% in Fast Growing Small Companies (High Growth)',
      riskLevelTitle: 'Safety & Risk Level',
      riskLevelDesc: 'Medium Safe. Your money is protected by government bonds and won\'t drop easily during market dips.'
    },

    dematAI: {
      todayVsYesterdayTitle: 'Today\'s Share Value vs Yesterday',
      varianceGainText: '🟢 Your shares went UP by ₹ 24,150 today (+1.65% profit compared to yesterday)',
      todayValuation: 'Today\'s Total Value: ₹ 14,82,600',
      yesterdayValuation: 'Yesterday\'s Value: ₹ 14,58,450',
      clickStockPrompt: 'Click on any company below to listen to why its price moved:',
      stocks: {
        'RELIANCE': {
          plainTrend: 'Reliance Shares: UP by +2.4% today',
          voiceSummary: 'Reliance shares went up today because the company announced new green energy projects and high profits in its retail stores.',
          simpleAdvice: 'Strong company with massive operations across petrol, Jio telecom, and retail stores.'
        },
        'TCS': {
          plainTrend: 'Tata Consultancy (TCS): Stable (+0.8%)',
          voiceSummary: 'TCS shares are stable today. Tata won big new software contracts from banks in the United Kingdom.',
          simpleAdvice: 'Very safe technology company with regular yearly cash dividend payments.'
        },
        'HDFCBANK': {
          plainTrend: 'HDFC Bank: UP by +1.9% today',
          voiceSummary: 'HDFC Bank shares climbed today because millions of people opened new deposits and took house loans.',
          simpleAdvice: 'India\'s largest private bank with great stability and safety.'
        },
        'INFY': {
          plainTrend: 'Infosys: UP by +1.2% today',
          voiceSummary: 'Infosys shares gained value as global businesses signed new Artificial Intelligence software contracts.',
          simpleAdvice: 'Leading global IT software exporter bringing foreign earnings into India.'
        }
      }
    },

    // Footer
    footerGovt: 'Approved by Reserve Bank of India (RBI) & SEBI for Citizen Financial Security.',
    footerPrivacy: 'Zero Passwords Stored • 256-Bit Protection • Disconnect Anytime',
    footerCopyright: '© 2026 FinCentral Accessible Financial Engine'
  },

  hi: {
    langName: 'हिंदी',
    bcp47: 'hi-IN',
    appTitle: 'फिनसेंट्रल (FinCentral)',
    appBadge: 'सुलभ एग्रीगेटर',
    appTagline: 'आसान, बोलकर समझाने वाला वित्तीय डैशबोर्ड',
    networkOnline: 'बैंक नेटवर्क: 100% चालू',
    rbiCompliant: 'सरकार एवं RBI द्वारा प्रमाणित',
    verifiedUser: 'चेतन सूर्य (सत्यापित)',
    language: 'भाषा',
    highContrast: 'हाई कंट्रास्ट (स्पष्ट दृश्य)',
    normalContrast: 'सामान्य दृश्य',
    largeText: 'बड़े अक्षर',
    normalText: 'सामान्य अक्षर',
    voiceGuide: 'आवाज़ से सुनें (TTS)',
    voiceActive: 'बोल रहा है...',
    listenToScreen: 'इस पेज को सुनें',
    listen: 'सुनें',
    stopAudio: 'आवाज़ रोकें',
    home: 'होम',
    reset: 'शुरुआत पर जाएं',

    // Dashboard
    heroBadge: 'सभी नागरिकों के लिए आसान और सुरक्षित वित्तीय केंद्र',
    heroTitle: 'अपने सभी बैंक और निवेश एक सुरक्षित जगह पर देखें',
    heroDesc: 'नीचे से अपना खाता चुनें। आप किसी भी जानकारी को बोलकर सुनने के लिए आवाज़ बटन दबा सकते हैं।',
    totalMoneyTracked: 'कुल ट्रैक किया गया धन',
    safeBanks: '32+ भरोसेमंद बैंक',
    voiceSupported: '3 भाषाओं में आवाज़ सुविधा',
    safeStorage: '100% सुरक्षित (कोई पासवर्ड सेव नहीं होता)',

    categoriesTitle: 'आप कौन सा खाता देखना चाहते हैं?',
    categoriesSubtitle: 'नीचे दिए गए किसी भी कार्ड पर क्लिक करें या आवाज़ से सुनने के लिए स्पीकर बटन दबाएं।',

    // Account Names & Metaphors
    accounts: {
      'savings': {
        name: 'बचत बैंक खाता (गुल्लक)',
        shortName: 'बचत खाता',
        metaphor: 'रोजमर्रा का पैसा और गुल्लक',
        tagline: 'घर के खर्चों और आपातकालीन सुरक्षा के लिए बैंक में रखा सुरक्षित पैसा।',
        badge: 'सुरक्षित बैंक जमा',
        feature1: '1 क्लिक में अपना असली बैलेंस देखें',
        feature2: 'खर्चों की आसान बोलती जानकारी पाएं',
        feature3: '6 महीने के घरेलू खर्च का सुरक्षित बैकअप',
        actionBtn: 'बचत खाता खोलें',
        voiceText: 'बचत बैंक खाता। यह आपका रोजमर्रा का सुरक्षित पैसा है जो घर के खर्चों और किसी आपात स्थिति के लिए बैंक में सुरक्षित रहता है।'
      },
      'mutual-funds': {
        name: 'म्यूचुअल फंड्स (बढ़ता हुआ पौधा)',
        shortName: 'म्यूचुअल फंड्स',
        metaphor: 'पैसा बढ़ाने की टोकरी',
        tagline: 'जैसे एक पौधा पेड़ बनता है: आपका पैसा भारत की 50 सबसे बड़ी कंपनियों में सुरक्षित रूप से बढ़ता है।',
        badge: 'लंबी अवधि का विकास',
        feature1: 'भारत की टॉप 50 बड़ी कंपनियों की टोकरी',
        feature2: 'हर साल लगातार सुरक्षित मुनाफा',
        feature3: 'बहुत कम शुल्क, पारदर्शी विकास',
        actionBtn: 'म्यूचुअल फंड्स खोलें',
        voiceText: 'म्यूचुअल फंड्स। आपका पैसा भारत की 50 सबसे बड़ी और भरोसेमंद कंपनियों में लगाया जाता है ताकि वह धीरे-धीरे पेड़ की तरह बढ़ सके।'
      },
      'demat': {
        name: 'डीमैट और शेयर (कंपनी की हिस्सेदारी)',
        shortName: 'डीमैट व शेयर',
        metaphor: 'कंपनी की हिस्सेदारी',
        tagline: 'टाटा, रिलायंस और इंफोसिस जैसी बड़ी कंपनियों में छोटी हिस्सेदारी रखें और रोज़ का नफ़ा-नुकसान देखें।',
        badge: 'शेयर बाज़ार खाता',
        feature1: 'आज और कल के भाव का सीधा मुकाबला',
        feature2: 'सरल हरे और लाल रंग में नफ़े की सूचना',
        feature3: 'शेयर का भाव क्यों बदला, बोलकर सुनें',
        actionBtn: 'डीमैट शेयर खाता खोलें',
        voiceText: 'डीमैट और शेयर। टाटा और रिलायंस जैसी दिग्गज कंपनियों में हिस्सेदारी रखें और देखें कि आज आपका फायदा हुआ या नुकसान।'
      }
    },

    // Action Screen (Create vs Login)
    actionPromptTitle: 'आप आगे क्या करना चाहते हैं?',
    actionPromptSubtitle: 'आप अपना पुराना खाता जोड़ सकते हैं या नया खाता बहुत आसानी से खोल सकते हैं।',
    createTitle: 'नया खाता खोलें',
    createSub: 'केवल आधार या मोबाइल नंबर से 3 मिनट में नया खाता शुरू करें।',
    createBtn: 'सरल रजिस्ट्रेशन शुरू करें ➔',
    loginTitle: 'मौजूदा खाता जोड़ें',
    loginSub: 'क्या आपके पास पहले से यह खाता है? इसे जोड़ें और बैलेंस देखें।',
    loginBtn: 'जोड़ें और बैलेंस देखें ➔',
    backToDashboard: '⬅ मुख्य स्क्रीन पर लौटें',

    // Form Strings
    digitalOnboarding: 'सरल चरण-दर-चरण रजिस्ट्रेशन',
    secureLogin: 'सुरक्षित बैंक लॉगिन',
    submitCreate: 'पुष्टि करें और खाता खोलें ➔',
    submitLogin: 'बैंक से जोड़ें ➔',
    fullName: 'आपका पूरा नाम',
    panNumber: 'पैन कार्ड नंबर',
    mobileNumber: 'आधार से जुड़ा मोबाइल नंबर',
    emailAddress: 'ईमेल पता (ऐच्छिक)',
    bankSelection: 'अपना बैंक चुनें',
    customerOrFolioId: 'कस्टमर आईडी / खाता संख्या',
    secretPin: 'गुप्त पिन / पासवर्ड',
    termsConsent: 'मैं अपना खाता सुरक्षित रूप से जोड़ने की अनुमति देता हूँ (आप कभी भी हटा सकते हैं)।',
    requiredField: 'आगे बढ़ने के लिए यह भरना आवश्यक है',
    connectingText: 'आपके बैंक से सुरक्षित संपर्क हो रहा है...',

    // Post-Auth Success & Summary
    syncSuccess: 'खाता सफलतापूर्वक जुड़ गया!',
    syncSuccessMsg: 'आपकी वित्तीय जानकारी अब सुरक्षित रूप से सरल भाषा में उपलब्ध है।',
    tabAiInsights: '🤖 आसान AI आवाज़ और विश्लेषण',
    tabHoldings: '📋 पूरी खाता सूची',
    downloadPdf: 'सरल PDF रिपोर्ट डाउनलोड करें',
    consentActive: 'कनेक्शन स्थिति: सक्रिय एवं सुरक्षित',

    // Low-Literacy AI Summaries
    savingsAI: {
      trafficLightSafe: '🟢 स्थिति: बिल्कुल सुरक्षित और मजबूत',
      trafficLightDesc: 'आपका आपातकालीन पैसा पूरी तरह सुरक्षित है।',
      balanceSpeech: 'आपके बैंक में कुल 4 लाख 32 हजार 850 रुपये हैं। आपके पास 6 महीने के पारिवारिक खर्च के लिए पर्याप्त सुरक्षित बचत है। इस हफ्ते आपका खर्च कम हुआ है, जो बहुत अच्छी बात है।',
      balanceCardTitle: 'बैंक में उपलब्ध कुल रकम',
      balanceComment: 'आपके पास बिना किसी कर्ज के 6.8 महीने तक घर चलाने के लिए पर्याप्त सुरक्षित बचत मौजूद है।',
      recentSpendingTitle: 'हालिया खर्चों का हाल',
      spendingComment: 'पिछले हफ्ते की तुलना में इस हफ्ते खाने-पीने और खरीदारी पर कम खर्च हुआ है। बहुत बढ़िया!',
      cibilTitle: 'बैंक भरोसा स्कोर (CIBIL स्कोर)',
      cibilScoreDisplay: '765 / 900 (बहुत शानदार)',
      cibilMeaning: 'बैंक आप पर पूरा भरोसा करते हैं! आप समय पर बिल भरते हैं, इसलिए बैंक आपको बहुत कम ब्याज पर तुरंत लोन देंगे।',
      cibilTip: 'सलाह: अपने बिजली और कार्ड के बिल समय से पहले भरते रहें ताकि आपका स्कोर 800 के पार पहुंच जाए।'
    },

    mutualFundsAI: {
      growthSummaryTitle: 'आपका पैसा कैसे बढ़ रहा है',
      analogyText: 'अपने म्यूचुअल फंड को फलों की एक टोकरी समझें जिसमें भारत की 50 सबसे बड़ी कंपनियाँ (टाटा, रिलायंस, इंफोसिस) शामिल हैं। जब ये कंपनियाँ मुनाफा कमाती हैं, आपका पैसा बढ़ता है।',
      navExplanation: '1 टोकरी का भाव: ₹ 212.85 | सालाना विकास: हर साल +16.8% की बढ़ोतरी',
      feeExplanation: 'बहुत कम शुल्क: हर ₹ 10,000 के निवेश पर केवल ₹ 48 खर्च (आप हर साल ₹ 5,660 की बचत कर रहे हैं)।',
      allocationTitle: 'आपका पैसा कहाँ लगा है',
      allocBig: '60% टॉप 50 बड़ी कंपनियों में (स्थिर और सुरक्षित)',
      allocSafe: '30% सरकारी बचत में (100% सुरक्षित)',
      allocFast: '10% तेजी से बढ़ने वाली कंपनियों में (अधिक मुनाफा)',
      riskLevelTitle: 'सुरक्षा और जोखिम का स्तर',
      riskLevelDesc: 'मध्यम सुरक्षित। आपका पैसा सरकारी बांड से सुरक्षित है और बाज़ार गिरने पर भी ज्यादा नहीं गिरेगा।'
    },

    dematAI: {
      todayVsYesterdayTitle: 'आज के शेयर का भाव बनाम कल का भाव',
      varianceGainText: '🟢 आज आपके शेयरों में ₹ 24,150 का मुनाफा हुआ (+1.65% की बढ़ोतरी कल के मुकाबले)',
      todayValuation: 'आज का कुल मूल्य: ₹ 14,82,600',
      yesterdayValuation: 'कल का मूल्य: ₹ 14,58,450',
      clickStockPrompt: 'कंपनी का भाव क्यों बदला, यह सुनने के लिए नीचे किसी भी कंपनी पर क्लिक करें:',
      stocks: {
        'RELIANCE': {
          plainTrend: 'रिलायंस शेयर: आज +2.4% ऊपर',
          voiceSummary: 'रिलायंस के शेयर आज इसलिए बढ़े क्योंकि कंपनी ने नए ग्रीन एनर्जी प्रोजेक्ट और दुकानों में भारी मुनाफे की घोषणा की है।',
          simpleAdvice: 'पेट्रोल, जियो टेलीकॉम और रिटेल स्टोर वाली भारत की सबसे विशाल कंपनी।'
        },
        'TCS': {
          plainTrend: 'टाटा कंसल्टेंसी (TCS): स्थिर (+0.8%)',
          voiceSummary: 'टीसीएस के शेयर आज स्थिर हैं। टाटा कंपनी को ब्रिटेन के बैंकों से बड़े नए सॉफ्टवेयर के काम मिले हैं।',
          simpleAdvice: 'टाटा की बहुत सुरक्षित टेक्नोलॉजी कंपनी जो हर साल पक्का डिविडेंड देती है।'
        },
        'HDFCBANK': {
          plainTrend: 'एचडीएफसी बैंक: आज +1.9% ऊपर',
          voiceSummary: 'एचडीएफसी बैंक के शेयर आज ऊपर गए क्योंकि लाखों लोगों ने नए खाते खोले और घर खरीदने के लिए लोन लिया।',
          simpleAdvice: 'भारत का सबसे बड़ा और सबसे सुरक्षित प्राइवेट बैंक।'
        },
        'INFY': {
          plainTrend: 'इंफोसिस: आज +1.2% ऊपर',
          voiceSummary: 'इंफोसिस के शेयरों में बढ़त हुई क्योंकि विदेशी कंपनियों ने नए आर्टिफिशियल इंटेलिजेंस सॉफ्टवेयर के सौदे किए हैं।',
          simpleAdvice: 'दुनिया भर में भारत का नाम रोशन करने वाली दिग्गज सॉफ्टवेयर कंपनी।'
        }
      }
    },

    // Footer
    footerGovt: 'नागरिकों की वित्तीय सुरक्षा हेतु भारतीय रिज़र्व बैंक (RBI) और SEBI द्वारा प्रमाणित।',
    footerPrivacy: 'कोई पासवर्ड सेव नहीं होता • 256-बिट सुरक्षा • जब चाहें तब हटाएं',
    footerCopyright: '© 2026 फिनसेंट्रल सुलभ वित्तीय इंजन'
  },

  kn: {
    langName: 'ಕನ್ನಡ',
    bcp47: 'kn-IN',
    appTitle: 'ಫಿನ್‌ಸೆಂಟ್ರಲ್ (FinCentral)',
    appBadge: 'ಸರಳ ಆರ್ಥಿಕ ಕೇಂದ್ರ',
    appTagline: 'ಎಲ್ಲರಿಗೂ ಅರ್ಥವಾಗುವ ಧ್ವನಿ ಆಧಾರಿತ ಹಣಕಾಸು ಮಾಹಿತಿ',
    networkOnline: 'ಬ್ಯಾಂಕ್ ನೆಟ್‌ವರ್ಕ್: 100% ಸಕ್ರಿಯ',
    rbiCompliant: 'ಸರ್ಕಾರ ಹಾಗೂ RBI ಮಾನ್ಯತೆ ಪಡೆದಿದೆ',
    verifiedUser: 'ಚೇತನ್ ಸೂರ್ಯ (ದೃಢೀಕೃತ)',
    language: 'ಭಾಷೆ',
    highContrast: 'ಹೆಚ್ಚಿನ ಕಾಂಟ್ರಾಸ್ಟ್ (ಸ್ಪಷ್ಟ ನೋಟ)',
    normalContrast: 'ಸಾಮಾನ್ಯ ನೋಟ',
    largeText: 'ದೊಡ್ಡ ಅಕ್ಷರಗಳು',
    normalText: 'ಸಾಮಾನ್ಯ ಅಕ್ಷರಗಳು',
    voiceGuide: 'ಧ್ವನಿ ಓದುಗ (TTS)',
    voiceActive: 'ಮಾತನಾಡುತ್ತಿದೆ...',
    listenToScreen: 'ಈ ಪುಟವನ್ನು ಆಲಿಸಿ',
    listen: 'ಆಲಿಸಿ',
    stopAudio: 'ಧ್ವನಿ ನಿಲ್ಲಿಸಿ',
    home: 'ಮುಖಪುಟ',
    reset: 'ಮೊದಲಿಗೆ ಹೋಗಿ',

    // Dashboard
    heroBadge: 'ಸಾಮಾನ್ಯ ಜನರಿಗಾಗಿ ಅತ್ಯಂತ ಸರಳ ಮತ್ತು ಸುರಕ್ಷಿತ ಆರ್ಥಿಕ ತಾಣ',
    heroTitle: 'ನಿಮ್ಮ ಎಲ್ಲಾ ಹಣದ ಲೆಕ್ಕವನ್ನು ಒಂದೇ ಜಾಗದಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ನೋಡಿ',
    heroDesc: 'ಕೆಳಗಿನ ಖಾತೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಯಾವುದೇ ವಿವರವನ್ನು ಧ್ವನಿ ಮೂಲಕ ಕೇಳಲು ಸ್ಪೀಕರ್ ಬಟನ್ ಒತ್ತಿರಿ.',
    totalMoneyTracked: 'ಒಟ್ಟು ಲೆಕ್ಕವಿರುವ ಹಣ',
    safeBanks: '32+ ವಿಶ್ವಾಸಾರ್ಹ ಬ್ಯಾಂಕ್‌ಗಳು',
    voiceSupported: '3 ಭಾಷೆಗಳಲ್ಲಿ ಧ್ವನಿ ಸೌಲಭ್ಯ',
    safeStorage: '100% ಸುರಕ್ಷಿತ (ಯಾವುದೇ ಪಾಸ್‌ವರ್ಡ್ ಉಳಿಸುವುದಿಲ್ಲ)',

    categoriesTitle: 'ನೀವು ಯಾವ ಖಾತೆಯನ್ನು ಪರಿಶೀಲಿಸಲು ಬಯಸುತ್ತೀರಿ?',
    categoriesSubtitle: 'ಕೆಳಗಿನ ಕಾರ್ಡ್‌ಗಳ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಧ್ವನಿ ವಿವರ ಕೇಳಲು ಆಲಿಸಿ ಬಟನ್ ಒತ್ತಿರಿ.',

    // Account Names & Metaphors
    accounts: {
      'savings': {
        name: 'ಉಳಿತಾಯ ಬ್ಯಾಂಕ್ ಖಾತೆ (ಮುದ್ದು ಗಲ್ಲಾಪೆಟ್ಟಿಗೆ)',
        shortName: 'ಉಳಿತಾಯ ಖಾತೆ',
        metaphor: 'ದೈನಂದಿನ ಖರ್ಚಿನ ಹಣ',
        tagline: 'ದೈನಂದಿನ ಖರ್ಚು ಮತ್ತು ತುರ್ತು ಕುಟುಂಬ ರಕ್ಷಣೆಗಾಗಿ ಬ್ಯಾಂಕಿನಲ್ಲಿ ಇಟ್ಟಿರುವ ಸುರಕ್ಷಿತ ಹಣ.',
        badge: 'ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕ್ ಹಣ',
        feature1: '1 ಕ್ಲಿಕ್‌ನಲ್ಲಿ ನೈಜ ಬ್ಯಾಲೆನ್ಸ್ ಪರಿಶೀಲಿಸಿ',
        feature2: 'ಖರ್ಚಿನ ವಿವರವನ್ನು ಧ್ವನಿ ಮೂಲಕ ಆಲಿಸಿ',
        feature3: '6 ತಿಂಗಳ ಸಂಸಾರದ ಖರ್ಚಿಗೆ ಸುರಕ್ಷಿತ ಬ್ಯಾಕಪ್',
        actionBtn: 'ಉಳಿತಾಯ ಖಾತೆ ತೆರೆಯಿರಿ',
        voiceText: 'ಉಳಿತಾಯ ಬ್ಯಾಂಕ್ ಖಾತೆ. ಇದು ನಿಮ್ಮ ದಿನನಿತ್ಯದ ಖರ್ಚು ಮತ್ತು ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಾಗಿ ಬ್ಯಾಂಕಿನಲ್ಲಿ ಇಟ್ಟಿರುವ ಸುರಕ್ಷಿತ ಹಣ.'
      },
      'mutual-funds': {
        name: 'ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ಸ್ (ಬೆಳೆಯುವ ಗಿಡ)',
        shortName: 'ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ಸ್',
        metaphor: 'ಹಣ ಬೆಳೆಯುವ ಬುಟ್ಟಿ',
        tagline: 'ಗಿಡ ಮರವಾಗುವಂತೆ: ನಿಮ್ಮ ಹಣ ಭಾರತದ 50 ಅತಿ ದೊಡ್ಡ ಕಂಪನಿಗಳಲ್ಲಿ ಹೂಡಿಕೆಯಾಗಿ ಸುರಕ್ಷಿತವಾಗಿ ಬೆಳೆಯುತ್ತದೆ.',
        badge: 'ದೀರ್ಘಾವಧಿ ಲಾಭ',
        feature1: 'ಭಾರತದ ಟಾಪ್ 50 ದೊಡ್ಡ ಕಂಪನಿಗಳ ಬುಟ್ಟಿ',
        feature2: 'ಪ್ರತಿ ವರ್ಷ ನಿರಂತರವಾಗಿ ಬೆಳೆಯುವ ಲಾಭ',
        feature3: 'ಅತಿ ಕಡಿಮೆ ಶುಲ್ಕ, ಪಾರದರ್ಶಕ ಬೆಳವಣಿಗೆ',
        actionBtn: 'ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ಸ್ ತೆರೆಯಿರಿ',
        voiceText: 'ಮ್ಯೂಚುಯಲ್ ಫಂಡ್ಸ್. ನಿಮ್ಮ ಹಣವನ್ನು ಭಾರತದ 50 ಪ್ರಮುಖ ಕಂಪನಿಗಳಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಲಾಗುತ್ತದೆ, ಅದು ಗಿಡದಂತೆ ಸುರಕ್ಷಿತವಾಗಿ ಬೆಳೆಯುತ್ತದೆ.'
      },
      'demat': {
        name: 'ಡಿಮ್ಯಾಟ್ ಮತ್ತು ಷೇರುಗಳು (ಕಂಪನಿ ಪಾಲುದಾರಿಕೆ)',
        shortName: 'ಡಿಮ್ಯಾಟ್ ಷೇರುಗಳು',
        metaphor: 'ಕಂಪನಿ ಒಡೆತನ',
        tagline: 'ಟಾಟಾ, ರಿಲಯನ್ಸ್ ಮತ್ತು ಇನ್ಫೋಸಿಸ್‌ನಂತಹ ದೊಡ್ಡ ಕಂಪನಿಗಳಲ್ಲಿ ಸಣ್ಣ ಪಾಲುದಾರಿಕೆ ಹೊಂದಿ ದೈನಂದಿನ ಬೆಲೆ ಬದಲಾವಣೆ ನೋಡಿ.',
        badge: 'ಷೇರು ಮಾರುಕಟ್ಟೆ ಖಾತೆ',
        feature1: 'ಇವತ್ತಿನ ಮತ್ತು ನಿನ್ನೆಯ ಬೆಲೆಗಳ ಹೋಲಿಕೆ',
        feature2: 'ಸರಳ ಹಸಿರು ಮತ್ತು ಕೆಂಪು ಬಣ್ಣದಲ್ಲಿ ಲಾಭದ ಮಾಹಿತಿ',
        feature3: 'ಷೇರು ಬೆಲೆ ಏಕೆ ಬದಲಾಯಿತು ಎಂದು ಧ್ವನಿಯಲ್ಲಿ ಕೇಳಿ',
        actionBtn: 'ಡಿಮ್ಯಾಟ್ ಷೇರು ಖಾತೆ ತೆರೆಯಿರಿ',
        voiceText: 'ಡಿಮ್ಯಾಟ್ ಮತ್ತು ಷೇರುಗಳು. ಟಾಟಾ ಮತ್ತು ರಿಲಯನ್ಸ್‌ನಂತಹ ದೊಡ್ಡ ಕಂಪನಿಗಳಲ್ಲಿ ಸಣ್ಣ ಪಾಲು ಪಡೆಯಿರಿ ಮತ್ತು ದಿನದ ಲಾಭ-ನಷ್ಟವನ್ನು ಸರಳ ಬಣ್ಣಗಳಲ್ಲಿ ನೋಡಿ.'
      }
    },

    // Action Screen (Create vs Login)
    actionPromptTitle: 'ನೀವು ಮುಂದೆ ಏನು ಮಾಡಲು ಬಯಸುತ್ತೀರಿ?',
    actionPromptSubtitle: 'ನೀವು ಈಗಾಗಲೇ ಇರುವ ಖಾತೆಯನ್ನು ಲಿಂಕ್ ಮಾಡಬಹುದು ಅಥವಾ ಹೊಸ ಖಾತೆಯನ್ನು ತೆರೆಯಬಹುದು.',
    createTitle: 'ಹೊಸ ಖಾತೆ ತೆರೆಯಿರಿ',
    createSub: 'ಕೇವಲ ಆಧಾರ್ ಅಥವಾ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯಿಂದ 3 ನಿಮಿಷಗಳಲ್ಲಿ ಹೊಸ ಖಾತೆ ಆರಂಭಿಸಿ.',
    createBtn: 'ಸರಳ ನೋಂದಣಿ ಆರಂಭಿಸಿ ➔',
    loginTitle: 'ಈಗಾಗಲೇ ಇರುವ ಖಾತೆ ಜೋಡಿಸಿ',
    loginSub: 'ನಿಮಗೆ ಈ ಖಾತೆ ಈಗಾಗಲೇ ಇದೆಯೇ? ಸುಲಭವಾಗಿ ಜೋಡಿಸಿ ಬ್ಯಾಲೆನ್ಸ್ ನೋಡಿ.',
    loginBtn: 'ಜೋಡಿಸಿ ಬ್ಯಾಲೆನ್ಸ್ ನೋಡಿ ➔',
    backToDashboard: '⬅ ಮುಖ್ಯ ಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ',

    // Form Strings
    digitalOnboarding: 'ಸರಳ ಹಂತ-ಹಂತದ ನೋಂದಣಿ',
    secureLogin: 'ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕ್ ಲಾಗಿನ್',
    submitCreate: 'ಖಚಿತಪಡಿಸಿ ಖಾತೆ ತೆರೆಯಿರಿ ➔',
    submitLogin: 'ಬ್ಯಾಂಕ್‌ಗೆ ಜೋಡಿಸಿ ➔',
    fullName: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು',
    panNumber: 'ಪ್ಯಾನ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ',
    mobileNumber: 'ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
    emailAddress: 'ಇಮೇಲ್ ವಿಳಾಸ (ಐಚ್ಛಿಕ)',
    bankSelection: 'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಆಯ್ಕೆಮಾಡಿ',
    customerOrFolioId: 'ಗ್ರಾಹಕರ ಐಡಿ / ಖಾತೆ ಸಂಖ್ಯೆ',
    secretPin: 'ರಹಸ್ಯ ಪಿನ್ / ಪಾಸ್‌ವರ್ಡ್',
    termsConsent: 'ನನ್ನ ಖಾತೆಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಜೋಡಿಸಲು ಒಪ್ಪುತ್ತೇನೆ (ಯಾವಾಗ ಬೇಕಾದರೂ ತೆಗೆದುಹಾಕಬಹುದು).',
    requiredField: 'ಮುಂದೆ ಹೋಗಲು ಇದನ್ನು ಭರ್ತಿ ಮಾಡುವುದು ಕಡ್ಡಾಯ',
    connectingText: 'ಬ್ಯಾಂಕ್ ಜೊತೆ ಸುರಕ್ಷಿತ ಸಂಪರ್ಕ ಸಾಧಿಸಲಾಗುತ್ತಿದೆ...',

    // Post-Auth Success & Summary
    syncSuccess: 'ಖಾತೆ ಯಶಸ್ವಿಯಾಗಿ ಜೋಡಣೆಯಾಗಿದೆ!',
    syncSuccessMsg: 'ನಿಮ್ಮ ಹಣಕಾಸಿನ ಮಾಹಿತಿ ಈಗ ಸುರಕ್ಷಿತವಾಗಿ ಕನ್ನಡದಲ್ಲಿ ಲಭ್ಯವಿದೆ.',
    tabAiInsights: '🤖 ಸರಳ AI ಧ್ವನಿ ಮತ್ತು ಮುನ್ಸೂಚನೆ',
    tabHoldings: '📋 ಸಂಪೂರ್ಣ ಖಾತೆ ವಿವರ ಪಟ್ಟಿ',
    downloadPdf: 'ಸರಳ PDF ವರದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    consentActive: 'ಸಂಪರ್ಕ ಸ್ಥಿತಿ: ಸಕ್ರಿಯ ಮತ್ತು ಸುರಕ್ಷಿತ',

    // Low-Literacy AI Summaries
    savingsAI: {
      trafficLightSafe: '🟢 ಸ್ಥಿತಿ: ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಮತ್ತು ಸದೃಢ',
      trafficLightDesc: 'ನಿಮ್ಮ ತುರ್ತು ನಿಧಿಯ ಹಣ ಸಂಪೂರ್ಣ ರಕ್ಷಿತವಾಗಿದೆ.',
      balanceSpeech: 'ನಿಮ್ಮ ಬ್ಯಾಂಕಿನಲ್ಲಿ ಒಟ್ಟು 4 ಲಕ್ಷದ 32 ಸಾವಿರದ 850 ರೂಪಾಯಿಗಳಿವೆ. ನಿಮ್ಮ ಬಳಿ ಮುಂದಿನ 6 ತಿಂಗಳ ಕುಟುಂಬದ ಖರ್ಚಿಗೆ ಸಾಕಾಗುವಷ್ಟು ಸುರಕ್ಷಿತ ಹಣವಿದೆ. ಈ ವಾರ ನಿಮ್ಮ ಖರ್ಚು ಕಡಿಮೆಯಾಗಿದೆ, ಇದು ಉತ್ತಮ ಸಂಗತಿ.',
      balanceCardTitle: 'ಬ್ಯಾಂಕಿನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಒಟ್ಟು ಹಣ',
      balanceComment: 'ಯಾವುದೇ ಸಾಲವಿಲ್ಲದೆ 6.8 ತಿಂಗಳು ಸಂಸಾರ ನಡೆಸಲು ನಿಮ್ಮ ಬಳಿ ಸಾಕಷ್ಟು ಉಳಿತಾಯ ಹಣವಿದೆ.',
      recentSpendingTitle: 'ಇತ್ತೀಚಿನ ಖರ್ಚುಗಳ ವಿವರ',
      spendingComment: 'ಕಳೆದ ವಾರಕ್ಕೆ ಹೋಲಿಸಿದರೆ ಈ ವಾರ ಊಟ ಮತ್ತು ಶಾಪಿಂಗ್ ಖರ್ಚು 12% ಕಡಿಮೆಯಾಗಿದೆ. ಅಭಿನಂದನೆಗಳು!',
      cibilTitle: 'ಬ್ಯಾಂಕ್ ನಂಬಿಕೆ ಸ್ಕೋರ್ (CIBIL ಸ್ಕೋರ್)',
      cibilScoreDisplay: '765 / 900 (ಅತ್ಯುತ್ತಮ)',
      cibilMeaning: 'ಬ್ಯಾಂಕ್‌ಗಳು ನಿಮ್ಮ ಮೇಲೆ ಸಂಪೂರ್ಣ ನಂಬಿಕೆ ಇಟ್ಟಿವೆ! ನೀವು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಬಿಲ್ ಪಾವತಿಸುವುದರಿಂದ ಬ್ಯಾಂಕ್‌ಗಳು ಕಡಿಮೆ ಬಡ್ಡಿಗೆ ತಕ್ಷಣ ಸಾಲ ನೀಡುತ್ತವೆ.',
      cibilTip: 'ಸಲಹೆ: ಕರೆಂಟ್ ಬಿಲ್ ಮತ್ತು ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಹಣವನ್ನು ದಿನಾಂಕ ಮುಗಿಯುವ ಮುನ್ನ ಕಟ್ಟುವುದು ಮುಂದುವರಿಸಿ.'
    },

    mutualFundsAI: {
      growthSummaryTitle: 'ನಿಮ್ಮ ಹಣ ಹೇಗೆ ಬೆಳೆಯುತ್ತಿದೆ',
      analogyText: 'ನಿಮ್ಮ ಮ್ಯೂಚುಯಲ್ ಫಂಡನ್ನು ಹಣ್ಣಿನ ಬುಟ್ಟಿಯಂತೆ ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ, ಅದರಲ್ಲಿ ಭಾರತದ ಟಾಪ್ 50 ದೊಡ್ಡ ಕಂಪನಿಗಳು (ಟಾಟಾ, ರಿಲಯನ್ಸ್, ಇನ್ಫೋಸಿಸ್) ಇವೆ. ಆ ಕಂಪನಿಗಳು ಲಾಭ ಮಾಡಿದಾಗ ನಿಮ್ಮ ಹಣ ಬೆಳೆಯುತ್ತದೆ.',
      navExplanation: '1 ಬುಟ್ಟಿಯ ಬೆಲೆ: ₹ 212.85 | ವಾರ್ಷಿಕ ಲಾಭ: ಪ್ರತಿ ವರ್ಷ +16.8% ಹೆಚ್ಚಳ',
      feeExplanation: 'ಅತಿ ಕಡಿಮೆ ಶುಲ್ಕ: ಪ್ರತಿ ₹ 10,000 ಹೂಡಿಕೆಗೆ ಕೇವಲ ₹ 48 ಖರ್ಚು (ನೀವು ವಾರ್ಷಿಕ ₹ 5,660 ಉಳಿಸುತ್ತಿದ್ದೀರಿ).',
      allocationTitle: 'ನಿಮ್ಮ ಹಣ ಎಲ್ಲೆಲ್ಲಿ ಹೂಡಿಕೆಯಾಗಿದೆ',
      allocBig: '60% ಟಾಪ್ 50 ದೊಡ್ಡ ಕಂಪನಿಗಳಲ್ಲಿ (ಸುರಕ್ಷಿತ ಮತ್ತು ಸ್ಥಿರ)',
      allocSafe: '30% ಸರ್ಕಾರಿ ಉಳಿತಾಯದಲ್ಲಿ (100% ಗ್ಯಾರಂಟಿ)',
      allocFast: '10% ವೇಗವಾಗಿ ಬೆಳೆಯುವ ಕಂಪನಿಗಳಲ್ಲಿ (ಹೆಚ್ಚಿನ ಲಾಭ)',
      riskLevelTitle: 'ಸುರಕ್ಷತೆ ಮತ್ತು ರಿಸ್ಕ್ ಮಟ್ಟ',
      riskLevelDesc: 'ಮಧ್ಯಮ ಸುರಕ್ಷಿತ. ಸರ್ಕಾರಿ ಬಾಂಡ್‌ಗಳಿರುವುದರಿಂದ ಮಾರುಕಟ್ಟೆ ಇಳಿದರೂ ನಿಮ್ಮ ಹಣ ಹೆಚ್ಚು ಇಳಿಯುವುದಿಲ್ಲ.'
    },

    dematAI: {
      todayVsYesterdayTitle: 'ಇವತ್ತಿನ ಷೇರು ಬೆಲೆ vs ನಿನ್ನೆಯ ಬೆಲೆ',
      varianceGainText: '🟢 ಇಂದು ನಿಮ್ಮ ಷೇರುಗಳಲ್ಲಿ ₹ 24,150 ರೂಪಾಯಿ ಲಾಭವಾಗಿದೆ (+1.65% ಹೆಚ್ಚಳ)',
      todayValuation: 'ಇವತ್ತಿನ ಒಟ್ಟು ಮೌಲ್ಯ: ₹ 14,82,600',
      yesterdayValuation: 'ನಿನ್ನೆಯ ಮೌಲ್ಯ: ₹ 14,58,450',
      clickStockPrompt: 'ಕಂಪನಿಯ ಷೇರು ಬೆಲೆ ಏಕೆ ಬದಲಾಯಿತು ಎಂದು ಧ್ವನಿಯಲ್ಲಿ ಕೇಳಲು ಕೆಳಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ:',
      stocks: {
        'RELIANCE': {
          plainTrend: 'ರಿಲಯನ್ಸ್ ಷೇರು: ಇಂದು +2.4% ಹೆಚ್ಚಳ',
          voiceSummary: 'ರಿಲಯನ್ಸ್ ಷೇರು ಇಂದು ಏರಿಕೆಯಾಗಿದೆ ಏಕೆಂದರೆ ಕಂಪನಿಯು ಹೊಸ ಹಸಿರು ಇಂಧನ ಯೋಜನೆಗಳನ್ನು ಮತ್ತು ಸೂಪರ್ ಮಾರ್ಕೆಟ್‌ಗಳಲ್ಲಿ ಭಾರಿ ಲಾಭವನ್ನು ಪ್ರಕಟಿಸಿದೆ.',
          simpleAdvice: 'ಪೆಟ್ರೋಲ್, ಜಿಯೋ ಮೊಬೈಲ್ ಮತ್ತು ರಿಟೇಲ್ ಅಂಗಡಿಗಳಿರುವ ಭಾರತದ ಅತಿ ದೊಡ್ಡ ಕಂಪನಿ.'
        },
        'TCS': {
          plainTrend: 'ಟಾಟಾ ಕನ್ಸಲ್ಟೆನ್ಸಿ (TCS): ಸ್ಥಿರ (+0.8%)',
          voiceSummary: 'ಟಿಸಿಎಸ್ ಷೇರು ಇಂದು ಸ್ಥಿರವಾಗಿದೆ. ಟಾಟಾ ಕಂಪನಿಗೆ ಬ್ರಿಟನ್ ಬ್ಯಾಂಕ್‌ಗಳಿಂದ ದೊಡ್ಡ ಸಾಫ್ಟ್‌ವೇರ್ ಕೆಲಸಗಳು ದೊರೆತಿವೆ.',
          simpleAdvice: 'ಪ್ರತಿ ವರ್ಷ ಖಚಿತ ಡಿವಿಡೆಂಡ್ ನೀಡುವ ಟಾಟಾ ಸಮೂಹದ ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಟೆಕ್ ಕಂಪನಿ.'
        },
        'HDFCBANK': {
          plainTrend: 'ಹೆಚ್‌ಡಿಎಫ್‌ಸಿ ಬ್ಯಾಂಕ್: ಇಂದು +1.9% ಹೆಚ್ಚಳ',
          voiceSummary: 'ಹೆಚ್‌ಡಿಎಫ್‌ಸಿ ಬ್ಯಾಂಕ್ ಷೇರು ಇಂದು ಮೇಲಕ್ಕೆ ಹೋಗಿದೆ ಏಕೆಂದರೆ ಲಕ್ಷಾಂತರ ಜನರು ಹೊಸ ಠೇವಣಿಗಳನ್ನು ಇಟ್ಟು ಮನೆ ಸಾಲ ಪಡೆದಿದ್ದಾರೆ.',
          simpleAdvice: 'ಭಾರತದ ಅತಿ ದೊಡ್ಡ ಮತ್ತು ಸುರಕ್ಷಿತ ಖಾಸಗಿ ಬ್ಯಾಂಕ್.'
        },
        'INFY': {
          plainTrend: 'ಇನ್ಫೋಸಿಸ್: ಇಂದು +1.2% ಹೆಚ್ಚಳ',
          voiceSummary: 'ಇನ್ಫೋಸಿಸ್ ಷೇರು ಏರಿಕೆಯಾಗಿದೆ ಏಕೆಂದರೆ ವಿದೇಶಿ ಕಂಪನಿಗಳು ಹೊಸ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಸಾಫ್ಟ್‌ವೇರ್ ಒಪ್ಪಂದಗಳನ್ನು ಮಾಡಿಕೊಂಡಿವೆ.',
          simpleAdvice: 'ಜಗತ್ತಿನಾದ್ಯಂತ ಭಾರತದ ಹೆಗ್ಗಳಿಕೆ ತಂದಿರುವ ಮುಂಚೂಣಿ ಸಾಫ್ಟ್‌ವೇರ್ ರಫ್ತು ಕಂಪನಿ.'
        }
      }
    },

    // Footer
    footerGovt: 'ನಾಗರಿಕರ ಆರ್ಥಿಕ ಸುರಕ್ಷತೆಗಾಗಿ ಭಾರತೀಯ ರಿಸರ್ವ್ ಬ್ಯಾಂಕ್ (RBI) ಮತ್ತು SEBI ಯಿಂದ ಅನುಮೋದಿತವಾಗಿದೆ.',
    footerPrivacy: 'ಯಾವುದೇ ಪಾಸ್‌ವರ್ಡ್ ಉಳಿಸುವುದಿಲ್ಲ • 256-ಬಿಟ್ ರಕ್ಷಣೆ • ಯಾವಾಗ ಬೇಕಾದರೂ ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸಿ',
    footerCopyright: '© 2026 ಫಿನ್‌ಸೆಂಟ್ರಲ್ ಸರಳ ಆರ್ಥಿಕ ವೇದಿಕೆ'
  }
};
