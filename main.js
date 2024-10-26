const form = document.querySelector('form');
const contatos = [];
const telefones = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
})

function adicionaLinha() {
    const inputNome = document.querySelector('#nomeContato');
    const inputTelefone = document.querySelector('#numeroContato');

    if (contatos.includes(inputNome.value) || telefones.includes(inputTelefone.value)) {
        alert('Nome ou telefone já cadastrado!');
    } else {
        contatos.push(inputNome.value);
        telefones.push(inputTelefone.value);

        const corpoTabela = document.querySelector('tbody');
        const novaLinha = corpoTabela.insertRow();

        const celulaNome = novaLinha.insertCell(0);
        const celulaTelefone = novaLinha.insertCell(1);

        celulaNome.textContent = inputNome.value;
        celulaTelefone.textContent = inputTelefone.value;

        inputNome.value = '';
        inputTelefone.value = '';
    }

}