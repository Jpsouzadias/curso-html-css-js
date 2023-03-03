(function(){
    'use strict';
    var maxima = 100;

    var $txtMsg = document.getElementById('msg');
    var $resta = document.getElementById('resta');

    $resta.textContent = maxima;

    $txtMsg.addEventListener('input', checkLength);

    function checkLength(e){
        var numeroLetrasDigitadas = this.value.length;
        $resta.textContent = maxima - numeroLetrasDigitadas;
    }
})()