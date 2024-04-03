//1.
let printMessagge = message => message;
//2.
let createMultiplication = (number1, number2) => number1 * number2;
//3.
const array = [ 1,2,3,4,5,6,7,8,9 ];
let newArray = array.map(createMultiplication);
console.log(newArray);

//4.

let beersWithMoreAbv = beers.toSorted((a, b) => b.abv - a.abv).splice(0, 10);
console.log(beersWithMoreAbv)

//5.
let beersWithLessIbu = beers => {
let  beersSortedByIbu = beers.toSorted((a, b) => a.ibu - b.ibu).splice(0, 10);
console.log(beersSortedByIbu);
}
beersWithLessIbu(beers);

//6.
let searchForBeerByName = (beers, name) => {
   let beerByName = beers.find(beer => beer.name === name);
   console.log(beerByName);
}
searchForBeerByName(beers,"The End Of History");
//7.
let  searchForBeerByIbu = (beers, value) =>{
let valueIbu = beers.find(beer => beer.ibu === value);
if(valueIbu === undefined){
   console.log(`There is no beer with an ibu of ${value}.`);
}else{console.log(valueIbu);
}
}
searchForBeerByIbu(beers, 60);
//8.
let searchBeerByIndex = beerName => {
   let position = beers.findIndex(beer => beer.name === beerName );
   if(position === -1){
      console.log(`${beerName} does not exist.`);
   }else{
      console.log(position);
   }
}
searchBeerByIndex("Buzz");
//9.
let filterBeersByAbv = (beers, valueAbv) => {
   let beersNotExceedingAbv = beers.filter(beer => beer.abv < valueAbv).map(beer => ({name: beer.name,
      abv: beer.abv,
      ibu: beer.ibu,
   }))
   console.log(beersNotExceedingAbv); 
}
filterBeersByAbv(beers, 4.5);
//10.
let cerveza = (beers, nameProp, valueBoolean) =>{
   let beersSort = beers.toSorted((a,b)=>{
      if(valueBoolean === true){
         return a[nameProp] - b[nameProp]
      }
      else if (valueBoolean === false){
         return b[nameProp] - a[nameProp]
      }
   })
   return beersSort.splice(0,10); 
}
console.log(cerveza(beers, "abv", false));
//11.
 let renderBeerTable = (beers, id) =>{
    let tableId = document.getElementById(id);
    let createTable = document.createElement("table");
    createTable.className= "border-collapse"
    let tableHead = document.createElement('thead');
    tableHead.className = "bg-gray-200"
    let tableBody = document.createElement('tbody');
    let headRow = document.createElement('tr');
    let headValue = ["name", "abv", "ibu"]
    headValue.forEach(head =>{
      let th = document.createElement('th');
      th.className= "px-4 py-2"
      th.innerHTML = head
      headRow.appendChild(th);
    })
    tableHead.appendChild(headRow);
    createTable.appendChild(tableHead);
    createTable.appendChild(tableBody);
    beers.forEach(beer =>{
      let row = document.createElement('tr');
      headValue.forEach(property => {
         let td = document.createElement('td');
         td.className= "border px-4 py-2"
         td.innerHTML = beer[property]
         row.appendChild(td);
      })
      tableBody.appendChild(row);
    })
    tableId.appendChild(createTable);
   
}
renderBeerTable(beers, "beersTable");