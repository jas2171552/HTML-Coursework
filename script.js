/*
 JavaScript 6th Edition
      Chapter 12
      Chapter case

      My Star Wars Page
      Author:  Jason Richmond
      Date:    11/25/2018

      Filename: script.js
 */

 
function display(event) {
	$(event.currentTarget).children("ul").slideDown("fast");
}

function hide(event) {
 	 $(event.currentTarget).children("ul").hide();
}

$("ul.mainmenu li").hover(display,hide);