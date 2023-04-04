// FUNCTIONS

function ScrnPrnt(a){
    console.log(a);
}

// ARRAYS

let Nombre = ["Pepe","Pedro", "Juan","Carlos", "Pepe"];
let Apellido = ["Perez", "Perez", "Suarez", "Ponce", "Gomez"];

// JSON

let Datos = {
    dni:33763287,
    apellido:'Perez',
    ID:001,
}

// START OF THE CODE

ScrnPrnt("JAVASCRIPT RUNNING SCRIPT")
ScrnPrnt("What is your name?")

for (let i=0; i < Nombre.length; i++) {
    ScrnPrnt(Nombre[i] + ' ' + Apellido [i]);   
}

/* condicionales

if (Nombre == "Pepe") {
    ScrnPrnt('Si soi');
}else {
    ScrnPrnt('Quedé bro');
}

// LOGICOS

if (Nombre == "Pepe" | Apellido == "Perez") {
    ScrnPrnt("Soy un culiao");
}else{
    ScrnPrnt("No soy un culiao");
}

*/

// LOADER

function hideLoader() {
    $('#loading').hide();
}

$(window).ready(hideLoader);

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 20 * 1000);