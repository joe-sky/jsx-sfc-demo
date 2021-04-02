const { addBabelPlugin, override } = require('customize-cra');

const config = override(addBabelPlugin('jsx-sfc'));

module.exports = config;
