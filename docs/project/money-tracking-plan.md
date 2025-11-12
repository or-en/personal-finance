# Personal Money Tracking Plan

## Vision
Build the best personal financial app in the world - enterprise-grade, comprehensive tracking of all money, assets, and liabilities with complete financial clarity.

## Goal
Track personal finances with a centralized view of all accounts, categorized and standardized to USD.

## Current Situation

### What We're Tracking
- **Starting with**: Personal money only (not Pinesman LLC)
- **Main challenge**: Tracking where money is going

### Accounts Overview

**Discount Bank (Israel)**
- 2 ILS accounts
- Max credit card (external, connected to one account)

**TBC Bank (Georgia)**
- 3 accounts: GEL, ILS, USD
- 1 debit card with 4 currencies (USD, GEL, EUR, GBP)
- Actively using: USD and GEL only

### Key Decisions Made
- **Base currency**: USD (all amounts will be standardized to USD)
- **Data source**: Manual downloads (CSV/Excel) from banks and cards
- **Starting point**: Fresh start - no existing tracking system

## What We Need
1. Centralized view of all transactions
2. Transaction categorization
3. Multi-currency support (USD, GEL, ILS)
4. Clear visibility of where money is going

## Solution Approach
- **Tool**: Next.js app (to be built)
- **Data input**: Manual CSV/Excel downloads initially
- **Accounting Model**: Simplified dual-tracking (NOT full double-entry accounting)

## Financial Tracking Model

### Philosophy: 90% Benefit, 20% Complexity

We're using a **simplified hybrid model** that gives enterprise-grade insights without accounting complexity.

**DECISION: Using Simplified Hybrid (NOT Full Double-Entry)**

**Track TWO dimensions:**
1. **Cash Flow**: Actual money moving in and out of accounts
2. **Net Worth**: What you own minus what you owe

**Track TWO types of transactions:**
1. **Transfers** (between your accounts): Track both source and destination, no expense category, NO net worth impact
2. **Income/Expenses** (money entering/leaving your system): Track one side + category, net worth changes

### Why This Will Work:

**It handles your reality:**
- ✅ Currency conversions (USD↔GEL↔ILS)
- ✅ Transfers between TBC accounts
- ✅ Transfers to/from Discount Bank
- ✅ ATM withdrawals
- ✅ Credit card payments
- ✅ Multi-currency tracking with USD as base

**Built-in safety checks:**
- Account balances must match bank statements
- Net worth changes should make logical sense
- Transfer amounts must balance (even if not mathematically enforced)
- Regular reconciliation with actual bank balances

**Escape hatch:**
- Can migrate to full double-entry later if needed
- Will know within 6 months if simplified version is insufficient
- Historical data can be converted (with effort)

### Transaction Types Explained

**TYPE 1: TRANSFERS (No Net Worth Impact)**

*Currency Conversion:*
```
From: USD Account -$500
To: GEL Account +1,340 GEL (≈$500 USD)
Type: Transfer
Net Worth: $0 (money just moved)
```

*Between Accounts:*
```
From: TBC GEL -1000
To: TBC USD +$372
Type: Transfer  
Net Worth: $0
```

*ATM Withdrawal:*
```
From: USD Account -$250
To: Cash (wallet)
Type: Transfer
Net Worth: $0
```

**TYPE 2: INCOME/EXPENSES (Net Worth Changes)**

*Income:*
```
Account: ILS Account +3000 ILS (≈$933)
Category: Business/Freelance Income
Type: Income
Net Worth: +$933
```

*Expense:*
```
Account: GEL Account -30
Category: Personal/Food Delivery
Type: Expense
Net Worth: -$30 (≈$11 USD)
```

### How Loans Are Tracked

**When you take a loan:**
- Loan account created with balance = loan amount
- Cash increases in your bank account
- Net worth: NO CHANGE (you got money but owe it)

**When you make a payment (e.g., $500 = $450 principal + $50 interest):**
- **Cash Flow**: -$500 (actual money out)
- **Loan Balance**: -$450 (principal reduces what you owe)
- **Expenses**: +$50 (interest only - your real cost)
- **Net Worth**: -$50 (only interest reduces wealth)

**What you'll track for each loan:**
- Loan name/type
- Original amount
- Current balance
- Interest rate
- Monthly payment amount
- Payment split: Principal vs Interest
- Payoff date

### How Assets Are Tracked

**Bank Accounts:**
- Current balance (liquid assets)
- Already tracking via statements

**Investments (future):**
- Purchase price (cost basis)
- Current market value
- Unrealized gain/loss = current value - cost basis

**Real Estate (future):**
- Purchase price
- Current market value
- Associated mortgage (liability)
- Net equity = value - mortgage

### Account Types

1. **Checking**: Bank checking accounts (daily transactions)
2. **Savings**: Bank savings accounts
3. **Credit Card**: Credit card accounts (negative balance = what you owe)
4. **Cash**: Physical cash in your wallet (tracked via ATM withdrawals)
5. **Loan**: Loan accounts (track balance owed)
6. **Investment**: Stock portfolios, retirement accounts (future)

**Cash vs Checking:**
- **Checking** = money in your bank account (digital)
- **Cash** = physical money in your wallet
- When you withdraw from ATM: Transfer from Checking → Cash

### Net Worth Calculation

**Simple formula:**
```
Net Worth = (Cash Accounts + Assets) - (Credit Cards + Loans)
```

### Why NOT Full Double-Entry?

**Pros of our approach:**
- Much simpler to build and maintain
- Easier to understand and use
- 90% of the benefit
- Can upgrade to full double-entry later if needed

**What we give up:**
- Perfect accounting audit trail
- Every transaction touching exactly two accounts
- Running a full general ledger

**Decision:** Start simple, get it working, use it consistently. Upgrade later if needed.

## Expense Categories

### Two-Dimensional Tagging System

**Every transaction gets TWO tags:**
1. **Business or Personal** (parent category)
2. **Category** (what type of expense)

This means the same category can be used for both Business and Personal expenses.

### Universal Categories (applicable to both Business & Personal):

**Daily Needs:**
- Food Delivery (Wolt)
- Groceries (Nikora, Agrohub - includes household items)
- Restaurants & Cafes

**Living:**
- Rent/Housing
- Utilities (internet, electricity, etc.)
- Furniture
- Appliances (vacuum cleaner, refrigerator, washing machine, microwave, etc.)

**Technology:**
- Electronics (computers, monitors, keyboards, headphones, phones, tablets, cameras, etc.)
- Software/Subscriptions (Cursor, ChatGPT, Netflix, Spotify, etc.)

