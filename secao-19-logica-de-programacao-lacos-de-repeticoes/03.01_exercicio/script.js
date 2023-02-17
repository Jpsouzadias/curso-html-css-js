var numero = parseFloat(prompt("digite um número"));

    var indice = 0;
    //repita até que indice seja <= 1000

    while(indice <= 1000){
        document.write( numero +  " x " + indice +  " = " + (numero * indice) + "<br>");

        if(indice % 10 === 0 && indice > 0){
        document.write("<hr>");
    }

    indice = indice + 1;
    }
    document.write("saiu do loop");