
// cambiar color de navbar al hacer scroll

const nav = document.getElementById('myNav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
       
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    } 
    else {
        console.log("no scroll");
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
};

// mensaje de confirmacion de envio de formulario
// funcion para convertir la primera letra de un string en mayuscula
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }


$(function(){
    $("#contacto").click(function(){
        let nombre = $("#name").val();
        let asunto = $("#asunto").val();
        let mensaje = $("#mensaje").val();
        nombre = capitalizeFirstLetter(nombre.toLowerCase());
        if(nombre == "" || asunto == "" || mensaje == ""){
            alert("Por favor complete todos los campos");
        }
        else{
            
            alert(`Gracias ${nombre} por contactarnos, te responderemos a la brevedad`);
        }

    
    });

});

// chequeo de campos vacios





// tooltip de bootstrap 5

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})