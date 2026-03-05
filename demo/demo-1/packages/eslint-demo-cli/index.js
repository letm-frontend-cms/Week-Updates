#!/usr/bin/env node

const { ESLint } = require('eslint');
const overrideConfig = require('./eslint.config');

async function main() {
  const targetDir = process.cwd();

  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig,
  });

  try {
    const results = await eslint.lintFiles([`${targetDir}/src/**/*.{js,jsx,ts,tsx}`]);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = await formatter.format(results);

    if (resultText) {
      console.log(resultText);
    } else {
      console.log('✓ No issues found');
    }

    const hasErrors = results.some(result => result.errorCount > 0);
    process.exit(hasErrors ? 1 : 0);
  } catch (error) {
    console.error('Error running ESLint:', error.message);
    process.exit(1);
  }
}

main();
