import { api } from './services/covid.mjs';

const g = api.getDataPostOfUser();
const u = g.next().value;
u.then(d => d.data)
 .then(res => {
    const p = g.next().value;
    let dataUser = res;
    p.then(d2 => d2.data)
    .then(res2 => {
         let dataPost = res2;
         // dataUser va dataPost da co tu xu ly tiep
    })
 })