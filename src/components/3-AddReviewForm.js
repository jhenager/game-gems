import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function AddReviewForm(props) {
  const firestore = useFirestore();
  const { game } = props;

  function addReviewToFirestore(event) {
    event.preventDefault()
    props.onAddReview();
    let gameplayValue = 0;

    if (event.target.drop1.value === "gameplay") {
      gameplayValue +=1;
    }
    const drop1Value = event.target.drop1.value;
    // const drop2Value = event.target.drop2.value;
    // const drop3Value = event.target.drop3.value;
    let propertiesToUpdate = {
      // story: game.story + event.target.story.value,
      gameplay: game.gameplay += gameplayValue,
      // style: game.style + event.target.style.value,
      // challenge: game.challenge + event.target.challenge.value,
      // replay: game.replay + event.target.replay.value,
      // social: game.social + event.target.social.value,
      // innovation: game.innovation + event.target.innovation.value,
      // freedom: game.freedom + event.target.freedom.value,
    };
    return firestore.update(
      {collection: "games", doc: game.id },
      propertiesToUpdate
    );
  }

  return (
    <Container className='form-container'>
      <h3>Pick 3 things you think this game does best:</h3>
      <Form onSubmit={addReviewToFirestore}>
        <Form.Group controlId="top3">
          <Form.Control as='select' name='drop1'>
            <option value="story" >Story</option>
            <option value="gameplay">Gameplay</option>
            <option value="style">Style</option>
            <option value="challenge">Challenge</option>
            <option value="replay">Replay value</option>
            <option value="social">Social/Community</option>
            <option value="innovation">Innovation</option>
            <option value="freedom">Freedom</option>
          </Form.Control>
          {/* <Form.Control as='select' name='drop2'>
            <option name="story">Story</option>
            <option name="gameplay">Gameplay</option>
            <option name="style">Style</option>
            <option name="challenge">Challenge</option>
            <option name="replay">Replay name</option>
            <option name="social">Social/Community</option>
            <option name="innovation">Innovation</option>
            <option name="freedom">Freedom</option>
          </Form.Control>
          <Form.Control as='select' name='drop3'>
            <option name="story">Story</option>
            <option name="gameplay">Gameplay</option>
            <option name="style">Style</option>
            <option name="challenge">Challenge</option>
            <option name="replay">Replay name</option>
            <option name="social">Social/Community</option>
            <option name="innovation">Innovation</option>
            <option name="freedom">Freedom</option>
          </Form.Control> */}
        <Button type='submit'>Submit</Button>
        </Form.Group>
      
      </Form>
    </Container>
  )
}
    AddReviewForm.propTypes = {
      onEditTicket: PropTypes.func,
    };
    
    export default AddReviewForm;