require('dotenv').config();
const path = require('path');
const http = require('http');
const express = require('express');
const expressStaticGzip = require("express-static-gzip");
const compression = require('compression');
const logger = require('morgan');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;

//set up morang logger
app.use(logger('dev'));

//compression filter
function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) return false;
  return compression.filter(req, res);
}
//set up compression and static dir
app.use(expressStaticGzip("./"));
app.use(compression({
  level: 2,               // set compression level from 1 to 9 (6 by default)
  filter: shouldCompress, // set predicate to determine whether to compress
}));

//Twitter API
var Twitter = require('twitter');
var client = new Twitter ({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
var params = {'screen_name': 'rawlenightlong', 'count': 10, 'user_id': 251379766 };
app.get("/api/twitter", function(req,res){
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      var content = [];
      tweets.forEach(function(item, index){
        var tweet = {};
        tweet.text = item.text.replace("amp;", "");
        tweet.user = item.user.name;
        tweet.screen_name = item.user.screen_name;
        tweet.picture = {};
        if (item.entities.media){
            tweet.picture = item.entities.media[0].media_url;
        }
        content.push(tweet);
      });
      res.send(content);
    }
  });
});

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

const options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert: fs.readFileSync(__dirname + '/server.crt')
}

app.listen(PORT, function () {
  console.log('Example app listening on port 8080!')
})
