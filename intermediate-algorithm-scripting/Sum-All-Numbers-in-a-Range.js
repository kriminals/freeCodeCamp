/* Sum All Numbers In a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
Code by George Tzinetas @kriminals
*/
function sumAll(arr) {

    var min, max;
    if (arr[0] > arr[1]) {
        min = arr[1];
        max = arr[0];
    } else {
        min = arr[0];
        max = arr[1];
    }
    var sum = 0;
    for (i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);