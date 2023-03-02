var btn2 = document.getElementById('btn2');
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
}