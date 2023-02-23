function somar(n1, n2){
    //corpo da função
    return n1 + n2;
}

var soma = somar(10, 20);
console.log("resultado: ", soma);

somar.teste = 'propriedade da função';

console.log(somar.teste);

var teste = function(f){
    f()
};

teste(function(){
    console.log('função passada por parêmetro');
});

console.log('-------------');

var x = 0;
var y;

function mostraX(){
    var x = 10; //escopo local
    var y = 20
    console.log("mostra x dentro: ", x);
    console.log("mostra y dentro: ", y);
}
mostraX();

console.log("mostra x fora: ", x);
console.log("mostra y fora: ", y);