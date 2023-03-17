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
        if (rodando) return;
        msClickIniciar = Date.now();
        iniciarCronometro();
        rodando = true;
    }

    function pausar() {
        if(!$cronometro.value) return;
        if (rodando) {
            clearInterval(intervalo);
            msClickPausar = Date.now();
            msTempoDecorrido += (msClickPausar - msClickIniciar);
        } else {
            msClickIniciar = Date.now();
            iniciarCronometro(msTempoDecorrido);
        }
        rodando = !rodando;
    }

    function parar() {
        msClickPausar = 0;
        msClickIniciar = 0;
        msTempoDecorrido = 0;
        rodando = false;
        clearInterval(intervalo);
        $cronometro.value = '';
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
        const MINUTO = 60 * 1000;
        if (ms < 1000) {
            return ms;
        } else if(ms < MINUTO){ 
            var s = ms/1000;
            s = parseInt(s); 
            var c = ms - ( s * 1000); 
            return s + ':' + c;
        } else {
            var m = ms / ( MINUTO );
            m = parseInt(m); 
            return m + ':' + formataMs( ms - m * MINUTO );
        }
    }
})()