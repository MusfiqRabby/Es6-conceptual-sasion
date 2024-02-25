// normal function
 function add(x, y){
     return x * y;
}
console.log(add(5, 7));

// arrow function 
const add = (x, y) => x + y;
console.log(add(47, 8));

// arrow single function likhar niyom
const multifly = a =>{
    const b = a * 2;
    return b;
} 
console.log(multifly(10));

// empty perameter ()
const sayHello = () => console.log('hello bro');
sayHello();
