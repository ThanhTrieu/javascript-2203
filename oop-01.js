class A {
    // khai bao thuoc tinh
    // kho dung cac tu khoa khai bao bien
    // mac dinh thuoc tinh la public
    name = 'Teo';
    age = 20; // props
    #address = "HN"; //private
    constructor(email){
        // phuong thuc - method
        // noi de dinh nghia cac thuoc
        this.state = {
            count : 0
        }
        this._email = email;
        // la phuong thuc chay dau tien khi khoi tao doi tuong cho class
        this.#money = 2000; // private
    }
    getName(){
        console.log(this);
        return this.name;
    }
    getEmail(){
        return this._email;
    }
}
// khoi tao doi tuong
let a = new A('teo@gmail.com');
// a la instance
// truy cap vao thuoc tinh
console.log(a.age);
console.log(a.getEmail());
// truy cap vao phuong thuc
a.getName(); 