import { api } from './services/covid.mjs';

const dataCovid = api.getDataCoronaCountriesV2();
const res = dataCovid.next().value;
//console.log(dataCovid.next());
res.then(dt => dt.data)
    .then(r => console.log(r));

function foo(){
    console.log('I');
    console.log('can not');
    console.log('pause');
}
//foo();

// generator function
function* generate(){
    console.log('1st time');
    yield 1; // pause and return : generator
    console.log('2nd time');
    yield 2; // pause and return : generator
}
//let generator = generate();
//console.log(generator);
//let result = generator.next();
//console.log(result);
//let result2 = generator.next().value;
//console.log(result2);
//let result3 = generator.next();
//console.log(result3);

function* forever(){
    let i = 0;
    while (true) {
        yield i++;
    }
}
let f = forever();
// console.log(f.next());
// console.log(f.next());