import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" style={{height: '53px'}}>
                <Container>
                    <NavLink to='/' style={{color: 'white', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'Poppins, sans-serif'}}>Movies Catalog</NavLink>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;