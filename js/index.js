"use strict";

// let todos = [
//   { task: "Köp kaffe" },
//   { task: "Köp tidning" },
//   { task: "Brygg kaffe" },
//   { task: "Drick kaffe" },
// ];

// let numbers = [1, 2, 3, 4, 5];
// const buttonElem = document.querySelector("button");

// // addEventListener tar en function som ett argument och detta är en callback
// buttonElem.addEventListener("click", () => {
//   console.log("Hej");
// });

// function handleClick() {
//   console.log("Hej");
// }

// buttonElem.addEventListener("click", handleClick); // Skickar med funktionen som argument

// function greet(name) {
//   console.log(`Hello ${name}!`);
// }

// function start(name, greet) {
//   greet(name);
// }
// start("Christoffer", greet);

// // Higher order functions
// // map(), reduce() och filter()

// // -------------- MAP --------------------

// // Fungerar liknade som en for-of loop
// let id = 0;
// todos.map((todo) => {
//   console.log(todo);
//   todo.id = id;
//   id++;
// });

// // Visuell förklaring av map.metoden, vad som händer "bakom kulisserna"
// function mapTest(callback) {
//   for (let i = 0; i < todos.length; i++) {
//     callback(todos[i]);
//   }
// }

// // todos.mapTest((todo) => {
// //   console.log(todo);
// //   todo.id = id;
// //   id++;
// // });

// console.log(todos);

// // ------------------- REDUCE ---------------------

// let initialValue = 0;

// let sum = numbers.reduce((previousValue, currentValue) => {
//   console.log("previouseValue", previousValue);
//   console.log("currentValue", currentValue);
//   return previousValue + currentValue;
// }, initialValue);

// console.log(sum);

// // ----------------- FILTER ---------------------

// let persons = [
//   { name: "Ada", age: 28 },
//   { name: "Alice", age: 14 },
//   { name: "ChristopherRobin", age: 12 },
//   { name: "Glenn", age: 47 },
// ];

// let filteredPersons = persons.filter((person) => {
//   if (person.age > 20) {
//     return person;
//   }
// });

// console.log(filteredPersons);

// // Samma lösning fast med en for-loop

// let filteredPersons2 = [];

// for (let i = 0; i < persons.length; i++) {
//   if (persons[i].age > 20) {
//     filteredPersons2.push(persons[i]);
//   }
// }

// console.log(filteredPersons);

// -------------------------------------------------------------------------------------

// Övning 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbersForLoop = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
};
console.log("Jämna nummer: ", evenNumbersForLoop(numbers));

let evenNumbersFilter = numbers.filter((number) => {
  if (number % 2 === 0) {
    return number;
  }
});

console.log("Jämna nummer: ", evenNumbersFilter);

// Övning 2
let books = [
  { author: "Oscar Wilde", title: "The importance of being earnest" },
  { author: "Lewis Carroll", title: "Alice in wonderland" },
  { author: "Jules Verne", title: "Around the world in eighty days" },
  { author: "Victor Hugo", title: " The Hunchback of Notre-Dame" },
];

let booksByAuthor = books.filter((book) => book.author === "Jules Verne");
console.log("Författaren: ", booksByAuthor);

// Övning 3
let people = [
  { age: 10, name: "Gun-Britt" },
  { age: 20, name: "Conny" },
  { age: 30, name: "Aurora" },
  { age: 40, name: "Kalle" },
  { age: 55, name: "Max" },
];

let ageSum = people.reduce((acc, obj) => {
  return acc + obj.age;
}, 0);
console.log("Total summan: ", ageSum);

// Övning 4
let numbers2 = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];
let highestNumber = numbers2.reduce((acc, obj) => {
  return Math.max(acc, obj);
});
console.log("Högsta nummret: ", highestNumber);

// Övning 5
let books2 = [
  { author: "Oscar Wilde", title: "The importance of being earnest" },
  { author: "Lewis Carroll", title: "Alice in wonderland" },
  { author: "Jules Verne", title: "Around the world in eighty days" },
  { author: "Victor Hugo", title: " The Hunchback of Notre-Dame" },
];
const getTitles = books2.map((book) => book.title);
console.log("Bok titel: ", getTitles.join(", "));

// Övning 6
let people2 = [
  { age: 10, name: "Gun-Britt" },
  { age: 20, name: "Conny" },
  { age: 30, name: "Aurora" },
  { age: 40, name: "Kalle" },
  { age: 55, name: "Max" },
];

let lookForAgeUnder40 = people2.map((people) => people.age < 40);

console.log("Ålder under 40 år:", lookForAgeUnder40.join(", "));

// Övning 7

let travelGuide = [
  { name: "Sweden", continet: "Europe" },
  { name: "Danmark", continet: "Europe" },
  { name: "Germany", continet: "Europe" },
  { name: "Kongo", continet: "Africa" },
  { name: "Egypt", continet: "Africa" },
  { name: "Thailand", continet: "Asia" },
  { name: "Cambodia", continet: "Asia" },
  { name: "Peru", continet: "South America" },
  { name: "Canda", continet: "North America" },
  { name: "USA", continet: "North America" },
  { name: "South Pole", continet: "Antarctis" },
  { name: "Australia", continet: "Oceanen" },
  { name: "New Zeeland", continet: "Oceanen" },
];

const countryName = travelGuide.map((country) => country.name);
console.log("Skriver ut alla länder: ", countryName.join(", "));

const countryContinet = travelGuide.map((continet) => continet.continet);
console.log("Skriver ut alla kontineter: ", countryContinet.join(", "));

let europeCountries = travelGuide
  .filter((travelGuide) => travelGuide.continet === "Europe")
  .map((country) => country.name);
console.log("Länder i Europa", europeCountries.join(", "));
