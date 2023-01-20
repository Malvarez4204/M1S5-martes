console.log("Esto es el archivo de operadores");

let numero1 = 10;
let numero2 = 15;

console.log(`la suma: ${numero1 + numero2}`);
console.log(`la resta: ${numero1 - numero2}`);
console.log(`la multiplicacion: ${numero1 * numero2}`);
console.log(`la multiplicacion: ${numero1 / numero2}`);

//se utiliza $ para evitar el uso de sumas en el template +++ alt Gr + el corchete que cierra 
//NaN (not a number )
// alert(`Se esta descargando un virus en tu equipo`);
// alert(`Al dar aceptar aceptas la descarga`);

//if es la sentencia de abajo 

let edad2 = 100;

if (edad2 > 100) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}
//checar el comando 

// swicth

const dia = "Martes";

switch (dia) {
    case "Lunes":
        console.log("Hoy es lunes!!");
        break;
    case "Martes":
        console.log("Hoy es Martes!!");
        break;
    case "Miercoles":
        console.log("Hoy es Miercoles!!");
        break;
    case "Jueves":
        console.log("Hoy es Jueves!!");
        break;
    case "Viernes":
        console.log("Hoy es Viernes!!");
        break;
    case "Sabado":
        console.log("Hoy es Sabado!!");
        break;
    case "Domingo":
        console.log("Hoy es Domingo!!");
        break;
    default:
        console.log("Dia invalido");
        break;
}

//bucles 


for (let i = 0; i < 10; i++) {
console.log(i);
}

for (let i = 0; i < 10; i++) {
    console.log()
}

//while 
let n = 0
while (n < 3) {
     //primero suma y despues imprimo
    console.log(`El valor de n es: ${n}`);
    n++
}

function fnsaludar (test) {
 return `Hola como estas: ${test}`;
}


let nombre = prompt("Ingresa tu nombre");
console.log(fnsaludar(nombre));