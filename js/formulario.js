function formulario() {
let nombre = document.getElementById('form-nombre').value;
let correo = document.getElementById('form-mail').value;
let mensaje = document.getElementById('form-mensaje').value;
let formulario = nombre + " " + correo + " " + mensaje
console.log(formulario);
}