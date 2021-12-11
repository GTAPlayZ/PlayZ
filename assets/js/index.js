var paginaAtual = "";
const hostServer = "http://127.0.0.1:3000";

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

/* enviar para o servidor */
/**
 * 
 * @param {*} query 
 * @param {*} url 
 * @param {*} method 
 * @param {*} callback 
 */
function requestServer(query, url, method, callback) {
    $.ajax({
        type: method,
        url: url,
        data: query,
        cache: false,
        success: function (retornoServer) {
            callback(null, retornoServer);
        },
        error: function (err) {
            console.log(err);
            callback(err);
        }
    });
}