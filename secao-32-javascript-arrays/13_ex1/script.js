(function(){
    'use strict'
    var trs = document.querySelectorAll('.js-tabela tbody .aluno');

    var x = 0;
    while(trs[x]){
        var linhaAluno = trs[x];
        var tds = linhaAluno.querySelectorAll('td');
        var notas = recuperarNumerosDeColunas(tds);

        
       /*  var temZero = notas.some(function(nota){
            return nota === 0;
        });
         */
        
        var temZero = notas.some(function(nota){
            return nota === 0;
        });
        
        var mensagem = temZero ? 'reprovado' : calcularMedia.apply(this, notas);

        //variavel = expressao ?  bloco verdade ; bloco mentira
  
        linhaAluno.querySelector('.aluno-m').textContent = mensagem;
        x++;
    }

    function recuperarNumerosDeColunas(tds){
        var x = 0;
        var arr = [];
        while (tds[x]){
            if( !isNaN(tds[x].textContent) && tds[x].textContent !== ''){
                arr.push(parseFloat(tds[x].textContent));
            }
            x++;
        }
        return arr;
    }
})()