function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  
  for (let num of array) {
    // console.log(Array.isArray(num))
    if (Array.isArray(num)) {
        sum += sumItems(num) 
    } else {
      sum += num      
    }
  }
  console.log(sum)
  return sum
}

sumItems([[1, 2, [[3], 4]], 5, []])

// console.log(sumItems([1,2,[1,2]]))


module.exports = sumItems;