**Transport:**
- Transportation (taxis, ride-sharing)
- Travel (flights, hotels, duty free)

**Work & Learning:**
- Professional Services (accountant, lawyer, etc.)
- Books & Education

**Personal Care:**
- Health/Beauty (salons, pharmacy, doctors)
- Clothing & Shoes

**Other:**
- Shopping (general purchases)
- Entertainment (parks, events, etc.)
- Gifts
- Donations/Charity

**Financial:**
- Bank Fees
- Taxes

### How It Works:
- **Cursor subscription** = Business + Software/Subscriptions
- **Netflix subscription** = Personal + Software/Subscriptions
- **Work laptop** = Business + Electronics
- **Personal headphones** = Personal + Electronics
- **Work desk** = Business + Furniture
- **Dining table** = Personal + Furniture
- **Georgian Airways for work** = Business + Travel
- **Georgian Airways for vacation** = Personal + Travel

## Expense Categories

### Two-Dimensional Tagging System

**Every transaction gets TWO tags:**
1. **Business or Personal** (parent category)
2. **Category** (what type of expense)

This means the same category can be used for both Business and Personal expenses.

### Universal Categories (applicable to both Business & Personal):

**Daily Needs:**
- Food Delivery (Wolt)
- Groceries (Nikora, Agrohub - includes household items)
- Restaurants & Cafes

**Living:**
- Rent/Housing
- Utilities (internet, electricity, etc.)
- Furniture
- Appliances (vacuum cleaner, refrigerator, washing machine, microwave, etc.)

**Technology:**
- Electronics (computers, monitors, keyboards, headphones, phones, tablets, cameras, etc.)
- Software/Subscriptions (Cursor, ChatGPT, Netflix, Spotify, etc.)

**Transport:**
- Transportation (taxis, ride-sharing)
- Travel (flights, hotels, duty free)

**Work & Learning:**
- Professional Services (accountant, lawyer, etc.)
- Books & Education

**Personal Care:**
- Health/Beauty (salons, pharmacy, doctors)
- Clothing & Shoes

**Other:**
- Shopping (general purchases)
- Entertainment (parks, events, etc.)
- Gifts
- Donations/Charity

**Financial:**
- Bank Fees
- Taxes

**Special Categories:**
- Income (for all income sources)
- Transfers (for money moving between your own accounts)
- Uncategorized (default until categorized)

### How It Works:
- **Cursor subscription** = Business + Software/Subscriptions
- **Netflix subscription** = Personal + Software/Subscriptions
- **Work laptop** = Business + Electronics
- **Personal headphones** = Personal + Electronics
- **Work desk** = Business + Furniture
- **Dining table** = Personal + Furniture
- **Georgian Airways for work** = Business + Travel
- **Georgian Airways for vacation** = Personal + Travel

## Categorization Approach
**Hybrid method:**
- Create rules for each counterparty (e.g., "Wolt = Personal + Food Delivery")
- Once a transaction is categorized, future transactions from the same counterparty auto-categorize
- Manual override available for exceptions (e.g., if you buy something for work at a personal store)

**User can:**
- Add custom categories
- Deactivate unused categories
- Change default categorizations

## Key Financial Questions (Prioritized)

### CRITICAL (Must Track Immediately):
1. How much money do I actually have right now? (across all accounts)
2. What's my net cash flow this month? (income minus expenses)
3. How much am I spending per month total?
4. What are my total business expenses? (for tax deductions)
5. What's my Business vs Personal spending ratio?

### IMPORTANT (Track Monthly):
6. What are my top 5 expense categories?
7. How much income did I earn this month?
8. Am I consistently bringing in more than I spend?
9. What's my "burn rate"? (how long can I survive without income)
10. How much am I spending on recurring subscriptions?

### USEFUL (Review Quarterly):
11. Is my spending trending up or down?
12. What months are typically more expensive?
13. Which single merchant do I spend the most with?
14. How much can I realistically save each month?
15. What percentage of total spending is business vs personal?

### OPTIMIZATION (Once basics are solid):
16. Are there any unusual/one-time large expenses this month?
17. Do I have any spending patterns (like more restaurants on weekends)?
18. Am I spending a reasonable amount on business tools/subscriptions?
19. How much am I spending on food (delivery + restaurants + groceries) combined?
20. How much am I spending on transportation?
21. Am I spending too much on any single category?
22. What's my biggest "optional" expense category?
23. If I set a budget of X per month, am I staying within it?
24. What expenses can I cut if I need to save more?
25. What business expenses can I deduct for taxes?
26. How much tax did I pay this year?
27. Am I categorizing expenses correctly for tax purposes?
28. What's my income split between Business and Personal sources?
29. What are my fixed vs variable expenses?

## Assets & Liabilities (Future Scope)

**Current Situation:**
- No real estate, stocks, or savings currently
- Has loans (need to track)

**What We Need to Track:**
- **Liabilities**: Loans (amount owed, interest rate, monthly payment, payoff timeline)
- **Future Assets**: Real estate, stocks/investments, savings accounts, retirement accounts

**Key Questions for Net Worth:**
1. What's my total net worth? (assets minus liabilities)
2. How much do I owe in loans total?
3. What are my monthly loan payments?
4. How is my net worth trending over time?
5. When will I pay off each loan?

*Note: Will expand this section as assets are acquired*

## Future Development
- Automate statement downloads from banks and cards (to be explored later)
- AI-powered automatic column mapping: Have AI analyze sample statements and automatically detect file structure, column mappings, and generate statement_config JSON (would eliminate manual configuration)

### Potential Migration to Full Double-Entry Accounting

**When to consider:**
- After 6-12 months of consistent use with simplified model
- When tracking becomes more complex (multiple businesses, investment portfolios)
- If you need formal accounting reports for tax/legal purposes
- When net worth tracking needs more precision

**What migration would involve:**
- Refactoring data model to support account-to-account transactions
- Every transaction touches exactly two accounts
- Adding general ledger capability
- Migrating historical transaction data
- Creating chart of accounts

**Benefits of waiting:**
- You'll understand your actual needs better
- The simplified system will reveal what's missing
- You won't over-engineer before knowing if you need it
- Migration is possible but requires careful planning

**Decision point:** Use the simplified system consistently for 6 months, then reassess if double-entry is needed.

## Next Steps
- Design database schema for transactions, accounts, loans, and merchants
- Build merchant categorization system (auto-categorize future transactions)
- Define loan data structure and payment splitting logic
- (To be filled in as we continue)

