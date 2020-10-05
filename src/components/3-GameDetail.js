import React from "react";
import PropTypes from "prop-types";

function GameDetail(props){
  const { game } = props;

  return (
    <React.Fragment>
      <h1>{game.title}</h1>
      <p>Year Released: {game.year}</p>
      <p>Developer(s): {game.developers}</p>
      <p>Publisher(s): {game.publishers}</p>  
      <p>Genre: {game.genre}</p>
      <p>Synopsis: {game.synopsis}</p>
    </React.Fragment>
  );
}

GameDetail.PropTypes = {
  game: PropTypes.object,
}

export default GameDetail;