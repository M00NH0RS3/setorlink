function logar(){
    var nomes = document.getElementById('username').value;
    var senha = document.getElementById('password').value;

    console.log(JSON.stringify({
        nomes:nomes,
        senha:senha
    }));

    fetch('/login',{
        method:'POST',
        body: JSON.stringify({
            nomes:nomes,
            senha:senha
        }),
        headers: { 'content-type' : 'application/json' }
    })
    
    .then(async (resp) => {
        var status = await resp.text();
        console.log(status)
        if(status == 'conectado'){
            location.href = "../templates/menu.html"
        }else{
            alert('Usuário e/ou senha inválidos!');
        }
    });
    }