## Database Schema

### 1. CATEGORIES
```
id: UUID (primary key)
name: string ("Food Delivery", "Transportation", etc.)
parent_category_id: UUID (nullable, foreign key → Categories - for subcategories)
color: string (hex color for UI - e.g., "#FF5733")
icon: string (icon identifier for UI - e.g., "food-icon")
is_active: boolean (user can deactivate unused categories)
created_at: timestamp
updated_at: timestamp
```

**Initial Categories** (system provides these by default, user can add more):
- Food Delivery, Groceries, Restaurants & Cafes
- Rent/Housing, Utilities, Furniture, Appliances
- Electronics, Software/Subscriptions
- Transportation, Travel
- Professional Services, Books & Education
- Health/Beauty, Clothing & Shoes
- Shopping, Entertainment, Gifts, Donations/Charity
- Bank Fees, Taxes
- Income (special category)
- Transfers (special category)
- Uncategorized (default)

### 2. EXCHANGE_RATES
```
id: UUID (primary key)
from_currency: string ("GEL", "ILS", "CAD")
to_currency: string ("USD" - always USD as base)
rate: decimal (e.g., 2.6952 for GEL→USD)
rate_date: date (EXACT date this rate applies to)
source: string ("openexchangerates" | "manual")
source_url: string (nullable - API endpoint used)
created_at: timestamp
```

**Purpose:** Cache exchange rates for multi-currency transaction processing.

**Fetch-on-Demand Logic:**
When processing transaction with non-USD amount on date X:
1. Check in-memory cache (during import session only)
2. If not in cache → Check database for exact date + currency pair
3. If not in database → Fetch from openexchangerates.org API
4. Save to database + add to in-memory cache
5. Use for all subsequent transactions in same import with same date + currency

**API:** openexchangerates.org (or similar service)

### 3. FINANCIAL_INSTITUTIONS
```
id: UUID (primary key)
name: string ("TBC Bank", "Discount Bank", "Max Credit Card")
country: string ("GE", "IL")
institution_type: enum ("bank" | "credit_card")

# Manual configuration (you and Claude figure out structure together)
statement_config: JSON {
  "file_type": "csv" | "xlsx",
  "sheet_name": string (for Excel with multiple sheets - e.g., "Regular", "Foreign Currency"),
  "header_row": integer (1 for CSV, 8 for Discount, 4 for Max),
  "encoding": "utf-8" | "windows-1255",
  "date_format": "DD/MM/YYYY" | "MM/DD/YYYY",
  
  # Stop parsing when date column is empty or not a valid date
  "stop_parsing_rule": "date_invalid",
  
  # Column mappings - MUST map ALL transaction fields
  # Structure supports both single-sheet (CSV) and multi-sheet (Excel) files
  "column_mappings": {
    "main": {  // For CSV or first/main tab in Excel
      "external_transaction_id": "ტრანზაქციის ID",  // → transactions.external_transaction_id
      "transaction_date": "თარიღი",                  // → transactions.transaction_date (when recorded)
      "purchase_date": null,                         // → transactions.purchase_date (when purchased, credit cards only)
      "description": "დანიშნულება",                 // → transactions.raw_description
      "amount": "თანხა",                             // → transactions.amount (negative=out, positive=in)
      "balance": "ნაშთი",                            // → transactions.balance_after (nullable)
      "currency": "GEL" or column_name,              // → transactions.currency (static value or column name)
      "counterparty_name": null or "Partner's Name", // → counterparties (if exists as separate column)
      "transaction_type": "Type" or null,            // → Explicit type column (if exists)
      "charge_type": null                            // → Credit cards: "monthly_payment" vs "immediate_charge"
    },
    "tab_2": {  // Optional - only for multi-tab Excel (e.g., Max Credit Card)
      "external_transaction_id": "עסקה מזהה",
      "transaction_date": "תאריך חיוב",
      "purchase_date": "תאריך רכישה",
      "description": "תיאור",
      "amount": "סכום",
      "currency": "ILS",
      "charge_type": "סוג עסקה"  // "חיוב חודשי" or "חיוב עסקות מיידי"
    }
  },
  
  # Type detection rules (for institutions without explicit type column)
  "type_detection_rules": {
    "income_patterns": [
      "זיכוי - העברה",       // Hebrew: credit - transfer
      "זיכוי",               // Hebrew: credit
      "ჩარიცხვა"             // Georgian: incoming
    ],
    "own_account_transfer_patterns": [
      "^Transfer between your accounts$",
      "^კონვერტაცია$",       // Georgian: Currency Exchange
      "^P/E oren menashe$",
      "^ორენ მენაშე$"        // Georgian: Your name
    ]
  },
  
  # Credit card payment detection (to avoid double-counting)
  "credit_card_payment_patterns": {
    "payment_received": [
      "Payment received",
      "תשלום התקבל",        // Hebrew: Payment received
      "გადახდა მიღებულია"   // Georgian: Payment received
    ],
    "payment_to_card": [
      "Payment to.*credit card",
      "העברה לכרטיס אשראי",
      "გადახდა საკრედიტო ბარათზე"
    ]
  },
  
  # Note: Learned transfers in COUNTERPARTIES take precedence over pattern matching
  # Check COUNTERPARTIES table first for exact description match before using these patterns
  
  # Special handling for institutions with multiple tabs (like Max)
  # Only used for Excel files with multiple sheets
  # If this config exists, system parses both sheets
  # If not, system only parses "main"
  "multi_tab_config": null or {
    "has_multiple_tabs": true,
    "tab_info": {
      "main": "Regular transactions (charged on payment date)",
      "tab_2": "Foreign currency transactions (charged immediately)"
    }
  }
}

last_mapped_date: timestamp (when config was created/updated)
created_at: timestamp
updated_at: timestamp

# Indexes
index on: name (for lookup)
```

### Setup Process: Manual Column Mapping

**Initial Setup Flow:**
```
1. User and Claude analyze sample statement together
2. Identify:
   - File type (CSV/Excel)
   - Sheet name (if Excel with multiple tabs)
   - Header row number
   - File encoding
   - Date format
   - Which column maps to which transaction field
   - Stop parsing rule: when date column is empty or invalid
3. Create statement_config JSON manually
4. Save to financial_institutions table
```

**For institutions with multiple tabs (like Max):**
- Configure each tab separately in multi_tab_config
- Specify transaction_type for each tab (deferred vs immediate)
- Each tab can have different column mappings

