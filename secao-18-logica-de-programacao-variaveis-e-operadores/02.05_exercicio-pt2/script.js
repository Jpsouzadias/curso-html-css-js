//fazer jogador1 digitar um número
var nJogador1 = parseInt(prompt("Jogador 1, digite um número"));

//fazer jogador2 digitar outro número
var nJogador2 = parseInt(prompt("Jogador 2, digite um número"));

//se forem iguais, mostrar mensagem 'empate'
if(nJogador1 === nJogador2){
    alert("Vocês empataram!");
} else{

        //sortear um número entre 0 e 1
        var nSorteado = parseInt(Math.random() * 2);
        alert("Número sorteado entre 0 e 1: " + nSorteado);

    //se o número sorteado for 0, ganha quem escolher o número MENOR ou se o número sorteado for 1, ganha quem escolher o número MAIOR
    if( (nSorteado === 0 && nJogador1 < nJogador2) || (nSorteado === 1 && nJogador1 > nJogador2) ){
        alert("Ganhou o jogador 1");
    } else{
        alert("Ganha o jogador 2");
    }
}