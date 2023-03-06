(function(){
    'use strict';

    var $ul = document.querySelector('ul');
    var $txtTask = document.querySelector('#txtTask');
    var $btn = document.querySelector('#btn');

    $btn.addEventListener('click', addTask);
    $txtTask.addEventListener('keyup', function(e){
        if(e.keyCode === 13){
            addTask();
        };
    })
        
    function addTask(){
        var task = '<li>' + $txtTask.value + '</li>';
        $ul.innerHTML += task;

        $txtTask.value = '';
        $txtTask.focus();
    }
})()

