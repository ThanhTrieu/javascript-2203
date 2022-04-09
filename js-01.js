const number = [1,2,3,4,5,6,7,8,9];
number.forEach((e,k,arr) => {
    // e: gia tri phan tu
    // k: key(index) cua phan tu
    // arr: mang ban dau
    console.log(`value: ${e} - index : ${k}`);
});
for( const i of number ) {
    console.log(`value: ${i}`);
}
const lengthArr = number.length;
for(let i = 0; i < lengthArr; i++) {
    console.log(`value: ${number[i]}`);
}

// object literal
let cars = {
    model: 'BMW',
    weight: 500,
    price: 1000,
    color: 'white',
    start: function(){
        console.log(this);
        return this.model;
    },
    stop: () => {
        console.log(this);
        return this.price;
    }
};
console.log(cars.model); // cars[model];
console.log(cars.stop());

let students = [
    {
        id: 1,
        name: 'Teo',
        address: 'Ha Noi'
    },
    {
        id: 2,
        name: 'Ty',
        address: 'Ha Nam'
    }
];
const data = students.map((item,index) => (`
    <tr class="js-${index}">
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.address}</td>
    </tr>
`) );
console.log(data);