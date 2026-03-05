#!/usr/bin/env node

const { ESLint } = require('eslint');
const path = require('path');

async function main() {
  const targetDir = process.cwd();
  
  const eslint = new ESLint({
    overrideConfigFile: path.join(__dirname, '.eslintrc.js'),
    useEslintrc: false,
    ignore: false,
  });

  try {
    const results = await eslint.lintFiles([`${targetDir}/**/*.{js,jsx,ts,tsx}`]);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);
    
    console.log(resultText);
    
    const hasErrors = results.some(result => result.errorCount > 0);
    process.exit(hasErrors ? 1 : 0);
  } catch (error) {
    console.error('Error running ESLint:', error.message);
    process.exit(1);
  }
}

main();
