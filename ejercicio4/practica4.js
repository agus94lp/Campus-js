let nombre = "Agustin";
let apellido = "Diaz";
let estudiante = nombre.concat(" ").concat(apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let letras = estudiante.length;
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(letras);

let primera = estudiante[0];
let ultima = estudiante[letras-1];
let sinEspacios = estudiante.replace(/ /g, ""); 
let esta = estudiante.includes(nombre);
console.log(primera);
console.log(ultima);
console.log(sinEspacios);
console.log(esta);