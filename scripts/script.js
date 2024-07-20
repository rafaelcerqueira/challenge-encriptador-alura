const today = new Date();
const currentYear = today.getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const btnCriptografar = document.getElementById('btn-codificar');
const btnDescriptografar = document.getElementById('btn-decodificar');
const btnCopiar = document.getElementById('btn-copiar');
const textArea = document.getElementById('texto_principal');

function criptografar(texto) {
    const substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    }

    return texto.split('').map(letra => substituicoes[letra] || letra).join('');
}

function descriptografar(texto) {
    const substituicoesInversas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const substituicoesOrdenadas = Object.keys(substituicoesInversas).sort((a, b) => b.length - a.length);

    substituicoesOrdenadas.forEach(substituicao => {
        texto = texto.split(substituicao).join(substituicoesInversas[substituicao]);
    });

    return texto;
};

btnCriptografar.addEventListener('click', () => {
    const texto = document.getElementById('texto_principal').value;
    const messageArea = document.querySelector('.message_area');
    const mainContainerMessage = document.querySelector('.main__container__message');

    //cria um novo elemento p
    const p = document.createElement('p');
    p.id = 'mensagem_codificada';
    p.className = 'mensagem_codificada';
    p.textContent = criptografar(texto);
    
    // substitui o conteúdo da div message_area pelo novo p
    messageArea.innerHTML = '';
    messageArea.appendChild(p);

    btnCopiar.style.visibility = 'visible';
    mainContainerMessage.style.display = 'flex';
    mainContainerMessage.style.justifyContent = 'space-between';
    p.style.fontSize = '1.5rem';
    
});


btnDescriptografar.addEventListener('click', () => {
    const texto = document.getElementById('texto_principal').value;
    const messageArea = document.querySelector('.message_area');
    const mainContainerMessage = document.querySelector('.main__container__message');

    //cria um novo elemento p
    const p = document.createElement('p');
    p.id = 'mensagem_codificada';
    p.className = 'mensagem_codificada';
    p.textContent = descriptografar(texto);
  
    
    // substitui o conteúdo da div message_area pelo novo p
    messageArea.innerHTML = '';
    messageArea.appendChild(p);

    btnCopiar.style.visibility = 'visible';
    mainContainerMessage.style.display = 'flex';
    mainContainerMessage.style.justifyContent = 'space-between';
    p.style.fontSize = '1.5rem';

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

