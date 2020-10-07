"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    
    if (typeof parseInt(percent) !== "number") {
    	return `“Параметр ПРОЦЕНТ содержит неправильное значение ${percent}”`;
    }

    else if (typeof parseInt(contribution) !== "number") {
  		return `“Параметр ПЕРВОНАЧАЛЬНЫЙ ВЗНОС содержит неправильное значение ${contribution}”`;
    }

    else if (typeof parseInt(amount) !== "number") {
  		return `“Параметр СУММА КРЕДИТА содержит неправильное значение ${amount}”`;
    }

    else {

    	percent = Number(percent);
    	contribution = Number(contribution);
    	amount = Number(amount);
    	console.log(percent, contribution, amount);
    	let S = amount - contribution;
    	let P = percent / 12 / 100;
    	let n = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    	console.log(S,P,n, date.getFullYear(), new Date().getFullYear());
    	let sum = (S * (P + P/(((1+P) ** n) - 1))) * n;
    	console.log(sum)
    	return Number(sum.toFixed(2));
    }





}

function getGreeting(name) {

	if (typeof name !== "string" || name.length < 1) name = 'Аноним';
	return `Привет, мир! Меня зовут ${name}`
}