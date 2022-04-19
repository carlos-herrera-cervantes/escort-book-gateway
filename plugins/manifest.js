'use strict';

module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    const policy = require('./auth');
    pluginContext.registerPolicy(policy);
  },
  policies: ['auth'],
};