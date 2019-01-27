#!/usr/bin/env node

const husky = require('./node_modules/husky/lib/installer');
const path = require('path');

husky.install(path.resolve(__dirname, 'node_modules/husky'));