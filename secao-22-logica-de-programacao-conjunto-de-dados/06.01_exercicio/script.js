var dias = new Array('domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado');

    var hoje = new Date();
    var diaSemana = hoje.getDay(); //retorna o dia da semana 

    /* 
    0 - domingo;
    1 - segunda;
    ...
    6 - sábado
     */
    
    alert('Bem vindo, hoje é ' + dias[diaSemana]);