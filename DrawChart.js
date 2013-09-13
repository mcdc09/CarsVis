window.onload = function() {
	
	
	// Read values in from csv
	
	
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

	RadarChart.draw("#chart", d);
} // close function

console.log("Done");