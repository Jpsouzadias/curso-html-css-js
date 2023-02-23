
    
            
var n1 = prompt('digite um numero');
            
escreve();

function escreve(){
    console.log('---------');
    console.log(n1);
}


function calcular(simbolo){
    var n = prompt('digite outro numero');
                    
    switch(simbolo){
        case '+':
            n1 = n1 + n;
            break;
        case '-':
            n1 = n1 - n;
            break;
        case '*':
            n1 = n1 * n;
            break;
        case '/':
            n1 = n1 / n;
    }
    
    escreve();                
}