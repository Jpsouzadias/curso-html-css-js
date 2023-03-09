var arr = ['1j',2,3,4,5];

var sohNumeros = arr.every( function (el){
    return typeof el === 'number';
});
console.log(sohNumeros);

var aoMenosUmNumero = arr.some( function (el){
    return typeof el === 'number';
});
console.log(aoMenosUmNumero);