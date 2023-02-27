var $txt = document.querySelector('#txtNome');
var nome = "João";
var sobrenome = " Dias";

document.querySelector('#txtNome').value = nome + sobrenome;
document.querySelector('#txtNome').readOnly = true;