**Note:** Transactions end when the date column is empty or contains a non-date value (like "Total", "סה״כ", etc.)

### 4. ACCOUNTS
```
id: UUID (primary key)
financial_institution_id: UUID (foreign key → Financial_Institutions)
name: string ("TBC GEL Checking")
type: enum (checking, savings, credit_card, loan, investment)
currency: string ("GEL", "USD", "ILS")
account_number: string (full number, encrypted at rest)
account_number_last4: string (for display only)
payment_source_account_id: UUID (nullable, foreign key → Accounts - for credit cards: the checking account that pays this card)
is_active: boolean
current_balance: decimal (from latest transaction's balance_after field)
reconciliation_status: enum ("balanced" | "needs_review")
last_reconciliation_date: date
balance_discrepancy: decimal (nullable - difference between statement and calculated balance)
created_at: timestamp
updated_at: timestamp
```

### 3. COUNTERPARTIES
```
id: UUID (primary key)
clean_name: string ("Wolt" OR "My Discount ILS Account" OR "John Doe")
entity_type: enum ("merchant" | "own_account" | "external_account")
match_variations: JSONB ({
  "uuid-of-tbc-bank": ["WOLT GEORGIA LTD", "WOLT*", "Wolt Georgia"],
  "uuid-of-discount-bank": ["WOLT ישראל", "WOLT IL", "העברה למנשה אורן"],
  "uuid-of-max-credit": ["וולט", "WOLT"]
})

# For merchants and external accounts:
default_category: string (nullable - "Food Delivery")
default_business_personal: enum (nullable - "Personal" | "Business")

# For transfers to own accounts:
linked_account_id: UUID (nullable, foreign key → Accounts - which account this transfers to/from)
transfer_type: enum (nullable - "inter_bank" | "internal" | "atm_withdrawal")

created_at: timestamp
updated_at: timestamp
```

**Purpose:** Unified system for ANY transaction counterparty - merchants, your own accounts, or external people/accounts.

**Note on match_variations:**
- JSON object with financial institution UUIDs as keys
- Each key contains array of raw name/description variations
- Same matching logic for merchants AND transfers
- Exact match on raw name/description = auto-match, no AI needed
- No match = trigger AI for fuzzy matching

**Entity Types:**
- **merchant:** Businesses you buy from (Wolt, Nikora, etc.)
- **own_account:** Your own bank accounts for transfers between accounts
- **external_account:** Other people or external accounts you transfer to

### 6. TRANSACTIONS
```
id: UUID (primary key)
external_transaction_id: string (nullable - from bank statement, for deduplication)
description_hash: string (nullable - MD5 hash of raw_description, used for deduplication when external_transaction_id missing)
transaction_date: date (when transaction was recorded in statement - main date)
purchase_date: date (nullable - when purchase was actually made, credit cards only)
account_id: UUID (foreign key → Accounts)
type: enum ("expense" | "income" | "transfer")

# Amount fields
amount: decimal (-38.09 - negative for outgoing, positive for incoming)
currency: string ("GEL")
balance_after: decimal (nullable - account balance after this transaction, from statement)
amount_usd: decimal (-14.23 - converted at transaction date rate)
exchange_rate_used: decimal (nullable - rate used for conversion, from EXCHANGE_RATES table)

# For expenses/income
counterparty_id: UUID (nullable, foreign key → Counterparties)
category_id: UUID (nullable, foreign key → Categories)
business_personal: enum (nullable - "Personal" | "Business")

# For transfers
transfer_type: enum (nullable - "inter_bank" | "internal" | "atm_withdrawal" | "credit_card_payment" | "currency_conversion")
transfer_to_account_id: UUID (nullable, foreign key → Accounts - destination account)
transfer_from_amount: decimal (nullable - original currency amount if different)
transfer_from_currency: string (nullable)
is_transfer_fee: boolean (default false - true if this transaction is a fee for another transfer)
related_transfer_id: UUID (nullable, self-reference - if is_transfer_fee=true, links to the main transfer transaction this fee is for)

# Inter-bank transfer matching (manual)
needs_transfer_matching: boolean (default false - flags inter-bank transfers awaiting manual link to matching transaction)
matched_transfer_transaction_id: UUID (nullable, foreign key → Transactions - links to the other side of the same transfer once manually matched)

# Credit card specific
charge_type: enum (nullable - "monthly_payment" | "immediate_charge" - from credit card statement)
monthly_payment_transaction_id: UUID (nullable, foreign key → Transactions - links credit card transactions to their monthly payment transaction)
needs_credit_card_reconciliation: boolean (default false - flags when payment exists but transactions missing or sum mismatch)

# Metadata
raw_description: text (full original from bank statement)
raw_row_data: JSONB (complete original row as-is from statement file, for debugging/auditing)
notes: text (user's manual notes)
is_reconciled: boolean (matched with bank statement)
import_batch_id: UUID (which import session created this)
created_at: timestamp
updated_at: timestamp

# Indexes
index on: external_transaction_id (for deduplication)
index on: description_hash (for fallback deduplication)
index on: transaction_date, account_id (for queries)
index on: counterparty_id (for categorization and reporting)
index on: charge_type, transaction_date (for credit card reconciliation)
index on: monthly_payment_transaction_id (for linking card transactions to payments)

# Composite unique constraint for deduplication when external_transaction_id is NULL
unique index on: (account_id, transaction_date, amount, description_hash) WHERE external_transaction_id IS NULL
```

**Credit Card Reconciliation Logic:**

**IMPORTANT: Reconciliation runs AFTER all transactions in batch are imported, not during import.**

**How Credit Card Payments Are Linked:**

The system uses three connection points:
1. **ACCOUNTS.payment_source_account_id** - Credit card account links to its checking account (e.g., Max → Discount Checking)
2. **TRANSACTIONS.transfer_to_account_id** - Payment transaction points to credit card being paid
3. **TRANSACTIONS.monthly_payment_transaction_id** - Card transactions link back to their payment transaction

**Example:**
- Max Credit Card account has: `payment_source_account_id = Discount Checking UUID`
- Payment in Discount: `transfer_to_account_id = Max Credit Card UUID`, `amount = -₪5,000`, `transaction_date = Oct 15`
- Card transactions in Max: `charge_type = "monthly_payment"`, `transaction_date = Oct 15`, `monthly_payment_transaction_id = [payment UUID]`

**Scenario A: Importing Credit Card Statement (e.g., Max)**

