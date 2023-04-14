import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink} from 'react-router-dom';

const Movie = ({Title, Year, imdbID, Type, Poster}) => {
    //API выводит еще и список игр, но наш проект каталог фильмов, поэтому игры мы скрываем из вывода
    if(Type !== 'game'){
        return (
            <Card style={{ width: '18rem' }}>
                {/* Если постер фильма отсутствует заменяем его заглушкой с названием фильма */}
                {Poster === 'N/A' ? <Card.Img variant="top" src={`https://via.placeholder.com/350x450?text=${Title}`} style={{ height: '422px' }} /> : <Card.Img variant="top" src={Poster} style={{ height: '422px' }} />}
                <Card.Body>
                    <Card.Title style={{fontFamily: 'Poppins, sans-serif'}}>{Title}</Card.Title>
                    <Card.Text style={{display: 'flex', justifyContent:'space-beetween', alignItems: 'center'}}>
                        <span className='year'>{Year}</span>
                        <span className={Type}>{Type}</span>
                        {/* Формируем путь в поисковой строке, который появится после нажатия кнопки More */}
                        <NavLink to={`/movie/${Title}`} style={{ textDecoration: 'none', color: '#ffffff', marginLeft: 'auto' }}><Button variant="dark" style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>More</Button></NavLink>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    } else {
        return null
    }
    
};

export default Movie;