const reverseString = (str) => {
    //validar que str sea un string
    if(typeof str === 'string' && str.length > 1 && str.length < 15) {

       return str.split('').reverse().join('')

    }
        throw new Error("Argumento no valido")
}

reverseString("Colombia")

module.exports = {
    reverseString
}