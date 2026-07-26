export default {
  "*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "eslint --fix"
  ],
  "src/**/*.{ts,tsx}": () => "pnpm tsc --project tsconfig.lint.json --noEmit",
  "*.{json,css,md}": [
    "prettier --write"
  ]
};
