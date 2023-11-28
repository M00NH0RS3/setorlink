const http = require('http')
const path = require('path')

const express = require('express')
const fs = require('fs')
var session = require('express-session')

const app = express()
const server = http.createServer(app)

app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret:'2211'}));

    // configuracoes
    app.set('port', process.env.PORT || 3000)

// seccao de login

app.use('/templates/*', (req, res, next) => {
    if(req.session.nome){
        next();
    }else{
        res.redirect('../index.html');
    }
});

app.use(express.static(path.join(__dirname, 'public')));

// start do server
server.listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`)
    });

// login do front para o back

app.post('/login', (req, res) => {
    const usuarioscad = fs.readFileSync('./users.json')
    const usuariosparse = JSON.parse(usuarioscad)

    var nome = req.body.nomes
    var senha = req.body.senha

    for(var umUsuario of usuariosparse) {
        if(nome == umUsuario.nome && senha == umUsuario.senha ) {
            req.session.nome = umUsuario
            res.status(200).send("Conectado");
            return 
        }
    }
    res.status(401).send("Falhou");
});