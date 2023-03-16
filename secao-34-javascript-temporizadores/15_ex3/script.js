(function() {
    
    var $cronometro = document.querySelector('#cronometro');
    var $iniciar = document.querySelector('#iniciar');
    var $pausar = document.querySelector('#pausar');
    var $parar = document.querySelector('#parar');

    $iniciar.addEventListener('click', iniciar);
    $pausar.addEventListener('click', pausar);
    $parar.addEventListener('click', parar);

    var msClickIniciar = 0;

    function iniciar() {
        msClickIniciar = Date.now();
        iniciarCronometo();
    }

    function iniciarCronometo() {
        setInterval(function () {
            var msAgora = Date.now();
            var diferença = msAgora - msClickIniciar;
            $cronometro.value = diferença;
        }, 100);
    }

    function pausar() {
        
    }

    function parar() {
        
    }
})()