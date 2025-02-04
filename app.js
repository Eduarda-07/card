// 'use script'

// const botaoTeste = document.getElementById('teste')


// function criarElemento (){
//     const body = document.querySelector('body')
//     const novoBotao = document.createElement('button')
//     novoBotao.textContent = 'Botão criado pelo JS'
//     body.appendChild(novoBotao)
// }
// botaoTeste.addEventListener('click', criarElemento)

'use strict'

const disciplinas = [
    {nome:'PWBE', cor: 'red', icon: 'back-end.png'},
    {nome:'PWFE', cor: 'yellow', icon: 'front-end.png'},
    {nome:'PPDM', cor: 'pink', icon: 'mobile.png'},
    {nome:'PROJETOS', cor: 'green', icon: 'projetos.png'}, 
    // {nome:'SOP', cor: 'brown',},
    // {nome:'IOT', cor: 'red'}
]

function criarItemMenu (disciplinas){
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoImagem = document.createElement('img')
    const novoLink = document.createElement('a')
    

    novoLink.href = '#' 
    novoLink.textContent = disciplinas.nome

    novoLink.style = `--cor-houver: ${disciplinas.cor}`

    novoImagem.src = `./icons/${disciplinas.icon}`

    novoItem.appendChild(novoImagem)
    novoItem.appendChild(novoLink)
    listaMenu.appendChild(novoItem)
}

disciplinas.forEach(criarItemMenu)
criarItemMenu()
                                                      