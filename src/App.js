import './index.css';
import { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import { useSelectedMovies } from './hooks/SelectedHook';
import MoviePage from './pages/MoviePage';
import { API_KEY, getSearchedMovies } from './api';


function App() {
const [movies, setMovies] = useState([]);
const [page, setPage] = useState(1);
const [pageLoad, setPageLoad] = useState(true);
const [result, setResult] = useState(1);
const [searchValue, setSearchValue] = useState('');
const [filter, setFilter] = useState('');
const{pathname, search} = useLocation()
const navigate = useNavigate()
const filteredMovies = useSelectedMovies(movies, filter);




function searchMovie() {
  getSearchedMovies(searchValue, 'all', page).then(data => {
    if (typeof data === 'undefined') {
      throw new Error('Data not Found');
    }
    setMovies(data.Search);
    setResult(Math.ceil(data.totalResults / 10));
    setPageLoad(false);

  });

};

//создание динамического адреса в адресной строке
useMemo(() => {
  if(searchValue.trim() !== ''){
    navigate({
      pathname,
      search: `?title=${searchValue}&page=${page}`,
    });
  } else {
    navigate({
      pathname,
      search: `?title=matrix&page=${page}`,
    });
  }
}, [filteredMovies, page, filter]);


useEffect(() => {
  
  async function fetchMovies() { 
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search !== '' ? search.split('=')[1].split('&')[0] : 'matrix'}&page=${!search.split('=')[2] ? page : search.split('=')[2]}`);
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

  
}, [search, pageLoad, page]);



  return (
       <div className = "App" >
        <Header searchValue={searchValue} setSearchValue={setSearchValue} setPageLoad={setPageLoad}/>
        <Routes>
          <Route path='*' element={
          <Main 
          movies={filteredMovies}
          result={result}
          page={page} 
          setPage={setPage} 
          setPageLoad={setPageLoad} 
          search={searchValue} 
          setSearch={setSearchValue} 
          searchMovie={searchMovie}
          filter={filter}
          setFilter={setFilter}
          />
          }/>
         <Route path='/movie/:title'  element={<MoviePage movies={movies}/>}/>
        </Routes>
        <Footer />
       </div>
    
  );
  
}

export default App;
