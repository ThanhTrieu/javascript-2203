// chi hien thi data cua nuoc VN thoi
import { api } from './services/coivid.mjs';


const getData = async () => {
    const data = await api.getDataCoronaCountries();
    const vn = data.filter(item => item.CountryCode === 'VN');
    console.log(vn);
}
getData();