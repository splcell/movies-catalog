import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import {useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {getFullMovieData } from '../api';

const MoviePage = () => {
    const {title} = useParams()
    const [fullMovieInfo, setFullMovieInfo] = useState({});
    

    useEffect(() =>{
        getFullMovieData(title).then(data => {
            setFullMovieInfo(data);
        });
    }, [title]);

    return (
        <div className='page__content' style={{ height: 'calc(130vh - 53px - 86px)'}}>
            <Container>
                <Button variant='dark' className='page__btn-back' onClick={() => navigate(-2)}>Go Back</Button>
                <div className='page__inner'>
                    {fullMovieInfo.Poster === 'N/A' ? <img src={`https://via.placeholder.com/350x450?text=${fullMovieInfo.Title}`} style={{ margin: '3rem 0', height: '480px', marginTop: '6rem' }} alt={fullMovieInfo.Title} className='page__info-img' /> : <img src={fullMovieInfo.Poster} style={{ margin: '3rem 0', height: '480px', marginTop: '6rem' }} alt={fullMovieInfo.Title} className='page__info-img' />}
                    <div className='page__info'>
                        <h2 className='page__info-title'>{fullMovieInfo.Title}</h2>
                        <Table striped>
                            <thead></thead>
                            <tbody>
                                {[
                                    'Actors',
                                    'Awards',
                                    'BoxOffice',
                                    'Country',
                                    'Director',
                                    'Genre',
                                    'Language',
                                    'Released',
                                    'Runtime',
                                    'DVD',
                                    'Metascore',
                                ].map((key) => (
                                    <tr key={key}>
                                        <td>
                                            <b>{key}:</b>
                                        </td>
                                        <td>{fullMovieInfo[key]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
                        <p className='page__info-text'>{fullMovieInfo.Plot}</p>
                        <div className='page__shares-block'>
                            <a href={`https://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=368b0219904c5e57b9417ba5a135ebad&service=facebook&title=${title}&link=${currentUrl}/&source=Movies_Catalog`} target="_blank" className='page__share-link'>Post to Facebook</a>
                            <a href={`https://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=368b0219904c5e57b9417ba5a135ebad&service=vk&title=${title}&link=${currentUrl}/&source=Movies_Catalog`} target="_blank" className='page__share-link'>Post to VK</a>
                            <a href={`https://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=368b0219904c5e57b9417ba5a135ebad&service=telegram&title=${title}&link=${currentUrl}/&source=Movies_Catalog`} target="_blank" className='page__share-link'>Post to Telegram</a>
                            <a href={`https://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=368b0219904c5e57b9417ba5a135ebad&service=viber&title=${title}&link=${currentUrl}/&source=Movies_Catalog`} target="_blank" className='page__share-link'>Post to Viber</a>
                            <a href={`https://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=368b0219904c5e57b9417ba5a135ebad&service=copy_link&title=${title}&link=${currentUrl}/&source=Movies_Catalog`} target="_blank" className='page__share-link'>Copy to Clipboard</a>
                        </div>
            </Container>
        </div>
    );
};

export default MoviePage;
