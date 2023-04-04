

console.log('3. Estoy en el archivo externo');

/*

todo esto no lo ejecuta el navegador
esto es un comentario de varias líneas

*/

//alert('Hola mundo');

console.log('==========================================================');
console.log('Variables');
console.log('==========================================================');

let nombre; //declaración de una variable

nombre = "Pepe"; //asignación de una variable con el símbolo =
console.log(nombre);

let apellido = 'Pérez'
console.log(apellido)


nombre = 'Juan';
apellido = 'Paco'

var provincia = 'Córdoba'

console.log("Mi nombre es: " + nombre + ' y mi apellildo es: ' + apellido + " y vivo en la provincia de: " + provincia);

console.log(`Mi nombre es ${nombre}`);


//Constante
const DNI = '123456789';// variables numéricas
const IVA = 0.21;

let falso = false;
let verdadero = true;

console.log(falso);
console.log(verdadero);


//DNI = 876845454543;

console.log('Mi dni es: ' + DNI);

let resultado = 1000 + IVA

console.log(resultado);


let pera = 'pera';
let manzana = 'manzana';
let limon = 'limon';

//Arreglo - array - vector
let frutas = ['pera', 'manzana', 'limon']; 
console.log(frutas);

let notas = [10 , 5, 8, 9, 10];
console.log(notas);

//índeice         0        1           2              3      4
let persona = ['Pepe', 123456789, 'San Martín 2020', 15, 'Salta'];


console.log(persona);

console.log(persona.length)//indice n - 1 = 4
console.log(persona[0]);
console.log(persona[1]);
console.log(persona[2]);
console.log(persona[3]);
console.log(persona[4]);
//console.log(persona[5]);


//Objetos JSON
let tarjeta = {
    tipo: 'Débito',
    banco: 'Nación',
    numero: 123456789,
}

console.log(tarjeta);
console.log(tarjeta.banco);
console.log(tarjeta.numero);
console.log(tarjeta.tipo);


console.log('==========================================================');
console.log('Operadores Matemáticos');
console.log('==========================================================');

let uno = 25000;
let dos = 80000;

resultado = uno + dos;
console.log(`El resultado de la SUMA es: ${resultado}`);

resultado = dos - uno;
console.log(`El resultado de la RESTA es: ${resultado}`);

resultado = uno * dos;
console.log(`El resultado de la MULTIPLICACIÓN es: ${resultado}`);

resultado = dos / uno;
console.log(`El resultado de la DIVISIÓN es: ${resultado}`);


resultado = dos % uno;//módulo: es el resto de la división
console.log(`El resultado de la MÓDULO es: ${resultado}`);


console.log('==========================================================');
console.log('Condicioneles');
console.log('==========================================================');

if (true) {
    console.log('Verdadero, escribo');
}

if (false) {
    console.log('Nunva voy a escribir');
}


let edad = 19;

if (edad > 18) {///operadores relacionales
    console.log('Podés viajar');
}

if (edad < 18) {
    console.log('Podés viajar acompañado de un adulto');
}

if (edad == 18) {
    console.log('Falta poco para que viajes');
}


console.log('==========================================================');

let saldo = 0;

if (saldo > 0) {
    console.log('Podés comprar');
}else{
    console.log('No podés comprar');
}

if (saldo >= 5000) {
    console.log('Podés comprar');
}

if (saldo > 5001) {
    console.log('Podés comprar');
}else{
    console.log('No podés comprar');
}

console.log('==========================================================');
console.log('Operadores lógicos');
console.log('==========================================================');

//y lógico: todas las evaluaciones tienen que ser verdaderas
if (edad > 18 && saldo > 0) {
    console.log('Podés viajar y comprar');
}else{
    console.log('No podés viajar ni comprar');
}

//el o lógico: necesita que una de las condiciones sea verdadera
if (edad > 18 || saldo > 0) {
    console.log('Podés viajar y comprar');
}else{
    console.log('No podés viajar ni comprar');
}


console.log('==========================================================');

let user = 'pepe';
let pass = 'jkajkasjkgf';
let reco = false;

if (user == 'pepe' && pass == '12345' && reco == true) {
    console.log('Podés ingresar a tu cuenta bancaria');
}else{
    console.log('No Podés ingresar a tu cuenta bancaria');
}


if (user == 'pepe' || pass == '12345' || reco == true) {
    console.log('Podés ingresar a tu cuenta bancaria');
}else{
    console.log('No podés viajar ni comprar');
}



console.log('==========================================================');
console.log('Funciones');
console.log('==========================================================');