(function(){
    'use strict';

    var $txtMsg = document.getElementById('msg');
    var $resta = document.getElementById('resta');
    var $restaContainer = document.getElementById('restaContainer');
    var maxima = $txtMsg.maxLength;

    $resta.textContent = maxima;

    $restaContainer.style.display = 'block';

    $txtMsg.addEventListener('input', checkLength);

    function checkLength(e){
        var numeroLetrasDigitadas = this.value.length;
        $resta.textContent = maxima - numeroLetrasDigitadas;
    }
})()