import React from 'react';
import GameList from './3-GameList';
import GameDetail from './3-GameDetail';
import AddReviewForm from './3-AddReviewForm';
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
          title: game.get("title"),
          genre: game.get("genre"),
          publishers: game.get("publishers"),
          developers: game.get("developers"),
          synopsis: game.get("synopsis"),
          year: game.get("year"),
          story: game.get("story"),
          gameplay: game.get("gameplay"),
          style: game.get("style"),
          challenge: game.get("challenge"),
          replay: game.get("replay"),
          social: game.get("social"),
          innovation: game.get("innovation"),
          freedom: game.get("freedom"),
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
    // const auth = this.props.firebase.auth();

    // if (isLoaded(auth) && auth.currentUser != null) {
      let currentlyVisibleState = null;
      let buttonText = null;
    
      if (this.state.editing) {
        currentlyVisibleState = (
          <AddReviewForm
          game={this.state.selectedGame}
          onAddReview={this.handleEditingGameInList}
          clicked={this.handleClick}
          />
        );
        buttonText = "Return to Game List"
      } else if (this.state.selectedGame != null) {
        currentlyVisibleState = (
          <GameDetail
            game={this.state.selectedGame}
            onClickingReview={this.handleReviewClick}
            clicked={this.handleClick}
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
      </React.Fragment>
      );
    }
  }

// }

const mapStateToProps = (state) => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

GameControl = connect(mapStateToProps)(GameControl);

export default withFirestore(GameControl);

