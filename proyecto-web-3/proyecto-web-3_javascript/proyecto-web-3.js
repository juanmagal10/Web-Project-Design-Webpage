let btnMenu = document.querySelector(".btn-menu")
let menu = document.querySelector(".list-container")
let containerMenu = document.querySelector(".menu")
let activador = true;

btnMenu.addEventListener("click", () => {
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    if (activador) {
        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;
    } else {
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        
        activador = true;
    }
})


// intercalar clase active
let enlaces = document.querySelectorAll(".list li a");

enlaces.forEach( (element) => {
    element.addEventListener("click", (event) => {
        enlaces.forEach( (link) => {
            link.classList.remove("active");
        })
        event.target.classList.add("active");
    })
})

// efecto scroll

let prevScrollPos = window.scrollY;
let goTop= document.querySelector(".go-top")

window.onscroll = () => {
    let currentScrollPos = window.scrollY;
    // mostras y ocultar menu
    if (prevScrollPos > currentScrollPos) {
        containerMenu.style.top="0";
        containerMenu.style.transition=".5s";
    } else {
        containerMenu.style.top="-60px";
        containerMenu.style.transition=".5s";
    }
    prevScrollPos = currentScrollPos;

    let arriba = window.pageYOffset;
    

    if (arriba <= 600) {
        containerMenu.style.borderBottom = "none";


        goTop.style.right = "-100%";
    } else {
        containerMenu.style.borderBottom = "2px solid #ff2e63";


        goTop.style.right = "0";
        goTop.style.transition = ".5s";
    }
}

goTop.addEventListener("click", () => {

    document.documentElement.scrollTop = "0";
})

let verAbajo = document.querySelector("#abajo")

verAbajo.addEventListener("click", () => {
    document.documentElement.scrollTop = "600";
})