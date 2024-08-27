/*
Noah Unverzagt
Assignment 6
Nikiema
04/22/2022
*/
"use script";
//This is a helper function to convert a string
//to a numeric value
//Returns:
//      - An integer or a float value of the string
//Throws:
//      - Error if the string is not a number
function convertToNumber(numVal) { 
    if(!isNaN(numVal)){
    // Ternary operator
       return (Number.isInteger(numVal)) ?  parseInt(numVal) : parseFloat(numVal);
    } else{
    //Throw error messege
        throw new RangeError(" Must input a numeric value.");
    }
} 

$(document).ready(()=> {
    valueToConvert = 0;
    valueHolder = $('#valueHolder');
    convertButton.addEventListener('click', ()=> {
        const selectedOptionValue = $('#conversionSelector :selected').val();
        //Try block
        try{
            valueToConvert = valueHolder.val();
            valueToConvert = convertToNumber(valueToConvert);
        //Catch block to capture and display error
        } catch (error){
            alert (error.name + ":" + error.message);
        //invoke rest() method and exit using the return statement
            reset();
            return;
        }
        
        if(valueToConvert < 0) {
            alert("Error: Value to convert cannot be less than zero!");
        //Added reset method to run application smoother
            reset();
            return;
        // else if value to convert is equal to 0
        }else if(valueToConvert === 0){
        // alert message, reset function, then return
            alert("Error: Value to convert must be greater than zero!");
            reset();
            return;
        }
        
        //BEGIN SWITCH
        //Added reset method and .toFixed() to make application run smoother
        switch (selectedOptionValue) {
            case "m2k" :
               convertKilo = valueToConvert * 1.609344;
                alert(`${valueToConvert} Miles is ${convertKilo.toFixed(2)} in Kilometers. `);
                reset();
                return;
            case "k2m" :
                convertMiles = valueToConvert * 0.62137;
                alert(`${valueToConvert}Kilometers is ${convertMiles.toFixed(2)} in Miles.`)
                reset();
                return;
            case "p2k" :
                convertLbsToKilo = valueToConvert * 0.45359237;
                alert(`${valueToConvert} pounds is ${convertLbsToKilo.toFixed(2)} in Kilos.`);
                reset();
                return;
            case "k2p" :
                convertKiloToLbs = valueToConvert / 0.45359237;
                alert(`${valueToConvert} Kilos is ${convertKiloToLbs.toFixed(2)} in Pounds.`);
                reset();
                return;
            case "f2m":
                convertFeetToMeters = valueToConvert * 0.3048;
                alert(`${valueToConvert} Feet is ${convertFeetToMeters.toFixed(2)} in Meters.`);
                reset();
                return;
            case "m2f" :
                convertMetersToFeet = valueToConvert / 0.3048;
                alert(`${valueToConvert} Meters is ${convertMetersToFeet.toFixed(2)} in Feet.`);
                reset();
                return;
            case "f2c" :
                convertFahToCelsius = (valueToConvert * 1.8) + 32;
                alert(`${valueToConvert} Fahrenhiet is ${convertFahToCelsius.toFixed(2)} in Celsius.`);
                reset();
                return;
            case "c2f" :
                convertCelsiusToFah = (valueToConvert - 32) / 1.8;
                alert(`${valueToConvert} Celsius is ${convertCelsiusToFah.toFixed(2)} in Fahrenhiet.`);
                reset();
                return;

        }   

        //END SWITCH 

        function reset() {
        // valueHolder input is set back to 0
            $('#valueHolder').val(0);
        }
    });
});