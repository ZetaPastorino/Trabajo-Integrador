function Login(param1) {

let correo = document.getElementById('form-email').value;
let rango = document.getElementById('form-rank').value;
let referente = document.getElementById('form-ref').value;
let mensaje = document.getElementById('form-msg').value;
let formulario = "Hola! Soy " + rango + "!" + " Me interesa conocer el Estudio! Supe ustedes gracias a " + referente + ". " + mensaje + "Mi dirección de mail para contacto es: " + correo +  ". Muchas gracias!"
console.log(formulario);
}