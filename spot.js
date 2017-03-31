var fs = require("fs");
var request = require("request");
var spotify = require("spotify");
var twitter = require("twitter");
//var liri = process.argv[2];
var input = process.argv[2];

spotThis(input);


//Run a request to the OMDB API with the movie specified

function spotThis(){
// if (input === "") {
//      input = "Mr.Nobody";
//    }
//request("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy");
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



// This will show the following information about the song in your terminal/bash window
//     * Artist(s)
//     * The song's name
//     * A preview link of the song from Spotify
//     * The album that the song is from

// * if no song is provided then your program will default to
//     * "The Sign" by Ace of Base



//  : tomatoRating=> "7.7",
//     :tomatoReviews => "266",
//       :tomatoFresh => "249",
//      :tomatoRotten => "17",
//   :tomatoConsensus => "Director Jon Favreau and star Robert Downey Jr. make this smart, high impact superhero movie one that even non-comics fans can enjoy.",
//   :tomatoUserMeter => "91",
//  :tomatoUserRating => "4.2",
// :tomatoUserReviews => "1072111",
//               :DVD => "30 Sep 2008",
//         :BoxOffice => "$318.3M",
//        :Production => "Paramount Pictures",
//           :Website => "http://www.ironmanmovie.com/",
//          :Response => "True"

//    * Rotten Tomatoes Rating.
  //  * Rotten Tomatoes URL.

// {"Title":"Beauty and the Beast","Year":"1991","Rated":"G","Released":"22 Nov 1991",
//"Runtime":"84 min","Genre":"Animation, Family, Fantasy","Director":"Gary Trousdale, 
//Kirk Wise","Writer":"Linda Woolverton (animation screenplay by), Brenda Chapman (story), 
//Chris Sanders (story), Burny Mattinson (story), Kevin Harkey (story), Brian Pimental (story), 
//Bruce Woodside (story), Joe Ranft (story), Tom Ellery (story), Kelly Asbury (story), 
//Robert Lence (story)","Actors":"Robby Benson, Jesse Corti, Rex Everhart, Angela Lansbury",
//"Plot":"A young woman whose father has been imprisoned by a terrifying beast offers herself 
//in his place, unaware that her captor is actually a prince, physically altered by a magic spell.",
//"Language":"English, French","Country":"USA","Awards":"Won 2 Oscars. 
// Another 25 wins & 21 nominations.",
//"Poster":"https://images-na.ssl-images-amazon.com/
//images/M/MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._
//V1_SX300.jpg",
//"Metascore":"95","imdbRating":"8.0","imdbVotes":"323,967","imdbID":"tt0101414",
//"Type":"movie","Response":"True"}

