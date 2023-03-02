/* var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3')

btn2.onclick = clicar();

function clicar() {
    alert('clicou');

    return function() {
        alert('clicou2');
    }
}

btn3.addEventListener('click', function(){
    alert('clicou com DOM level 2');
})

btn3.addEventListener('click', function(){
    alert('clicou com DOM level 2 com outro evento');
})

btn3.onclick= function () {
    alert('ola');
}

btn3.onclick= function () {
    alert('mundo');
} */

var $d1 = document.querySelector('#d1');
var $d1Span = document.querySelector('#d1 span');

$d1.addEventListener('click', function () {
    console.log('click no $d1');    
}, true);

$d1Span.addEventListener('click', function () {
    console.log('click no $d1Span');    
}, true);

document.addEventListener('click', function () {
    console.log('clicou no document');
}, true);