/* eslint-disable import/no-extraneous-dependencies */
const merge = require('deepmerge');
const { slSettings } = require('@advanced-rest-client/testing-karma-sl');
const createBaseConfig = require('./karma.conf.js');

module.exports = config => {
  const slConfig = merge(slSettings(), {
    sauceLabs: {
      testName: 'api-request-panel',
    },
    client: {
      mocha: {
        timeout: 10000,
      },
    },
  });
  config.set(merge(createBaseConfig(config), slConfig));
  return config;
};
