# Netpie Budget Planner PRD

## 1. Introduction

This document outlines the requirements for a web-based budget planner application. The primary goal is to provide users with a clear, real-time view of their financial health by calculating their net worth. The application will serve as a personal finance dashboard, helping users track their assets and liabilities and providing advanced tools for managing specific long-term debt, such as home loans.

## 2. Goals & Objectives

- To provide a simple, intuitive, and secure platform for personal finance tracking.
- After successful login, user will land to dashboard.
- To help users visualize their net worth (Assets - Liabilities).
- To enable users to accurately track various types of assets and liabilities.
- To offer an advanced, dynamic home loan calculator that can handle variable interest rates and help users plan for early loan closure.
- To be fully responsive and accessible on both desktop and mobile devices.

## 3. User Personas

_(This section can be filled out with more detailed user personas as the project progresses)_

- **The Young Professional:** A tech-savvy individual in their late 20s or early 30s, looking to get a better handle on their finances, track their investments, and plan for the future.
- **The Homeowner:** An individual or family with a mortgage, who wants to understand their loan amortization and explore options for early repayment.
- **The Retiree:** An individual who is retired or nearing retirement, who wants to track their net worth and ensure their finances are in order.

## 4. User Stories & Features

### Core Financial Dashboard

- **Dashboard View:** As a user, I want to see my total assets, total liabilities, and my current net worth on a single dashboard.
  - **Data Visualization:** The dashboard will feature a pie chart for asset allocation, a line chart for net worth over time, and a bar chart for liability breakdown.
- **Add/Edit/Delete Assets:** As a user, I want to be able to add, edit, and delete various types of assets, including:
  - Bank Account money (with a manually entered value).
  - Stocks (with fields for Name, Quantity, and a manually entered current price).
  - Mutual Funds (with fields for Name, NAV, and Units).
  - Fixed Deposits (with fields for Principal Amount and Maturity Value).
- **Add/Edit/Delete Liabilities:** As a user, I want to be able to add, edit, and delete liabilities, including:
  - Personal Loans (with fields for Name, Principal Amount, and Current Outstanding).
  - Credit Card Debt (with fields for Name and Current Outstanding).
  - Other Liabilities (with a generic name and amount).

### Onboarding & User Experience

- **Automated Data Sync:** As a user, I want to have the option to link my bank accounts and other financial institutions to automatically sync my financial data.
- **Currency Selection:** As a user, I want to be able to select my preferred currency for the entire application.

### Advanced Home Loan Module

- **Loan Details:** As a user, I want to input my home loan details, including:
  - Principal Amount (P)
  - Original Interest Rate (r1)
  - Loan Tenure (N years)
  - EMI Start Date
- **Variable Interest Rates:** As a user, I want to be able to add historical and future interest rate changes, with the date the new rate took effect (r2, r3, ...). The EMI should automatically recalculate based on the new rate and the remaining loan term.
- **Prepayments:** As a user, I want to be able to make both one-time and recurring prepayments towards my loan.
- **Loan Amortization:** The system should generate an amortization schedule showing the principal and interest paid for each month.
- **Early Closure Planning:** As a user, I want to set a target loan closure date (N′ < N) and have the application tell me:
  - The required additional monthly payment needed to achieve the target.
  - An updated amortization schedule reflecting these additional payments.
  - How the EMI and additional payments change when the interest rate varies.
- **Loan Comparison:** As a user, I want to be able to compare different loan scenarios, such as the impact of different interest rates or prepayment amounts on my loan tenure.

## 5. Data & Security

- **Data Encryption:** All sensitive user data will be encrypted both in transit and at rest.
- **Secure Authentication:** The application will use a secure authentication system, such as OAuth 2.0 or JWT.
- **Vulnerability Protection:** The application will be protected against common web vulnerabilities, such as SQL injection and cross-site scripting (XSS).

## 6. Technical Requirements (High-level)

- **Frontend:** React + TypeScript.
- **Styling:** Tailwind CSS for a modern, responsive, and mobile-first design.
- **State Management:** Redux Toolkit for global state management.
- **API Server:** Node.js with Express.js for the API server.
- **Data Persistence:** Using the API server with a PostgreSQL database.
- **Authentication:** Using the API server with JWT.
- **Hosting:** Deployable on AWS Cloudfront.

## 7. UI/UX Considerations

- The interface should be clean, clutter-free, and easy to navigate.
- A consistent color palette and typography should be used throughout the app.
- Clear data visualizations (e.g., pie charts or bar graphs) should be used on the dashboard to represent the asset and liability breakdown.
- Input forms should be validated to prevent data entry errors.

## 8. Future Enhancements & Monetization

- **Premium Subscription:** A premium subscription could be offered for advanced features, such as detailed financial reports, personalized recommendations, and "what-if" scenario planning.
- **Partnerships:** Partnerships with financial institutions could be explored to offer users personalized financial products, such as loans or investment opportunities.