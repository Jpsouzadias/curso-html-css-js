(function(){
    'use strict';
    function calcularIMC(peso, altura){
        return peso / (altura**2);
    }

    function classificaIMC(imc){
        if (imc <= 16.9){
            return 'muito abaixo do peso';
        } else if (imc <= 18.4){
            return 'abaixo do peso';
        } else if (imc <= 24.9){
            return 'peso normal';
        } else if (imc <= 29.9){
            return 'acima do peso';
        } else if (imc <= 34.9){
            return 'obesidade grau I';
        } else if (imc <= 40){
            return 'obesidade grau II';
        } else {
            return 'obesidade III';
        }
    }

    var peso = 58;
    var altura = 1.75;

    var imc = calcularIMC(peso, altura);
    var classificacao = classificaIMC(imc);

    console.log('classificação IMC: ', classificacao);
})()