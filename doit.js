
var fs = require("fs");
var spotify = require("spotify");

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


fs.readFile("random.txt", "utf8", function(error, data){
	//cpm.exec('node liri.js "" "random.txt"', {cwd: 'C:\\Users\\yousra\\codecamp\\liri-node-app'});

    // Break down all the numbers inside
    data = data.split(",");
    inputCommand = data[0];
    inputSong = data[1];
// console.log(data[0]);
// console.log(data[1]);
if(inputCommand === (spotify-this-song){
 	spotThis(inputSong);
}

if(inputCommand === (movie-this){
 	spotThis(inputSong);
}

        });
    //var result = 0;

    // Loop through those numbers and add them together to get a sum.
    // for (var i = 0; i < data.length; i++) {
    //   if (parseFloat(data[i])) {
    //     result += parseFloat(data[i]);



// var process = require('child_process');
// //var cmd = process.spawn('cmd', ['random.txt']);
// var cmd = process.spawn('cmd', ['start','random.txt'], {cwd: 'C:\\Users\\yousra\\codecamp\\liri-node-app'});


//console.log(cmd);
//process.exec('node " " "random.txt"');



//var cmd = process.spawn('cmd', ['node','random.txt'], {cwd: 'C:\\Users\\testuser\\Node_dev'});

//process.exec('start " " "tmp.txt"', {cwd: 'C:\\Users\\testuser\\Node_dev'});

//var cmd = process.spawn('node', ['start','random.txt']);
//var cmd = process.spawn('cmd', ['start','random.txt'], {cwd: 'C:\\Users\\yousra\\codecamp\\liri-node-app'});


//var cpm = require('child_process');

// fs.readFile("random.txt", "utf8", function(error, data){
// const execFile = require('child_process').execFile;

// child_process.execFile(data);
// });
//const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  //if (error) {
    //throw error;
  //}
  //console.log(stdout);
//});

//fs.readFile("random.txt", "utf8", function(error, data){
//	console.log(data);
//	cpm.exec('node liri.js "" "random.txt"', {cwd: 'C:\\Users\\yousra\\codecamp\\liri-node-app'});

// var process = require('child_process');
// var cmd = process.spawn('cmd', ['start','random.txt']);
//var cmd = process.spawn('cmd', ['start','random.txt'], {cwd: 'C:\\Users\\yousra\\codecamp\\liri-node-app'});
//});

// var cpm = require('child_process');

// // With .exec, specify the entire shell command as the 1st argument
// - it is implicitly
// // passed to cmd.exe.
// // '""' as the 1st argument to `start` is an empty window title 
//that ensures that any 
// // filename argument with embedded spaces isn't mistaken 
//for a window title.
// cpm.exec('start "" "tmp.txt"', {cwd: 'C:\\Users\\testuser\\Node_dev'});


// node liri.js do-what-it-says
// Using the fs Node package, 
//LIRI will take the text inside of random.txt and then use it to call one 
//of LIRI's commands.
// It should run spotify-this-song for 
//"I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out 
//the feature for other commands.
