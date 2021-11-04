const capitalizeLetters = (str) => {
    //Implementación
    const separed = str.split(" ")
    const array = separed.map((letter) => {

        const spr = letter.split("")
        const firstLetter = spr[0].toUpperCase()
        const curstr = letter.substr(1, letter.length)
        return firstLetter + curstr
    })
    return array.join(' ')
}

module.exports = {
    capitalizeLetters
}