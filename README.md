# Telemart E2E Tests

End-to-end test automation project using TypeScript and Playwright.

## Setup

```bash
# Install dependencies
npm install
```

## Run Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/example.spec.ts

# Run tests in UI mode
npx playwright test --ui
```

## Linting

This project uses ESLint to enforce code quality and consistency:

```bash
# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## Code Style and Best Practices

- Use Page Object Model pattern for better test organization
- Keep test files small and focused on specific functionality
- Use descriptive test names that explain the purpose of the test
- Organize fixtures to allow for easy test configuration
- Follow TypeScript best practices and maintain type safety
- Use data generators (faker.js) to create test data dynamically
- Prefer explicit waits and assertions over implicit ones

## VS Code Integration

For the best development experience, install these VS Code extensions:
- ESLint
- Playwright Test for VS Code 