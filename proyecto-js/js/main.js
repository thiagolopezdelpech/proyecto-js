let nombre=prompt("Ingrese su nombre:");
console.log(nombre);
let nota1=Number(prompt("Ingrese su nota de matematica:"));
let nota2=Number(prompt("Ingrese su nota de literatura:"));
let nota3=Number(prompt("Ingrese su nota de fisica:"));
console.log("Nota de matematica:", nota1);
console.log("Nota de literatura:", nota2);
console.log("Nota de fisica:", nota3);
let promedio_notas=(nota1+nota2+nota3)/3
console.log("promedio de notas:", promedio_notas);
alert("su promedio total es de:" +  promedio_notas)