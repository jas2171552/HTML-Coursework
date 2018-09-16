		var msg = "  test";
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