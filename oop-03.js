class A {
    name = 'Teo';
    age = 20;

    constructor() {
        console.log('constructor class A');
    }

    getName(){
        return this.name;
    }
}
// ke thua 
class B extends A {
    fullName = 'Ty';

    constructor() {
        super();
        console.log('constructor class B');
    }

    // override
    getName(){
        return this.fullName;
    }
    getMyName(){
        //return this.getName(); // B || A ??? lam the nao goi dc method of class A
        return super.getName();
    }
}
let b = new B;
let c = 10;
console.log(b.getName()); //B
console.log(b.getMyName());
if(c instanceof B){
    console.log('OK');
}