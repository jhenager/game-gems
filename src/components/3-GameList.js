import React from "react";
import PropTypes from "prop-types";
import Game from "./Game";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

function GameList(props) {

  useFirestoreConnect([{ collection: "games" }]);

  const games = useSelector((state) => state.firestore.ordered.games);

  if(isLoaded(games)) {
    return (
      <React.Fragment>
        <hr />
        {games.map((game) => {
          return (
            <Game
              whenGameClicked={props.onGameSelection}
              title={game.title}
              year={game.year}
              stats={game.stats}
              id={game.id}
              key={game.id}
              />
          );
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}
GameList.propTypes = {
  onGameSelection: PropTypes.func,
};

export default GameList;