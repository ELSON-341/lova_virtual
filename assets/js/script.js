const menuItens = document.querySelector('#menu-itens');

console.log(menuItens);


menuItens.style.maxHeight = "0px";

function clikMobile() {
    if (menuItens.style.maxHeight === "0px") {
        menuItens.style.maxHeight = '200px';
    } else {
        menuItens.style.maxHeight = '0px';
    }
}