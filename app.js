myArray = [2, 4, 5, 7, 2];
let a = myArray[0];
let b = myArray[1];
let c = myArray[2];
let d = myArray[3];
let e = myArray[4];
let y = a + b + c + d + e;
console.log(y);
// console.log(myArray.length);
console.log(y / myArray.length);
// 2.
const book = {
  title: "le petit prince,",
  author: "Exupery,",
  yearPublished: 1943,
};
console.log(
  book.title + " by " + book.author + " was published in " + book.yearPublished
);
// console.log (${book.title} by ${book.author} was published in ${book.yearPublished})

let result =
  book.title + " by " + book.author + " was published in " + book.yearPublished;
console.log(result);

// 3. მე-2 დავალებაში შექმნილ ობეიქტში შეცვალეთ yearPublished
//  მნიშვნელობა და კონსოლში გამოიტანეთ დარედაქტირებული ობიექტი.

book.yearPublished = 1944;
console.log(book);

// 4. შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი
// არის ობიექტი შემდეგი property-ებით: name, age, და score. კონსოლში გამოიტანეთ შექმნილი მასივი
const people = [
  {
    name: "Mariam",
    age: 24,
    score: 92,
  },
  {
    name: "Natia",
    age: 20,
    score: 95,
  },
  {
    name: "Tatia",
    age: 29,
    score: 90,
  },
];
console.log(people);
