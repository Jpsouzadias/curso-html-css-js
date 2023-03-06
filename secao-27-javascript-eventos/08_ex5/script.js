(function(){
    'use strict';
    var $btns = document.getElementsByTagName('button');

    for(var i = 0; i < $btns.length; i++){
        $btns[i].addEventListener('click', clicou);
    }

    function clicou(){
        console.log(this.textContent);
    }
})()
