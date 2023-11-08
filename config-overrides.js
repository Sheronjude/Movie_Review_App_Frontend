// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // Add your custom webpack config here
  config.resolve.fallback = {
    "http": require.resolve("stream-http"),
    // add other core modules if needed
  };
  return config;
};