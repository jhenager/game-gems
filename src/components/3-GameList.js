import React from "react";
import PropTypes from "prop-types";
import Game from "./4-Game";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

import './css/gamelist.css';

function GameList(props) {

  useFirestoreConnect([{ collection: "games" }]);

  const games = useSelector((state) => state.firestore.ordered.games);

  if(isLoaded(games)) {
    return (
      <React.Fragment>
        
        <div  className='background'>
          {games.map((game) => {
            return (
              <Game
                whenGameClicked={props.onGameSelection}
                title={game.title}
                year={game.year}
                story={game.story}
                gameplay={game.gameplay}
                style={game.style}
                challenge={game.challenge}
                replay={game.replay}
                social={game.social}
                innovation={game.innovation}
                freedom={game.freedom}
                id={game.id}
                key={game.id}
                />
                );
              })}
              <br />
            </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Spinner animation="border" role="status">
          <span  className="sr-only">Loading...</span>
        </Spinner>
      </React.Fragment>
    );
  }
}
GameList.propTypes = {
  onGameSelection: PropTypes.func,
};

export default GameList;