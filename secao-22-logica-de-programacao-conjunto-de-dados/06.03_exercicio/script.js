var user1 = new Object();
    user1.nome = 'maria';
    user1.email = 'maria@server.com'

    var user2 = new Object();
    user2.nome = 'joao';
    user2.email = 'joao@server.com';

    var user3 = new Object();
    user3.nome = 'jose';
    user3.email = 'jose@server.com';

    var users = new Array(user1, user2, user3);

    console.log(users);

    var msg = '';

    var x = 0;
    while(users[x]){
        console.log(users[x].nome);
        msg += users[x].nome + ' - ' + users[x].email + '<br>';
        x++;
    }

    document.querySelector('#output').innerHTML = msg;