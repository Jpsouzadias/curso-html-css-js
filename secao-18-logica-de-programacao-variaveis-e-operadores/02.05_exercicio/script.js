//fazer jogador1 digitar um número
var nJogador1 = prompt('numero do jogador 1');
nJogador1 = parseInt(nJogador1);

//fazer jogador2 digitar outro número
var nJogador2 = prompt('numero do jogador 2');
nJogador2 = parseInt(nJogador2);

//se forem iguais, mostrar mensagem 'empate'
if(nJogador1 === nJogador2){
    alert("Vocês empataram!");
} else{

        //sortear um número entre 0 e 1
        var nSorteado = parseInt(Math.random() * 2);
        alert("Número sorteado entre 0 e 1: " + nSorteado);

    //se o número sorteado for 0, ganha quem escolher o número MENOR
    if(nSorteado === 0){

        if(nJogador1 < nJogador2){
            alert("ganhou o jogador 1");
        } else {
            alert("ganhou o jogador 2");
        }

    //se o número sorteado for 1, ganha quem escolher o número MAIOR 
    } else{
        if(nJogador1 > nJogador2){
            alert("ganhou o jogador 1");
        } else {
            alert("ganhou o jogador 2");
        }
    }
    }