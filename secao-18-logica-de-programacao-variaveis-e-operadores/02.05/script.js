var n1 = prompt("digite um número");
    n1 = parseFloat(n1)

    var n2 = parseFloat(prompt("digite outro número"));

    var media = (n1 + n2) / 2;

    alert(media > 5);

    if(media > 5){
        //bloco verdade
        alert("Parabéns, Você foi aprovado!")
    } else {
      //bloco mentira
      alert("Desculpe, mas não foi dessa vez.")  
    }