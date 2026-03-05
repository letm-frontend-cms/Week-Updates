#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const targetDir = process.cwd();
const configFile = path.join(__dirname, 'prettier.config.js');

try {
  execSync(
    `npx prettier --write "${targetDir}/src/**/*.{js,jsx,ts,tsx,css,json}" --config "${configFile}"`,
    { stdio: 'inherit' }
  );
} catch (error) {
  process.exit(1);
}
