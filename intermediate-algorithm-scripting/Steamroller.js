/*
 * Flatten a nested array. You must account for varying levels of nesting.
 */

function steamrollArray(arr) {
	var flatArr = [];
	function flattenArray(arr) {

		if (Array.isArray(arr)) {
			for (var i in arr) {
				flattenArray(arr[i]);
			}
		} else
			flatArr.push(arr);

	}
	arr.forEach(flattenArray);
	return flatArr;
}
console.log(steamrollArray([[["a"]], [["b"]]]));


