function getResult(a,b,c){
        
    "use strict";

    let discr = b**2 - 4 * a * c;
    let x = [];

    if (discr > 0) {
    	let x1 = (-b + discr**0.5)/(2 * a);
    	let x2 = (-b - discr**0.5)/(2 * a);

    	x.push(x1, x2);
    }

    else if (discr == 0) {
    	x.push(-b / (2 * a));
    }

    return x;
}

function getAverageMark(marks){
    
    "use strict";

    let len = marks.length;

    if (len > 0) {

    	if (len > 5) {
    		console.log(`Оценок больше 5 (${len}). Среднее значение будет вычислено по первым 5 оценкам.`);
    		marks.splice(len - 5);
    		len = 5;
    	}

    	let total = 0;
    	for (let mark of marks) {
    		console.log(mark);
    		total = total + mark;
    	}

    	return total/len;
    } 

	else return 0;
}

function askDrink(name,dateOfBirthday){
       
    "use strict";

    let now = new Date();

    if ((now.getFullYear() - dateOfBirthday.getFullYear()) >= 18) return `Не желаете ли олд-фэшн, ${name}?`;
    else return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

}