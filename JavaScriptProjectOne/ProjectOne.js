/*  
    Noah Unverzagt 
    Assignment02  
    INFO 2124 WW  
    Nikiema  
    3/24/2022  
*/ 
"use strict";

const cargoWeight = [];           //this will hold an array of different item weights
let totalCargoWeight = 0;       //this will hold the total weight of all items
let itemWeight = 0;             //this will hold the weight of a single item
const maxWeightLbs = 1000;        //this specifies the maximum weight for all cargo
let average = 0;                //this will hold the average weight of all items

//add your loop around this 
// add do while until the user inputs the value -1
do{
    itemWeight = parseFloat(prompt("Please enter the item weight in pounds, or input -1 to exit."));
        if(itemWeight >= 0) {
            cargoWeight[cargoWeight.length] = itemWeight;
        } else if (itemWeight != -1) {
            alert("Item weight must be a valid number that is greater than zero pounds!");
        }
} while (itemWeight !== -1);

if(cargoWeight.length > 0) {
    //modify for loop into a for of loop
    for (let i of cargoWeight){
        totalCargoWeight = parseFloat(totalCargoWeight + i );
    }
    average = parseFloat(totalCargoWeight / cargoWeight.length);
}

//alert("Total cargo weight is " + totalCargoWeight +"; average item weight is " + average);

let html = `<h1>Space Weight</h1><p>Total cargo weight: ${totalCargoWeight.toFixed(2)}</p><p>Average item weight: ${average.toFixed(2)}</p>`;
//if statement for output
//if total rocket weight is less than manimun rocket weight output: Congratulations! The rocket can take off!
if (totalCargoWeight < maxWeightLbs){
    html = `${html}<p>Congratulations! The rocket can take off!</p>`;
//else output: Oh no! Your rocket is too heavy to take off! The rocket must be less than 1000 punds to take off!
}else{
    html = `${html}<p>Oh no! Your rocket is too heavy to take off!<p>The rocket must be less than 1000 punds to take off!</p>`;
}
document.write(html);