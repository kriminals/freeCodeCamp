/* Roman Numeral Converter 
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
Code by George Tzinetas @kriminals
*/
function convertToRoman(num) {
	var romanString = "";
	var roman = [
		[1000, "M"],
		[500, "D"],
		[100, "C"],
		[50, "L"],
		[10, "X"],
		[5, "V"],
		[1, "I"]
	];
	for (var i = 0; i < roman.length; i = i + 2) {
		if (Math.floor(num / roman[i][0]) == 9) {

			romanString += roman[i][1] + roman[i - 2][1];
			num -= (9 * roman[i][0]);

		}

		if (Math.floor(num / roman[i][0]) == 4) {

			romanString += roman[i][1] + roman[i - 1][1];
			num -= (4 * roman[i][0]);

		}

		if ((num / roman[i][0] > 0) && (num / roman[i][0] < 4)) {

			romanString += roman[i][1].repeat(num / roman[i][0]);
			num %= roman[i][0];

		}

		if ((num / roman[i][0] > 4) && (num / roman[i][0] < 9)) {

			romanString += roman[i - 1][1] + roman[i][1].repeat((num / roman[i][0]) - 5);
			num %= roman[i][0];

		}


	}


	return romanString;
}
convertToRoman(36);