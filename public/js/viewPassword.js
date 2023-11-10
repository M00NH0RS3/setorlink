function mostrarSenha() {
    var inputPw = document.getElementById('senha');
    var verSenha = document.getElementById('openPw')

    if (inputPw.type === 'password') {
        inputPw.setAttribute('type', 'text')
        verSenha.classList.replace('fa-eye', 'fa-eye-slash')
    }
    else {
        inputPw.setAttribute('type', 'password')
        verSenha.classList.replace('fa-eye-slash', 'fa-eye')
    }

}