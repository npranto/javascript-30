const challenges = require('./challenges');

const inventors = [
    { first: 'Albert',      last: 'Einstein',       year: 1879, passed: 1955 },
    { first: 'Isaac',       last: 'Newton',         year: 1643, passed: 1727 },
    { first: 'Galileo',     last: 'Galilei',        year: 1564, passed: 1642 },
    { first: 'Marie',       last: 'Curie',          year: 1867, passed: 1934 },
    { first: 'Johannes',    last: 'Kepler',         year: 1571, passed: 1630 },
    { first: 'Nicolaus',    last: 'Copernicus',     year: 1473, passed: 1543 },
    { first: 'Max',         last: 'Planck',         year: 1858, passed: 1947 },
    { first: 'Katherine',   last: 'Blodgett',       year: 1898, passed: 1979 },
    { first: 'Ada',         last: 'Lovelace',       year: 1815, passed: 1852 },
    { first: 'Sarah E.',    last: 'Goode',          year: 1855, passed: 1905 },
    { first: 'Lise',        last: 'Meitner',        year: 1878, passed: 1968 },
    { first: 'Hanna',       last: 'Hammarström',    year: 1829, passed: 1909 }
];
const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig',
    'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd',
    'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin',
    'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
];



// Challenge 1: Filter the list of inventors for those who were born in the 1500s
// console.log( challenges.inventorsBornIn1500s(inventors) );

// Challenge 2: Return a list with each inventor's first and last name, i.e. [John Smith]
// console.log( challenges.inventorsFirstAndLastNames(inventors) );

// Challenge 3: Sort the inventors by birth year, oldest to youngest
// console.log( challenges.inventorsSortedByBirthYearOldestToYoungest(inventors) );

// Challenge 4: How many years did all the inventors live?
// console.log( challenges.inventorsTotalYearsLived(inventors) );

// Challenge 5: Sort the inventors by years lived
// console.log( challenges.inventorsSortedByYearsLived(inventors) );

// Challenge 6: Sort the inventors by last name
// console.log( challenges.inventorsSortedByLastName(inventors) );

// Challenge 7: Sort the people by last name
// console.log( challenges.peopleSortedByLastName(people) );

// Challenge 8: Sum up the instances of all of these transportation
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// console.log( challenges.sumUpInstancesOfTransportation(data) );