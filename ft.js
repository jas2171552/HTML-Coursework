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
			var v_releaseDate = ""
			var movieSelected = document.getElementById("release").value;
			
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
				case "Rogue":
					v_releaseDate = "12/16/2016";
					break;
				default:
					v_releaseDate = "";
			}
			document.getElementById("vReleaseDateMsg").innerHTML = movieSelected + ":\r\n" + v_releaseDate; 

		}
		
		document.getElementById("releaseDate").addEventListener("click",getReleaseDate,false);