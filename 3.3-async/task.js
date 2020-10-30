"use strict";

class AlarmClock {
    constructor() {
        this.AlarmCollection = [],
        this.timerId 
    }

    addClock(start_time, action, id) {
        if (!id) throw new Error("ID будильника не задан");
        if (this.AlarmCollection.some(alarm => alarm.id === id)) {
            console.error("Будильник с таким ID уже существует");
            return;
        }
        this.AlarmCollection.push({"start_time" : start_time, "action" : action, "id" : id});
        console.log(this.AlarmCollection[this.AlarmCollection.length() - 1]);       
    }

    removeClock(id) {
        return Boolean(this.AlarmCollection.splice(this.AlarmCollection.findIndex(alarm => alarm.id === id) , 1).length());     
    }

    getCurrentFormattedTime() {
        let now = new Date();
        return `${now.getHours}:${now.getMinutes}`;
    }

    start() {
        checkClock => (alarm) => { if (alarm.start_time === this.getCurrentFormattedTime()) alarm.action(); }
        if (this.timerId === "undefined") {
            this.timerId = setInterval(() => {this.AlarmCollection.map(checkClock(alarm))}, 1);
        }
    
    stop() {
        if (this.timerId !== "undefined") {
            clearInterval(this.timerId);
            this.timerId = void 0;
        }
    }

    }



}

