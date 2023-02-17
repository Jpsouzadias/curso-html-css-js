function mostrarTabuada(){
    //perguntar o número para o usuário e converter o número
    var n = parseFloat(prompt("digite um número"));

    limparTabuada();
    //criar uma variável que servirá de indice
    var i = 1; 
    //enquanto indice <= 1000
        //concatena na variável mensagem
    while(i <= 1000){
        mensagem += n +  " x " +  i + " = " + (n*i) + "<br>";
        i++;
    }

    output.innerHTML = mensagem;
    //mostrar mensagem no output
}

function limparTabuada(){
    mensagem = "";
    output.innerHTML = mensagem;
}

var output = document.querySelector("#output");

var mensagem = "";