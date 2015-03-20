var request = require('request')

function test() {
  request('http://www.google.com', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      return body
    }
  })
}

exports.test = test