After batch import completes:
1. Identify all transactions with `charge_type = "monthly_payment"`
2. Group by `transaction_date` (all transactions with same payment date)
3. For each group (e.g., all Oct 15 transactions):
   a. Get checking account from `ACCOUNTS.payment_source_account_id` (e.g., Discount Checking)
   b. Search that checking account for payment:
      - `type = "transfer"`
      - `transfer_to_account_id` = this credit card account
      - `transaction_date` = Oct 15
   c. If payment found:
      - Link all card transactions: `monthly_payment_transaction_id = [payment UUID]`
      - Calculate sum of card transactions
      - If sum = payment amount → Reconciled ✓
      - If sum ≠ payment amount → Set `needs_credit_card_reconciliation = true` on payment + card transactions
   d. If payment NOT found:
      - Set `needs_credit_card_reconciliation = true` on card transactions

**Scenario B: Importing Checking Account Statement (e.g., Discount)**

After batch import completes:
1. Identify all credit card payment transactions:
   - `type = "transfer"`
   - `transfer_to_account_id` points to a credit card account
2. For each payment (e.g., payment on Oct 15 to Max):
   a. Get credit card account from `transfer_to_account_id`
   b. Search that credit card account for matching transactions:
      - `charge_type = "monthly_payment"`
      - `transaction_date` = Oct 15 (same as payment)
   c. If card transactions found:
      - Link them: `monthly_payment_transaction_id = [payment UUID]`
      - Calculate sum
      - If sum = payment amount → Reconciled ✓
      - If sum ≠ payment amount → Set `needs_credit_card_reconciliation = true`
   d. If card transactions NOT found:
      - Set `needs_credit_card_reconciliation = true` on payment

**Auto Re-Reconciliation:**
Every import of transactions with `charge_type = "monthly_payment"` OR credit card payment transactions triggers reconciliation check. System automatically re-runs and clears flags when missing data becomes available.

**Note:** Immediate charge transactions (`charge_type = "immediate_charge"`) are excluded from reconciliation as they're charged when purchased, not included in monthly payment.

### 7. LOANS
```
id: UUID (primary key)
name: string ("Personal Loan", "Mortgage")
account_id: UUID (foreign key → Accounts - the loan account)
original_amount: decimal
current_balance: decimal
currency: string

# Interest
interest_type: enum ("fixed" | "variable")
base_rate: string (nullable - "Prime", "CPI", "Fixed")
spread: decimal (nullable - 1.0 for "Prime + 1%")
current_interest_rate: decimal (6.0 - the actual rate being charged)
last_rate_update: date

# Payment terms
monthly_payment: decimal
start_date: date
payoff_date: date
payment_day: integer (day of month - 1-31)

created_at: timestamp
updated_at: timestamp
```

**Example: Loan with Prime + Spread**
```
Scenario: Loan with "Prime + 1%" interest, Prime is currently 5%

Saved in database:
{
  name: "Personal Loan",
  original_amount: 10000.00,
  current_balance: 8500.00,
  currency: "USD",
  interest_type: "variable",
  base_rate: "Prime",
  spread: 1.0,
  current_interest_rate: 6.0,  // 5% (Prime) + 1% (spread)
  last_rate_update: "2025-01-15"
}

When Prime rate changes to 5.5%:
→ Update current_interest_rate to 6.5% (5.5% + 1%)
→ Update last_rate_update to date of change
→ Future payment calculations use new rate
```

### 8. LOAN_PAYMENTS
```
id: UUID (primary key)
loan_id: UUID (foreign key → Loans)
transaction_id: UUID (foreign key → Transactions - the actual payment transaction)
payment_date: date
total_amount: decimal (500.00)
principal: decimal (450.00 - reduces loan balance)
interest: decimal (50.00 - this goes to expenses)
principal_interest_split_method: enum ("bank_statement" | "calculated" | "manual")
requires_user_confirmation: boolean (true if split was calculated, needs review)
remaining_balance: decimal (after this payment)
created_at: timestamp
```

### 9. IMPORT_BATCHES
```
id: UUID (primary key)
filename: string (original filename - "tbc_statement_oct_2024.csv")
file_url: string (blob storage URL - "https://storage.app.com/statements/uuid.csv")
file_size_bytes: integer
account_id: UUID (foreign key → Accounts)
import_date: timestamp
row_count: integer (total rows in file)
transactions_created: integer (new transactions inserted)
transactions_updated: integer (existing transactions updated)
transactions_skipped: integer (duplicates with no changes)
status: enum ("uploading" | "processing" | "reconciling" | "completed" | "failed")
reconciliation_checks_run: boolean (false until post-import reconciliation completed)
reconciliation_issues_found: integer (count of transactions flagged for review)
error_log: text (nullable - detailed error messages if failed)
processing_time_ms: integer (how long import took)
```

**File Storage Flow:**
1. User uploads file → Upload to blob storage (S3/Azure/Cloudflare R2)
2. Get blob URL
3. Save import_batch record with file_url
4. Process file from blob storage
5. After all transactions imported → Run reconciliation checks
6. Keep file permanently for audit/reconciliation

### 7. CATEGORIZATION_RULES

**Purpose:** Learn from user's categorization decisions and auto-apply after confidence is established.

**The "3 Times Rule":**
1. **First time:** User categorizes Wolt transaction as "Personal + Food Delivery"
   - Create rule: merchant_id=Wolt, category="Food Delivery", business_personal="Personal", confidence_count=1
2. **Second time:** User sees another Wolt transaction, confirms same category
   - Update rule: confidence_count=2
3. **Third time:** User confirms again
   - Update rule: confidence_count=3, auto_categorize=true
4. **Fourth time onwards:** System auto-applies category, no user confirmation needed
   - User can still override if wrong

**Override behavior:**
- If user changes category after auto-categorize=true
- Reset confidence_count=1 with new category
- Requires 3 more confirmations for new category to auto-apply

### 7. CATEGORIZATION_RULES
```
id: UUID (primary key)
merchant_id: UUID (foreign key → Merchants)
category: string
business_personal: enum ("Personal" | "Business")
confidence_count: integer (how many times user confirmed - auto-apply after 3)
last_applied: timestamp
created_by_user: boolean (true if manual rule, false if learned)
```

### 8. LEARNED_TRANSFERS
```
id: UUID (primary key)
financial_institution_id: UUID (foreign key → Financial_Institutions)
raw_description: string ("העברה למנשה אורן" - exact text from statement)
transfer_type: enum ("inter_bank" | "internal" | "atm_withdrawal")
linked_account_id: UUID (nullable, foreign key → Accounts - the other account in the transfer)
confirmed_by_user: boolean
times_seen: integer (how many times this pattern appeared)
last_seen: timestamp
created_at: timestamp
```

