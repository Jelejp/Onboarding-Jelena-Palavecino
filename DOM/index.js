//1.
let titulo = document.getElementById("title");
console.log(titulo);
//2.
let tituloPrincipal = "Frutas"
function cambioDeContenido() {
    titulo.innerHTML = tituloPrincipal;
}
cambioDeContenido();
//3.
let headerFooter = document.getElementsByClassName("naranja");
for (const iterator of headerFooter) {
    iterator.style.backgroundColor = "orange";
}
//4.
let footerP = document.getElementsByTagName("p")[0].innerHTML = "MindHub © Jelena Palavecino Cohort 54";
//5.
let contenedor = document.getElementById("contenedor");
contenedor.className = "flex flex-wrap gap-3 justify-center pt-5"
//6.
let CrearCarta = function (fruta) {

    return `<div class= " flex flex-col  w-80  p-1 shadow-lg border-2 border-black rounded-lg" >
        <img class = "h-[120px] object-contain" src = ${fruta.foto} alt=${fruta.nombre}>
        <div class= "p-1" > 
        <h2 class = "text-center font-bold"> ${fruta.nombre} </h2>
        <p class = "pt-2 text-center" >${fruta.descripcion} </p>
        </div>
    </div>
    `
}
//7 y 8.
function crearCartasDeFrutas(frutas) {
    let arrayFrutas = []
    for (let iterator of frutas) {
        arrayFrutas.push(iterator)
        console.log(iterator)
    }

    for (let i of arrayFrutas) {
        contenedor.innerHTML += CrearCarta(i)
    }
}
crearCartasDeFrutas(frutas)
//9.
let lista = document.getElementById("listas");
lista.className = " p-5"
let h1 = document.createElement("h1");
h1.textContent= "Frutas Dulces"
h1.className = "font-bold"
lista.appendChild(h1);
//10 y 11.
function crearListaDesordenada(frutas){
    let ul= document.createElement("ul")
    ul.className = "list-disc"
    for(let fruta of frutas){
        if(fruta.esDulce){
        let li = document.createElement("li")
        li.textContent = fruta.nombre
        ul.appendChild(li)
        }
    }
    lista.appendChild(ul);
    return ul;
}
crearListaDesordenada(frutas)