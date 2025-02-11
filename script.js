document.addEventListener("DOMContentLoaded", function() {
    const menuImg = document.querySelector(".menu-responsivo img");
    const menuOpcoes = document.querySelector(".menu-opcoes");

    menuImg.addEventListener("click", function() {
        menuOpcoes.classList.toggle("ativo"); // Adiciona ou remove a classe "ativo"
    });
});