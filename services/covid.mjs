// call data from api
import axios from 'axios';

function* getDataPostOfUser(){
    // get list users
    yield axios.get(`https://jsonplaceholder.typicode.com/users`);
    // get list posts of user
    yield axios.get(`https://jsonplaceholder.typicode.com/posts`);
}

const getDataCoronaCountries = async () => {
    const url = `https://api.covid19api.com/summary`;
    const response = await axios.get(url); // return ve 1 promise
    // cai response la 1 object co thuoc status va data roi
    const result = await response.status === 200 ? await response.data : {};
    let countries = [];
    if(result.hasOwnProperty('Countries')){
        countries = result.Countries;
    }
    return countries;
}
export const api = {
    getDataPostOfUser,
    getDataCoronaCountriesV2
}