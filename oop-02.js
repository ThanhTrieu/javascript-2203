class B {
    age = 20;
    constructor(){
        this.name = 'Teo';
        this.email = 'teo@gmail.com';
    }

    static getEmail(){

        return 'A'; //this.email;
    }

    static getAge(){
        let t = new B;
        return t.age;
    }

    getMoney(){
        return 100;
    }

    static getName(){
        //console.log(this);
        //return this.getEmail(); 
    }
}
let m = new B();
let n = B.getAge();
console.log(n);