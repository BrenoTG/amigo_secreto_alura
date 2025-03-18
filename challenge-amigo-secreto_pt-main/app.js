// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let amigo = document.getElementById('amigo').value;

    // Validar a entrada
    if (amigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Atualizar o array de amigos
    amigos.push(amigo);

    // Limpar o campo de entrada
    document.getElementById('amigo').value = '';

    // Atualizar a lista de amigos exibida
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    // Obter o elemento da lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpar a lista existente
    lista.innerHTML = '';

    // Percorrer o array e adicionar elementos à lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione ao menos um amigo para sortear.');
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo Secreto: ${amigoSorteado}</li>`;
}