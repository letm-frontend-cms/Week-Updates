#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage: cli-package-test [options]

Options:
  --width <number>     Image width (default: 1920)
  --height <number>    Image height (default: 1080)
  --output <filename>  Output filename (default: random-wallpaper.jpg)
  --help, -h           Show help message
`);
  process.exit(0);
}

const getArg = (flag, defaultValue) => {
  const index = args.indexOf(flag);
  return index !== -1 && args[index + 1] ? args[index + 1] : defaultValue;
};

const width = getArg('--width', '1920');
const height = getArg('--height', '1080');
const filename = getArg('--output', 'random-wallpaper.jpg');
const url = `https://picsum.photos/${width}/${height}`;
const filepath = path.join(process.cwd(), filename);

console.log(`Downloading ${width}x${height} wallpaper...`);

const download = (url) => {
  https.get(url, (response) => {
    if (response.statusCode === 302 || response.statusCode === 301) {
      download(response.headers.location);
      return;
    }
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Wallpaper saved to ${filepath}`);
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error('Error downloading wallpaper:', err.message);
    process.exit(1);
  });
};

download(url);
