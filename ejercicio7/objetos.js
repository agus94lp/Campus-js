const datos = {
    nombre : "Agustin",
    apellido : "Diaz",
    edad : 28,
    altura : 1.65,
    eresDesarrollador : true
};

const edadPersonal = datos.edad;
console.log(edadPersonal);
const objetoAmigos = {
    nom1 : "Tomas",
    edad : 27,
    nom2 : "Francisco",
    edad : 26
}
const lista = [datos];
lista.push(objetoAmigos);
const nueva = lista.slice();
nueva.sort();


