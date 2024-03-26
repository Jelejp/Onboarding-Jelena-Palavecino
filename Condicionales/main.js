//Level low
//1.
let num1 = 4
let num2 = 5
if (num1 > num2){
    console.log(num1);
} else{
    console.log(num2);
};

//2.
if(num1 > num2){
    console.log("num1");
}else if(num2>num1){
    console.log("num2");
}else{
    console.log("Los números son iguales");
};

//3.
if(num1==num2){
    console.log("Los números son iguales");
}else{
    console.log("Los números son diferentes");
};

//4.
let date1 = "2018-9-2"
let date2 = "2023-7-5"
if(date1>date2){
    console.log(`La fecha ${date1} es mayor que ${date2}`);
} else if(date1==date2){
    console.log("Las fechas son iguales");
}

//5.
date1 = "2024-03-02"
date2 = "2023-11-11"
if(date1>date2){
    console.log(`La fecha ${date1} es mayor que ${date2}`);
} else{
    console.log(`La fecha ${date2} es mayor que ${date1}`);
}

//6.
let number1 = 5
let number2 = 7
let number3 = 9
if(number1>number2 && number1>number3){
    console.log(`The number ${number1} is the largest`);
} else if(number2>number1 && number2>number3){
    console.log(`The number ${number2} is the largest`);
} else{
    console.log(`The number ${number3} is the largest`);
}

//Level medium
//1.
let colour = prompt ("Choose a colour: red, blue o green");
switch (colour) {
    case "red": 
        console.log("The color of passion");
        break;
    case "blue": 
        console.log("The color of the sea");
        break;
    case "green": 
        console.log("The color of nature");
        break;
    default:
        break;
}

//2.
alert("Choose two numbers between 1 to 100");
let firstValue = parseInt(prompt("Choose the first number"));
let secondValue = parseInt(prompt("Choose the second number"));
let operation = prompt("Choose an operation: Addition, subtraction, multiplication or division");
switch (operation) {
    case "addition":
        console.log(`The sum of ${firstValue} and ${secondValue} is ${firstValue + secondValue}`);
                break;
    case "subtraction":
        console.log(`The subtraction of ${firstValue} and ${secondValue} is ${firstValue - secondValue}`);
        break;
    case "multiplication":
        console.log(`The multiplication of ${firstValue} and ${secondValue} is ${firstValue * secondValue}`);
        break;
    case "division":
        console.log(`The division of ${firstValue} and ${secondValue} is ${firstValue / secondValue}`);
        break;
    default:
        break;
}

//3.
let person = {
    name: "Juan",
    age: 39,
    height: 1.69,
}
let person1 = {
    name: "Patricia",
    age: 20,
    height: 1.70,
}
if(person.height > person1.height && person.age > person1.age){
    console.log(`${person.name} is taller and older than 
    ${person1.name}`);
}else if(person.height > person1.height && person.age < person1.age){
    console.log(`${person.name} is taller but younger than ${person1.name}`);
}else if (person.height < person1.height && person.age > person1.age){
    console.log(`${person.name} is shorter but older than ${person1.name}`);
}else{
    console.log(`${person1.name} is taller and older than ${person.name}`);
}

//4.
let nameUser = prompt("Enter your name:");
let ageUser = prompt("Enter your age:");
let heightUser = prompt("Enter your height:");
let visionUser = prompt("Enter your vision:");


if(ageUser >= 18 && heightUser > 110 && visionUser >= 8/10){
    console.log("You are fit to drive");

}else{
    console.log("You are not fit to drive");
}

// 5.
let ageUser2 = prompt("Enter your age:");
if(ageUser2 >= 0 && ageUser2 <= 12){
    alert("Infant");

}else if(ageUser2 >= 13 && ageUser2 <= 18){
    alert("Adolescent");

}else if(ageUser2 >= 19 && ageUser2 <= 45){
    alert("older young");

}else if(ageUser2 > 45 && ageUser2 <= 99){
    alert("elderly");

}else if( ageUser2 > 100){
    confirm("Is he really that old?");

}

//6.
 let number1To3 = parseInt(prompt("Enter a number between 1 and 3:"));
switch (number1To3) {
    case 1:
        console.log(`The number entered is ${number1To3}`);
                break;
    case 2:
        console.log(`Twice the number entered is ${2 * number1To3 }`);
        break;
    case 3:
        console.log(`Three times the number entered is ${3 * number1To3}`);
        break;
    
    default:
        console.log("That value is not allowed")
        break;
}

//Level high
//1.
let customerName = Boolean(prompt("Enter your customer name:"));
let pass = prompt("Pass: VIP or normal?");
let entrance = Boolean(confirm("Entrance: Yes or No"));

if (customerName == true || pass == "VIP") {
    alert("Welcome");
} else if (entrance == true) {
    let use = confirm("You want to use it?");
    if (use == true) {
        alert("Welcome");
    } else {
        alert("Bye");
    }

} else if (customerName == false || pass == false || entrance == false) {
    if (true) {
        let buy = confirm("¿Do you want to buy?")
        if (buy == true)
            var money = prompt("how much money you have?");
        if (money > 1000) {
            alert("successful sale");
            alert("Welcome");

        } else {
            alert("sales rejection");
        }
    }

}