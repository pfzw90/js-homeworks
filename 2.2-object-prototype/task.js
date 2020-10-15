"use strict";

String.prototype.isPalindrome = function() {
    let string = this.toLowerCase().replace(/[^а-я]/g,"");
    let string_reversed = string.split('').reverse().join('');
    return (string == string_reversed);    
}


function getAverageMark(marks) {
    let n = 0, average = 0;

    for (let mark in marks) {
        average = average + Number(marks[mark]);
        n++;
    }
    
    if (n) return average = Math.round(average/n);
    return 0;
}

