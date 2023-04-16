//импортируем форму и кнопку из react-bootstrap
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const SearchSort = ({search, setSearch, searchMovie, filter, setFilter}) => {

// функция валидации, позволяющая вводить в поиск только маленькие и большие английские буквы и пробелы. Если валидация пройдена - инпут становится упарвляемым
    const handleSearchInputChange = (e) => {
        let validation = /^[a-zA-Z\s\-]+$/;

        if (!validation.test(e.target.value)) {
            setSearch('');
        } else {
            setSearch(e.target.value);
        }
    };

//функция которая запускает поиск, если нажата клавиша Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && search.trim()) {
            e.preventDefault()
            searchMovie(search);
        }
    };

    return (
        /* возращает управляемые поисковую строку и селект, а также кнопку для запуска поиска */
        <form className='catalog-form'>
            <div className='catalog-form__search-box'>
                <input className='catalog-form__input' placeholder='Search movie' value={search} onChange={handleSearchInputChange} onKeyDown={handleKeyDown}></input>
                {/* если поисковая строка, с учетом пробела, пустая - кнопка отключена */}
                <Button className='catalog-form__btn' variant='dark' disabled={!search.trim()} onClick={() => searchMovie(search)}>Search</Button>
            </div>            
            <Form.Select aria-label="Default select example" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option disabled selected value=''>Select category</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
            </Form.Select>
        </form>
    );
};

export default SearchSort;