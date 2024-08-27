/*  
    Noah Unverzagt 
    Assignment04  
    INFO 2124 WW  
    Nikiema  
    4/8/2022  
*/ 

"use strict";

//DO NOT MODIFY THE CODE BELOW 

/*********************
*  helper functions  *
**********************/
const $ = selector => document.querySelector(selector);
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;
//ADD YOUR CODE BELOW 
const calculateMeters = distance => distance / 3.2808
const calculateFeet = distance => distance * 3.2808


const toggleDisplay = (label1Text, label2Text) => {
    // update labels and clear disabled textbox
    $("#label_1").textContent = label1Text;
    $("#label_2").textContent = label2Text;
    $("#value_computed").value = "";
    console.log("label1Text");
    
    // select text in degrees textbox
	$("#value_entered").select();
}

/****************************
*  event handler functions  *
*****************************/

const performConversion = () => {   
    const value_entered = parseFloat($("#value_entered").value);
    console.log(value_entered);

    const focusAndSelect = selector => {
        const elem = $(selector);
        elem.focus();
        elem.select();
    };

    if (isNaN(value_entered)) {
        const message = document.querySelector('#message');
        const p = document.createElement("p");
        const text = document.createTextNode("please enter a valid number");

        p.appendChild(text);
        message.appendChild(p);

        focusAndSelect("#value_entered");

    } else if (!isNaN(value_entered)) {
        focusAndSelect("#value_entered");

           //clear any pervious error messages
           const message = document.querySelector('#message');
           const p = document.createElement("p");
           const text = document.createTextNode("please enter a valid number");
   
           p.appendChild(text);
           message.appendChild(p);    
           message.removeChild(p);

           //determine which radio button is selected
           if($("#to_celsius").checked){
               $("#value_computed").value = parseFloat(calculateCelsius(value_entered).toFixed(2));
           }
   
           if($("#to_fahrenheit").checked){
               $("#value_computed").value = parseFloat(calculateFahrenheit(value_entered).toFixed(2));
           }
   
           if($("#to_meters").checked){
               $("#value_computed").value = parseFloat(calculateFeet(value_entered).toFixed(2));
           }
   
           if($("#to_feet").checked){
               $("#value_computed").value = parseFloat(calculateMeters(value_entered).toFixed(2));
           }

    
    }
};

const toggleToCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toggleToFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");
const toggleToMeters = () => toggleDisplay("Enter Amount in Feet:", "Amount in Meters");
const toggleToFeet = () => toggleDisplay("Enter Amount in Meters:", "Amount in Feet");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", performConversion);
    $("#to_celsius").addEventListener("click", toggleToCelsius);
    $("#to_fahrenheit").addEventListener("click", toggleToFahrenheit);
    $("#to_meters").addEventListener("click", toggleToMeters);
    $("#to_feet").addEventListener("click", toggleToFeet);
	
	// move focus
	$("#value_entered").focus();
});