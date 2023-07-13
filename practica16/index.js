const parrafo = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");


parrafo.forEach(parrafos => {
    parrafos.addEventListener("dragstart", event=> {
        console.log("arrastrando " + parrafos.innerText);
        parrafos.classList.add("dragging");
        event.dataTransfer.setData("id", parrafos.id);
        const elemento_fantasma = document.querySelector(".imagen-fantasma");
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
    })

    parrafos.addEventListener("dragend", ()=> {
        console.log("ha terminado de arrastrar");
        parrafos.classList.remove("dragging");
    })
})


secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        console.log("Drag Over");
    })

    seccion.addEventListener("drop", event=> {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        //console.log(seccion.classList);
        seccion.appendChild(parrafo);
        console.log(parrafo);
    })
})

