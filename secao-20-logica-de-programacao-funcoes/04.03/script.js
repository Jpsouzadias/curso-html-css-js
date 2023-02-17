function mostrarAreaAlert(){

    var largura = parseFloat(prompt("digite uma largura"));

    var altura = parseFloat(prompt("digite uma altura"));

    var area = calcularArea(largura, altura);

    alert("a área total é: " + area);
}

function mostrarAreaOutput(){

    var largura = parseFloat(prompt("digite uma largura"));

    var altura = parseFloat(prompt("digite uma altura"));

    var area = calcularArea(largura, altura);

    document.querySelector('#output').innerHTML = "a área total é: " + area;
}

function calcularArea(l, a){
    return l * a;
}