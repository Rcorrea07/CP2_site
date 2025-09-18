console.log("Script carregado!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM carregado!");
    
    const modalCard = document.querySelector('.modal-overlay');
    const botaoTransacao = document.querySelector('.button');
    const modalFechar = document.querySelector('.modal-close');

    console.log("Modal encontrado:", modalCard);
    console.log("Botão encontrado:", botaoTransacao);
    console.log("Fechar encontrado:", modalFechar);

    function criar_popup() {
        console.log("Função criar_popup executada!");
        if (modalCard) {
            modalCard.style.display = modalCard.style.display === 'flex' ? 'none' : 'flex';
            console.log("Popup alternado!");
        }
    }

    if (botaoTransacao) {
        botaoTransacao.addEventListener('click', criar_popup);
        console.log("Event listener adicionado ao botão");
    }

    if (modalFechar) {
        modalFechar.addEventListener('click', criar_popup);
    }

    if (modalCard) {
        modalCard.addEventListener('click', function(e) {
            if (e.target === modalCard) {
                criar_popup();
            }
        });
    }
});