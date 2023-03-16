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
            $cronometro.value = formataMs(diferença);
        }, 100);
    }

    function formataMs(ms){
        /* 
        ms = 900 => 900
        ms = 1500 => 1:500
        ms = 59000 => 59:000
        ms = 61500 => 1:1:500 
        */

        if (ms < 1000) {
            return ms;
        } else if(ms < 60000){ // 30500
            var s = ms/1000;
            s = parseInt(s); // 30
            var c = ms - ( s * 1000); //30500 -  30  * 1000 = 500
            return s + ':' + c;
        } else {
            var m = ms / ( 60000 );
            m = parseInt(m); // 1
            var s = ms / 1000 - ( m * 60 ); //61.5 = 1.5
            s = parseInt(s); // 1
            var c = ms - (s * 1000) - ( m * 60 * 1000 );
            return m + ':' + s + ':' + c;
        }
    }

    function pausar() {
        
    }

    function parar() {
        
    }
})()