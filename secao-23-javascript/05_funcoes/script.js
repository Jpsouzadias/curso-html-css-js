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