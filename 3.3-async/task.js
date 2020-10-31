"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(startTime, action, id) {
        console.log(this.alarmCollection);
        if (!id) throw new Error("ID будильника не задан");
        if (this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error("Будильник с таким ID уже существует");
            return;
        }
        this.alarmCollection.push({"startTime" : startTime, "action" : action, "id" : id});
        console.log(this.alarmCollection.length);       
    }

    removeClock(id) {
        return Boolean(this.alarmCollection.splice(this.alarmCollection.findIndex(alarm => alarm.id === id) , 1).length);     
    }

    getCurrentFormattedTime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`;
    }

    start() {
        let checkClock = (alarm) => { if (alarm.startTime === this.getCurrentFormattedTime()) alarm.action(); }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {this.alarmCollection.forEach(alarm => checkClock(alarm))}, 1);
        }
    }
    
    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log(`ID: ${alarm.id}, TIME: ${alarm.startTime}`));
    }

    clearAlarms() {
        this.alarmCollection.splice(0, this.alarmCollection.length);
        this.timerId = null;
    }

}

function testCase() {
    let form = (date) => `${date.getHours()}:${date.getMinutes()}`; 
    let testAlarm = new AlarmClock;

    let time = new Date();
    testAlarm.addClock(form(time), ()=>{
        testAlarm.alarmCollection[testAlarm.alarmCollection.findIndex((alarm) => alarm.id === '0')].startTime = null;
        let i = 0;
        let t = setInterval(()=>{
            if (i >= 3) clearInterval(t);
            else console.log('Test function running...' + (i++).toString()); 
            }, 2000);
    }, '0');

    time.setMinutes(time.getMinutes() + 1);
    testAlarm.addClock(form(time),()=>{
        console.log(`Hello, I'm second alarm!`);
        testAlarm.printAlarms();
        testAlarm.removeClock('1');
        testAlarm.printAlarms();
        
    }, '1');

    time.setMinutes(time.getMinutes() + 1);
    testAlarm.addClock(form(time),()=>{
        console.log(`Hello, I'm third alarm!`);
        testAlarm.stop();
        testAlarm.clearAlarms();
        testAlarm.printAlarms();
    }, '2');

    testAlarm.printAlarms();
    testAlarm.start();
}

testCase();




