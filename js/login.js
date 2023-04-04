/*
const h1 = document.createElement('h1');
h1.textContent = 'Formulario para Login Administrativo';
h1.className = 'form-title';
document.getElementById('div-target').append(h1);
*/
console.log('Script Loaded successfully');

function button_login()
{
    let user = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log(user);
    console.log(password);

let userBase = "pepe@gmail.com";
let passwordBase = "123456";

if (user == userBase && password == passwordBase) {
    console.log("Exito wacho");
}else{    
//    property Location: Location
    window.location.href='error.html'
}


}

function alerta(param1)
    {
    alert(param1);
}