var numero = parseFloat(prompt("digite um número"));

    var indice = 1001;
    //repita até que indice seja <= 1000


    //para garantir que o bloco de código será executado pelo menos uma vez
    do {
        document.write( numero +  " x " + indice +  " = " + (numero * indice) + "<br>");

    indice = indice + 1;
    } while(indice <= 1000);
    document.write("saiu do loop");