/*
 * Drop the elements of an array (first argument), 
 * starting from the front, until the predicate (second argument) returns true.
 * The second argument, func, is a function you'll use 
 * to test the first elements of the array to decide if you should drop it or not.
 * Return the rest of the array, otherwise return an empty array.
 */
function dropElements(arr, func) {
	let i = 0;
	while (!func(arr[i])) {
		i++;
	}
	return arr.slice(i) || [];
}
