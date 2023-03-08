(function (){
    'use strick';
    window.addEventListener('load', init);
    
    function init(){
        var $paragrafos = document.querySelectorAll('p');

        var x = 0;
        while($paragrafos[x]) {
            $paragrafos[x].innerHTML = formatarTexto($paragrafos[x].innerHTML);
            x++;
        }
    }

    function formatarTexto(texto){
        var numeroMaximoCaracteres = 200;
        if(texto.length <= numeroMaximoCaracteres) 
            return texto;
        var subTexto = texto.slice(0, numeroMaximoCaracteres);
        return subTexto + '...';    
    }
})()