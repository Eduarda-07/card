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

const plataformas = [
    {nome:'NETFLIX', icon: 'NETFLIX.png'},
    {nome:'PRIME',  icon: 'PRIME.png'},
    {nome:'DISNEY+',  icon: 'DISNEY.png'},
    {nome:'HBO',  icon: 'HBO.png'}, 
    // {nome:'SOP', cor: 'brown',},
    // {nome:'IOT', cor: 'red'}
]

function criarItemMenu (plataformas){
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoImagem = document.createElement('img')
    const novoLink = document.createElement('a')
    

    novoLink.href = '#' 
    novoLink.textContent = plataformas.nome

    novoLink.style = `--cor-houver: ${plataformas.cor}`

    novoImagem.src = `./icons/${plataformas.icon}`

    novoItem.appendChild(novoImagem)
    novoItem.appendChild(novoLink)
    listaMenu.appendChild(novoItem)
}

plataformas.forEach(criarItemMenu)



const card = [
    {plataforma: 'NETFLIX',  img: 'anne.jfif', nome:'Anne with an "E" ', descricao: "Baseada nos livros de L. M. Montgomery, conta a história de Anne, uma menina órfã que, após um erro no sistema do orfanato, é adotada por engano por um casal de irmãos que buscava ajuda para o trabalho na fazenda."},
    {plataforma:'PRIME',  img: 'sobrenatural.jpg', nome: 'Sobrenatural', descricao: 'A mãe de Sam e Dean Winchester faleceu há 20 anos em um misterioso acidente envolvendo forças sobrenaturais obscuras. O ocorrido fez com que o pai dos jovens rapazes sentisse necessidade de lhes ensinar tudo sobre o universo sobrenatural, desde técnicas de defesa até a forma ideal de matar demônios.'},
    {plataforma:'DISNEY+',  img: 'mandaloriano.avif', nome: 'The mandalorian', descricao: 'Primeira série live action da franquia Star Wars, a história de The Mandalorian se passa entre os filmes o Retorno do Jedi e O Despertar da Força. Na trama, acompanhamos um mandaloriano caçador de recompensas que durante um de seus serviços se vê apegado a um pequeno ser chamado de “A Criança”.'},
    {plataforma:'HBO MAX',  img: 'theLastOfUs.webp', nome: 'The last of us', descricao: 'Joel, um sobrevivente solitário e que perdeu sua filha adolescente no início do apocalipse, recebe a missão de levar para fora de uma zona de quarentena uma menina de 14 anos, chamada Ellie. A jovem é a única humana conhecida que é imune ao fungo e se torna a esperança de uma cura.'},
]
function criarCard(card){
    const listaCard = document.getElementById('todos')
    const novoCard = document.createElement('div')
    novoCard.classList.add('cards')

    const novaPlataforma = document.createElement('h2')
    novaPlataforma.textContent= card.plataforma

    const novaimg=document.createElement('img')
    novaimg.src = `./imgs/${card.img}`

    const novotitulo=document.createElement('h3')
    novotitulo.textContent=card.nome

    const novaDescricao=document.createElement('p')
    novaDescricao.textContent = card.descricao

    novoCard.appendChild(novaPlataforma)
    novoCard.appendChild(novaimg)
    novoCard.appendChild(novotitulo)
    novoCard.appendChild(novaDescricao)

    listaCard.appendChild(novoCard)
}
card.forEach(criarCard)
criarCard()
                                                      