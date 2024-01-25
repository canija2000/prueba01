
// cambiar color de navbar al hacer scroll

const nav = document.getElementById('myNav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        console.log("scroll");
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    } 
    else {
        console.log("no scroll");
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
};