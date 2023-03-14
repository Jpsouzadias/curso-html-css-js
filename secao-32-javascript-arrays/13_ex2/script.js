var paragrafos = document.querySelectorAll('p');

for (var i = 0; i < paragrafos.length; i++){
    paragrafos[i].innerHTML = formataParagrafo(paragrafos[i].innerHTML);
}

function formataParagrafo(texto){
    var arr = texto.split(' ');
    console.log(arr);

    if(arr.length > 10){
        return arr.slice(0, 10).join(' ') + '...';
    }
    
    return texto;
}