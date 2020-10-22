"use strict";

function parseCount(p) {
    let parsed = parseInt(p);
    if (isNaN(parsed)) throw new Error( "Невалидное значение" );
    return parsed;
}

function validateCount(p) {
    try {
        parseCount(p);
    } catch(err) {
    return err;
    }
    
    return parseCount(p);
}








function checkSides(a,b,c) {
    if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) throw new Error(`Треугольник с такими сторонами не существует`);    
}

class Triangle {

    constructor(a,b,c) {
        try {checkSides(a,b,c)} catch(e) {throw(e)}
        this.a = a,
        this.b = b,
        this.c = c
    }
   
    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return + Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}

function getTriangle(a,b,c) {   
    try { 
        checkSides(a,b,c);
        return new Triangle(a,b,c);

    } catch(err) {        
        return ({
            getArea: () => `Ошибка! Треугольник не существует`,
            getPerimeter: () => `Ошибка! Треугольник не существует`
        });          
    }   
}
