var txtNome2;

txtNome2 = document.querySelector('#txtNome');

function escreve(){
    var nome = txtNome2.value;
    document.querySelector('#msg').innerHTML = 'Bem-vindo, <b>' + nome + '</b>';
}


    
    
