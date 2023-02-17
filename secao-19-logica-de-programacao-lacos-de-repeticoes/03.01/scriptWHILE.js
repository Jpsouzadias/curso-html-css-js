var numero = parseFloat(prompt("digite um número"));

    var indice = 1;
    //repita até que indice seja <= 1000

    while(indice <= 1000){
        document.write( numero +  " x " + indice +  " = " + (numero * indice) + "<br>");

    indice = indice + 1;
    }
    document.write("saiu do loop");