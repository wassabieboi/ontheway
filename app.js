/*
 * Module dependencies
 */
var express = require('express'),
    morgan = require('morgan'),
    stylus = require('stylus'),
    nib = require('nib')

var yelp = require('./libs/yelp')

console.log("starting app")

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(morgan('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.render('index',
    { title: 'OnTheWay Home' })
})

app.get('/yelp', function(req, res) {
  var results = yelp.test()
  res.render('yelp',
    { title: 'OnTheWay Yelp API', test: results })
})

app.listen(process.env.PORT || 3000)