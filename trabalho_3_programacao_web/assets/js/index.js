var paginaAtual = "";

// apos fazer a renderização da tela executara o script
$(document).ready(function() {

    paginaAtual = getPageHash();

    loadPage(paginaAtual);

    $("body").on("click", ".ajax-load-page", function(){
        let paginaParaCarregar = this.href.split('#')[1];
        if (paginaAtual != paginaParaCarregar) {
            paginaAtual = paginaParaCarregar;
            loadPage(paginaAtual);
        }
        console.log('teste', paginaAtual);
    })


    
});


// funcoes
/**
 * busca a pagina que esta sendo exibida
 * @returns string
 */
function getPageHash() {
    if (window.location.hash) {
        return window.location.hash.substr(1);
    } else {
        return 'home';
    }
}

/**
 * 
 * @param {string} page 
 */
function loadPage(page) {
    $("#page-container").load(`./views/${page}/index.html`, function(responseTxt, statusTxt, xhr) {
        if(statusTxt == "error")
          $(this).html(xhr.statusText);
    });
}