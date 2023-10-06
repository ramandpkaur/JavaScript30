const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, 
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, 
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, 
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, 
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, 
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, 
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }, 
];

// Filter inventors born in the 1500s
const inventorList1 = inventors.filter((inventor)=> (inventor.year >= 1500 && inventor.year < 1600));
console.table(inventorList1);

// Find the full name of the inventors
const inventorList2 = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.log(inventorList2);

// Sort inventors by their Birth year
const ascendingList = inventors.sort((a,b) => (a.year>b.year)?1:-1);
console.log(ascendingList);

// Find age of all the inventors altogether
const totalAge = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);s
}, 0);
console.log(totalAge);

// Sort inventors by years lived
const inventorList3 = inventors.sort((a,b) => (a.passed-a.year > b.passed-b.year) ? 1 : -1);
console.log(inventorList3);

// // Select all links in aa random website
//   const category = document.querySelector('.mw-category');
//   const links = category.querySelectorAll('a');
//   // We cannot use map to find the link since querySelectorAll returns us a NOdeList instead of an array. And we only have forEach in NodeList
//   // Se we can convert the NodeList to Array using Array.from() or spread operator
//   const linksArray = Array.from(links);

//   const de = linksArray
//               .map((link)=> link.textContent)
//               .filter(streetName => streetName.includes('de'));


// Sort people array based on firstname
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hailaire', 'Bellow, Soul', 'Benchlay, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington. Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Llyod', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra,Yogi', 'Berry, Halle', 'Berlin, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const sortedArray = people.sort((a, b)=> {
  const [aLast, aFirst] = a.split(', ');
  const [bLast, bFirst] = b.split(', ');
  return (aFirst > bFirst) ? 1 : -1;
});
console.log(sortedArray);

// Sum up the instances of array elements
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',  'walk', 'car', 'van', 'car', 'truck'];

const transport = data.reduce((obj, item)=> {
  if(!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;

  return obj;
}, {});
console.log(transport);