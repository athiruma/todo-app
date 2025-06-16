'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    sassOptions: {
      // Add the path to your custom Sass files
      extension: 'scss',
    },
    emberData: {
      deprecations: {
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
      },
      signals: true,
    },
    // Add options here
  });

  return app.toTree();
};
