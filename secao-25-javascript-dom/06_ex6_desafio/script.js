(function(){
    'use strict';
    var paragrafos = document.querySelectorAll('p');
    console.log(paragrafos);

    var x = 0;
    while(paragrafos[x]){
        paragrafos[x].textContent = x + ' - Essa página foi hackeada';
        x++;
    }
})()