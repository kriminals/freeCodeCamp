/* Wherefore art thou
Make a function that looks through an array of objects(first argument) and returns an array 
of all objects that have matching property and value pairs(second argument).
Each property and value pair of the source object has to be present in the object from the collection
if it is to be included in the returned array.
Code by George Tzinetas @kriminals
*/

function whatIsInAName(collection, source) {
	
	var arr = [];
	
	arr = collection.filter(function(curVal) {
		for (var prop in source) {
			if (!curVal.hasOwnProperty(prop) || (curVal[prop] !== source[prop])) return false;

		}
		return true;
	});

	return arr;
}

whatIsInAName([{
	first: "Romeo",
	last: "Montague"
}, {
	first: "Mercutio",
	last: null
}, {
	first: "Tybalt",
	last: "Capulet"
}], {
	last: "Capulet"
});