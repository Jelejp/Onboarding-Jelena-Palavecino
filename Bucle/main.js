//Level low
// 1.
let num = parseInt(prompt("Enter a number from 1 to 100"));
if(num >=1 && num <= 100){
for (let i = num; i >= 0; i--){
    console.log(i)
}   
} 

// 2.
let numero = parseInt(prompt("Enter a number from 1 to 10"));
if(numero >=1 && numero <= 10){
for (let i = 1; i <= 10; i++){
    console.log(`${i} X ${numero} = ${i*numero}`)
}   
}

//3.
let sum = 0;
let num1 = prompt("Enter a number. (To finish enter a 0 at the end)");
let array = num1.split('').map(Number);
let i = 0;
while(array[i] != 0){
    sum += array[i];
    i++;
}
console.log(sum);

// 4.
let sum2 = 0;
let num2;
let array2;
let index = 0;

do{
    num2 = prompt("Enter a number. (To finish enter a 0 at the end)")
    array2 = num2.split('').map(Number);
    sum2 += array2[index];
    index++;

}while(array2[index] != 0);
console.log(sum2);


//5. and 6.
let date ={
    name: "Jelena",
    lastName: "Palavecino",
    origin: "Argentina",
    studies: "SecundarioCompleto",
}
for(let i in date){
    console.log(i);
    console.log(date[i]);
}

//Level Medium
//1.
 let secretNumber = sum;
let ittempts = 0;
let number;
do{
    number = parseInt(prompt("Enter a secret number"));
    if (number > secretNumber){
    alert("The number entered is greater than the secret");
    }else if (number < secretNumber){
        alert("The number entered is less than the secret number")
    }else if (number == secretNumber){
        alert (`Congratulatory. You got it right! The secret number was ${secretNumber} and you made ${ittempts} attempts`)
    }
    ittempts++;

}while(number != secretNumber); 

//2.
let numberD = parseInt(prompt("enter a number"));
let divisors = "";
let ind = numberD
while (ind > 0){
    if(numberD % ind == 0){
    divisors += ind + " ";
    }
    ind--;
}
console.log(divisors);

//3.
function RingBell (){
    return "Ding Dong,"
}
let functionRingBell = RingBell();
let numerR;
do{
    numerR = parseInt(prompt("Enter a number"))
    if(numerR > 0){
        console.log(functionRingBell.repeat(numerR))
    }

}while(numerR == 0);

//4.
const dateLimite = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]
for(const value of dates){
    if(value >= dateLimite){
        console.log(value) 
    }
}

//5.
let colours = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];
for(let i of colours){
    console.log(i)
}

//6.
function Fcolours(){
    let coloursF = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];
    for(let i of coloursF){
        console.log(i)
    }
}
Fcolours()

//7.
let numbersArray = [5, 7, 1, 3, 50]
for(let i of numbersArray){
    let double = i * 2
    console.log(`The number is ${i} and its double is ${double}`)
}

//8.
let familyG = [{
    member: "mother",
    name: "Marge",
    lastName: "Simpson",
    age: 34,                              
},
{
    member: "father",
    name: "Homero",
    lastName: "Simpson",
    age: 39, 
},
{
    member: "son",
    name: "Bart",
    lastName: "Simpson",
    age: 10,
},
{
    member: "daughter",
    name: "Lisa",
    lastName: "Simpson",
    age: 8,
},
{
    member: "youngest daughter",
    name: "Maggie",
    lastName: "Simpson",
    age: 2,
},
]
function FamilyGroupF(){
    for(let property in familyG){
        console.log(`Hello, I am ${familyG[property].name} ${familyG[property].lastName} (${familyG[property].member}) and I am ${familyG[property].age} years old.`)
}
}
FamilyGroupF()

//Level High
//1.
let numbersEvenOdd;
let numbersEven = 0;
let numbersOdd = 0;
function FnumbersEvenOdd(){
do{
    numbersEvenOdd = parseInt(prompt("Enter a number. To finish enter 0"));
    if(numbersEvenOdd % 2 == 0 ){
        numbersEven += numbersEvenOdd
        
    }else if(numbersEvenOdd % 2 != 0){
        numbersOdd += numbersEvenOdd
    }

}while(numbersEvenOdd != 0)
console.log(`Even number: ${numbersEven}`);
console.log(`Odd numbers: ${numbersOdd}`);
}
FnumbersEvenOdd()
//2.
function FlargestNumber(){
    let numbersArray = [5, 6, 10, 15, 2, 22, 23, 11, 20, 19 ]
    for(let i of numbersArray){
        console.log(Math.max(...numbersArray))
    }
}
FlargestNumber()

