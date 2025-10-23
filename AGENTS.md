## Build Commands

- Build: `npm run build` or `yarn build`
- Development server: `npm run dev` or `yarn dev`

## Test Commands

- Run all tests: `npm test` or `yarn test`
- Run single test: `npm test -- <test-file>` or `yarn test <test-file>`
- Watch mode: `npm run test:watch` or `yarn test:watch`

## Lint Commands

- Lint: `npm run lint` or `yarn lint`
- Fix linting issues: `npm run lint:fix` or `yarn lint:fix`

## Code Style Guidelines

- **Imports**: ES6 imports, external libraries first, then internal modules
- **Formatting**: Prettier, 2-space indentation, single quotes
- **Types**: TypeScript strict mode, explicit return types for functions
- **Naming**: camelCase for variables/functions, PascalCase for components/classes
- **Error Handling**: try/catch for async operations, descriptive error messages
- **Comments**: JSDoc for public APIs, avoid inline comments for obvious code
- **Security**: Never expose secrets/keys, use environment variables
- **Testing**: Write unit tests for new features, maintain test coverage

## Agent Guidelines

- Run lint and typecheck after code changes
- Use existing libraries and follow established patterns
- Commit only when explicitly requested
- Reference code locations as `file_path:line_number`

## Additional Rules

- No Cursor or Copilot specific rules found in this repository
