# Frontend Development Tasks

This document outlines the frontend development tasks for the Netpie Budget Planner application, based on the project's PRD.

## Epic 1: Core Financial Dashboard

### User Story 1.1: As a user, I want to see my total assets, total liabilities, and my current net worth on a single dashboard.

- **Task 1.1.1:** Design the dashboard layout, including placement of key metrics (total assets, total liabilities, net worth).
- **Task 1.1.2:** Create a component to display the key metrics.
- **Task 1.1.3:** Implement the data fetching logic to retrieve the financial data from the API.
- **Task 1.1.4:** Create data visualizations:
    - **Task 1.1.4.1:** Implement a pie chart for asset allocation.
    - **Task 1.1.4.2:** Implement a line chart to track net worth over time.
    - **Task 1.1.4.3:** Implement a bar chart for liability breakdown.

### User Story 1.2: As a user, I want to be able to add, edit, and delete various types of assets.

- **Task 1.2.1:** Create a form for adding/editing assets, with fields for asset type, name, and value.
- **Task 1.2.2:** Implement form validation to ensure data integrity.
- **Task 1.2.3:** Create a component to display a list of assets.
- **Task 1.2.4:** Implement the logic to add, edit, and delete assets, including API integration.

### User Story 1.3: As a user, I want to be able to add, edit, and delete liabilities.

- **Task 1.3.1:** Create a form for adding/editing liabilities, with fields for liability type, name, and amount.
- **Task 1.3.2:** Implement form validation.
- **Task 1.3.3:** Create a component to display a list of liabilities.
- **Task 1.3.4:** Implement the logic to add, edit, and delete liabilities, including API integration.

## Epic 2: Onboarding & User Experience

### User Story 2.1: As a user, I want to have the option to link my bank accounts and other financial institutions to automatically sync my financial data.

- **Task 2.1.1:** Research and select a third-party plaid API for bank account integration.
- **Task 2.1.2:** Implement the UI for linking bank accounts.
- **Task 2.1.3:** Implement the logic to fetch and sync data from linked accounts.

### User Story 2.2: As a user, I want to be able to select my preferred currency for the entire application.

- **Task 2.2.1:** Implement a currency selection dropdown in the user settings.
- **Task 2.2.2:** Implement the logic to apply the selected currency throughout the application.

## Epic 3: Advanced Home Loan Module

### User Story 3.1: As a user, I want to input my home loan details.

- **Task 3.1.1:** Create a form for inputting loan details (principal, interest rate, tenure, start date).
- **Task 3.1.2:** Implement form validation.

### User Story 3.2: As a user, I want to be able to add historical and future interest rate changes.

- **Task 3.2.1:** Create a UI for adding/editing interest rate changes with effective dates.
- **Task 3.2.2:** Implement the logic to recalculate the EMI based on the new interest rate.

### User Story 3.3: As a user, I want to be able to make both one-time and recurring prepayments.

- **Task 3.3.1:** Create a UI for adding prepayments.
- **Task 3.3.2:** Implement the logic to update the amortization schedule based on prepayments.

### User Story 3.4: As a user, I want to see a loan amortization schedule.

- **Task 3.4.1:** Create a component to display the amortization schedule.
- **Task 3.4.2:** Implement the logic to generate the amortization schedule based on loan details, interest rate changes, and prepayments.

### User Story 3.5: As a user, I want to set a target loan closure date and see the required additional monthly payment.

- **Task 3.5.1:** Create a UI for setting a target loan closure date.
- **Task 3.5.2:** Implement the logic to calculate the required additional monthly payment.

### User Story 3.6: As a user, I want to be able to compare different loan scenarios.

- **Task 3.6.1:** Create a UI for comparing loan scenarios.
- **Task 3.6.2:** Implement the logic to display the impact of different interest rates or prepayment amounts on the loan tenure.

## Epic 4: General UI/UX & Technical Requirements

- **Task 4.1:** Set up the React + TypeScript project with Tailwind CSS and Redux Toolkit.
- **Task 4.2:** Implement a consistent color palette and typography.
- **Task 4.3:** Ensure the application is fully responsive and mobile-first.
- **Task 4.4:** Implement secure authentication using JWT.
- **Task 4.5:** Set up deployment on AWS Cloudfront.
