// define the string
function changeCase(fox){
  let change = '';
   for (let i = 0; i < fox.length; i++) {
// if the character in the string is uppercase convert it to lowercase
    if (fox[i] === fox[i].toUpperCase()) {
      change += fox[i].toLowerCase();
// if the character in the string is lowercase convert it to uppercase
    } else {
      change += fox[i].toUpperCase();
    }
  }
  return change;
}
console.log(changeCase('The Quick Brown Fox'));

// we can use the replace iterator to swap the case
// let fox = 'The Quick Brown Fox'
// let newFox = fox.replace('The Quick Brown Fox', 'tHE qUICK bROWN fOX')
// console.log(newFox);