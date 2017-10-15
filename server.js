const express = require('express')
const app = express()
var Twitter = require('twitter');
require('dotenv').config();

var client = new Twitter ({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var params = {'screen_name': 'rawlenightlong', 'count': 10, 'user_id': 251379766 };

var PORT = process.env.PORT || 8080;

app.use(express.static("./"));

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

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, function () {
  console.log('Example app listening on port 8080!')
})
