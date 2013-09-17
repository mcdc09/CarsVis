function loadStateData() {
	
	// Abbreviation,State,Population

	d3.text("StateData.csv", function(unparsedData) {
	
		// Reads in data from file
		var data = d3.csv.parseRows(unparsedData);	
		var d2 = [];
		
		for(var i = 1; i < data.length; i++) {
			var pop = checkValue(data[i][2]);
		
			 d2[i-1] = [
 				{abbreviation: data[i][0]},
 				{state: data[i][1]},
 				{population: pop}
 				];
		} // close for
		
		
		// Draw Chart
		console.log(d2[9][1].state);
		
	}); // close d3.text
} // close function

function checkValue(value) {
	if(value == NaN) {
		console.log("NaN");
		return 0;
	} else {
		return value;
	} // close else
} // close function