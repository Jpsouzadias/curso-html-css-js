function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){ Frágil pelo 0 ser considerado false.
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    return total / qtd;
}