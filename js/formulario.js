function formulario(param1) {
let nombre = document.getElementById('form-nombre').value;
let correo = document.getElementById('form-mail').value;
let mensaje = document.getElementById('form-mensaje').value;
let cadena = nombre + " " + correo + " " + mensaje;
console.log(cadena);
}