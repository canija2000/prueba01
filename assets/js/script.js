
// cambiar color de navbar al hacer scroll

const nav = document.getElementById('myNav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
       
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    } 
    else {
        
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
};

// mensaje de confirmacion de envio de formulario
// funcion para convertir la primera letra de un string en mayuscula
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

// funcion para enviar el formulario


$(function(){
    $("#contacto").click(function(){
        // captura de datos del formulario
        if ($("#name").val() === "" || $("#asunto").val() === "" || $("#mensaje").val() === ""){
            alert("Por favor complete todos los campos");
        }
        else {
            var name = capitalizeFirstLetter($("#name").val());
            alert("Hola " + name + ", su mensaje ha sido enviado con éxito");
            
            }
        })});
       

    
    



// chequeo de campos vacios





// tooltip de bootstrap 5

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})