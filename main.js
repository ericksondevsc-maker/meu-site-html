let imagem = document.getElementById("oculta")
let botao = document.getElementById("mostraImagem")

botao.addEventListener("click", (e) => {
    imagem.classList.remove("oculta")
})