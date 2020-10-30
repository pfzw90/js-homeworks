"use strict";

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {
      let a = 0;
  }
}

function findZero(...args) {
    sleep(1100);
    return Array.from(args).some(arg => arg === 0);
}

function compareArrays(arr1, arr2) {
     return arr1.every((elem, i) => elem === arr2[i]);
}

function memorize(fn, limit) {
    let memory = [];
    return function(...args) {
        let log = memory.find((object) => compareArrays(object.args, Array.from(arguments)));
        if (log !== undefined)
            return log.result;
        let res = fn(...args);
        console.log(res);
        if (memory.unshift({args : Array.from(arguments), result: res}) > limit) 
            memory.pop();
        return res;
    };
}

