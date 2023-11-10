function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const chatMessages = document.getElementById('chat-messages');
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);

        // Limpa o campo de entrada após enviar a mensagem
        messageInput.value = '';

        // Role para baixo para exibir a última mensagem
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
