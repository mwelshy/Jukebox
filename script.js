function Jukebox() {
	this.play = function() {
		document.getElementById("music").play();
	}

	this.pause = function() {
		document.getElementById("music").pause();
	}

	this.volumeUp = function() {
		document.getElementById("music").volume+=0.1;
	}

	this.volumeDown = function() {
		document.getElementById("music").volume-=0.1;
	}
}



var Jukebox = new Jukebox();

document.getElementsByTagName("h1")[0].addEventListener("click", Jukebox.play);
document.getElementsByTagName("h2")[0].addEventListener("click", Jukebox.pause);
document.getElementsByTagName("h3")[0].addEventListener("click", Jukebox.volumeUp);
document.getElementsByTagName("h3")[1].addEventListener("click", Jukebox.volumeDown);





// function Jukebox() {
// 	this.songs = [],
// 	this.play = function() {
// 		document.getElementsByTagName("h1")[0].addEventListener("click", playit);
// 	}
// 	playit.apply(this, arguments);
// }

// function playit () {
// 	play: document.querySelector("#music").play();
// }





// Jukebox();














//  	var Jukebox = {
//  		audioPlayer: document.querySelector("#music"),
//  		playButton: document.getElementsByTagName("h1")[0],
//  		stopButton: document.getElementsByTagName("h2")[0],




//  		play: function() {
//  			this.audioPlayer.play();
//  		},

//  		pause: function() {
//  			this.audioPlayer.pause();
//  		}





// }
// Jukebox.playButton.addEventListener("click", function() {
// 	Jukebox.play()
// })

// Jukebox.stopButton.addEventListener("click",function() {
// 	Jukebox.pause()
// })

// 	function controls() {
// 	document.getElementsByTagName("h1")[0].addEventListener("click", play)
// 	function play() {
// 		var start = document.getElementsByTagName("audio")[0];
// 		start.play()
// 	}
// }









// function stop() {
// 	var stop = document.getElementsByTagname("audio")[0];
// 	stop.pause();
// }



// Jukebox();


// document.getElementsByTagName("h1")[0].addEventListener("click", play);


// function play() {
// 	var play = document.getElementsByTagName("audio")[0];
// 	play.play();
// }

