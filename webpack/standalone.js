const merge = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
  entry: './src/standalone.ts',
});
