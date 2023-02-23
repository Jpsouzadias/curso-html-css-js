console.log('testando meu código');
        
var n1 = parseInt(prompt("digite um número"));
            
escreve();

function escreve(){
    console.log('---------');
    console.log(n1);
}


function calcular(simbolo){
    var n = parseInt(prompt("digite outro número"));
                    
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