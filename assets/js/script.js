const menuItens = document.querySelector('#menu-itens');
const menuMobile = document.querySelector('.menu-mobile')

menuItens.style.maxHeight = "0px";

function clikMobile() {
    if (menuItens.style.maxHeight === "0px") {
        menuItens.style.maxHeight = '200px';
    } else {
        menuItens.style.maxHeight = '0px';
    }

    menuMobile.classList.toggle('active')
}

const productImg = document.getElementById('productImg')
const miniatureProduct = document.getElementsByClassName('miniature-product')

// miniatureProduct[0].onmouseover = () => {
//     productImg.src = miniatureProduct[0].src
// }

// miniatureProduct[1].onmouseover = () => {
//     productImg.src = miniatureProduct[1].src
// }

// miniatureProduct[2].addEventListener('mouseover', () => {
//     productImg.src = miniatureProduct[2].src
// })

// miniatureProduct[3].addEventListener('mouseover', () => {
//     productImg.src = miniatureProduct[3].src
// })

$(document).ready(function () {
    $("#productImg").elevateZoom({
        // Inicializa o zoom
        zoomType: "window",   // Tipo de zoom (pode ser "inner", "window", "lens")
        lensShape: "square", // Formato da lente (round ou square)
        lensSize: 150,       // Tamanho da lente
        cursor: "crosshair"
    });
    
    $("#productImg").elevateZoom(zoomConfing)

     // Ao clicar na miniatura, mudar a imagem principal
    $(".miniature-product").click(function () {
        let newImage = $(this).attr("data-image")

        let zoomInstance = $("#productImg").data("elevateZoom")
        if(zoomInstance) {
            zoomInstance.destroy();
        }

        // Atualiza a imagem principal e a imagem de zoom
        $('#productImg').attr("src", newImage).attr("data-zoom-image", newImage);

        $("#productImg").elevateZoom(zoomConfing)

        // Remove o zoom anterior e aplica novamente
        $(".zoomContainer").remove();
        $("#productImg").removeData("elevateZoom");
        $("#productImg").elevateZoom({
            zoomType: "window",   // Tipo de zoom (pode ser "inner", "window", "lens")
            lensShape: "square", // Formato da lente (round ou square)
            lensSize: 150,       // Tamanho da lente
            cursor: "crosshair"
        })
    })
});