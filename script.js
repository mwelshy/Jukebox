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

	this.nextSong = function () {
		document.getElementById("music").src="assets/final_countdown.mp3";
	}
	this.previousSong = function() {
		document.getElementById("music").src="assets/h3h3song.mp3";
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
document.getElementsByTagName('h4')[0].addEventListener("click", Jukebox.nextSong);
document.getElementsByTagName('h4')[1].addEventListener("click", Jukebox.previousSong);




