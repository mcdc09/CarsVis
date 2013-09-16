window.onload = function() {
	
	// Abbreviation,State,Population

	d3.text("StateData.csv", function(unparsedData) {
	
		// Reads in data from file
		var data = d3.csv.parseRows(unparsedData);	
		var d2 = [];
		
		for(var i = 1; i < data.length; i++) {
			var population = checkValue(data[i][2]);
		
			d2[i-1] = [
				{axis: "Abbreviation", value: data[i][0]},
				{axis: "State",			value: data[i][1]},
				{axis: "Population",	value: population}
				];
		} // close for
		
		
		// Draw Chart
		
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