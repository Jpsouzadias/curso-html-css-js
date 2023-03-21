(function() {
    
    window.addEventListener('scroll', destacaMenu);
    var $menu = document.querySelector('.nav');
    var $links = $menu.querySelectorAll('li a');

    function destacaMenu() {
        var positions = [];
        for(var i = 0; i < $links.length; i++){
            positions[i] = pegaYPosicaoScroll($links[i]);
        }
        console.log(positions);

        var linkAtual = pegaUltimoLinkVisivel(positions);

        var linkActived = $menu.querySelector('.actived');
        if(linkActived) linkActived.classList.remove('actived');
    
        linkAtual.classList.add('actived');
    }

    function pegaYPosicaoScroll(link) {
        var alvo = document.querySelector(link.getAttribute('href'));
        var positionYViewport = alvo.getBoundingClientRect().top;
        return positionYViewport;
    }

    function pegaUltimoLinkVisivel(positions) {
        var qtd = positions.length;
        while(qtd){
            qtd--;
            if(positions[qtd] < 0){
                return $links[qtd]
            }
        }
        return $links[0];
    }

})()