**Purpose:** Learn transfer patterns from user's manual confirmations.

**Flow:**
1. User imports transaction with description "העברה למנשה אורן"
2. System doesn't recognize it → Asks user
3. User marks: "This is a transfer to my Discount ILS account"
4. System creates LEARNED_TRANSFERS record with exact description
5. Next time same description appears → Auto-detect as transfer to same account
6. No parsing needed, exact string match

### 9. PENDING_TRANSFERS
```
id: UUID (primary key)
transaction_id: UUID (foreign key → Transactions)
transfer_direction: enum ("outgoing" | "incoming")
amount_original_currency: decimal
currency: string
amount_usd: decimal (for matching across currencies)
date: date
from_account_id: UUID (nullable - known for outgoing)
to_account_id: UUID (nullable - known for incoming)
beneficiary_name: string (nullable - extracted from description)
is_matched: boolean (false until matching transfer found)
matched_with_transaction_id: UUID (nullable - links to matching transaction)
match_confidence: decimal (0.0-1.0 - how confident the match is)
created_at: timestamp
```

**Purpose:** Track unmatched transfers between your accounts. When you import from one bank showing an outgoing transfer, and later import from another bank showing the incoming transfer, the system can match them.

**Matching Logic:**
- Date within ±3 days
- Amount matches (accounting for currency conversion with ±2% tolerance)
- Both transactions marked as transfers
- One is incoming, one is outgoing
- Beneficiary name matches (if available)

### 11. TRANSLATIONS
```
id: UUID (primary key)
original_text: string (Hebrew/Georgian/Russian text)
translated_text: string (English translation)
source_language: string ("he" | "ka" | "ru")
context: enum ("counterparty_name" | "category" | "description")
usage_count: integer (how many times this translation was used)
created_at: timestamp
last_used_at: timestamp
```

**Translation Strategy: Minimize AI Usage Through Intelligent Caching**

**What to translate:**
1. **Counterparty names** - for clean_name field only (one-time per unique name)
2. **Transaction descriptions** - for display and search (one-time per unique description)
3. **Key patterns** - for type detection rules (one-time setup)

**What NOT to translate:**
- Raw transaction descriptions in raw_description (keep original)
- Raw row data in raw_row_data (keep as-is)
- Data in match_variations (store original text as-is)
- User notes (unless user specifically requests)

**Caching Strategy:**
```
Before translating ANY text:
1. Check TRANSLATIONS table for existing translation
   - Query: SELECT * WHERE original_text = ? AND context = ?
2. If found: 
   - Reuse cached translation (zero cost)
   - Increment usage_count
   - Update last_used_at
3. If not found:
   - Translate using AI (GPT-4o-mini: ~$0.15/1M tokens)
   - Cache in TRANSLATIONS table
   - Future occurrences use cache (free)

Result: Each unique text translated once, then cached forever
```

**Cost Analysis:**
- Counterparty name translation: ~5-10 tokens per name
- 500 unique counterparties × 10 tokens = 5,000 tokens
- Cost: ~$0.0008 (less than a penny)
- All future transactions with same names use cached translations (free)

**Implementation Note:**
The original text is ALWAYS stored in match_variations as-is. Translations are only used for clean_name display and for helping users identify counterparties in the UI.

### 11. INTEREST_RATES
```
id: UUID (primary key)
rate_name: string ("Prime", "CPI")
current_rate: decimal (5.0)
effective_date: date (EXACT date this rate applies to)
country: string ("IL", "GE", "US")
source_url: string (nullable - where rate was fetched from)
last_updated: timestamp
updated_by: enum ("manual" | "gemini_fetch")
```

**Purpose:** Track interest rates for specific dates for variable-rate loans.

**Fetch-on-Demand Logic:**
When processing a loan payment on date X:
1. Check if rate exists for EXACT date X (rate_name + country + effective_date)
2. If exists → Use it
3. If doesn't exist → Trigger Gemini fetch:
   - Ask Gemini: "What was the [rate_name] rate in [country] on [date X]?"
   - Gemini returns: rate + source_url
   - Show user approval modal with clickable source URL for verification
   - User approves or enters different rate
   - Save to INTEREST_RATES with effective_date = X
4. Update affected loan's current_interest_rate
5. Calculate and process payment

**No scheduled CRON jobs needed - rates fetched only when required for actual loan payments.**

### 9. TRANSLATIONS
```
id: UUID (primary key)
original_text: string (Hebrew/Georgian text)
translated_text: string (English translation)
source_language: string ("he" | "ka" | "ru")
context: enum ("merchant_name" | "category" | "description")
usage_count: integer (how many times this translation was used)
created_at: timestamp
last_used_at: timestamp
```

**Translation Strategy: Minimize AI Usage**

**What to translate:**
1. **Merchant names** - for clean_name field only (one-time)
2. **Transaction categories** - if user creates custom Hebrew/Georgian categories
3. **Key description patterns** - for type detection rules (one-time setup)

**What NOT to translate:**
- Raw transaction descriptions (keep original in raw_description)
- Raw row data (keep as-is in raw_row_data)
- User notes (unless user requests)

**Caching Strategy:**
```
Before translating:
1. Check TRANSLATIONS table for existing translation
2. If found: Reuse, increment usage_count
3. If not found: 
   - Translate using AI (GPT-4o-mini: ~$0.15/1M tokens)
   - Cache in TRANSLATIONS table
   - Future occurrences use cache (zero cost)

Result: Each unique text translated once, then cached forever
```

**Cost Analysis:**
- Merchant name translation: ~5-10 tokens per merchant
- 500 unique merchants × 10 tokens = 5,000 tokens
- Cost: ~$0.0008 (less than a penny)
- All future transactions use cached translations (free)

**Implementation:**
```javascript
async function getTranslation(text, context) {
  // Check cache first
  const cached = await db.translations.findOne({ original_text: text, context });
  
  if (cached) {
    // Update usage stats
    await db.translations.update(cached.id, { 
      usage_count: cached.usage_count + 1,
      last_used_at: new Date()
    });
    return cached.translated_text;
  }
  
  // Translate using AI
  const translated = await translateWithAI(text, context);
  
  // Cache for future use
  await db.translations.create({
    original_text: text,
    translated_text: translated,
    source_language: detectLanguage(text),
    context: context,
    usage_count: 1
  });
  
  return translated;
}
```

