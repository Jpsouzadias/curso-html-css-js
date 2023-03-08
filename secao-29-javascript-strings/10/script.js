var nome = 'João Pedro Dias';
var nomeFormatado = formatarNome(nome);

function formatarNome(nome){
    //return 'Dias, João Pedro';
    var posicaoUltimoEspaco = nome.lastIndexOf(' ');
    if(posicaoUltimoEspaco <= 0){
        return nome;
    } 

    var ultimoNome = nome.slice(posicaoUltimoEspaco + 1);
    console.log('ultimoNome', ultimoNome);
    
    var primeiroNome = nome.slice(0, posicaoUltimoEspaco);
    console.log('posicaoUltimoEspaco', posicaoUltimoEspaco);

    return ultimoNome + ', ' + primeiroNome;
}

console.log(nomeFormatado);