function findMax(d) {
	var temp = d[0][2].population;
	
	for(var i = 0; i < d.length; i++) {
		if(temp < d[i][2].population) {
			temp = d[i][2].population;
		} // close if
	} // close for

	return temp;
} // close findMax