**Benefit:** Minimal AI cost, maximum efficiency through intelligent caching

## Critical Flows

### Import Flow (with Credit Card Matching & Batch Upsert)
```
1. User uploads CSV
2. Parse all transactions into memory (array of transaction objects)
3. Prepare batch data:
   a. For each transaction:
      - Check COUNTERPARTIES.match_variations for exact description/name match
      - If found: 
        * entity_type = "merchant" → Use category
        * entity_type = "own_account" → Mark as transfer, set linked_account_id
      - If not found: Extract name/description (check exact match first, use AI if needed)
      - Match to existing counterparties or flag for user review
      - Detect transaction types (using type_detection_rules for new transfers)
      - Check for credit card "payment received" patterns
   
4. **Batch Upsert to Database (Single Operation):**
   
   PostgreSQL Query:
   ```sql
   WITH upsert AS (
     INSERT INTO transactions (
       external_transaction_id, date, account_id, amount, currency, ...
     )
     VALUES 
       ($1, $2, $3, $4, $5, ...),  -- transaction 1
       ($6, $7, $8, $9, $10, ...), -- transaction 2
       ... (all transactions)
     ON CONFLICT (external_transaction_id, account_id) 
     DO UPDATE SET
       amount = EXCLUDED.amount,
       date = EXCLUDED.date,
       raw_row_data = EXCLUDED.raw_row_data,
       updated_at = NOW()
     WHERE 
       -- Only update if data actually changed
       (transactions.amount IS DISTINCT FROM EXCLUDED.amount OR
        transactions.date IS DISTINCT FROM EXCLUDED.date OR
        transactions.raw_row_data IS DISTINCT FROM EXCLUDED.raw_row_data)
     RETURNING 
       id,
       (xmax = 0) AS inserted  -- true if inserted, false if updated
   )
   SELECT 
     COUNT(*) FILTER (WHERE inserted) as created_count,
     COUNT(*) FILTER (WHERE NOT inserted) as updated_count
   FROM upsert;
   ```
   
   Result:
   - created_count: 234 (new transactions)
   - updated_count: 12 (existing transactions that changed)
   - transactions_skipped = total_rows - created_count - updated_count

5. Check for inter-bank transfer matches (PENDING_TRANSFERS table)
6. Show user summary for review/correction
7. User confirms → Update import_batch with counts
```

**Key Benefits:**
- Single database round-trip for all transactions
- Uses PostgreSQL's `ON CONFLICT` for upsert logic
- `xmax = 0` trick determines if row was inserted vs updated
- `FILTER` clause counts inserted vs updated rows
- `WHERE` clause in `DO UPDATE` prevents unnecessary updates when data hasn't changed
- Dramatically faster than processing transactions one-by-one

### AI Counterparty Extraction & Matching (Unified System)
```
For each new transaction:

1. **Check for exact match first:**
   - Search all COUNTERPARTIES.match_variations for exact match on raw name/description
   - Match against current institution's UUID key
   - IF exact match found:
     → Use that counterparty
     → If entity_type = "merchant": Auto-apply default_category and default_business_personal
     → If entity_type = "own_account": Create transfer using linked_account_id
     → Skip AI entirely ✓
   
2. **No exact match - Use AI:**
   - AI Extraction (GPT-4o-mini):
     Input: "POS - WOLT GEORGIA LTD, 38.09 GEL, Aug 5 2025 1:33PM"
     OR: "העברה למנשה אורן"
     
     Output: {
       name: "Wolt" OR "Transfer to Menashe Oren",
       suggested_type: "merchant" OR "own_account",
       confidence: 0.95
     }
   
3. **Fuzzy match against existing counterparties:**
   - Compare AI-extracted name against COUNTERPARTIES.clean_name
   - If similarity > 80%:
     → UI shows: "Is '[raw text]' the same as '[existing counterparty]'?"
     → Options:
       * [Yes - Link to existing]
       * [No - Create new]
       * [Search manually]
     
4. **User decision:**
   a. If user links to existing counterparty:
      - Add raw name/description to that counterparty's match_variations[institution_uuid]
      - Apply counterparty's default category (if merchant)
      - Apply linked_account_id (if own_account transfer)
      - Future transactions with same raw text = instant match
   
   b. If user creates new counterparty:
      - User sets:
        * entity_type (merchant/own_account/external_account)
        * If merchant: category + business/personal
        * If own_account: linked_account_id + transfer_type
      - Create new COUNTERPARTIES record
      - Add raw name to match_variations
   
   c. If user searches manually:
      - Show all counterparties, user picks one
      - Link and add to variations
```

**Key principle:** Same matching mechanism for merchants AND transfers. Category/account link is stored in the counterparty. Once confirmed, future matches are instant.

### Transfer Fee Connection
```
When recording a transfer with fees:

1. Create Transfer transaction:
   - Type: "transfer"
   - From: USD Account -$6,200
   - To: ILS Account +20,000 ILS
   - is_transfer_fee: false

2. Create Fee transaction:
   - Type: "expense"
   - From: USD Account -$59.59
   - Category: "Bank Fees"
   - is_transfer_fee: true
   - related_transfer_id: [UUID of transfer above]

Result: User can see "I paid $59.59 fee for this specific transfer"
```

### Inter-Bank Transfer Matching
```
Problem: Transfer from TBC to Discount appears in 2 separate files

Example:
- TBC statement: Oct 15, -$1,000 "Transfer to Discount Bank"
- Discount statement: Oct 17, +3,400 ILS "Credit - Transfer"

Manual Matching Process:

1. Import TBC statement:
   - Transaction created in TRANSACTIONS
   - COUNTERPARTIES recognizes as inter-bank transfer (learned pattern)
   - System sets: needs_transfer_matching = true (this transfer needs a match)
   
2. Later, import Discount statement:
   - Transaction created in TRANSACTIONS
   - COUNTERPARTIES recognizes as transfer
   - System sets: needs_transfer_matching = true
   
3. User reviews flagged transfers in UI:
   - System shows all transactions with needs_transfer_matching = true
   - Grouped by date range (±3 days) and similar amounts
   - User selects two transactions to link
   
4. User confirms match:
   - TBC transaction: matched_transfer_transaction_id = [Discount transaction UUID]
   - Discount transaction: matched_transfer_transaction_id = [TBC transaction UUID]
   - Both: needs_transfer_matching = false
   
5. UI displays linked transfer:
   "Transfer: $1,000 from TBC USD → Discount ILS (₪3,400)
    Exchange rate difference: $12"
```

