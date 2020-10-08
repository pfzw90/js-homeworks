"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
        
    percent = parseInt(percent,10);
    contribution = parseInt(contribution,10);
    amount = parseInt(amount,10);

    if (isNaN(percent)) {
    	return `Параметр ПРОЦЕНТ содержит неправильное значение - \"${window.percent.value}\"`;
    }

    else if (isNaN(contribution)) {
  		return `Параметр ПЕРВОНАЧАЛЬНЫЙ ВЗНОС содержит неправильное значение - \"${window.contribution.value}\"`;
    }

    else if (isNaN(amount)) {
  		return `Параметр СУММА КРЕДИТА содержит неправильное значение - \"${window.amount.value}\"`;
    }

    else {

    	let S = amount - contribution;
    	let P = percent / 12 / 100;
    	let n = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    	let sum = (S * (P + P/(((1+P) ** n) - 1))) * n;
    	return Number(sum.toFixed(2));
    }

}



function getGreeting(name) {

	if (typeof name !== "string" || name.length < 1) name = 'Аноним';
	return `Привет, мир! Меня зовут ${name}`;
	
}
