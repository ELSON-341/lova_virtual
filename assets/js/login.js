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

const enterPanel = document.getElementById("enterPanel")
const registerSite = document.getElementById("registerSite")
const indicator = document.getElementById("indicator")


function register() {
    registerSite.style.transform = "translateX(0px)"
    enterPanel.style.transform= "translateX(0px)"
    indicator.style.transform = "translateX(100px)"
}


function enter() {
    registerSite.style.transform = "translateX(300px)"
    enterPanel.style.transform = "translateX(300px)"
    indicator.style.transform = "translateX(0px)"
}