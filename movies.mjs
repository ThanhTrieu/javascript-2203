import { api } from './services/api.mjs';

const searchMovie = async (name) => {
    const movies = await api.searchMovieByName(name);
    console.log(movies);
}
//searchMovie('batman');
const dataMovies = api.searchMovieByName('iron man');
//console.log(dataMovies);
dataMovies.then(data => console.log(data))
          .catch(error => console.log(error))
          .finally(() => console.log('thuc hien sau cung khi then hoac catch chay xong'))