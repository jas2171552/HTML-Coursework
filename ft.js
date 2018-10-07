		"use strict";

/* glabal variables */
var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();;
var formValidity = true;
var fieldsetValidity = true;
var email = "";
var birthday = "";
var option = "";
	
var msg = "";

/* set up node building blocks for selecton list of days */
/* used same example as the text */
function setupDays () {
   var dates = document.getElementById("birthDy").getElementsByTagName("option");
   twentyNine.appendChild(dates[28].cloneNode(true)); 
   // add 29th 
   thirty.appendChild(dates[28].cloneNode(true)); 
   thirty.appendChild(dates[29].cloneNode(true));
   // add 29th & 30th
   thirtyOne.appendChild(dates[28].cloneNode(true)); 
   thirtyOne.appendChild(dates[29].cloneNode(true));
   thirtyOne.appendChild(dates[30].cloneNode(true));
   // add 29th, 30th, & 31st
}

/* used same example as the text */
function updateDays() {
   var birthDay = document.getElementById("birthDy");
   var dates = birthDay.getElementsByTagName("option");
   var birthMonth = document.getElementById("birthMo");
   var birthYear = document.getElementById("birthYr");
   var selectedMonth = birthMonth.options[birthMonth.selectedIndex].value;
   while (dates[28]) {
      // remove child with index of 28 until this index is empty
      birthDay.removeChild(dates[28]);
   }
   if (birthYear.selectedIndex === -1) { 
      // if no year is selected, choose the default year so length of Feb can be determined
      birthYear.selectedIndex = 0;
   }
   if ( (selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "2016") || 
	    (selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "2012") || 
	    (selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "2008") ||
	    (selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "2004") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "2000") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "1996") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "1992") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "1988") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "1984") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "1980") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "1976") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "1972") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "1968") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "1964") ||
		(selectedMonth === "2" && birthYear.options[birthYear.selectedIndex].value === "1960")) { 
      // if leap year, Feb has 29 days
      birthDay.appendChild(twentyNine.cloneNode(true));
   } else if (selectedMonth === "4" || selectedMonth === "6" || selectedMonth === "9" || selectedMonth === "11") { 
      // these months have 30 days
      birthDay.appendChild(thirty.cloneNode(true));
   } else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12") { 
      // these months have 31 days
      birthDay.appendChild(thirtyOne.cloneNode(true));
   }
}
	
/* validate birth date fieldset */
function validateBirthDate() {
   var selectElements = document.querySelectorAll("#birthDate select");
   var errorDiv = document.querySelector("#birthDate .errorMessage"); 
   var fieldsetValidity = true;
   var elementCount = selectElements.length;
   var currentElement;
   try {
      for (var i = 0; i < elementCount; i++) {
         currentElement = selectElements[i];
         if (currentElement.selectedIndex === -1) {
            currentElement.style.border = "1px solid red";
            fieldsetValidity = false;
         } else {
            currentElement.style.border = "";
         }
      }
      if (fieldsetValidity === false) {
         throw "Please specify a birth date.";
      } else {
         //errorDiv.style.display = "none";
         //errorDiv.innerHTML = "";
      }
   }
   catch(msg) {
      //errorDiv.style.display = "block";
      //errorDiv.innerHTML = msg; 
      //formValidity = false;
	  window.alert(msg);
   }
}

/* validate enrollment fieldset */
function validateEnrollment() {
   var errorDiv = document.querySelector("#enrollmentInfo .errorMessage");
   var fieldsetValidity = true;
   var emailNULL;
   var emailElement = document.getElementById("emailAdd");
   var selectElements = document.querySelectorAll("#enrollmentInfo select");
   var elementCount = selectElements.length;
   var enrollment = document.getElementsByName("contactType");
   var ccNumErrMsg = document.getElementById("emailAddErrorMessage");
   var currentElement;
   try { 
		/*if (!enrollment[0].checked && !enrollment[1].checked) { 
			// verify that a card is selected
			for (i = 0; i < 2; i++) {
            enrollment[i].style.outline = "1px solid red";
        }
        fieldsetValidity = false;
		} else {
			for (i = 0; i < 2; i++) {
            enrollment[i].style.outline = "";
        }
      }*/
		
      if (emailElement.value === "") { 
         // verify that an email has been entered
         emailElement.style.background = "rgb(255,233,233)";
         formValidity = false;
		 emailNULL = TRUE;
		 throw "must contain an email address.";
      } else {
         emailElement.style.background = "white";
		 emailElement.style.background = "";
         emailElement.style.display = "none";

      }
	  
   }
   catch(msg) {
		if (emailNULL) {
			ccNumElement.style.background = "rgb(255,233,233)";
			ccNumErrMsg.style.display = "block";
			ccNumErrMsg.innerHTML = "" + msg;
			end;
		} 
	  document.getElementById("vReleaseDateMsg").innerHTML = msg;
   }
}

