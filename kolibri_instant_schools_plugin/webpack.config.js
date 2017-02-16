/*
 * This file defines additional webpack configuration for this plugin.
 * It will be bundled into the webpack configuration at build time.
 */

module.exports = {
  // allows plugin to override core kolibri components
  coreAPISpec: './assets/src/coreAPI.js',
};
