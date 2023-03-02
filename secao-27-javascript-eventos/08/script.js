var btn2 = document.getElementById('btn2');

btn2.onclick = clicar();

function clicar() {
    alert('clicou');

    return function() {
        alert('clicou2');
    }
}