//2.
/* let boton = document.getElementById("boton")
let contenedorWall = document.getElementById("wall")
let entradaDeTexto = document.getElementById("entradaDeTexto")
let generarContenedor = () =>{
    let nuevoDiv = document.createElement('div');
    nuevoDiv.className = ('w-[300px]', 'h-[300px] bg-red-600')

   contenedorWall.appendChild(nuevoDiv)
}
boton.addEventListener("click", generarContenedor) */
//3.
/* let selectorColor = document.getElementById("selectorColor")
let generarContenedor = () =>{
    colorSeleccionado = selectorColor.value
    let nuevoDiv = document.createElement('div');
    nuevoDiv.className = ('w-[300px]', 'h-[300px]')
    nuevoDiv.style.backgroundColor = colorSeleccionado

   contenedorWall.appendChild(nuevoDiv)
}
boton.addEventListener("click", generarContenedor) */
//4
/* let selectorColor = document.getElementById("selectorColor")
 let generarContenedor = () =>{
    let colorSeleccionado = selectorColor.value;
    let nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'w-[300px] h-[300px] m-1 flex justify-end '
    nuevoDiv.style.backgroundColor = colorSeleccionado

    let spanClose = document.createElement('span');
    spanClose.textContent = 'X';
    spanClose.className = 'close cursor-pointer py-2 px-4 bg-gray-50 font-semibold rounded-lg  hover:bg-white h-10 flex mt-1 mr-1'

    spanClose.addEventListener("click", function() {
        contenedorWall.removeChild(nuevoDiv);
    });

    nuevoDiv.appendChild(spanClose);
    contenedorWall.appendChild(nuevoDiv);
}
 boton.addEventListener("click", generarContenedor); */
 
 //5. junté todo en una sola función y ordené

 let contenedorWall = document.getElementById("wall");
 let entradaDeTexto = document.getElementById('entradaDeTexto');
let selectorColor = document.getElementById('selectorColor');
let boton = document.getElementById('boton');
let estiloGraffiti = document.getElementById("estiloGraffiti");
 let estiloPoster = document.getElementById("estiloPoster");
let generarContenedor = () => {
    let texto = entradaDeTexto.value;
    texto.className = 'w-full h-full flex justify-center items-center'
    let color = selectorColor.value;
    let estilo = estiloGraffiti.checked ? 'graffiti' : 'poster';
    let nuevoDiv = document.createElement('div');
    nuevoDiv.className = `w-[300px] h-[300px] m-10 flex flex-col justify-center items-center relative ${estilo}`;
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.textContent = texto;
    let spanClose = document.createElement('span');
    spanClose.textContent = 'X';
    spanClose.className = 'close cursor-pointer text-sm py-1 px-2 bg-gray-50 font-semibold rounded-full hover:bg-white self-end mr-2'

    spanClose.addEventListener("click", function() {
        contenedorWall.removeChild(nuevoDiv);
    });

    nuevoDiv.appendChild(spanClose);

    contenedorWall.appendChild(nuevoDiv);

    entradaDeTexto.value = '';
    selectorColor.value = '#000000';
};

boton.addEventListener('click', generarContenedor);