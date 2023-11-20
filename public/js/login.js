function logar(){
    var nomes = document.getElementById('nomes').value;
    var senha = document.getElementById('senha').value;

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
        if(status == 'Conectado'){
            location.href = "../templates/menu.html"
        }else{
            alert('Usuário e/ou senha inválidos!');
        }
    });
    }