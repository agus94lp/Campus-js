const nombre = "Agustin";
const apellido = "Diaz";
const persona = {name: nombre, lastname: apellido};

//localStorage.setItem("persona", JSON.stringify(persona));
console.log(JSON.parse(localStorage.getItem("persona")));


//sessionStorage.setItem("nombre-sesion", "{name: nombre, lastname: apellido}");

document.cookie = "nombre=Agustin";
