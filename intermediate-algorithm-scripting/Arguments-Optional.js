/*
 *Create a function that sums two arguments together. 
 *If only one argument is provided, then return a function 
 *that expects one argument and returns the sum.
 */
	
function addTogether() {
	var args = [...arguments];
	if (args.some(curr => typeof curr !== 'number')) return undefined; 
	else return (args.length == 1? 
		function (y) {return (typeof y === "number"? args[0] + y: undefined);}
		: args.reduce((sum, curr) => sum + curr));
}
addTogether(2,3);
