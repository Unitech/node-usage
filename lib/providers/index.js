var providers = {
  'linux': require('./proc'),
  'mac': require('./mac'),
  'win': require('./win'),
  'solaris': require('./mac'),
  'other': require('./other')
};

var os = require('os');

module.exports = function() {
  var platform = os.platform();
  var provider = providers[platform];

  if (provider) {
    return provider();
  } else {
    return providers['other']();
  }
};
