const challenges = require('./challenges');

const people = [
    { name: 'Wes',  year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv',  year: 1970 },
    { name: 'Lux',  year: 2015 }
  ];
  const comments = [
    { text: 'Love this!',                   id: 523423 },
    { text: 'Super good',                   id: 823423 },
    { text: 'You are the best',             id: 2039842 },
    { text: 'Ramen is my fav food ever',    id: 123523 },
    { text: 'Nice Nice Nice!',              id: 542328 }
  ];



// Challenge 1: Check to see if at least one person within 'people' is 19 years old
// console.log( challenges.isAtLeastOnePerson19(people) );

// Challenge 2: Check to see if everyone is 19 within 'people' 
// console.log( challenges.isEveryone19(people) );

// Challenge 2: Find a comment with a specific id
// console.log( challenges.findCommentWithSpecificId(comments, 2039842) );

// Challenge 3: Find the index of a comment with a specific id and delete it from the comments
// console.log( challenges.findIndexOfCommentWithSpecificIdAndDeleteIt(comments, 123523) )