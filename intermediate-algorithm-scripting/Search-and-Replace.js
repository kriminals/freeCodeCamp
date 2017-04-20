/* Search and Replace 
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Code by George Tzinetas @kriminals
*/

function myReplace(str, before, after) {
	var beforeReg = new RegExp(before, 'g');
	var afterReg;
	/^[A-Z]/.test(before) ? afterReg = after.charAt(0).toUpperCase() + after.substr(1) : afterReg = after;
	return str.replace(beforeReg, afterReg);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");