// comment
// console.log('Hello World');

// let name = 'Yasas';
// console.log(name);

// Cannot be a reserved keyword


// let firstName;      //This both are different because js is case sensitive
// let FirstName;      //

// let interestRate = 0.3;
// const interestRate = 0.3;   //if u dont need to reassign use const but if u do use let
// interestRate = 1;
// console.log(interestRate);

// let name = "Yasas";     //string
// let age = 30;           //integer
// let isApproved = true;  //boolean
// let fName = undefined;
// let lName = null;

// js is a dynamic language because the type of the variables can change in the runtime

// let name = 'Yasas';
// let age = 30;
// we can declare an object to store those variables as below

// let person = {
//     name : 'Yasas',
//     age:30
// };
// // Dot notation
// person.name = 'Rajitha';

// // Bracket notation
// person['name'] = 'Rajitha';

// console.log(person);

// let selectedColours = ['red','green'];
// selectedColours[2] = 'blue';
// console.log(selectedColours[0]);
// console.log(selectedColours);

// // js arrays are dynamic means there is no fixed size and we can store multiple data types in a single array
// // array is an object too

// console.log(selectedColours.length);

// performing a task
// function greet(name, lastName){//<= name is a parameter
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('Yasas');//<= name is an argument
// greet('Rajitha');//<= name is an argument
// greet('Yasas', 'Rajitha');

// // calculating a value
// function square(number){
//     return number * number
// }

// let number = square(2);
// console.log(number);

// let x = 10;
// let y = 3;

// console.log(x % y);
// console.log(x ** y);  // x^y

// strict equality (check Type + value)
console.log(1 === 1);
console.log(1 === '1');

// lose equality (check value)
console.log(1 == '1');
console.log(true == '1');