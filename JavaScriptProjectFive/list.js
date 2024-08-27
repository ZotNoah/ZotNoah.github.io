/*
Noah Unverzagt
Assignment 7
Nikiema
04/29/2022
*/
"use strict";

//DO NOT MODIFY THE CODE BELOW
//wait for everything to load before executing this here code
$(document).ready(()=> {
    // create a new constant to hold a date reference for the current moment
    const dt = new Date();
    //Get the current year from the date reference, and put it
    //in the yield field in the footer.
    $('#year').text(dt.getFullYear());
});
//ADD YOUR CODE BELOW

$(document).ready(()=> {
    //define set
    const listSet = new Set();

    $("#addItemToList").click( () => {
        //event listener that trims the value
        const currentItem = $("#listItemInput").val().trim().toLowerCase();

        if(currentItem == ""){
            //errror alert
            alert("Error! Franz Liszt's list item cannot be empty. This is unacceptable. Franz Lizst demands you correct his list!");
        } else{
            if(listSet.has(currentItem)){
                //duplicate value
                alert("Error! You are attempting to enter a duplicate value!");
              
            } else if(listSet.size >= 6){
                //max list alert
                alert("Error! Franz Liszt's list can only hold 6 items!");
            }else{
                //add value to website
                $("#listItemsHolder").append($("<li>").text(currentItem));
                listSet.add(currentItem);  
            }
        }
    });
    
// clear list
    $("#clearList").click( () => {
        listSet.clear();
        $("#listItemsHolder").text("");
    });   
    
});