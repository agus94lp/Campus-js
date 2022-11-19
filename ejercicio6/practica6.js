let listaCompras = ["pan", "gaseosa", "fiambre", "helado", "chocolate", "carne"];
listaCompras.push("Aceite de Girasol");
listaCompras.pop();
console.log(listaCompras);

let peliculas = [
    {titulo: "Piratas del Caribe",
    director: "Joachim Rønning",
    fecha: 2003},
    {titulo: "Jurassic Park",
    director: "Steven Spielberg",
    fecha: 1993},
    {titulo: "Animales fantásticos y dónde encontrarlos",
    director: "David Yates",
    fecha: 2016}
];

let posteriores = peliculas.filter(pos => pos.fecha > 2010);
console.log(posteriores);

let directores = peliculas.map(dire => dire.director);
console.log(directores);

let titulos = peliculas.map(titu => titu.titulo);
console.log(titulos);

let union = directores.concat(titulos);
console.log(union);

let unionPropagacion = [...directores, ...titulos];
console.log(unionPropagacion);