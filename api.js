 export const API_KEY = process.env.REACT_APP_APY_KEY;

async function getSearchedMovies(value, type = 'all', page) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${type !== 'all' ? `&type=${type}` : ''}&page=${page}`);
    return await response.json()
}

async function getFullMovieData(title){
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}&plot=full`);
    return await response.json();
}

export {getSearchedMovies, getFullMovieData};