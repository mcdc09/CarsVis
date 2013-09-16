function findMin(d) {
	var out = [];
	var tempMax = d[0];
	
	for(var i = 0; i < d.length; i++) {
		if(tempMax > d[i]) {
			tempMax = d[i];
		} // close if
	} // close for
	out = tempMax;

	return out;
} // close findMax