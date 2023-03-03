(function(){
    'use strict';

    var $txtMsg = document.getElementById('msg');
    var $resta = document.getElementById('resta');
    var $restaContainer = document.getElementById('restaContainer');
    var maxima = $txtMsg.maxLength;

    function mostrarContainerResta(){
        $restaContainer.style.display = 'block';
    }

    mostrarContainerResta();
    mostrarCaracteresFaltantes(maxima);

    $txtMsg.addEventListener('input', checkLength);

    function checkLength(e){
        var numeroLetrasDigitadas = this.value.length;
        var caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);
        mostrarCaracteresFaltantes(caracteresRestantes);
    }

    function mostrarCaracteresFaltantes(n){
        $resta.textContent = n;
    }

})()