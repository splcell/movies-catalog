import Spinner from 'react-bootstrap/Spinner';
// Возвращаем прелоадер из библиотеки react-bootstrap
const Preloader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '3rem'}}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default Preloader;