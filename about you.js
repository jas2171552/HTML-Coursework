/*  JavaScript 6th Edition
    Chapter 10
    Chapter case

    Author: Jason Richmond
    Date:   11/13/2018

    Filename: about you.js
*/

"use strict";  // intereperet contents in JavaScript strict mode

// declare golabal variables
var origin;
var waitForUser;

// run setUpPage() function when page finishes loading
window.addEventListener("load", setUpPage, false);


// perform setup tasks when page first loads
function setUpPage() {
   geoTest();
}


// geo test
function geoTest () {
	waitForUser = setTimeout(fail, 10000);
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createDirections, fail, {timeout: 10000});
	} else {
		fail();
	}
}


function createDirections(position) {
	clearTimeout(waitForUser);
	var currPosLat = position.coords.latitude;
	var currPosLng = position.coords.longitude;
	var mapOptions = {
		center: new google.maps.LatLng(currPosLat, currPosLng), zoom: 12
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
}


function fail() {
	document.getElementById("map").innerHTML = "Unable to access your current location.";
	
}




