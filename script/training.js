// let num = 50;

// for (let i = 1; i > 0; ++i) {
//     if (i ===10) {
//         //break; //Закакнчивает на 6
//         continue; //Пропускает 6
//     }
//     console.log(i); //Выводим i
    
    
//     //console.log(num);
//     //num++; //Увеличиваем num
// }

//Callback function
// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log('1');
//     }, 1000); //Do function() after 1000ms
// }
// first();

// function second() {
//     console.log(2);
// }
// second();

// function learnJS(text, calllback) {
//     console.log(`I learn ${text}`);
//     calllback();
// }
// learnJS('javaScript', function() {
//     console.log('I complete this lesson');
// });


//Objects, destructuring object

// const options = {
//     name: 'test',
//     width: 1024,
//     hight: 1024,
//     colors: {
//         bolder: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {  //Elem of options
//         console.log('Test'); 
//     }
// };

// options.makeTest();

// const {bolder, bg} = options.colors;

// console.log(bolder);

//console.log(Object.keys(options).length); //How many elem in options
//delete options.name;

//console.log(options); //Name has been deleted

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`property ${i} has value ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//     console.log(`property ${key} has value ${options[key]}`);
//     counter++;
// }}

// console.log(counter);  //How many cycles were


//Array
 
const arr = [1, 13, 2, 10, 6, 8];

arr.sort(compare);
console.log(arr);  //Sort by first digit

function compare(a, b) {  //Way to normal sort
    return a - b;
}

//arr.pop();  //Delete last elem
//arr.push(10);  //Add a new elem to the end

//arr.shift(0);  //Add a new elem to the beginning
//arr.unshift();  //Delete first elem



// arr[99] = 10; //94 empty items
// console.log(arr.length);  //Index last elem + 1
// console.log(arr);

// arr.forEach(function (item, i, array) {  //Enumeration array
//     console.log(`${i}: ${item} внутри массива ${array}`);
// });


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }
const str = prompt('', '');
const products = str.split(', ');

console.log(products);