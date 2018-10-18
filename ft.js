"use strict";  // intereperet contents in JavaScript strict mode

var dateObject = new Date();

		var msg = "";
		
		function userOnline () {
			var onlineMsg = "test";
			
			if(navigator.onLine)
			{
				onlineMsg = "Browser is online";
				document.getElementById("onlineMsg").innerHTML = msg;
			}
			else
			{
				onlineMsg = "Browser is offline";
				document.getElementById("onlineMsg").innerHTML = msg;
			}
		}
		
		function calcDates () {
			
			var dateToday = new Date();
			// Had to add current time's minutes/seconds/nano otherwise the math did not work correct.
			var htmlMonth = Number(document.getElementById("dmonth").value)-1;
			var dateUser = new Date(Date.UTC(document.getElementById("dyear").value, htmlMonth, document.getElementById("dday").value, dateToday.getMinutes(), dateToday.getSeconds()));
			//dateUser = dateUser.setMonth(dateUser.getMonth()+1);
			var pageMsg; 
			var daysInMonth;
			var month;
			var startMonth;
			var endMonth;
			var startDay;
			var endDay;
			var startYear;
			var endYear;
			
			var userMonth;
			var userDay;
			var userYear;
			
			var currentMonth;
			var currentDay;
			var currentYear;
			
			var diffMonths;
			var diffDays;
			var diffYears;
			
			userMonth = dateUser.getUTCMonth();
			userDay = dateUser.getUTCDate();
			userYear = dateUser.getFullYear();
			//window.alert("User entered: " + userMonth + "/" + userDay + "/" + userYear);// + " Todays Date: " + fromDate + "To Date: " + toDate + " From Date: " + fromDate + "  Days Between: " + nbrDaysBetween);
						
			// Javascript Months are zero base, need to add one			
			currentMonth = dateToday.getUTCMonth();
			currentDay = dateToday.getUTCDate();
			currentYear = dateToday.getFullYear();
			
			// sets the user month or the current month for the calculation based on which os greater 
			if (dateToday.getDate() > dateUser.getDate()) {
				month = userMonth
			} month = currentMonth
			
			// determines the number of days in the month for calculation (literally taken from the example in the book)
			if (month === 0 || month === 2 || month === 4 || month === 6 || 
				month === 7 || month === 9 || month === 11) {  // Jan, Mar, May, Jul, Aug, Oct, Dec -- already moved from the zero based to actual month #
					daysInMonth = 31;
				} else if (month === 2) { //Feb
					if ( userYear % 100 === 0 ) {
						if (userYear % 400 === 0) {
							daysInMonth = 29;
						} else {
							daysInMonth = 28;
						}
					} else { 
							daysInMonth= 29;
					}
				} else // Apr, Jun, Sep, Nov
					daysInMonth = 30;
			
			// completes calculation based on which date is greater
			if (dateToday < dateUser) {
				//window.alert("Inputted is greater than today's date");
				
				
				startMonth = currentMonth;
				endMonth = userMonth;
				startDay = currentDay;
				endDay = userDay;
				startYear = currentYear;
				endYear = userYear;
			} else {
				//window.alert("Today is greater than inputted date");
				startMonth = userMonth;
				endMonth = currentMonth;
				startDay = userDay;
				endDay = currentDay;
				startYear = userYear;
				endYear = currentYear;
			}
				
			// Calculate difference in years
			diffYears = endYear - startYear;	
			
			// Calculate difference in months
			diffMonths = endMonth - startMonth; 
			if (diffMonths <0) {
					diffYears -=1;  // if # mnonths < 0 then is negative which means even though the # diff between years is > 0 it could be 11 months or less
			} else {}	
			
			// Calculate difference in between days of month taking the number of days in the month in account.
			if (Number(diffMonths)==1 && endDay < startDay) {
				//Should be less than one month
				diffMonths -= 1;
				//window.alert("1");
				//diffDays = daysInMonth - startDay + endDay
					if (dateToday.getDate() > dateUser.getDate()){ 
						diffDays = (dateUser.getDate() - dateToday.getDate())*-1;
					} else {
						diffDays = (dateToday.getDate() - dateUser.getDate())*-1;
					}				
			} else if (Number(diffMonths)==1 && dateToday.getDate() > dateUser.getDate()) {
				diffDays = endDay - startDay;
				//window.alert("2" + htmlMonth);
			} else {
				diffDays = endDay - startDay;
				//window.alert("3 " + htmlMonth);				
			}
								
			document.getElementById("dateCalc").innerHTML = diffYears + " Years | " + diffMonths + " Month | " + diffDays + " Days";
			
			//window.alert(month);
			//window.alert("Years: " + diffYears + " Month: " + diffMonths + " Days: " + diffDays + 
			//			 "\nDiff Months: " + diffMonths + " User Entered Month: " + userMonth + " " + document.getElementById("dmonth").value + " " + currentMonth +
			//             "\nStart Month: " + startMonth + " End Month: " + endMonth +
			//			 "\nStart Day: " + startDay + " End Day: " + endDay +
			//			 "\nStart Year: " + startYear + " End Year: " + endYear
			//			 );			
		}
		document.getElementById("btnclick").addEventListener("click",calcDates,false);
				
				
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