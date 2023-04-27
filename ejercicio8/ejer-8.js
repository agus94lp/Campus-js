function devolver(){
    let verdadero = true;
    return verdadero;
}
devolver();


function cincoSegundos(){
    setTimeout(cinco,5000)
}

function cinco(){
    console.log("Hola soy una promesa");
}

cincoSegundos();

function generarId(){
	let id = 0;
	while (true){
		id= id +2;
		if (id === 10){
			return id
		}
		yield id //  el valor se mantiene aca hasta que se vuelva a llamar
	}
}
const gen = generarId();
Console.log(gen.next().value);
Console.log(gen.next().value);
