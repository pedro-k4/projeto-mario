/* 
CÓDIGO COM COMENTÁRIOS E INCOMPLETO 

OBJETIVO 1 - Quando o usuário clicar no botão de veja o trailer, devemos abrir
a modal com o vídeo do trailer
    - passo 1 - dar um jeito de pegar o elemento html que representa o botão na tela usando js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2 - Quando o usúario clicar no botão X devemos fechar o modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js 
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X 
    - passo 3 - fechar a modal 

*/

// OBJ 1 - passo 1
const botaoTrailer = document.querySelector(".botao-trailer");

// OBJ 1 - passo 2 
botaoTrailer.addEventListener("click", () => {
    // OBJ 1 - passo 4
    modal.classList.add("aberto");
})

// OBJ 1 - passo 3
const modal = document.querySelector(".modal");
//console.log("mostra o objeto da modal", modal);

// OBJ 2 - passo 1
const botaoFecharModal = document.querySelector(".fechar-modal");

// OBJ 2 - passo 2
botaoFecharModal.addEventListener("click", () => {
    // OBJ 2 - passo 3
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

const video = document.getElementById("video");
    
