/*
Noah Unverzagt
INFO 2124 WW
Nikiema
04/1/22
*/
"use strict";

//DO NOT MODIFY THIS CODE
function calculateTax(subtotal, taxRate) {
    const tax = parseFloat(subtotal * taxRate);
    return tax.toFixed(2);
}

function print(grossWages, federalTax, stateTax, ssTax, medicareTax, netWages) {
    const msg = `
                Gross wages: $${grossWages.toFixed(2)}

                Deductions:
                --------------------------------
                Federal Taxes:   $${federalTax.toFixed(2)}
                State Taxes:     $${stateTax.toFixed(2)}
                Social Security: $${ssTax.toFixed(2)}
                Medicare:        $${medicareTax.toFixed(2)}

                Net wages: $${netWages.toFixed(2)}
    `;
    alert(msg);
}
//END DO NOT MODIFY THIS CODE
//YOUR CODE GOES BELOW

/*  Terminology
    --------------
    Here are some terms, in case you don't understand gross/net wages.

    Gross wages is your full pay, before deductions.

    Net wages is what you actually receive, once taxes, insurance, retirement, etc. have been deducted.
*/

const federalTaxRate = .12;
const stateTaxRate = .05;
const ssTaxRate = .06;
const medicareTaxRate = 0.015;



const processSalary = () => {
    const monthlySalary = parseFloat($("#monthlySalary").value);

    const federalIncomeTax = parseFloat(calculateTax(monthlySalary, federalTaxRate));
    const stateIncomeTax = parseFloat(calculateTax(monthlySalary, stateTaxRate));
    const ssTax = parseFloat(calculateTax(monthlySalary, ssTaxRate));
    const medicareTax = parseFloat(calculateTax(monthlySalary, medicareTaxRate));

    const net = monthlySalary - (federalIncomeTax + stateIncomeTax + ssTax + medicareTax);

    print(monthlySalary, federalIncomeTax, stateIncomeTax, ssTax, medicareTax, net);

}

const $ = selector => document.querySelector(selector);


document.addEventListener('DOMContentLoaded', function() {
    $("#caluclateTaxes").addEventListener("click", processSalary);
});