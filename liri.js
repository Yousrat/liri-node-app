var fs = require("fs");
var request = require("request");
var spotify = require("spotify");
var twitter = require("twitter");
var movie = "";
var liri = process.argv[2];
var input = process.argv[3];


switch (liri) {
  case "movie-this":	
    movieThis(input);
    break;

  // case "deposit":
  //   deposit();
  //   break;

  // case "withdraw":
  //   withdraw();
  //   break;

  // case "lotto":
  //   lotto();
  //   break;
}


//Run a request to the OMDB API with the movie specified

function movieThis(input){
if (input === "") {
			input = "Mr.Nobody";
		}
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