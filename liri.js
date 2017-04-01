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
        	
          spotThis(input);
        	
          break;

        case "my-tweets":
          myTweets();
          break;

        case "do-what-it-says":
          doThis();
          break;

    }


//Run a request to the OMDB API with the movie specified

function movieThis(input){

      if (!input) {
            input = "Mr nobody";
          }
	request("http://www.omdbapi.com/?t=" + input+ "&y=&plot=short&r=json&tomatoes=true", function(error, response, body) {
	
    if (!error && response.statusCode === 200) {
  		
//       console.log('-------------------------------')
//       console.log(body);
// console.log('-------------------------------')

      var parsedData = JSON.parse(body);

      console.log("The movie Title is: " + parsedData.Title);
      console.log("The year the movie came out:" + parsedData.Year);
      console.log("The IMDB rating of the movie: " + parsedData.imdbRating);
      console.log("Country where the movie was produced: " + parsedData.Country);
      console.log("Language of the movie: " + parsedData.Language);
      console.log("Plot of the movie: " + parsedData.Plot);
      console.log("Actors in the movie: " + parsedData.Actors);
      console.log("Movie URL: " + parsedData.Website);
      console.log("Rotten Tomatoes user Rating: " + parsedData.tomatoUserRating);
      console.log("Rotten Tomatoes Rating: " + parsedData.tomatoRating);
      console.log("Rotten Tomatoes URL: " + parsedData.tomatoURL);
    }
  
  });

}


function spotThis(input){
 if (!input) {
      input = "The Sign ace of base";
    }

spotify.search({ type: 'track', query: input, limit: 1 }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    var song = data.tracks.items[0];
    //console.log(song);
    console.log("Artist name: " + JSON.stringify(song.artists[0].name, null, 1));
    console.log("Song's name: " + JSON.stringify(song.name, null, 1));
    console.log("Spotify preview link: " + JSON.stringify(song.album.external_urls, null, 2));
    console.log("The album that the song is from: " + JSON.stringify(song.album.name, null, 1));

});
		
  }

function myTweets(){
client.get('/statuses/user_timeline.json', { count: 20 }, function(error, tweets, response){
  if (!error) {
    for(var j in tweets) {
      console.log(tweets[j].text);
    }
  }
  });

}

function doThis(){

fs.readFile("random.txt", "utf8", function(error, data){
  //cpm.exec('node liri.js "" "random.txt"', {cwd: 'C:\\Users\\yousra\\codecamp\\liri-node-app'});

    // Break down all the numbers inside
    data = data.split(",");
    inputCommand = data[0];
    inputSong = data[1];

    spotThis(inputSong);

        });
}


