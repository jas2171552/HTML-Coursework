/*  JavaScript 6th Edition
    Chapter 11
    Chapter case

    Author: Jason Richmond
    Date:   11/13/2018

    Filename: NASA feed.js
*/

"use strict";  // intereperet contents in JavaScript strict mode

// declare golabal variables
var NASAdata;
var image = document.getElementsByClassName("NASApic");
var imageURL;

// run setUpPage() function when page finishes loading
window.addEventListener("load", setUpPage, false);


// perform setup tasks when page first loads
function setUpPage() {
   getNASA();
}

function getNASA() {

	// Create a request variable and assign a new XMLHttpRequest object to it.
	var request = new XMLHttpRequest();
	
	
	
	
	// Open a new connection, using the GET request on the URL endpoint
	request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=2sl7rmOrAKCKBZXOZfH6he3ZIN8OnEamcZzEKPXh', true);
	request.responseType = 'json';
	request.send();
	
	request.onload = function () {

		// Begin accessing JSON data here
		NASAdata = request.response;
		//image.src = NASAdata.url;	
		imageURL = NASAdata.url;
		document.getElementById("NASApic").src = "https://apod.nasa.gov/apod/image/1811/creatureaurora_salomonsen_960.jpg";
		document.getElementById("title").innerHTML = NASAdata.title;		
		document.getElementById("date").innerHTML = NASAdata.date;		
		document.getElementById("explanation").innerHTML = NASAdata.explanation;		
		document.getElementById("copyright").innerHTML = NASAdata.copyright;		
		document.getElementById("url").innerHTML = NASAdata.url;		
	}

	

	

}
