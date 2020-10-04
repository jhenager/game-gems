import React from 'react';
import GameList from './GameList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from "./../actions";
import { withFirestore, isLoaded } from "react-redux-firebase";

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGame: null,
      editing: false,
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(
      () => this.updateGameElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateGameElapsedWaitTime = () => {
    const { dispatch } = this.props;
  };

  handleClick = () => {
    if (this.state.selectedGame != null) {
      this.setState({
        selectedGame: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleChangingSelectedGame = (id) => {
    this.props.firestore
      .get({ collection: "games", doc: id })
      .then((game) => {
        const firestoreGame = {
          // title: game.get("title"),
          // genre: game.get("genre"),
          // issue: game.get("issue"),
          id: game.id,
        };
        this.setState({ selectedGame: firestoreGame });
      });
  };

  handleReviewClick = () => {
    this.setState({ editing: true });
  };

  handleEditingGameInList = () => {
    this.setState({
      editing: false,
      selectedTicket: null,
    });
  };

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

