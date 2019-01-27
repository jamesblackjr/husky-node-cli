#!/usr/bin/env node

const husky = require('./node_modules/husky/lib/installer');
const path = require('path');

process.env.HUSKY_CURRENT_DIR = true;
process.env.HUSKY_SKIP_INSTALL = false;

const [, , action, huskyDir = path.resolve(__dirname, 'node_modules/husky')] = process.argv;

try {
  // Run installer
  if (action === 'install' || null) {
    husky.install(huskyDir);
  } else if (action === 'uninstall') {
    husky.uninstall(huskyDir);
  }
} catch (error) {
  console.log(`husky > failed to ${action}`)
  console.log(error.message)
}