**Key Points:**
- COUNTERPARTIES learns to RECOGNIZE transfer patterns
- Manual matching LINKS the two sides of the same transfer
- System flags transfers that need matching
- User manually confirms the link in UI

### Loan Payment Processing
```
When recording a loan payment:

**Step 1: Determine Interest Rate (for variable-rate loans)**

If loan.interest_type = "variable":
  1. Check INTEREST_RATES table:
     - Query: rate_name = loan.base_rate 
              AND country = loan.country 
              AND effective_date = payment_date (EXACT match)
  
  2a. If rate found for exact date:
      → Use it
      → Skip to Step 2
  
  2b. If NO rate for exact date:
      → Trigger Gemini fetch
      → Prompt: "What was the [base_rate] interest rate in [country] on [payment_date]? 
                 Provide the rate and the source URL."
      → Gemini returns: rate + source_url
      
      → Show user approval modal:
        ```
        Interest Rate for [payment_date]:
        
        Prime Rate (Israel): 4.2%
        Source: [clickable link]
        
        Your loan calculation:
        Base Rate: 4.2% (Prime)
        Spread: +1.0%
        Total Rate: 5.2%
        
        [Approve] [Enter different rate: ___]
        ```
      
      → User clicks source link to verify (opens in new tab)
      → User approves OR enters different rate
      
      → Save to INTEREST_RATES:
        - rate_name: loan.base_rate
        - current_rate: [approved rate]
        - effective_date: payment_date (EXACT date)
        - country: loan.country
        - source_url: [from Gemini]
        - updated_by: "gemini_fetch" or "manual" (if user changed it)
      
      → Calculate: new_loan_rate = approved_rate + loan.spread
      → Update loan.current_interest_rate = new_loan_rate
      → Update loan.last_rate_update = payment_date

**Step 2: Calculate Payment Split**

**Option 1: Bank Statement Shows Split (Preferred)**
Most bank statements show the breakdown:
- Total Payment: $500
- Principal: $450
- Interest: $50

User imports this, system records split directly.

**Option 2: Calculate Split (If Not Provided)**
Use loan amortization formula:

Monthly interest = (current_balance × current_interest_rate) / 12
Principal = monthly_payment - monthly_interest

Example:
- Loan balance: $10,000
- Annual rate: 6%
- Monthly payment: $500

Monthly interest = ($10,000 × 0.06) / 12 = $50
Principal = $500 - $50 = $450

**Option 3: User Input (Last Resort)**
If statement doesn't show split and loan terms unknown:
- Ask user to input principal and interest split manually
- Save split ratio for reference

**Step 3: Record Payment**

1. Create payment Transaction:
   - Type: "expense"
   - Amount: -$500 (total payment from account)
   - Category: "Loan Payment"
   
2. Create Loan_Payment record:
   - total_amount: $500
   - principal: $450
   - interest: $50
   - principal_interest_split_method: "bank_statement" | "calculated" | "manual"
   - requires_user_confirmation: true (if method = "calculated")
   
3. Update Loan current_balance:
   - Old balance: $10,000
   - New balance: $9,550 (reduced by principal only)

Result: 
- Cash flow: -$500
- Expenses (interest only): -$50
- Net worth change: -$50
- Loan balance reduced by $450
```

## Special Handling Notes

### Hebrew Language Support
- AI handles Hebrew merchant names from Israeli banks
- Discount Bank: Headers in row 8, "תיאור התנועה" = transaction description
- Max Credit Card: Headers in row 4, "שם בית העסק" = merchant name
- System stores Hebrew names in raw_name, creates English clean_name for UI

### Multi-Currency Transactions
- Store in original currency + USD equivalent
- Record exchange rate used
- Recalculate USD amounts periodically for valuation

### Counterparty Variations Learning

**How match_variations get populated:**

1. **First encounter (merchant):**
   ```
   Raw name: "WOLT GEORGIA LTD"
   Institution: TBC Bank (uuid-123)
   → AI suggests: "Wolt" (entity_type: merchant)
   → User confirms + sets category "Food Delivery" + "Personal"
   → Create counterparty:
      - clean_name: "Wolt"
      - entity_type: "merchant"
      - default_category: "Food Delivery"
      - default_business_personal: "Personal"
      - match_variations: {"uuid-123": ["WOLT GEORGIA LTD"]}
   ```

2. **First encounter (transfer to own account):**
   ```
   Raw description: "העברה למנשה אורן"
   Institution: Discount Bank (uuid-456)
   → AI suggests: "Transfer to own account"
   → User confirms + selects: Discount ILS Account + transfer_type "inter_bank"
   → Create counterparty:
      - clean_name: "My Discount ILS Account"
      - entity_type: "own_account"
      - linked_account_id: [uuid of Discount ILS account]
      - transfer_type: "inter_bank"
      - match_variations: {"uuid-456": ["העברה למנשה אורן"]}
   ```

3. **Second encounter (different format, same institution):**
   ```
   Raw name: "WOLT*"
   Institution: TBC Bank (uuid-123)
   → No exact match in match_variations
   → AI suggests this might be "Wolt"
   → Ask user: "Is 'WOLT*' the same as 'Wolt'?"
   → User confirms
   → Update match_variations: {"uuid-123": ["WOLT GEORGIA LTD", "WOLT*"]}
   ```

4. **Third encounter (different institution):**
   ```
   Raw name: "וולט"
   Institution: Max Credit (uuid-789)
   → No exact match in match_variations
   → AI suggests this might be "Wolt"
   → User confirms
   → Update match_variations: {
       "uuid-123": ["WOLT GEORGIA LTD", "WOLT*"],
       "uuid-789": ["וולט"]
     }
   ```

5. **Future encounters:**
   ```
   Raw name: "WOLT*"
   Institution: TBC Bank (uuid-123)
   → Found exact match in match_variations["uuid-123"]
   → Auto-match to counterparty "Wolt"
   → Auto-apply category "Food Delivery"
   → No AI call needed, no user confirmation needed ✓
   ```

**Same mechanism for transfers:**
```
Raw description: "העברה למנשה אורן"
Institution: Discount Bank (uuid-456)
→ Found exact match in match_variations["uuid-456"]
→ Auto-match to counterparty "My Discount ILS Account"
→ Create transfer to linked_account_id
→ No AI call, no confirmation ✓
```

### Duplicate Detection
- Use external_transaction_id as primary check
- Fallback: date + amount + account_id + description hash
- Credit card payments: Match bidirectional (checking → card, card → checking)

---
*Last updated: Current conversation*