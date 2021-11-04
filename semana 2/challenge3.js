function arrayOfMultiples (num, length) {
  let result = []
  for(let i = num; result.length < length ; i++) {
    result = [...result]
    if(i % num === 0) {
      result.push(i)
    }
  }
  return result
}

arrayOfMultiples(7, 5)
module.exports = arrayOfMultiples;