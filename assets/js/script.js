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

miniatureProduct[0].onmouseover = () => {
    productImg.src = miniatureProduct[0].src
}

miniatureProduct[1].onmouseover = () => {
    productImg.src = miniatureProduct[1].src
}

miniatureProduct[2].addEventListener('mouseover', () => {
    productImg.src = miniatureProduct[2].src
})

miniatureProduct[3].addEventListener('mouseover', () => {
    productImg.src = miniatureProduct[3].src
})

$('#productImg').ezPlus({
    gallery: 'gallery_01', cursor: 'pointer', galleryActiveClass: 'active',
    imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
});

$('.row-img').bind('click', function (e) {
    var ez = $('.row-zoom').data('ezPlus');
    $.fancyboxPlus(ez.getGalleryList());
    return false;
});