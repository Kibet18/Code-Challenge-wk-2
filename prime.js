// define array with intergers of 1-10
const numbers = [1,2,3,4,5,6,7,8,9,10];
// define function of primeNumbers which takes a number num as input and checks if it's a prime number
function primeNumbers(num) {
//iterate through numbers starting from 2 up to the number itself (exclusive) and checks if num is divisible by any of those numbers. 
      for (let i = 2; num > i; i++) {
        if (num % i === 0) {
          return false;
      }
    }
    return num > 1;
};
//  usefilter method on the numbers array, passing the primeNumbers

console.log(numbers.filter(primeNumbers));