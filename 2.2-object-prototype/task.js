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

function checkBirthday(birthday) {
    let now = new Date();
    let user_birthday = new Date(birthday);
    let now_unix = now.getTime();
    let user_birthday_unix = user_birthday.getTime();
    let diff = now_unix - user_birthday_unix;
    
    let leap_years = 0, years = 0;
    for (let year = user_birthday.getFullYear(); year < now.getFullYear(); year++) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) leap_years++;
        else years++;
    }

    if (years + leap_years >= 18) return true;

    let total_ms_in_prev_years = (years * 365 + leap_years * 366) * 24 * 60 * 60 * 1000;
    let total_ms_this_year_before_birthday = diff - total_ms_in_prev_years;
    let total_ms_this_year_passed = now_unix - new Date(now.getFullYear(), 0, 1).getTime();

    return (total_ms_this_year_before_birthday >= total_ms_this_year_passed);
   
}