"use strict";

let a = 5,
    b = a;
b = b + 5;

console.log(a);
console.log(b);

const obg = {
    a: 5,
    b: 1
};

// const copy = obg;  //Link

// copy.a = 10;

// console.log(obg);
// console.log(copy);


function copy(mainObg) {  //Function of copy obgect (NOT INSERTED)
    let obgCopy ={};
     let key;
     for (key in mainObg) {
         obgCopy[key] = mainObg[key];
     }
     return obgCopy;
}
 const numbers = {
     a: 2,
     b: 5,
     c: {
         x: 7,
         y: 4
     }
 };

 //const newNumbers = copy(numbers);

 //newNumbers.a = 10;

 console.log(numbers);
 //console.log(newNumbers);

 const add = {
     d: 17,
     e: 20,
 };
 console.log(Object.assign(numbers, add));  //To 'numbers' add 'add'

 const clone = Object.assign({}, add);
 clone.d = 20;

 console.log(add);
 console.log(clone);