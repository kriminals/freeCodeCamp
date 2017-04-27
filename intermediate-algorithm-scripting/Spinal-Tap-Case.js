/**
 * Spinal Tap Case
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 * @author George Tzinetas <gnetas@gmail.com> 
 */
function spinalCase(str) {
  
  return str.replace(/[\s|_]/g, '-').replace(/([a-z])([A-Z])/g, '$1' +'-'+'$2').toLowerCase();
}
spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
