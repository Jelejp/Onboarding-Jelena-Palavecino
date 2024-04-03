//Level low
//Declaring functions
let operacion = function (num1,num2) {
    let number1 = 100;
    let number2 = 20;
    let result = 100*20;
    return result;
} 
let multiplication = operacion(100,20); 
console.log(multiplication);


//1 y 2 
/* function add (){
    let resu = 100 * 20
    console.log(resu)
}
add () */
//3 y 4
/* function add (nu1, nu2){
    let resu = nu1 * nu2
    console.log(resu)
}
let numero1 = 100
let numero2 = 20
add(numero1, numero2); */



//Level medium
//1.
 function greet (name){
    console.log(`Hola ${name}!`)
}
greet("Jelena");

//2.
let annonymous = function (a,b){
    let result1 = a*b;
    return result1;   
}
let multiplic = annonymous(8,3);
console.log(multiplic);

//3.
function area (a, b){
    let bxa = a*b / 2;
    return bxa;
}
let resultBxa = area(10,6);
console.log(resultBxa);

//4.
function perimeter (a,b,c){
    let sides = a+b+c;
    return sides;
}
resultSides = perimeter(15,25,18);
console.log(resultSides)

//5.
function products (prec,cant){
    let totalP = prec*cant;

    if(cant >= 20){
        totalP*= 0.8;
    
    }else if (cant >= 10){
        totalP*= 0.9;
    }
    return totalP;
}
totalprice = products(500,10);
console.log(totalprice);
totalprice = products(800,16);
console.log(totalprice);
totalprice = products(1000,21);
console.log(totalprice);

//6.
function isAnAdult(age){
     
    if(age >= 18){
        let adult = "You are an adult"
        return adult;
        
    }else{
        let noAdult = "You are not an adult"
        return noAdult;
    }
    }
adultYesOrNo = isAnAdult(17); 
console.log(adultYesOrNo);
adultYesOrNo = isAnAdult(67); 
console.log(adultYesOrNo);
adultYesOrNo = isAnAdult(19); 
console.log(adultYesOrNo);

//Level High
//1.
function incomeTax (number){
    let tax;
    if(number <= 10000){
        tax = number * 0.1;

    }else if(number > 10000 && number <= 20000 ){
        tax = number * 0.15;

    }else if (number > 20000){
        tax = number * 0.2;  
    }
    return tax;
}
pTax = incomeTax(10000);
console.log (pTax);
pTax = incomeTax(15000);
console.log (pTax);
pTax = incomeTax(40000);
console.log (pTax);

//2.
function day (n){
    let message;
    switch(n){
        case 1:
            message = "It is a business day";
            break;
        case 2:
            message = "It is a business day";
            break;
        case 3:
            message = "It is a business day";
            break;
        case 4:
            message = "It is a business day";
            break;
        case 5:
            message = "It is a business day";
            break;
        case 6:
            message = "It's the weekend.";
            break;
        case 7:
            message = "It's the weekend.";
            break;
        default:
            break;
    }
    return message;
}
checkDay = day(1);
console.log (checkDay);
checkDay = day(6);
console.log (checkDay);
checkDay = day(4);  
console.log (checkDay);

// 3.
 function personalInfo(){
    let infoName =  prompt("Enter your name")
    if(infoName === "" ){
        console.error("The name cannot be empty")
        return;
    }
    let infoLastName = prompt("Enter your last name")
    if(infoLastName === "" ){
        console.error("The last name cannot be empty")
        return;
    }
    let infoAge = parseInt(prompt("Enter your age"))
    if(isNaN(infoAge)){
        console.error("The age cannot be empty")
        return;
    }
    let infoPerson = {
        name: infoName,
        lastName: infoLastName,
        age: infoAge,
    }
    console.log(infoPerson);

}
personalInfo()

// 4.
function presentation (name){
    return `Hello, my name is ${name}`;
}
function calculateAge(yearB, yearC){
    let age = yearC - yearB;
    return age;
}
function presentationComplete(){
    let name = prompt("Enter your name")
    let yearB = parseInt(prompt("Enter your birth year"))
    let yearC = parseInt(prompt("Enter the current year"))
    let greetPresentation = presentation(name);
    let age = calculateAge(yearB, yearC);
    let presentationEnd = `${greetPresentation}, I am ${age} years old`;
    alert(presentationEnd)
}
presentationComplete();