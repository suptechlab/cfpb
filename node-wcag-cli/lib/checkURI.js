var protocolify = require('protocolify');
var http = require('http-https');

function check(options, callback) {
  http.get(protocolify(options.qs.uri), function checkConnection() {
    callback(null, null);
  }).on('error', function returnError(e) {
    return callback('Unable to connect to ' + e.hostname, null);
  });
}

module.exports = check;
