// Lista de nomes que será utilizada para pesquisa e exibição
let nomes = [
    "guilherme",
    "sara",
    "heitor",
    "patricia",
    "arthur",
    "leticia",
    "beatriz",
    "diwlay",
    "leonardo",
]

// Função responsável por pesquisar um nome na lista
function pesquisarNome() {
    // Obtém o valor digitado no campo de pesquisa
    let nomePesquisa = document.getElementById('pesquisa').value
    let itensLista = ''
    // Percorre todos os nomes da lista
    for(indice in nomes) {
        // Converte o nome para minúsculo para facilitar a comparação
        let nome = nomes[indice].toLowerCase()
        // Verifica se o nome pesquisado é igual ao nome atual da lista
        if (nomePesquisa == nome) {
            // Se for igual, adiciona o nome à lista que será exibida
            itensLista += `
            <li class="list-group-item">
              ${nome}
            </li>`
        }
    }
    // Atualiza o conteúdo da lista na tela com o(s) nome(s) encontrados
    document.getElementById('lista').innerHTML = itensLista
}

// Função responsável por carregar e exibir todos os nomes da lista
function carregarNomes() {
    let itensLista = ''
    // Percorre todos os nomes da lista
    for (indice in nomes) {
        let nome = nomes[indice]
        // Adiciona cada nome como um item da lista
        itensLista += `
            <li class="list-group-item">
              ${nome}
            </li>`
        // alert(itensLista) // Linha comentada, usada para testes
    }
    // Atualiza o conteúdo da lista na tela com todos os nomes
    document.getElementById('lista').innerHTML = itensLista
}