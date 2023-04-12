import React from 'react';
import Container from 'react-bootstrap/Container';
import MoviesList from '../components/MoviesList';
import Preloader from '../components/Preloader';
import PaginationItems from '../components/PaginationItems';
import SearchSort from '../components/SearchSort';


const Main = ({movies, result, setPage, setPageLoad, search, setSearch, searchMovie, filter, setFilter}) => {
    //если movies не возвращает undefined мы возвращаем весь компонент полностью, если же возвращает, то только тег main с поисковой строкой чтобы пользователь мог изменить свой несуществующий запрос
    if(movies !== undefined){
        return (
            <main style={movies.length !== 0 ? { flexBasis: '1' } : { height: 'calc(130vh - 53px - 50px)' }}>
                <Container>
                    <SearchSort search={search} setSearch={setSearch} searchMovie={searchMovie} filter={filter} setFilter={setFilter} />
                    {/* если длиннам массива фильмов не равно 0, выводим списко фильмов и динамическую пагинацию. Иначе выводим прелоадер */}
                    {movies.length !== 0 ?
                        <>
                            <MoviesList movies={movies} />
                            <PaginationItems result={result} setPageLoad={setPageLoad} setPage={setPage} setFilter={setFilter} />
                        </>
                        : <Preloader />
                    }
                </Container>
            </main>
        );
    } else {
        return (
            <main style={{ height: 'calc(130vh - 53px - 50px)' }}>
                <Container>
                    <SearchSort search={search} setSearch={setSearch} searchMovie={searchMovie} filter={filter} setFilter={setFilter} />
                    <h3 style={{textAlign: 'center', marginTop: '3rem'}}>Movies not Found. Try search again</h3>
                    </Container>
                    </main>
        )
    }
    
};

export default Main;