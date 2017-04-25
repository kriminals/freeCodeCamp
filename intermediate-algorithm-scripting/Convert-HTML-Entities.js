/** 
 * Convert HTML Entities
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
 * in a string to their corresponding HTML entities.
 * @author George Tzinetas <gnetas@gmail.com> 
 */
function convertHTML(str) {
	function replacer(match) {
		htmlEnt = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'\"': '&quot;',
			'\'': "&apos;"
		};
		return htmlEnt[match];

	}
	return str.replace(/[&<>"']/g, replacer);
}

convertHTML("Dolce & Gabbana");