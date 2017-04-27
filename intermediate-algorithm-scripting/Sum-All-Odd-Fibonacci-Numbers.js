/*
 * Sum All Odd Fibonacci Numbers
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * @author George Tzinetas <gnetas@gmail.com> 
 */
function sumFibs(num) {
    var fibArr = [1,1];
    var fibNum = fibArr[0] + fibArr[1];
    
    while (fibNum <= num) {
        fibArr.push(fibNum);
         fibNum = fibArr[fibArr.length-1] + fibArr[fibArr.length-2];
    }

    return fibArr.reduce((acc, curr) => (curr % 2 !== 0 ? acc + curr : acc));
}

console.log(sumFibs(1000));