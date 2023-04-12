import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const MoviePage = () => {
    const APY_KEY = process.env.REACT_APP_APY_KEY;
    //извлекаем название фильма из поисковой строки с помощью хука useParams
    const {title} = useParams()
    const [fullMovieInfo, setFullMovieInfo] = useState({});
    
    //получем информацию о фильме с помощью названия фильма, ранее извлеченного с помощью useParams. Делаем перерендер каждый раз после изменения названия
    useEffect(() =>{
        fetch(`https://www.omdbapi.com/?apikey=${APY_KEY}&t=${title}&plot=full`)
        .then(response => response.json())
        .then(data => {
            setFullMovieInfo(data)
        })
       .catch((error) => {
        console.log(error);
       })
    }, [title]);
    return (
        <div className='page__content' style={{ height: 'calc(130vh - 53px - 86px)'}}>
            <Container>
                <div className='page__inner'>
                    {fullMovieInfo.Poster === 'N/A' ? <img src={`https://via.placeholder.com/350x450?text=${fullMovieInfo.Title}`} style={{ margin: '3rem 0', height: '480px', marginTop: '6rem' }} alt={fullMovieInfo.Title} className='page__info-img' /> : <img src={fullMovieInfo.Poster} style={{ margin: '3rem 0', height: '480px', marginTop: '6rem' }} alt={fullMovieInfo.Title} className='page__info-img' />}
                    <div className='page__info'>
                        <h2 className='page__info-title'>{fullMovieInfo.Title}</h2>
                        <Table striped>
                            <thead></thead>
                            <tbody>
                                {/* Заполняем данными таблицу с информацией о фильме */}
                               {Object.keys(fullMovieInfo).map(key => {
                                    if(key.includes('Actors')){
                                        return (
                                            <tr key={key}>
                                                <td><b>{key}:</b></td>
                                                <td>{fullMovieInfo[key]}</td>
                                            </tr>
                                        )
                                    }
                                   if (key.includes('Awards')) {
                                       return (
                                           <tr key={key}>
                                               <td><b>{key}:</b></td>
                                               <td>{fullMovieInfo[key]}</td>
                                           </tr>
                                       )
                                   }
                                   if (key.includes('BoxOffice')) {
                                       return (
                                           <tr key={key}>
                                               <td><b>{key}:</b></td>
                                               <td>{fullMovieInfo[key]}</td>
                                           </tr>
                                       )
                                   }
                                   if (key.includes('Country')) {
                                       return (
                                           <tr key={key}>
                                               <td><b>{key}:</b></td>
                                               <td>{fullMovieInfo[key]}</td>
                                           </tr>
                                       )
                                   }
                                   if (key.includes('Director')) {
                                       return (
                                           <tr key={key}>
                                               <td><b>{key}:</b></td>
                                               <td>{fullMovieInfo[key]}</td>
                                           </tr>
                                       )
                                   }
                                   if (key.includes('Genre')) {
                                       return (
                                           <tr key={key}>
                                               <td><b>{key}:</b></td>
                                               <td>{fullMovieInfo[key]}</td>
                                           </tr>
                                       )
                                   }
                                   if (key.includes('Language')) {
                                       return (
                                           <tr key={key}>
                                               <td><b>{key}:</b></td>
                                               <td>{fullMovieInfo[key]}</td>
                                           </tr>
                                       )
                                   }
                                   if (key.includes('Released')) {
                                       return (
                                           <tr key={key}>
                                               <td><b>{key}:</b></td>
                                               <td>{fullMovieInfo[key]}</td>
                                           </tr>
                                       )
                                   }
                                   if (key.includes('Runtime')) {
                                       return (
                                           <tr key={key}>
                                               <td><b>{key}:</b></td>
                                               <td>{fullMovieInfo[key]}</td>
                                           </tr>
                                       )
                                   }
                                   if (key.includes('DVD')) {
                                       return (
                                           <tr key={key}>
                                               <td><b>{key}:</b></td>
                                               <td>{fullMovieInfo[key]}</td>
                                           </tr>
                                       )
                                   }
                                   if (key.includes('Metascore')) {
                                       return (
                                           <tr key={key}>
                                               <td><b>{key}:</b></td>
                                               <td>{fullMovieInfo[key]}</td>
                                           </tr>
                                       )
                                   }
                               })}
                            </tbody>
                        </Table>
                    </div>
                </div>
                        <p className='page__info-text'>{fullMovieInfo.Plot}</p>
                

            </Container>
        </div>
    );
};

export default MoviePage;