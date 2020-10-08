import React from "react";
import Container from 'react-bootstrap/Container';
import './css/header.css';



function Header() {
 
  return (
    <React.Fragment>
    
      <div className='background-header'>
        <Container className='title-container'>
          <h3 className='title-header'>Game Gems</h3>
          <p>Every game does something well</p>
        </Container>
        
      </div>
    </React.Fragment>
  );
}

export default Header;