const person = {
    name: 'Hero alom',
    age: 34,
    phone: '5421584221',
    p: [1, 2, 3, 4],
    address:{
        zilla: 'mymensingh',
        village: 'Bolbona'
    },
    ocupation: {
        College : 'Govt Titumir college',
        place: 'Mohakhali',
    }
}

const {ocupation:{College:Thikana}} = person;
const {ocupation:{place}} = person;
console.log(Thikana);


// const {address:{zilla}} = person;
// const {address:{village}} = person
//  console.log(zilla);
// console.log(village);


//  const {name,...hello} = person
//  console.log(hello);
//  console.log(name);

// const {name, age, phone, address} = person;

// const {zilla} = address;
// const {village} = address;
// console.log(name);
//  console.log(age);
//  console.log(address);

// console.log(village);