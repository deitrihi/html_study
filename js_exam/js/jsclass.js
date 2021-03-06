var student = {
    name : 'test',
    printName: function() { 
        console.log('TTT : ' + this.name);
    },
    student: function(name) { 
        this.name = name;
    }
}

student.printName();
function Student(name) {
    this.name = name;
}

Student.prototype.printName = function() { 
    console.log(this.name);
}

var stu1 = new Student('TEST1');
var stu2 = new Student('TEST2');

stu1.printName();
stu2.printName();

class Stu {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}
var s1 = new Stu('stu1');
console.log(s1.name);
s1.printName();

var Stu2 = class { 
    constructor(age) {
        this.age = age;
    }

    printAge() { 
        console.log(this.age);
    }
}

class B extends Stu2 {
    printAge() { 
        console.log(this.age + 10);
    }
}

var s2 = new B(10);
s2.printAge();
s2.age = 5;
s2.printAge();

class C {
    constructor(age) { 
        this._age_ = age;
    }
    get age() { 
        return this._age_;
    }
    set age(age) { 
        this._age_ = age;
    }

    printAge() { 
        console.log(this._age_);
    }

    static calAge(c) { 
        return c._age_;
    }

    static print(s) { 
        console.log(s);
    }
}

var s3 = new C(10);
s3.printAge();
s3.age = 20;
s3.printAge();
var s3_age = C.calAge(s3);
console.log(s3_age);

C.print('PRINT TEST');