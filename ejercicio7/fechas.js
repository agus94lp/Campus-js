const fechaActual = new Date();  
const fechaCumple = new Date(1994,9,14);

var dia = fechaCumple.getDate();
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var mesLetras = meses[fechaCumple.getMonth()];
var anio = fechaCumple.getFullYear();

var masTarde = fechaActual > fechaCumple;