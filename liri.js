var fs = require("fs");
var request = require("request");
var spotify = require("spotify");
var twitter = require("twitter");
var twitAccess = require("./keys.js");
var liri = process.argv[2];
var input = process.argv[3];

var client = new twitter({
  consumer_key: twitAccess.twitterKeys.consumer_key,
  consumer_secret: twitAccess.twitterKeys.consumer_secret,
  access_token_key: twitAccess.twitterKeys.access_token_key,
  access_token_secret:twitAccess.twitterKeys.access_token_secret
  });

    switch (liri) {
        case "movie-this":
        movieThis(input);
        break;

        case "spotify-this-song":
      	if (input === null) {
        spotThis("the sign");
      	}
      	else{
        spotThis(input);
      	}
        break;

        case "my-tweets":
        myTweets();
        break;

    //  case "do-what-it-says":
    //  doIt();
    //  break;

    }


//Run a request to the OMDB API with the movie specified

function movieThis(input){

	request("http://www.omdbapi.com/?t=" + input+ "&y=&plot=short&r=json&tomatoes=true", function(error, response, body) {
	
    if (!error && response.statusCode === 200) {
  		
      console.log("The movie Title is: " + JSON.parse(body).Title);
      console.log("The year the movie came out:" + JSON.parse(body).Year);
      console.log("The IMDB rating of the movie: " + JSON.parse(body).imdbRating);
      console.log("Country where the movie was produced: " + JSON.parse(body).Country);
      console.log("Language of the movie: " + JSON.parse(body).Language);
      console.log("Plot of the movie: " + JSON.parse(body).Plot);
      console.log("Actors in the movie: " + JSON.parse(body).Actors);
      console.log("Movie URL: " + JSON.parse(body).Website);
      console.log("Rotten Tomatoes user Rating: " + JSON.parse(body).tomatoUserRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
      console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatourl);
    }
  
  });

}


function spotThis(input){
// if (input === "") {
//      input = "The Sign";
//    }

spotify.search({ type: 'track', query: input, limit: 1 }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    // Do something with 'data' 
    console.log("Artist name: " + JSON.stringify(data.tracks.items[0].artists[0].name, null, 1));
    console.log("Song's name: " + JSON.stringify(data.name, null, 1));
    //console.log("Spotify preview link: " + JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
    console.log("The album that the song is from: " + JSON.stringify(data.tracks.items[0].album.name, null, 1));

});
		
  }

function myTweets(){
client.get('/statuses/user_timeline.json', { count: 20 }, function(error, tweets, response){
//client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    //console.log(tweets);
    for(var j in tweets) {
      console.log(tweets[j].text);
    }
  }
  });

}

// function doIt(){
// }

