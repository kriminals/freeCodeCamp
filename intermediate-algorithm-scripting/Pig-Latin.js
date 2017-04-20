/* Pig Latin 
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
Code by George Tzinetas @kriminals
*/
function translatePigLatin(str) {
	var vowels = ['a', 'e', 'o', 'i', 'u', 'y'];
	var result = /[aeoiuy]/.exec(str);
	var minVowel = result.index;
	if (minVowel == 0) return str + "way";
	return str.slice(minVowel) + str.slice(0, minVowel) + "ay";
}

translatePigLatin("consonant");