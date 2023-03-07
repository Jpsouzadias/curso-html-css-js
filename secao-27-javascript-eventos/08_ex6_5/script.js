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
            toogleDone(e.target);
        }
    })

    function toogleDone(li){
        li.classList.toggle('done');
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

