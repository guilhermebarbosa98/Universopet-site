// Botão comprar
function comprar() {
    alert("Produto adicionado ao carrinho 🛒");
}

// Mensagem ao entrar no site
window.onload = function() {
    console.log("Bem-vindo ao Universo Pet!");
}

// Função com tempo (promoção fake)
setTimeout(() => {
    alert("🔥 Promoção: 10% OFF em rações!");
}, 500000);

// Scroll suave
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formAgendamento");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede recarregar a página

        // validação básica (HTML já faz parte disso)
        if (form.checkValidity()) {

            // mostra mensagem
            document.getElementById("mensagem").style.display = "block";

            // opcional: limpa formulário
            form.reset();
        }
    });

});