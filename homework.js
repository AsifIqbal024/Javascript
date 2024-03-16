let A = [50,107, 'jack' , 83 , 'killer' , 'son' , true];


// 1. Just show the strings in a new array .
const B = A.filter(strings=>typeof strings ==='string')
console.log (B)


// 2. Create a new array from numbers and sort them .
let C = A.filter(numbers=>typeof numbers ==='number')
let sortedNumber = C.sort((a,b) => a - b) ;
console.log (sortedNumber)

// 3. Make the string array reverse .
const reversedArray = B.reverse () ;
console.log (reversedArray)

// 4. Combine both array of numbers and strings .
const combinedArray = sortedNumber.concat(reversedArray)
console.log(combinedArray)

// 5. Delete 3 items from the 6th item from the combines array .



// 6. Show elements from A whch are less than 100 .



// 7. From string array remove the last letter and add word 'str' before each of them .



