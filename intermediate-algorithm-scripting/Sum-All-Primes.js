function sumPrimes(num) {
    // Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
    let integersList = [];
    for (let k = 2; k <= num; k++) {
        integersList.push(k);
    }
    return markOut(integersList).reduce((sum, curr) => sum + curr);
}

// To find all the prime numbers less than or equal to 
// a given integer n by Eratosthenes' method 
function markOut(list, r = 0) {
    let newList = list.filter(p => !(p / list[r] > 1 && p % list[r] == 0));
    if (list.length == newList.length) return newList;
    r++;
    return markOut(newList, r);
}
console.log(sumPrimes(10));
