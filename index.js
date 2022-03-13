// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         return true
//       } 
//     }
//   } return false
// } 
  
function hasTargetSum(array, target) {
  const seenNumbers = {}

  for (let number of array) {
    const complement = target - number;
    if (complement in seenNumbers) return true
    seenNumbers[number] = true
  }
  return false
}

/* 
 0(n**2)
*/

/* 
  iterate across array
  iterate across rest of array
  if array num + rest of array num = target return array
*/
  
/*
  look at each number in array
  look at the rest of the numbers in array
  see if sum is equal to given target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
