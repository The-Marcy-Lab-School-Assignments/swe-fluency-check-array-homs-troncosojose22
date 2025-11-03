// For all of the following problems, use an array higher order method to solve the problem.
// You should not use any for or while loops!
// For each section, we've provided some sample data for you to test your function with.

/* -------------------------------------------- */
/* --------------STRING PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];

// Problem 1
const printEveryWord = (words) => {
    words.forEach((word) => console.log(word))
};

// Problem 2
const getStringLengths = (strings) => {
  return strings.map((string) => string.length);
};

// Problem 3
const sortWordsZtoA = (words) => {
  words.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
};

/* -------------------------------------------- */
/* --------------NUMBER PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];

// Problem 4
const getEvenNumbers = (nums) => {
  return nums.filter((num) => num % 2 === 0);
};
// Problem 5
const getLargestNumber = (numbers) => {
  // this is hardcoded and wouldn't work with a different array of numbers
  return numbers.find((number) => number > 9);

  // I was going to sort the array in ascending order and then return the last index
  // But that would make the function impure

  /* Could also use forEach and store the largest number we have seen in a variable

  let largestNumber = 0;
  numbers.forEach((number) => {
    if (number > largestNumber) {
      largestNumber = number;
    }
    })
  return largestNumber;
    
  */
};

/* -------------------------------------------------- */
/* --------------OBJECT ARRAY PROBLEMS--------------- */
/* -------------------------------------------------- */

const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];

// Problem 6
const printUserNamesAndScores = (users) => {
  users.forEach((user) => console.log(`${user.name} scored ${user.score} points`))
};


// Problem 7
const getUserNames = (users) => {
  return users.map((user) => user.name);
};


// Problem 8
const getActiveUsersUnder30 = (users) => {
  return users.filter((user) => user.age < 30 && user.isActive);
};


// Problem 9
const getTotalScore = (users) => {
  return users.reduce((accumulator, user) => accumulator + user.score, 0)
};

// Problem 10
const sortUsersByScoreDescending = (users) => {
  return users.sort((userOne, userTwo) => userTwo.score - userOne.score);
}
sortUsersByScoreDescending(sampleUsers);
console.log(sampleUsers);
