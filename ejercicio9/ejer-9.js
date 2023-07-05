const miFuncion = val => {
	if (typeof val === "number"){
		return 2 * val;
	}
	throw new Error ("El valor debe ser de tipo numero");
}



try {
    const elDoble = miFuncion("ala");
} catch (e) {
	console.error(e); // se ejecuta lo que dice en el throw new error
} finally {
    console.log ("esto se ejecuta si entra al try o al catch, se ejecuta siempre");
}
