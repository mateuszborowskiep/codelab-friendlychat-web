const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'codelab-friendlychat-web',
  location: 'europe-central2'
};
exports.connectorConfig = connectorConfig;

