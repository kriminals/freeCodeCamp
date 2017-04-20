/* Missing letters 
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
Code by George Tzinetas @kriminals
*/
function fearNotLetter(str) {
	var i = 0;
	while (i < str.length - 1) {
		if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
			return String.fromCharCode(str.charCodeAt(i) + 1);
		}
		i++;
	}
	return undefined;
}

fearNotLetter("abce");