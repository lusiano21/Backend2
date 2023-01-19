var numero = 10;
(function(){
    var numero = 20;
    console.log(numero);
    if(true){
        var numero = 30;
        numero =40;
        console.log(numero)
    }
    console.log(numero)
})()
console.log(numero);