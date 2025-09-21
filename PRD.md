# Netpie Budget Planner PRD

## 1. Introduction

This document outlines the requirements for a web-based budget planner application. The primary goal is to provide users with a clear, real-time view of their financial health by calculating their net worth. The application will serve as a personal finance dashboard, helping users track their assets and liabilities and providing advanced tools for managing specific long-term debt, such as home loans.

## 2. Goals & Objectives

- To provide a simple, intuitive, and secure platform for personal finance tracking.

- To help users visualize their net worth (Assets - Liabilities).

- To enable users to accurately track various types of assets and liabilities.

- To offer an advanced, dynamic home loan calculator that can handle variable interest rates and help users plan for early loan closure.

- To be fully responsive and accessible on both desktop and mobile devices.

## 3. User Stories & Features

### Core Financial Dashboard

- **Dashboard View:** As a user, I want to see my total assets, total liabilities, and my current net worth on a single dashboard. 
  + Add/Edit/Delete Assets: As a user, I want to be able to add, edit, and delete various types of assets, including:
  + Bank Account money (with a manually entered value). 
  + Stocks (with fields for Name, Quantity, and a manually entered current price). 
  + Mutual Funds (with fields for Name, NAV, and Units). 
  + Fixed Deposits (with fields for Principal Amount and Maturity Value).

- **Add/Edit/Delete Liabilities:** As a user, I want to be able to add, edit, and delete liabilities, including:
  + Personal Loans (with fields for Name, Principal Amount, and Current Outstanding). 
  + Credit Card Debt (with fields for Name and Current Outstanding). 
  + Other Liabilities (with a generic name and amount).

### Advanced Home Loan Module
- **Loan Details:** As a user, I want to input my home loan details, including:
  + Principal Amount (P)
  + Original Interest Rate (r1)
  + Loan Tenure (N years)
  + EMI Start Date

- **Variable Interest Rates:** As a user, I want to be able to add historical and future interest rate changes, with the date the new rate took effect (r2,r3,...). The EMI should automatically recalculate based on the new rate and the remaining loan term.

- **Loan Amortization:** The system should generate an amortization schedule showing the principal and interest paid for each month.

- **Early Closure Planning:** As a user, I want to set a target loan closure date (N′ < N) and have the application tell me:
  + The required additional monthly payment needed to achieve the target. 
  + An updated amortization schedule reflecting these additional payments. 
  + How the EMI and additional payments change when the interest rate varies.

## 4. Technical Requirements (High-level)

- **Frontend:** React + TypeScript.
- **Styling:** Tailwind CSS for a modern, responsive, and mobile-first design.
- **State Management:** React Context or Zustand for global state.
- **Data Persistence:** Firestore for real-time, persistent storage of all user data.
- **Authentication**: Firebase Auth to manage user accounts (anonymous for initial use, then upgrade to a full account). 
- **Hosting**: Deployable on a service like Firebase Hosting or Vercel.

## 5. UI/UX Considerations
- The interface should be clean, clutter-free, and easy to navigate. 
- A consistent color palette and typography should be used throughout the app. 
- Clear data visualizations (e.g., pie charts or bar graphs) should be used on the dashboard to represent the asset and liability breakdown. 
- Input forms should be validated to prevent data entry errors.