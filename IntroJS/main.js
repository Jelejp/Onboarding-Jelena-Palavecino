// Level low
const myName = "Jelena"
console.log(myName)
const myLastName = "Palavecino"
const myAge = 19
const myPet = "Luna"
const petAge = 10
const fullName = (`${myName} ${myLastName}`)
const presentationText = (`Hola, me llamo ${fullName} y tengo ${myAge} años. Tengo una perrita que se llama ${myPet} y tiene ${petAge} años.`)
console.log(presentationText);

// Level medium
const sumAge = (myAge + petAge);
const subrestAge = (myAge - petAge);
const productAge = (myAge * petAge);
const divisionAge = (myAge / petAge);
console.log(sumAge);
console.log(subrestAge);
console.log(productAge);
console.log(divisionAge);

let student = {
    segundoNombre: "Jazmin",
    comidaFav: "Pizza",
    deporteFav: "Hockey",
    numeroFav: 23,
    frutaFav: "Naranja",
};
console.table(student)
console.log(student.segundoNombre);
console.log(student.comidaFav);
console.log(student.deporteFav);
console.log(student.numeroFav);
console.log(student.frutaFav);

let pet = {
    tipo: "Perro",
    nombre: "Firulais",
    raza: "mestizo",
    color: "blanco",
    edad: 2
}
console.table(pet);
console.log(pet.tipo);
console.log(pet.nombre);
console.log(pet.raza);
console.log(pet.color);
console.log(pet.edad);

let fruits = ["manzana", "pera", "ciruela", "naranja", "frutilla"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

// Level high
let entradaEdad = prompt("Ingrese su edad");
entradaEdad == 18;
let iamAdult = (entradaEdad == 18); 
console.log("Soy adulto",iamAdult);

let números = [10, 20, 30, 40, 50 ];
console.log(números)
console.log(números[0]);
console.log(números[1]);
console.log(números[2]);
console.log(números[3]);
console.log(números[4]);

let familia = [
    {
    madre: "Juanita" ,
    edadMadre: 40,
    },
    {
    padre: "Juanito",
    edadPadre: 41,
     },
     {
    hijo: "Juancito",
    edadHijo: 18,
     },
     {
    abuelo: "Juan",
    edadAbuelo: 63,
    },
    {
    sobrina: "Juliana",
    edadSobrina: 2, 
    } 
];
console.log(familia);
console.log(familia[0].madre);
console.log(familia[0].edadMadre);
console.log(familia[1].padre);
console.log(familia[1].edadPadre);
console.log(familia[2].hijo);
console.log(familia[2].edadHijo);
console.log(familia[3].abuelo);
console.log(familia[3].edadAbuelo);
console.log(familia[4].sobrina);
console.log(familia[4].edadSobrina);
