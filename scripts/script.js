const today = new Date();
const currentYear = today.getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const btnCodificar = document.getElementById('btn-codificar');
const btnDecodificar = document.getElementById('btn-decodificar');
const btnCopiar = document.getElementById('btn-copiar'); 


btnCodificar.addEventListener('click', () => {
    const texto = document.getElementById('texto_principal').value;
    const messageArea = document.querySelector('.message_area');
    const mainContainerMessage = document.querySelector('.main__container__message');

    //cria um novo elemento p
    const p = document.createElement('p');
    p.id = 'mensagem_codificada';
    p.className = 'mensagem_codificada';
    p.textContent = texto;

    // substitui o conteúdo da div message_area pelo novo p
    messageArea.innerHTML = '';
    messageArea.appendChild(p);

    btnCopiar.style.visibility = 'visible';
    mainContainerMessage.style.display = 'flex';
    mainContainerMessage.style.justifyContent = 'space-between';    
    console.log('Texto codificado');
});

btnCopiar.addEventListener('click', () => {
    const p = document.getElementById('mensagem_codificada');
    p.textContent
 
    // copia o conteúdo atual do elemento p que foi criado para a área de transferência
    navigator.clipboard.writeText(p.textContent);
    
    
    btnCopiar.textContent = 'Copiado!';
    btnCopiar.style.backgroundColor = '#757FB2';
    btnCopiar.style.color = 'white';

    setTimeout(() => {
        btnCopiar.textContent = 'Copiar';
        btnCopiar.style.backgroundColor = 'white';
        btnCopiar.style.color = 'black';
    }, 1000);

});
