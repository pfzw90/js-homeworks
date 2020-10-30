"use strict";

class PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(newstate) {
        if (newstate < 0 ) this._state = 0;
        else if (newstate > 100) this._state = 100;
        else this._state = newstate;
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state = this.state * 1.5;
    }
    
}


class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author,name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] == value) return book;
        }
        return null;
    }

    giveBookByName(bookName) {
        let i = 0;
        for (let book of this.books) {
            if (book.name == bookName) {
                this.books.splice(i, 1);
                return book;             
            } 
            i++;
        }
        return null;
    }
}

let myHomeLibrary = new Library("Домашняя библиотека");
let warOfTheWorlds = new FantasticBook('Herbert George Wells', 'The War of the Worlds', 1999, 236), 
theMartianCronicles = new FantasticBook('Ray Bradbury', 'The Martian Chronicles', 2006, 311),
toKillaMockingbird = new NovelBook('Harper Lee', 'To Kill a Mockingbird', 1960, 416),
myInventions = new Book('Nikola Tesla', 'My Inventions', 1919, 88);
myHomeLibrary.addBook(warOfTheWorlds);
myHomeLibrary.addBook(theMartianCronicles);
myHomeLibrary.addBook(toKillaMockingbird);
myHomeLibrary.addBook(myInventions);
myHomeLibrary.findBookBy('releaseDate', 1919);
myHomeLibrary.giveBookByName('The Martian Chronicles');
theMartianCronicles.state = 21;
theMartianCronicles.fix();
myHomeLibrary.addBook(theMartianCronicles);



class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }
    
    getName() {
        return this.name;
    }

    #checkSubjExistance(subject) {
        console.log(this.grades);
        if (this.grades.hasOwnProperty(subject)) return true;
        else {
            console.log('предмет не найден');
            return false;
        }

    }
    
    addGrade(grade, subject) {
        let result = '';

        if ((typeof grade !== 'number') && (!(0 < grade < 6))) {
            result += `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5. \n`;
        }

        else if (this.#checkSubjExistance(grade)) {
            this.grades[subject].push(grade);
        }
        
        else {
            this.grades[subject] = [];
            this.grades[subject].push(grade);
        }

        if (this.#checkSubjExistance(grade)) result += this.grades[subject].length;
        else result += '0';

        console.log(result);
        return result;
    }


    getAverageBySubject(subject) {
        let sum = 0;
        if (this.#checkSubjExistance(subject)) {
            for (let grade in this.grades[subject]) {
                sum =+ grade;
            }
            return sum/this.grades[subject].length;
            
        }
        return sum;
    }
}