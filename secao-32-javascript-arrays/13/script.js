var arr = ['1',2,3,4,5,'oi',6,'7', 2];

var sohNumeros = arr.every(function(el) {
    return typeof el === 'number';    
});
console.log(sohNumeros);

var aoMenosUmNumero = arr.some(function(el) {
    return typeof el === 'number';    
});
console.log(aoMenosUmNumero);

var numeros = arr.filter(function (el, i, arr) {
    return typeof el === 'number';
});
console.log(numeros);

arr.forEach(function (el, i, arr){
    console.log('el=', el, '  |  i=', i, '  |  i=', arr.toString())
})

var posicaoStr1 = arr.indexOf('oi', 6);
console.log('posicaoStr1', posicaoStr1);

var posicaoStr2 = arr.indexOf(2, 5);
console.log('posicaoStr2', posicaoStr2);

var posicaoStr3 = arr.lastIndexOf(2, 5);
console.log('posicaoStr3', posicaoStr3);

console.log(numeros);
numeros = numeros.map(function(el, i, arr){
    return el * i;
});
console.log(numeros);

var arr2 = arr.concat(numeros, 'ola', 'arr2', 100);
console.log(arr2);

var str = arr2.join(' -- ');
console.log(str);

var str1 = arr2.toString();
console.log(str1);

arr.push('novo', 'item');
console.log(arr);

var ultimoItem = arr.pop();
console.log(ultimoItem);
console.log(arr);

var primeiroItem = arr.shift();
console.log(typeof primeiroItem)
console.log(arr);

arr.unshift(true, false, 'unshift');
console.log((arr));