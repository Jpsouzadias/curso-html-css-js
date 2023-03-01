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