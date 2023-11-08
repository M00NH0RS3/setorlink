

// function logar(){
//     var login = document.getElementById('username').value;
//     var senha = document.getElementById('password').value;
//     var validaLogin = false

//     for (let i in usuarios){
//         if (login == usuarios[i].login && senha == usuarios[i].senha){
//             validaLogin = true
//             break
//         }
//     }
// 
//     if (validaLogin == true){
//         location.href = './src/templates/menu.html';
//     }else{
//         alert('Usuário ou senha incorretos');
//     }

// }

// function logar(){
//     var nomes = document.getElementById('username').value;
//     var senha = document.getElementById('password').value;

//     console.log(JSON.stringify({
//         nomes:nomes,
//         senha:senha
//     }));

//     fetch('/login',{
//         method:'POST',
//         body: JSON.stringify({
//             nomes:nomes,
//             senha:senha
//         }),
//         headers:{'content-type':'application/json'}
//     })
    
//     .then(async (resp) => {
//         var status = await resp.text();
//         console.log(status)
//         if(status == 'conectado'){
//             location.href = "/src/templates/menu.html"
//         }else{
//             alert('Usuário e/ou senha inválidos!');
//         }
//     });
//     }

function logar(){
    var nomes = document.getElementById('username').value
    var senha = document.getElementById('password').value

console.log(JSON.stringify({
    nomes:nomes,
    senha:senha
}));

    fetch("/login",{
        method:'POST',
        body: JSON.stringify({
            nomes:nomes,
            senha:senha
        }) , 
        headers: { "Content-Type" : "application/json" }
        
    })

    .then(async (resp) => {
        var status = await resp.text();
        console.log(status)
        if(status == 'conectado' ){
            location.href = '/src/templates/menu.html'
        }else {
            alert('nome e senha invalidos!!')
        }
        
    });

}

