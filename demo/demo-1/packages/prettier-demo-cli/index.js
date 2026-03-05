#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const targetDir = process.cwd();
const configFile = path.join(__dirname, 'prettier.config.js');
const prettierBin = path.join(__dirname, 'node_modules', '.bin', 'prettier');

try {
  execSync(
    `"${prettierBin}" --write "${targetDir}/src/**/*.{js,jsx,ts,tsx,css,json}" --config "${configFile}"`,
    { stdio: 'inherit' }
  );
} catch (error) {
  process.exit(1);
}
