import React from 'react';
import GameList from './GameList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";

class GameControl extends React.Component {
  constructor(props) {
    this.state = {
      selectedGame: null,
      editing: false,
    }
  }


  render() {
    const auth = this.props.firebase.auth();

    if (isLoaded(auth) && auth.currentUser != null) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = (
          <AddReviewForm
          game={this.state.selectedGame}
          onAddReview={this.handleEditingGameInList}
          />
        );
        buttonText = "Return to Game List"
      } else if (this.state.selectedGame != null) {
        currentlyVisibleState = (
          <GameDetail
            game={this.state.selectedGame}
            onClickingReview={this.handleReviewClick}
          />
        );
        buttonText = "Return to Game List"
      } else {
        currentlyVisibleState = (
          <GameList onGameSelection={this.handleChangingSelectedGame} />
        );
        buttonText = "Sign-in";
      }
      return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
      );
    }
  }

}

const mapStateToProps = (state) => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

GameControl = connect(mapStateToProps)(GameControl);

export default withFirestore(GameControl);

