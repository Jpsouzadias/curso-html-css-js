var n = 0;

function somaUm(){
    console.log('n', ++n);

    if (n >= 10) {
        clearInterval(intervalo);
    }
}

var timeout = setTimeout(somaUm, 1000);
alert(timeout);

var intervalo = setInterval(somaUm, 1000);
console.log(intervalo);

var str = '';
var d = document.querySelector('div');
var timeoutTeste = setTimeout(function(){

    for(var i = 0; i < 1000; i++){
    str += 'i: ' + i + ' -- ';
    d.textContent += str;
    }
}, 3000)