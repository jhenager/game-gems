import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

function Header() {
  const headerText = "Game Shapes";
  return (
    <React.Fragment>
      <Jumbotron>
       <h3>{headerText}</h3>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;