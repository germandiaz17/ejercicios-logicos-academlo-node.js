const reverseInt = (number) => {
    //Implementación
    if(typeof number === "number") {

        if(number < 1) {
            const absolut = Math.abs(number)
            const strNegative = String(absolut)
            const strNegativeInvert = strNegative.split('').reverse().join('')
            return parseInt(`-${strNegativeInvert}`)
        }else{
            const str = String(number)
            const strInvert = str.split('').reverse().join('')
            return parseInt(strInvert)
        }
    }

    throw new Error("argumento invalido")
}

reverseInt(-73312)

module.exports = {
    reverseInt
}