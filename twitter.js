var fs = require("fs");
var request = require("request");
//var spotify = require("spotify");
var twitter = require("twitter");
var twitAccess = require("./keys.js");

var client = new twitter({

  consumer_key: twitAccess.twitterKeys.consumer_key,
  consumer_secret: twitAccess.twitterKeys.consumer_secret,
  access_token_key: twitAccess.twitterKeys.access_token_key,
  access_token_secret:twitAccess.twitterKeys.access_token_secret

  });

//client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
//    console.log(tweets);
// });

//var params = {screen_name: 'nodejs'};
client.get('/statuses/user_timeline.json', { count: 20 }, function(error, tweets, response){
//client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    //console.log(tweets);
    for(var j in tweets) {
      console.log(tweets[j].text);
    }
  }
  });


  // consumer_key: twitAccess.twitterKeys.consumer_key,
  // consumer_secret: twitAccess.twitterKeys,
  // access_token_key: twitAccess.twitterKeys.access_token_key,
  // access_token_secret:twitAccess.twitterKeys.access_token_secret

// console.log(consumer_key);
// console.log(consumer_secret);
// console.log(access_token_key);
// console.log(access_token_secret);


 
