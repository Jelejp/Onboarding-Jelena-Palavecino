//1. cuadrado cambia de color.
let cuadrado = document.getElementById("cuadrado");
let boton = document.getElementById("boton");
let nombre = document.querySelector("p")
let contador = 0
let colores = [
    {
        bg: "bg-blue-700",
        nombreColor: "Azul",
    },
    {
        bg: "bg-red-600",
        nombreColor:"Rojo",
    },
]
let clickBoton = () =>{
    cuadrado.className = `${colores[contador].bg} h-32 w-32 mt-5`
    nombre.textContent = colores[contador].nombreColor
    contador ++
}
boton.addEventListener("click", clickBoton);
//2.
let entradaDetexto = document.getElementById("entradaDeTexto")
console.log(entradaDetexto)
let textoSaliente = document.querySelector("#cuadrado2 p")
let botonBorrar = document.getElementById("botonBorrar")

let recibeElValorDelImput = () => {
textoSaliente.textContent = entradaDetexto.value
}
entradaDetexto.addEventListener("input", recibeElValorDelImput)
let borrar = () => {
    textoSaliente.textContent = ""
    entradaDetexto.value = ""
}
botonBorrar.addEventListener("click", borrar)
//3.
let estaturaUsuario = document.getElementById("estaturaUsuario")
let pesoUsuario = document.getElementById("pesoUsuario")
let botonIMC = document.getElementById("botonIMC")
let resultadoImc = document.getElementById("resultadoImc")
console.log(resultadoImc)

let calcularIMC = () =>{
    let valorEstaturaUsuario = parseFloat(estaturaUsuario.value) / 100
    let valorPesoUsuario = parseFloat(pesoUsuario.value)
    let cuentaImc= valorPesoUsuario / (valorEstaturaUsuario * valorEstaturaUsuario)
    resultadoImc.innerHTML = cuentaImc.toFixed(2)
}
botonIMC.addEventListener("click", calcularIMC)

//4.
let montoDolar = document.getElementById('montoDolar')
let montoLocal = document.getElementById('montoLocal')
let resultadoConversorADolar = document.getElementById('resultadoConversorADolar')
let resultadoConversorALocal = document.getElementById('resultadoConversorALocal')
let convertirALocalBoton = document.getElementById('convertirALocal')
let convertirADolarBoton = document.getElementById('convertirADolar')
let borrarEntradas = document.getElementById('borrarEntradas')

let convertirADolar = () => {
    let valorMontoLocal = parseFloat(montoLocal.value)
    let convercionDolar = (valorMontoLocal / 500).toFixed(2)
    resultadoConversorADolar.innerHTML = convercionDolar
}
convertirADolarBoton.addEventListener('click', convertirADolar)

let convertirALocal = () =>{
    let valorMontoDolar = parseFloat(montoDolar.value)
    let convercionLocal = (valorMontoDolar * 500).toFixed(2)
    resultadoConversorALocal.innerHTML = convercionLocal
}
convertirALocalBoton.addEventListener('click', convertirALocal)

let borrarDatos = () => {
    montoDolar.value = ''
    montoLocal.value = ''
    resultadoConversorADolar.innerHTML = ''
    resultadoConversorALocal.innerHTML = ''
}
borrarEntradas.addEventListener("click", borrarDatos)