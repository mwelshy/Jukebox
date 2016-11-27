/* Display at least one song on the page when the page loads
Give the user the ability to play that song, without using the "built-in" play button. This could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
Give the user the ability to stop that song without using the "built-in" stop button. Once again, this could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
Give the user the ability to load at least one different song into the Jukebox besides the one that is loaded when the page initially renders
The whole Jukebox should be backed by an object called Jukebox with methods to play, stop, and load songs. */

mySongs = ["assets/final_countdown.mp3", "assets/h3h3song.mp3"]


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

	this.songOne = function () {
		document.getElementById("music").src= mySongs[1];
	}
	this.songTwo = function() {
		document.getElementById("music").src= mySongs[0];

	}
}






// function nextSong() {
// 	document.getElementById("music").src="assets/final_countdown.mp3";
// }



var Jukebox = new Jukebox();

document.getElementsByTagName("h1")[0].addEventListener("click", Jukebox.play);
document.getElementsByTagName("h2")[0].addEventListener("click", Jukebox.pause);
document.getElementsByTagName("h3")[0].addEventListener("click", Jukebox.volumeUp);
document.getElementsByTagName("h3")[1].addEventListener("click", Jukebox.volumeDown);
document.getElementsByTagName('h4')[0].addEventListener("click", Jukebox.songOne);
document.getElementsByTagName('h4')[1].addEventListener("click", Jukebox.songTwo);




