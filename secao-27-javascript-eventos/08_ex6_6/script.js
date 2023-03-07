(function(){
    'use strict';

    var $ul = document.querySelector('ul');
    var $lis = $ul.querySelectorAll('li');
    var $txtTask = document.querySelector('#txtTask');
    var $btn = document.querySelector('#btn');

    $btn.addEventListener('click', addTask);
    $txtTask.addEventListener('keyup', function(e){
        if(e.keyCode === 13){
            addTask();
        };
    });

    $ul.addEventListener('click', function(e){
        if(e.target.nodeName === 'LI'){
            removeTask(e.target);
        }
    })

    function removeTask(li){
        if (confirm('deseja realmente excluir deseja realmente excluir a tarefa \n' + li.textContent + '?')){
            console.log(li.parentNode);
            li.parentNode.removeChild(li);
        }
    }
     
    function addTask(){
        var li = document.createElement('li');
        var text = document.createTextNode($txtTask.value);
        li.appendChild(text);
        $ul.appendChild(li); 
        $txtTask.value = '';
        $txtTask.focus();
    }
})()

