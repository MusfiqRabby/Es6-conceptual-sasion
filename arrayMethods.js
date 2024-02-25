// forEach,  map, find, filter, reduce;

//for of loop kore 
const numbers1 = [10, 20, 30, 40, 50];
for (const element of numbers) {
    // console.log(element);
}


//forEach kore pai
const numbers = [15, 24, 54, 58, 24]
const item = numbers.forEach((item) => {
    console.log(item);
})

// forEach diye single perameter declear
const add = [54, 87, 62, 79, 10];
add.forEach(item => console.log(item));

//forEach return korena Exp: 
const add1 = [54, 87, 62, 79, 10];
const element = add.forEach(item => item)
console.log(element);