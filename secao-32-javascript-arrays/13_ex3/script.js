/* let paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
if (paragraphs[i].textContent.indexOf('javascript') !== -1) {
paragraphs[i].classList.add('destaque');
}
} ChatGPT */ 

var paragrafos = document.querySelectorAll('p');

for (var i = 0; i < paragrafos.length; i++){
    var temJS = paragrafos[i].textContent.toLowerCase().indexOf('javascript') >= 0;
    paragrafos[i].className += temJS ? 'destaque' : '';
}
