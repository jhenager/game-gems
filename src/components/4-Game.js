import React from "react";
import PropTypes from "prop-types";

function Game(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenGameClicked(props.id)}>
        <h3>{props.title} - {props.year}</h3>

      </div>
      <hr/>
    </React.Fragment>
  );
}


Game.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  id: PropTypes.string,
  whenGameClicked: PropTypes.func
};

export default Game;