import Movie from './Movie';

const MoviesList = ({movies}) => {
    return (
        <div className='movies'>
            {movies && movies.map(movie => (
                <Movie key={movie.imdbID} {...movie}/>
            ))}
        </div>
    );
};

export default MoviesList;