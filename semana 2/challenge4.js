function landMass(contry, terri) {
    const superficie = 148940000
    //Implementación
    // console.log(superficie * terri/100)
    console.log(Math.floor(superficie * terri))
}

landMass("Rusia", 17098242)
module.exports = landMass;