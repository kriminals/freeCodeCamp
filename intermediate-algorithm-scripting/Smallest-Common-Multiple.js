function smallestCommons(arr) {
	let sortedArr = arr.sort();
	let min = sortedArr[0];
	let max = sortedArr[1];
	let valuesArray = [];
	for (let i = min; i < max; i++) {
		valuesArray.push(i);
	}
	let i = 1;
	while( !valuesArray.every(curr => (i * max) % curr === 0) ) {
		i++;
	}
	return i * max;
}

smallestCommons([1,5]);
