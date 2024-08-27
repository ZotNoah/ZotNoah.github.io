"use strict";

//const isInvalid = score => isNaN(score) || score < 1 || score > 100
function isInvalid(score){
    return isNaN(score) || score < 1 || score > 100;
}

//const getAverage = arr => {
function getAverage(arr, places = 2){
    const total = arr.reduce( (tot, val) => tot + val, 0 );
    const average = total/arr.length;
    return average.toFixed(places);
};

//const getLast = (arr, num = 3) => {
function getLast(arr, num = 3){
    const copy = [...arr];
    copy.reverse();
    return copy.slice(0, num);
}

$(document).ready( () => {

    const scores = [];

    //$("#add_score").click( function() {
        $("#add_score").click( (evt) => {
        
        const score = parseFloat($("#score").val());
                
        if (isInvalid(score)) { 
            // 'this' refers to the Add Score button
            $("#add_score").next().text("Score must be between 1 and 100.");
        }
        else {  
            $("#add_score").next().text("");  // remove any previous error message

            // add to array and update displays
            scores.push(score);

            $("#high").text(Math.max(...scores));
            $("#low").text(Math.min(...scores));
            $("#last").text(getLast(scores).join(", "));
            $("#avg").text(getAverage(scores, 1));
            $("#all").text(scores.join(", "));
        }
        
        // get text box ready for next entry
        $("#score").val("");
        $("#score").focus(); 
    });

    // set focus on initial load
    $("#score").focus();
});