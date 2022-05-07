'use strict';

module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    const typePolicy = require('./auth');
    const rolePolicy = require('./role');
    const producerRequestLogPolicy = require('./producer-request-log');
    const producerConnectionLogPolicy = require('./producer-connection-log');
    const parser = require('./parser');

    pluginContext.registerPolicy(typePolicy);
    pluginContext.registerPolicy(rolePolicy);
    pluginContext.registerPolicy(producerRequestLogPolicy);
    pluginContext.registerPolicy(producerConnectionLogPolicy);
    pluginContext.registerPolicy(parser);
  },
  policies: [
    'auth',
    'role',
    'producer-request-log',
    'producer-connection-log',
    'parser',
  ],
};
