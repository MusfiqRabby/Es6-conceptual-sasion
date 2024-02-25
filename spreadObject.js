const person = {
    name: 'Hero alom',
    age: 34,
    phone: '5421584221',
    address: 'bari nai',
    p: [1, 2, 3, 4]
}

const person1 = {...person};
person1.email = 'hello@gmail.com';
console.log(person);
console.log(person1);