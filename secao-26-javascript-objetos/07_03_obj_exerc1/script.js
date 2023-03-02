var pessoa1 = {
    nome: 'João',
    sobrenome: 'Dias'
}

var pessoa2 = {
    nome: 'Thaís',
    sobrenome: 'Neto'
}

var pessoa3 = {
    nome: 'Romeo',
    sobrenome: 'Souza'
}

for (var i = 1; i <= 3; i++){
    console.log(window['pessoa'+i].nome + ' ' + window['pessoa'+i].sobrenome);
}