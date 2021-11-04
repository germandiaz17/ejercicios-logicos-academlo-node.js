function divisibleByLeft(n) {
    let result = [false]
    //Implementación
    const arrayNumber = [...n+''].map(n=>+n)
    for(let i = 1; i < arrayNumber.length; i++) {
        if(arrayNumber[i] % arrayNumber[i - 1] !== 0 ) {
            result.push(false)
        }else {
            result.push(true)
        }
    }
    console.log(result)
    return result
}

divisibleByLeft(73312)
module.exports = divisibleByLeft;