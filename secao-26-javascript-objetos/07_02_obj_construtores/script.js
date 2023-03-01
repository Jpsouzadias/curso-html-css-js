function Caneta(preco, cor){
    
    var color = cor || 'black';
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

var caneta1 = new Caneta(2, 'red');