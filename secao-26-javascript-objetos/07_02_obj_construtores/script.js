var Caneta = (function(window){
    'use strict'
    console.log(this);
    function _caneta(preco, cor){
    
        //privado
        var color = cor || 'black';
        //publicas
        this.preco = preco || 1;
    
        this.mudarCor = function(cor){
            if(cor !== 'black' && cor !== 'red' && cor !== 'white'){
                return;
            }
            color = cor;
        }
        
        this.pegaCor = function(){
            return color;
        }
    }
    
    return _caneta;
})(window)

