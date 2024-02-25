//find()
const element = [41, 20, 14, 60, 32];
const x = element.find(item => item === 20)
// console.log(x);



// filter()
const numbers = [80, 24, 52, 65, 40];
const y = numbers.filter(item => item < 10 );
// console.log(y);

// even numbers prints 
const even = [45, 18, 65, 20, 10];
const z = even.filter(item => item % 2 === 0 );
// console.log(z);
// Odd number 
const odd = [45, 18, 65, 20, 10];
const s = even.filter(item => item % 2 === 1 );
// console.log(s);


// reduce kora
const nums = [98, 47, 52, 35, 40, 65];
const sum = nums.reduce((pre, crr) => pre + crr, 0 )
// console.log(sum);

const nums2 = [4, 10]
const multifly = nums2.reduce((pre, crr)=> pre * crr, 2) 
console.log(multifly);