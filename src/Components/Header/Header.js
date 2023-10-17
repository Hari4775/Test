import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const settingsClick = () => {
    navigate('/settings');
  }

  const logout = () => {
    navigate('/');
  }

  return (
    <>   
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand  href="/" style={{fontFamily:'fantasy',color:'GrayText',fontSize:"60px"}}>FALCON</Navbar.Brand>
          <div >
            <ul style={{display:"flex",listStyle:"none"}}>
              <li className='m-4 ' >
              <Link to="/"  style={{ textDecoration: 'none', color: '#000' }}>Home</Link></li>
              <li className='m-4'>
              <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Products</Link></li>
              <li  className='m-4' >shop</li>
            </ul>
          </div>     
          <Navbar.Brand href="#home">My Cart</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
