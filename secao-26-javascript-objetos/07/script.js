var minhaStr = "João";

var hoje = new Date();

var x = [0];

function mudaArr(x){
    var y = x;
    y.push(2);
    y.push(3);
}

mudaArr(x);

console.log('--------');

var n = 0;
function mudaN(n){
    var n2 = n;
    console.log(++n2);
}
mudaN(n);
console.log(n);

console.log('-----------------')

function mudarCor(cor){
    console.log(this);
    this.cor = cor;
}

var caneta1 = {
    cor: 'red',
    preco: 1,
    mudarCor: mudarCor
}

var caneta2 = {
    cor: 'blue',
    preco: 2,
    mudarCor: mudarCor
}

caneta1.mudarCor('green');
console.log(caneta1);
console.log(caneta2);

var caneta3 = new caneta1();