"use strict";

function getSolutions(a,b,c) {

	let D = b**2 - 4*a*c;

	if (D < 0) return { "D": D, "roots": [] };
	else if (D == 0) {
		let x1 = - b / (2 * a);
		return { "D": D, "roots": [x1] };
	}

	let x1 = (- b + Math.sqrt(D)) / (2 * a);
	let x2 = (- b - Math.sqrt(D)) / (2 * a);
	return {D : D, roots : [x1, x2]}; 
}

function showSolutionsMessage(a,b,c) {

	let result = getSolutions(a,b,c);

	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.roots == []) console.log(`Уравнение не имеет вещественных корней`);
	else if (result.roots.length == 1) console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	else console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
}


showSolutionsMessage(1, 2 ,3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


function getAverageMark(marks) {
		let total = 0;
		let n = 0;
	
		for (let mark in marks) {
			total = total + Number(marks[mark]);
			n++;
		}

		if (n == 0) return 0;
		return total/n;
	}

function getAverageScore(data) {
	let result = {};

	for (let subject in data) {
		result[subject] = getAverageMark(data[subject]);
	}

	if (result == {}) result.average = 0;
	else result.average = getAverageMark(result);
	return result;
}

	
function getDecodedValue(secret) {
	if (secret == 0) return 'Родриго';
	return 'Эмильо';
}

let getPersonData = (secretData) => ({'firstName' : getDecodedValue(secretData.aaa), 'lastName' : getDecodedValue(secretData.bbb)})

console.log(getPersonData({aaa : 0, bbb: 0}));
console.log(getPersonData({aaa : 1, bbb: 0}));
console.log(getPersonData({aaa : 0, bbb: 1}));
console.log(getPersonData({aaa : 1, bbb: 1}));
