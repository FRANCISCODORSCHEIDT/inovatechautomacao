// Criar botão "Voltar ao Topo"
document.addEventListener("DOMContentLoaded", function() {
    let backToTop = document.createElement("button");
    backToTop.innerText = "▲ Topo";
    backToTop.id = "backToTop";
    document.body.appendChild(backToTop);

    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px 15px";
    backToTop.style.fontSize = "14px";
    backToTop.style.backgroundColor = "#001F3F";
    backToTop.style.color = "#FFF";
    backToTop.style.border = "none";
    backToTop.style.cursor = "pointer";
    backToTop.style.borderRadius = "5px";
    backToTop.style.display = "none"; // Esconde inicialmente

    // Exibir o botão quando o usuário rolar para baixo
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Ação ao clicar no botão
    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
