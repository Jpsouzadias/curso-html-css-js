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

$d1.addEventListener('click', function(e){
    console.log('click no $d1'); 
    e.stopPropagation();  
}, false);

$d1Span.addEventListener('click', function(){
    console.log('click no $d1Span');    
}, false);

document.addEventListener('click', function(e){

    console.log('clicou no document');
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(this); 
}, false);

var $ul = document.querySelector('ul');
var $lis = document.querySelectorAll('li');

/* var x = 0;
while ($lis[x]){
    $lis[x].addEventListener('click', function(e){
        e.stopPropagation();
        console.log('clicou na li');
    })
    x++;
} */

$ul.addEventListener('click', function(e){
    e.stopPropagation();
    console.log(this);
    console.log(e.target);
    console.log(e.currentTarget)

    console.log(e.target.nodeName);
    if(e.target.nodeName === 'LI'){
        alert('clicou na LI')
    }
})
