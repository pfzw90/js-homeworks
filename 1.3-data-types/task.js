"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
        
    let p = parseInt(percent,10);
    let c = parseInt(contribution,10);
    let a = parseInt(amount,10);

    if (isNaN(p)) {
    	return `“Параметр ПРОЦЕНТ содержит неправильное значение ${percent}”`;
    }

    else if (isNaN(c)) {
  		return `“Параметр ПЕРВОНАЧАЛЬНЫЙ ВЗНОС содержит неправильное значение ${contribution}”`;
    }

    else if (isNaN(a)) {
  		return `“Параметр СУММА КРЕДИТА содержит неправильное значение ${amount}”`;
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
