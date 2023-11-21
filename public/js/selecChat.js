const botoes = document.querySelectorAll('.chat-set');
const personagens = document.querySelectorAll('.chat-container');


botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add('selecionado');
        personagens[indice].classList.add('selecionado');

    })
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.chat-container.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.chat-set.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}