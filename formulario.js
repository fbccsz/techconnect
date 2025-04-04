document.getElementById('inscricaoBtn').addEventListener('click', function() {
    document.getElementById('inscricaoForm').classList.toggle('show');
});

document.getElementById('inscricaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const ingresso = document.getElementById('ingresso').value;
    const termos = document.getElementById('termos').checked;

    if (nome && email && termos) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        alert('Inscrição realizada com sucesso!');
        document.getElementById('inscricaoForm').reset();
        document.getElementById('inscricaoForm').classList.remove('show');
    } else {
        alert('Por favor, preencha todos os campos obrigatórios e aceite os termos.');
    }
});