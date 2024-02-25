// primitive datatype

const x = 5;
const y = true;
const a = 'hello';

let z = x;
z = 10
console.log('x =', x);
console.log('z =', z);


// non premitive
const b = {name: 'musfiq'};
const nums = [1, 2, 3]

let num1 = nums;
num1.push(4);
// console.log('num1 =', num1);
// console.log('nums =', nums);

const c = b;
c.age=25;
console.log('c =', c);
console.log('b =', b);

