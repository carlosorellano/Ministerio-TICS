// 1. Crear varias variables y mostrar sus tipos
let numero = 25;
let texto = "Hola Mundo";
let booleano = true;
let decimal = 12.5;

console.log("Valor:", numero, " - Tipo:", typeof numero);
console.log("Valor:", texto, " - Tipo:", typeof texto);
console.log("Valor:", booleano, " - Tipo:", typeof booleano);
console.log("Valor:", decimal, " - Tipo:", typeof decimal);

// 2. Pedir al usuario su nombre y ciudad, luego mostrar un mensaje
let nombre = prompt("¿Cuál es tu nombre?");
let ciudad = prompt("¿En qué ciudad vives?");
alert("Hola " + nombre + ", vives en " + ciudad);

// 3. Pedir un número al usuario y mostrar su doble
let numeroUsuario = parseFloat(prompt("Escribe un número:"));
alert("El doble de " + numeroUsuario + " es " + (numeroUsuario * 2));

// 4. Pedir nombre, edad, ciudad, estatura y mostrar información
let nombre2 = prompt("¿Cuál es tu nombre?");
let edad = paersInt(prompt("¿Cuál es tu edad?"));
let ciudad2 = prompt("¿En qué ciudad vives?");
let estatura = parseFloat(prompt("¿Cuál es tu estatura en metros?"));

let mayorEdad = edad >= 18 ? "Sí es mayor de edad" : "No es mayor de edad";

alert(
  "Información del usuario:\n" +
  "Nombre: " + nombre2 + "\n" +
  "Edad: " + edad + " (" + mayorEdad + ")\n" +
  "Ciudad: " + ciudad2 + "\n" +
  "Estatura: " + estatura + " m"
);

// Mostrar también los tipos de datos en consola
console.log("Nombre:", typeof nombre2);
console.log("Edad:", typeof edad);
console.log("Ciudad:", typeof ciudad2);
console.log("Estatura:", typeof estatura);
