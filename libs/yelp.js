var request = require('request')
var OAuth = require('oauth-1.0a')

function test() {
  var oauth = OAuth({
    consumer: {
      // public: process.env.ontheway,
      // secret: 
    }
  })

  request('http://www.google.com', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
    }
  })
}

exports.test = test