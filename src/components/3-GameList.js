import React from "react";
import PropTypes from "prop-types";
import Game from "./4-Game";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import './css/gamelist.css';

function GameList(props) {

  useFirestoreConnect([{ collection: "games" }]);

  const games = useSelector((state) => state.firestore.ordered.games);

  if(isLoaded(games)) {
    return (
      <React.Fragment>
        
        <div  className='background'>
          <Container className='about'>
            <Card className='about-card'>
              <br />
                <Card.Title className='about-title'>Game Gems is a video game review site that does away with numbers and stars. </Card.Title>
                <Card.Text className='about-body'>Instead, we focus on what a game does <strong>best</strong>. Choose three traits for each game that you think are the strongest. These results are aggregated and displayed in a unique game "gem" that models the strengths of the game.</Card.Text>
              <br />
            </Card>
          </Container>
          <br />
          
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
        <div  className='background'>
          <Spinner animation="border" role="status">
            <span  className="sr-only">Loading...</span>
          </Spinner>
        </div>
      </React.Fragment>
    );
  }
}
GameList.propTypes = {
  onGameSelection: PropTypes.func,
};

export default GameList;