window.onload = function() {
	
	//name,economy (mpg),cylinders,displacement (cc),power (hp),weight (lb),0-60 mph (s),year

	d3.text("cars.csv", function(unparsedData) {
	
		// Reads in data from file
		var data = d3.csv.parseRows(unparsedData);	
		var d2 = [];
		
		for(var i = 1; i < data.length; i++) {
			var economy = checkValue(data[i][1]);
			var cylinders =checkValue(data[i][2]);
			var displacement = checkValue(data[i][3]);
			var power = checkValue(data[i][4]);
			var weight = checkValue(data[i][5]);
			var acceleration = checkValue(data[i][6]);
			var year = checkValue(data[i][7]);
		
			d2[i-1] = [
				//{name: data[i][0]},
				{axis: "economy (mpg)", 	value: economy},
				{axis: "cylinders", 		value: cylinders},
				{axis: "displacement (cc)", value: displacement},
				{axis: "power (hp)", 		value: power},  
			   	{axis: "weight (lb)", 		value: weight},
			   	{axis: "acceleration (0-60 mph)(s)", value: acceleration},
			   	{axis: "year", 				value: year}
			   	];
		} // close for
		
		
		// Draw Chart
		RadarChart.draw("#chart", d2);
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