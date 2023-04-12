import './index.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import { useSelectedMovies } from './hooks/SelectedHook';
import MoviePage from './pages/MoviePage';

function App() {
const APY_KEY = process.env.REACT_APP_APY_KEY;
const [movies, setMovies] = useState([]);
const [page, setPage] = useState(1);
const [pageLoad, setPageLoad] = useState(true);
const [result, setResult] = useState(1);
const [search, setSearch] = useState('');
const [filter, setFilter] = useState('');
const filteredMovies = useSelectedMovies(movies, filter);


/* хук useEffect отвечающий за первоначальную загрузку данных, отслеживающий номер страницы для обновления контента и количество страниц из API для создания динамической пагинации.
Если функция searchMovie запущена, useEffect отображает данные по нужному фильму, если нет - то выводит данные по Матрице
*/
useEffect(() => {
  async function fetchMovies() { 
    
      const response = await fetch(`https://www.omdbapi.com/?apikey=${APY_KEY}&s=${search.trim() == '' ? 'matrix' : search}&page=${page}`);
      const data = await response.json();
      if (data.Response !== 'False') {
        setResult(Math.ceil(data.totalResults / 10));
        setMovies(data.Search);
        setPageLoad(false);
      }
    }
     
  if (pageLoad) { 
    fetchMovies()
  }
}, [searchMovie, pageLoad]);

//функция searchMovie отвечает за поиск фильма на основе запроса, введенного в поисковую строку

function searchMovie(value, type = 'all'){
   fetch(`https://www.omdbapi.com/?apikey=${APY_KEY}&s=${value}${type !== 'all' ? `&type=${type}` : ''}&page=${page}`)
     .then(response => {
        if (!response.ok) {
          throw new Error('Data Server Error');
        }
        return response.json();
     })
     .then(data => {
      if (typeof data === 'undefined') {
        throw new Error('Data not Found');
      }
       setMovies(data.Search);
       setResult(Math.ceil(data.totalResults / 10));
       setPageLoad(false);
     })
     .catch((error) => {
       alert(error.message);
     });
};


  return (
    <Router basename='/movies-catalog'>
       <div className = "App" >
        <Header setSearch={setSearch}/>
        <Routes>
          <Route path='*' element={
          <Main 
          movies={filteredMovies}
          result={result} 
          setPage={setPage} 
          setPageLoad={setPageLoad} 
          search={search} 
          setSearch={setSearch} 
          searchMovie={searchMovie}
          filter={filter}
          setFilter={setFilter}
          />
          }/>
         <Route path='/movie/:title'  element={<MoviePage movies={movies}/>}/>
        </Routes>
        <Footer />
       </div>
    </Router>
  );
}

export default App;
