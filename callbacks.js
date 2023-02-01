const valoresN =[10,12,15,13,21]
const funcionCallback =(valor) =>{
    if(valor%2 === 0 ) {
        return valor
    } else {
        return "no es par"
    }
} 
const evaluacionPares = valoresN.map(funcionCallback);
console.log (evaluacionPares);

Array.prototype.miFuncionMap = function (callback){
    let nuevoArray = [];
    for(let i = 0; i < this.length; i++){
        let valorM = callback(this[i])
        nuevoArray.push(valorM)
    }
    return nuevoArray;
}
let pruebaA = [10, 9, 8, 7, 6, 5];
let nValues = pruebaA.miFuncionMap(x=> x+1)
console.log(nValues)
const dividir = (dividendo, divisor) => {
    return new Promise ((resolve, reject) =>{
        if(divisor === 0){
        reject("no se puede divir")
    } else {
        resolve(dividendo/divisor)
    }
    })
}
const funcionAsimc = async() =>{
    try{
        let resultado = await dividir(10,5)
        console.log(resultado)
    } catch(error){
        console.log(error)
    }
}
funcionAsimc();