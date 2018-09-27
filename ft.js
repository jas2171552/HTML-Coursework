		var msg = "";
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