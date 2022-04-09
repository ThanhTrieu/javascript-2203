// console.log('A');
// setTimeout(()=> {
//     console.log('B');
// }, 0);
// console.log('C');

function myFilter(numbers, fn) {
    if(typeof fn !== 'function'){
        return false;
    }
    let results = [];
    for(const number of numbers) {
        if(fn(number)){
            results.push(number); 
        }
    }
    return results;
}
function isOdd(n) {
    return n % 2 !== 0;
}
function isEven(n) {
    return n % 2 === 0;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(myFilter(numbers, isOdd));
//console.log(myFilter(numbers, isEven));
console.log(myFilter(numbers, item => item % 2 !== 0));

