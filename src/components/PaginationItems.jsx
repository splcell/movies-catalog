import { useState} from 'react';
import { Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PaginationItems = ({result, setPage, setPageLoad, setFilter}) => {
    const [active, setActive] = useState(1)
    console.log(active)
    let items = [];
    for (let number = 1; number <= result; number++) {
        items.push(
            <li key={number} className='pagination-list' style={{listStyle: 'none'}}>
                <button className={active !== number ? 'pagination-btn' : 'pagination-btn_active'} onClick={() => {
                        setPage(number)
                        setPageLoad(true);
                        setFilter('')
                        setActive(number)
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