# Telemart E2E Test Automation

[![Playwright Tests](https://github.com/tonyparkerov/telemart.e2e.pw.ts/actions/workflows/playwright.yml/badge.svg)](https://github.com/tonyparkerov/telemart.e2e.pw.ts/actions/workflows/playwright.yml)
[![Test Report](https://img.shields.io/badge/Test_Report-GitHub_Pages-blue?logo=github)](https://tonyparkerov.github.io/telemart.e2e.pw.ts/)

A robust end-to-end test automation framework for [Telemart](https://telemart.ua/ua) using TypeScript and Playwright.

## 📋 Overview

This project implements automated end-to-end tests for the Telemart e-commerce platform using the Page Object Model pattern. It provides a comprehensive testing suite with authentication handling, fixtures, and reusable components.

## 🛠️ Tech Stack

- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) Strongly typed programming language
- ![Playwright](https://img.shields.io/badge/-Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white) End-to-end testing framework
- ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) Code quality and style enforcement
- ![Faker.js](https://img.shields.io/badge/-Faker.js-5FA9EE?style=flat-square&logo=faker&logoColor=white) Test data generation
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white) JavaScript runtime environment
- ![npm](https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm&logoColor=white) Package manager

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/tonyparkerov/telemart.e2e.pw.ts.git
cd telemart.e2e.pw.ts

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the project root with the following variables:

```
EMAIL=your_test_account_email
PASSWORD=your_test_account_password
```

## 🧪 Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/search.spec.ts

# Run tests with UI mode for debugging
npx playwright test --ui

# Run tests in a specific browser
npx playwright test --project=chromium
```

## 🧹 Code Quality

```bash
# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## 📁 Project Structure

```
├── app/                     # Page objects and application components
│   ├── components/          # Reusable UI components
│   │   ├── BaseComponent.ts # Abstract base class for all components
│   │   ├── HeaderComponent.ts # Header component implementation
│   │   └── ...              # Other component implementations
│   ├── fixtures/            # Test fixtures
│   │   └── fixture.ts       # Custom fixtures including app, signedInApp
│   ├── modals/              # Modal dialog components
│   ├── pages/               # Page objects
│   │   ├── MainPage.ts      # Main page implementation
│   │   ├── SearchPage.ts    # Search results page
│   │   ├── WishListPage.ts  # Wishlist page
│   │   └── ItemsPage.ts     # Product listing page
│   ├── types/               # TypeScript types and interfaces
│   ├── Application.ts       # Main application class with page management
│   └── constants.ts         # Application constants and configuration
├── tests/                   # Test specifications
│   ├── basket/             # Shopping basket related tests
│   ├── filters/            # Product filter tests
│   │   └── manufacturer-filter.spec.ts # Manufacturer filter tests
│   ├── wishlist-page/      # Wishlist-related tests
│   ├── search.spec.ts      # Search functionality tests
│   ├── subscribe-to-newsletter.spec.ts # Newsletter subscription tests
│   └── open-social-media.spec.ts # Social media links tests
├── .auth/                   # Authentication state storage
├── global-setup.ts          # Global test setup (authentication)
├── playwright.config.ts     # Playwright configuration
└── .github/workflows/       # GitHub Actions CI/CD configuration
    └── playwright.yml       # Workflow for running tests and publishing reports
```

## 📋 Test Cases

The project includes tests for:
- Search functionality
- Wishlist operations
- Newsletter subscription
- Social media links
- Authentication flows
- Product filtering
- Shopping basket operations

## 💡 Best Practices

- **Page Object Model**: Each page is represented by a class with methods for interactions
- **Component-Based Architecture**: UI elements are organized into reusable components
- **Fixtures**: Custom fixtures for common test setups (signed-in state, etc.)
- **Type Safety**: TypeScript interfaces for all objects and page models
- **Reusable Components**: Common UI elements abstracted into reusable components
- **Authentication Handling**: Pre-authenticated states for tests requiring login
- **City Selection**: Default city cookie handling for consistent test environments

## 📊 Reporting

The project now includes enhanced reporting features:

- **HTML Reports**: Playwright generates HTML reports after test runs, available at `playwright-report/index.html`
- **GitHub Pages Integration**: The latest test report is published automatically to GitHub Pages
- **CTRF Reporting**: Integration with CTRF JSON reporter for standardized test result tracking in CI/CD
- **GitHub Actions**: Automated test execution and report publishing on workflow dispatch

The latest test report is available online at [GitHub Pages](https://tonyparkerov.github.io/telemart.e2e.pw.ts/).

## 🧩 VS Code Integration

For an optimal development experience, install these VS Code extensions:
- [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 🔄 CI/CD Integration

The project uses GitHub Actions for continuous integration:

- Automated test runs triggered manually via workflow_dispatch
- ESLint checks to ensure code quality
- Test results published to GitHub Pages
- CTRF reporting for standardized test result tracking
- Artifact storage for test reports

## 📜 License

ISC