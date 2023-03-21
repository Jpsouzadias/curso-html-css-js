var $teste = document.querySelector('.teste');
console.log('bg:', $teste.style.background);

console.log('computado: ', getComputedStyle($teste).background);

var $p = document.querySelector('p');
console.log($p.offsetHeight, $p.offsetWidth);
console.log($p.offsetLeft, $p.offsetTop);

var $teste2 = document.querySelector('.teste2');
console.log($teste2.offsetLeft, $teste2.offsetTop);

console.log($teste.getBoundingClientRect());