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

var pessoas = [
    pessoa1 ,
    pessoa2 ,
    pessoa3
]

var x = 0;
while(pessoas[x]){
    console.log(pessoas[x].nome + ' ' + pessoas[x].sobrenome)
    x++;
}