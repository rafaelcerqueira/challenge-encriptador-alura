const today = new Date();
const currentYear = today.getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const btnCodificar = document.getElementById('btn-codificar');
const btnDecodificar = document.getElementById('btn-decodificar');
const btnCopiar = document.getElementById('btn-copiar'); 


btnCodificar.addEventListener('click', () => {
    const texto = document.getElementById('texto_principal').value;
    
    const messageArea = document.getElementsByClassName('message_area')[0];

    // ocuta todos os elementos html com a classe 'message_area'
    for (let i = 0; i < messageArea.children.length; i++) {
        messageArea.children[i].style.display = 'none';
    }

    //cria um elemento html p em messageArea para exibir o value do texto
    const div = document.createElement('div');
    // cria um elemento html p com id 'texto_codificado'
    const p = document.createElement('p');
    p.id = 'texto_codificado';

    //adiciona o elemento p ao elemento div
    div.appendChild(p);
    //adiciona o elemento div ao elemento messageArea
    messageArea.appendChild(div);
    //exibe o conteúdo do p
    
    if(p.id === 'texto_codificado') {
        //apaga o p
        document.removeChild(p);
        //cria um novo p
        const p = document.createElement('p');
        p.id = 'texto_codificado';
        div.appendChild(p);
        messageArea.appendChild(div);
        p.textContent = texto;

    } else {
        p.textContent = texto;
    }



  
    //muda a visibilidado do botao copiar
    const btnCopiar = document.getElementById('btn-copiar');
    btnCopiar.style.visibility = 'visible';
    btnCopiar.style.marginTop = '500px'


    div.style.display = 'block';
    p.style.fontSize = '1.5rem';

});

btnCopiar.addEventListener('click', () => {
    //seleciona o conteúdo do p que é criado ao clicar no botão codificar
    const p = document.querySelector('.message_area div p');
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(p);
    selection.removeAllRanges();
    selection.addRange(range);

    //copia o texto selecionado
    const copiado = p.textContent;
    navigator.clipboard.writeText(copiado).then(() => {
        console.log('Texto copiado');

    }).catch(err => {
        console.log('Erro ao copiar texto', err);
    });    

    //muda value do botão copiar por 2 segundos
    
    btnCopiar.textContent = 'Copiado!';
    btnCopiar.style.backgroundColor = '#757FB2';
    btnCopiar.style.color = 'white';

    setTimeout(() => {
        btnCopiar.textContent = 'Copiar';
        btnCopiar.style.backgroundColor = 'white';
        btnCopiar.style.color = 'black';
    }, 1000);



});