
	var width = 960,
		height = 500,
		centered;
		
// 	var d2 = [];
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
		
		
		
	}); // close d3.text
	

	var projection = d3.geo.albersUsa()
		.scale(1070)
		.translate([width / 2, height / 2]);

	var path = d3.geo.path()
		.projection(projection);

	var svg = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height);

	svg.append("rect")
		.attr("class", "background")
		.attr("width", width)
		.attr("height", height)
		.on("click", clicked);

	var g = svg.append("g");

	d3.json("us.json", function(error, us) {
	  g.append("g")
		  .attr("id", "states")
		.selectAll("path")
		  .data(topojson.feature(us, us.objects.states).features)
		.enter().append("path")
		  .attr("d", path)
		  .on("click", clicked);

	  g.append("path")
		  .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
		  .attr("id", "state-borders")
		  .attr("d", path);
	}); // close d3.json

	function clicked(d) {
	  var x, y, k;

	  if (d && centered !== d) {
		var centroid = path.centroid(d);
		x = centroid[0];
		y = centroid[1];
		k = 4;
		centered = d;
	  } else {
		x = width / 2;
		y = height / 2;
		k = 1;
		centered = null;
	  }

	  g.selectAll("path")
		  .classed("active", centered && function(d) { return d === centered; });

	  g.transition()
		  .duration(750)
		  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
		  .style("stroke-width", 1.5 / k + "px");
	} // close clicked()
	
	function checkValue(value) {
		if(value == NaN) {
			console.log("NaN");
			return 0;
		} else {
			return value;
		} // close else
	} // close function