import fetch from 'node-fetch';
import axios from 'axios';

const searchMovieByName = async (nameMovie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=cfe422613b250f702980a3bbf9e90716&page=1`;
    const response = await axios.get(url); // return ve 1 promise
    // cai response la 1 object co thuoc status va data roi
    const result =  response.status === 200 ?  response.data : {};
    return result;
}

const getDataPostById = async (id) => {
    // lay ra chi tiet bai viet
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url); // tra ve 1 promise
    const result = await response.json();
    return result;
}

const getDataCommentsByIdPost = async (id) => {
    // lay ra tat ca binh luan cua 1 bai viet
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

export const api = {
    getDataPostById,
    getDataCommentsByIdPost,
    searchMovieByName
}