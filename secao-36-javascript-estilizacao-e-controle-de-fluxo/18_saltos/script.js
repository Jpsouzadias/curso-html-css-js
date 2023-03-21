function testeSaltos() {
    
    for(var i = 0; i < 10; i++){
        if(i === 5){
            continue;
        }
        console.log(i);
    }

    console.log('fim do loop');
    return 'fim da função';

}

var teste = testeSaltos();
console.log(teste);

var n = 10;

switch (n){
    case 0:
        console.log('switch 0');
        break;
    case 10:
        console.log('switch 10');
        break;
    case 20:
        console.log('switch 20');
        break;
    case 30:
        console.log('switch 30');
        break;
    default:
    console.log('switch default');
}