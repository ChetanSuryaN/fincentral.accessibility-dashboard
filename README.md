# FinCentral - Scalable Financial Account Aggregator Dashboard

**FinCentral** is a modern, modular, financial-grade account aggregator web application built with React, Tailwind CSS, and Lucide icons. It implements a dynamic global **breadcrumb navigation path** (`Home > [Account Type] > [Create / Login] > Portfolio View`) with single-click instant routing across nested financial onboarding workflows.

---

## 🌟 Key Features

1. **Global Breadcrumb Navigation**:
   - Dynamic top bar reflecting hierarchical depth.
   - Interactive clickable breadcrumb links for immediate rollback to any parent view.
   - Active state indicators and accessibility support.

2. **Modular Architecture & Centralized Registry**:
   - `src/data/accountsConfig.js`: Plug-and-play configuration for account types.
   - 3 Pre-configured account types:
     - **Mutual Funds Account** (NAV tracking, SIP monitoring, CAS statements, C-KYC integration)
     - **Demat Account** (CDSL/NSDL depository sync, multi-broker aggregation, T-PIN auth)
     - **Savings Account** (RBI Account Aggregator framework, scheduled bank balances, consent tokens)

3. **Multi-Stage User Flows**:
   - **Landing / Main Dashboard**: Financial-grade statistics, account category cards, compliance badges.
   - **Account Selection Gateway**: Intermediary choice screen with **"Create Account"** and **"Login to Account"** options.
   - **Authentication & Validation Forms**: Dynamic forms with field masks, password toggles, consent checkboxes, and simulated bank handshakes.
   - **Aggregated Portfolio View**: Real-time mock financial asset breakdown, linked institutions, and CAS statement download.

4. **Zero-Dependency Instant Execution**:
   - Open `index.html` directly in any modern browser (Chrome, Edge, Safari, Firefox).
   - Also fully structured for standard Vite / React / npm environments.

---

## 📁 Project Structure

```
fincentral/
├── index.html                 # Production turnkey application (open directly in browser)
├── package.json               # Package setup for npm/vite development
├── README.md                  # Documentation and architecture guide
└── src/
    ├── App.jsx                # Main application component & lightweight state router
    ├── data/
    │   └── accountsConfig.js  # Scalable account types & form fields registry
    └── components/
        ├── Navbar.jsx         # Global top header & system indicators
        ├── Breadcrumbs.jsx    # Global breadcrumb navigation bar
        ├── AccountCard.jsx    # Interactive category card for dashboard grid
        ├── DashboardHome.jsx  # Main landing dashboard
        ├── AccountActionView.jsx # Dual choice ("Create Account" / "Login")
        ├── AuthFormView.jsx   # Form validation & submission interface
        ├── AggregatedSummary.jsx # Post-authentication consolidated portfolio view
        └── Footer.jsx         # Compliance & regulatory disclosures
```

---



## 🔌 How to Add New Account Types (Scalability)

To add another account type (such as **Fixed Deposits**, **NPS & Retirement**, or **Insurance**), simply append a new object in [`accountsConfig.js`](file:///C:/Users/Chetan%20Surya%20N/.gemini/antigravity/scratch/fincentral/src/data/accountsConfig.js). The dashboard, cards, breadcrumb trails, and forms will adapt automatically!
