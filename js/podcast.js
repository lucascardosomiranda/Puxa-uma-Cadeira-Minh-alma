// Troca o link e a capa da seção do podcast pelo episódio mais recente do Spotify.
// Os dados vêm do Worker da Cloudflare (que guarda as chaves do Spotify em segurança).
// Se algo falhar, o site continua com o link do podcast e a capa padrão que já estão no HTML.

(function () {
    var URL_WORKER = "https://podcast-ultimo-episodio.lucascescola13.workers.dev";

    var botao = document.querySelector(".podcast-btn");
    var capa = document.querySelector(".podcast-capa");

    if (!botao && !capa) return;

    fetch(URL_WORKER)
        .then(function (res) {
            if (!res.ok) throw new Error("Worker indisponível");
            return res.json();
        })
        .then(function (ep) {
            if (botao && ep.url) {
                botao.href = ep.url;
                if (ep.nome) {
                    botao.setAttribute("aria-label", "Ouvir o episódio mais recente: " + ep.nome);
                }
            }

            if (capa && ep.imagem) {
                var nova = new Image();
                nova.onload = function () {
                    capa.src = ep.imagem;
                    if (ep.nome) {
                        capa.alt = "Capa do episódio mais recente do podcast Sobre Vivências: " + ep.nome;
                    }
                };
                nova.src = ep.imagem; // só troca se a imagem carregar de verdade
            }
        })
        .catch(function () {
            /* mantém o link e a capa padrão */
        });
})();