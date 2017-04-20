/* Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.
Code by George Tzinetas @kriminals
 */

function diffArray(arr1, arr2) {
	return arr1.filter(item => !arr2.includes(item))
		.concat(arr2.filter(item => !arr1.includes(item)));
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);