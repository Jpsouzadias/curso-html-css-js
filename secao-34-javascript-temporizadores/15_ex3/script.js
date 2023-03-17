(function() {
    
    var $cronometro = document.querySelector('#cronometro');
    var $iniciar = document.querySelector('#iniciar');
    var $pausar = document.querySelector('#pausar');
    var $parar = document.querySelector('#parar');

    $iniciar.addEventListener('click', iniciar);
    $pausar.addEventListener('click', pausar);
    $parar.addEventListener('click', parar);

    var intervalo = null;
    var msClickIniciar = 0;
    var msClickPausar = 0;
    var msTempoDecorrido = 0;
    var rodando = false;

    function iniciar() {
        msClickIniciar = Date.now();
        iniciarCronometro();
        rodando = true;
    }

    function pausar() {
        if (rodando) {
            rodando = false;
            clearInterval(intervalo);
            msClickPausar = Date.now();
            msTempoDecorrido += (msClickPausar - msClickIniciar);
        } else {
            rodando = true;
            msClickIniciar = Date.now();
            iniciarCronometro(msTempoDecorrido);
        }
    }

    function parar() {
        
    }

    function iniciarCronometro(TempoDecorrido) {
        var _ms = TempoDecorrido || 0;
        intervalo = setInterval(function () {
            var msAgora = Date.now();
            var diferença = msAgora - msClickIniciar;
            $cronometro.value = formataMs(diferença + _ms);
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

})()