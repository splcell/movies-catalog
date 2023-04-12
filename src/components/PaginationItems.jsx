import { Pagination } from 'react-bootstrap';

const PaginationItems = ({result, setPage, setPageLoad, setFilter}) => {
    //создаем динамическую пагинацию на основе переменной result получаемой из api
    let active = 1;
    let items = [];
    for (let number = 1; number <= result; number++) {
        items.push(
                <li className='pagination-list' active={number === active} style={{listStyle: 'none'}}>
                    <button className='pagination-btn' onClick={() => {
                        setPage(number)
                        setPageLoad(true);
                        setFilter('')
                    }}>{number}</button>
                </li>
            
        );
    }
    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    );
};

export default PaginationItems;