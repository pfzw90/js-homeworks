"use strict";

String.prototype.isPalindrome = function() {
    let string = this.toLowerCase().replace(/[^а-я]/g,"");
    let stringReversed = string.split('').reverse().join('');
    return (string == stringReversed);    
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

function checkBirthday(birthday) {
    let now = new Date();
    let userBirthday = new Date(birthday);
    let nowUnix = now.getTime();
    let userBirthdayUnix = userBirthday.getTime();
    let diff = nowUnix - userBirthdayUnix;
    
    let leapYears = 0, years = 0;
    for (let year = userBirthday.getFullYear(); year < now.getFullYear(); year++) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) leapYears++;
        else years++;
    }

    if (years + leapYears >= 18) return true;

    let totalMsInPrevYears = (years * 365 + leapYears * 366) * 24 * 60 * 60 * 1000;
    let totalMsThisYearBeforeBirthday = diff - totalMsInPrevYears;
    let totalMsThisYearPassed = nowUnix - new Date(now.getFullYear(), 0, 1).getTime();

    return (totalMsThisYearBeforeBirthday >= totalMsThisYearPassed);
   
}
