import { useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PaginationItems = ({result, page, setPage, setPageLoad, setFilter}) => {
    //создаем динамическую пагинацию на основе переменной result получаемой из api
    // let active = 1;
    let items = [];
    const navigate = useNavigate()
    for (let number = 1; number <= result; number++) {
        items.push(
            <li key={number} className='pagination-list' style={{listStyle: 'none'}}>
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