/* validate Enrollment form */
function validateForm(evt) {
	    
	if (evt.preventDefault) {
      evt.preventDefault(); // prevent form from submitting
	} else {
      evt.returnValue = false; // prevent form from submitting in IE8
	}
	//formValidity = true; // reset value for revalidation
	validateBirthDate();
	validateEnrollment();
	
} 

/* create event listeners */
function createEventListeners() {
   var birthMonth = document.getElementById("birthMo");
   if (birthMonth.addEventListener) {
     birthMonth.addEventListener("change", updateDays, false); 
   } else if (birthMonth.attachEvent)  {
     birthMonth.attachEvent("onchange", updateDays);
   }

   var birthYear = document.getElementById("birthYr");
   if (birthYear.addEventListener) {
     birthYear.addEventListener("change", updateDays, false); 
   } else if (birthYear.attachEvent)  {
     birthYear.attachEvent("onchange", updateDays);
   }
   
   var form = document.getElementsByTagName("signupButton");
   if (form.addEventListener) {
      form.addEventListener("submit", validateForm, false);
   } else if (form.attachEvent) {
      form.attachEvent("onsubmit", validateForm);
   }
}

function setUpPage() {
   setupDays();
   createEventListeners();
}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}




function submitEnrollment () {
	//var formValidity = true;
	email = document.getElementById("emailAdd").value;
	birthday = document.getElementById("birthMo").value + "/" + document.getElementById("birthDy").value + "/" + document.getElementById("birthYr").value
	option = "";//document.getElementById("contactType").value;
	
	validateBirthDate();
	validateEnrollment();
	if (formValidity === true) {
		    window.alert("Form Sumitted Successfully\n  Email: " + email + "\n  Birthdate: " + birthday + "\n  Option: " + option);
	} else {
			window.alert("Ensure all fields complete and you have opted in/out");
	}
}
document.getElementById("signupButton").addEventListener("click",submitEnrollment,false);









function calcYears () {

			var releaseYear = 1977;
			var birthYear = document.getElementById("birthYear").value;
			var numYear = birthYear - releaseYear;
			
					
			if (numYear < 0) {
				msg = "You were " + numYear*-1 + " years old when Star Wars was released";
				document.getElementById("vMsg").innerHTML = msg; 
			}
			else {
				msg = "Star Wars was released " + numYear + " years before you were born";
				document.getElementById("vMsg").innerHTML = msg; 
			}
		}
document.getElementById("getMessage").addEventListener("click",calcYears,false);




function getReleaseDate() {
	try {
			var v_releaseDate = ""
			var movieSelected = document.getElementById("release").value;
			
			// alert window to display user selection to verify it was assed correctly
			// alert window to display user selection to verify it was assed correctly
			//window.alert(movieSelected);
			//console.log("user selected: " + movieSelected);
			/* 
				I used the above to validate the variable was being passed and the value.  I was having trouble getting the box to display the 
				message and I wasnt sure if the variable was blank, what the value was and why the decision tree wasn't acting correctly
			 */
			// alert window to display user selection to verify it was assed correctly
			// alert window to display user selection to verify it was assed correctly
			
			switch (movieSelected) {
				case "Ep IV":
					v_releaseDate = "05/25/1977";
					break;
				case "Ep V":
					v_releaseDate = "05/21/1980";
					break;
				case "Ep VI":
					v_releaseDate = "05/25/1983";
					break;
				case "Ep I":
					v_releaseDate = "05/19/1999";
					break;
				case "Ep II":
					v_releaseDate = "05/16/2002";
					break;
				case "Ep III":
					v_releaseDate = "05/19/2005";
					break;
				case "Ep VI":
					v_releaseDate = "12/18/2015";
					break;
				case "Ep VII":
					v_releaseDate = "12/15/2017";
					break;
				case "Solo":
					v_releaseDate = "05/10/2018";
					break;
				case "Rogue One":
					v_releaseDate = "12/16/2016";
					break;
				default:
					throw "Invalid Selection, please pick again."
			}
			document.getElementById("vReleaseDateMsg").innerHTML = movieSelected + ":\r\n" + v_releaseDate; 
		
	}		
	catch(error) 
	{
		window.alert(error);
		return false;
	}			
}
		
document.getElementById("releaseDate").addEventListener("click",getReleaseDate,false);



