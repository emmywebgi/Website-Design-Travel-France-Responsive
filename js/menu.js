const btnmenu = document.querySelector(".btnmenu");
const menu = document.querySelector(".nav");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const l3 = document.querySelector(".l3");

btnmenu.onclick = function(){
    menu.classList.toggle("mostrar");
    l1.classList.toggle("rotatel1");
    l2.classList.toggle("ocultarl2");
    l3.classList.toggle("rotatel3");
}