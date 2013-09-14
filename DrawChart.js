window.onload = function() {
	
	//name,economy (mpg),cylinders,displacement (cc),power (hp),weight (lb),0-60 mph (s),year
	// Read values in from csv
	// var dataset = [];
// 	d3.csv("http://www.prism.gatech.edu/~tbowling3/info_vis/cars.csv")
//     .row(function(d) { return {key: d.key, value: +d.value}; })
//     .get(function(error, rows) { console.log(rows); });

	var d2 = d3.text("cars.csv", function(unparsedData) {
		var data = d3.csv.parseRows(unparsedData);
		
		var d2 = [];
		//for(var i = 1; i < data.length; i++) {
		for(var i = 1; i < 2; i++) {	
			var economy = checkValue(data[i][1]);
			var cylinders =checkValue(data[i][2]);
			var displacement = checkValue(data[i][3]);
			var power = checkValue(data[i][4]);
			var weight = checkValue(data[i][5]);
			var acceleration = checkValue(data[i][6]);
			var year = checkValue(data[i][7]);
		
			d2[i-1] = [
				{name: data[i][0]},
				{axis: "economy (mpg)", 	value: economy},
				{axis: "cylinders", 		value: cylinders},
				{axis: "displacement (cc)", value: displacement},
				{axis: "power (hp)", 		value: power},  
			   	{axis: "weight (lb)", 		value: weight},
			   	{axis: "acceleration (0-60 mph)(s)", value: acceleration},
			   	{axis: "year", 				value: year}
			   	];
		} // close for
		
		RadarChart.draw("#chart", d2);
	}); // close d3.text
	
	
	// Put values into d object
	
	
	// Example:
	d = [
		 [
			   {axis: "economy (mpg)", value: 13}, 
			   {axis: "cylinders", value: 8}, 
			   {axis: "displacement (cc)", value: 8},  
			   {axis: "power (hp)", value: 4},  
			   {axis: "weight (lb)", value: 9},
			   {axis: "acceleration (0-60 mph)(s)", value:3},
			   {axis: "year", value:79}
			  ],[
			   {axis: "economy (mpg)", value: 9}, 
			   {axis: "cylinders", value: 4}, 
			   {axis: "displacement (cc)", value: 3},  
			   {axis: "power (hp)", value: 13},  
			   {axis: "weight (lb)", value: 10},
			   {axis: "acceleration (0-60 mph)(s)", value:4},
			   {axis: "year", value:83}
			  ],[
			   {axis: "economy (mpg)", value: 25}, 
			   {axis: "cylinders", value: 6}, 
			   {axis: "displacement (cc)", value: 10},  
			   {axis: "power (hp)", value: 15},  
			   {axis: "weight (lb)", value: 20},
			   {axis: "acceleration (0-60 mph)(s)", value:2.5},
			   {axis: "year", value:84}
		 ]
	];

	//RadarChart.draw("#chart", d);
} // close function

function checkValue(value) {
	if(value == NaN) {
		console.log("NaN");
		return 0;
	} else {
		return value;
	} // close else
} // close function