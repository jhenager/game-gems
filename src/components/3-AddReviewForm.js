import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/review.css';

function AddReviewForm(props) {
  const firestore = useFirestore();
  const { game } = props;

  function addReviewToFirestore(event) {
    event.preventDefault()
    props.onAddReview();
    let gameplayValue = 0;
    let storyValue = 0;
    let styleValue = 0;
    let challengeValue = 0;
    let replayValue = 0;
    let socialValue = 0;
    let innovationValue = 0;
    let freedomValue = 0;

    if (event.target.drop1.value  === "gameplay") {
      gameplayValue +=1;
    }  else if (event.target.drop1.value === "story"){
      storyValue+=1
    } else if (event.target.drop1.value === "style"){
      styleValue+=1
    } else if (event.target.drop1.value === "challenge"){
      challengeValue+=1
    } else if (event.target.drop1.value === "replay"){
      replayValue+=1
    } else if (event.target.drop1.value === "social"){
      socialValue+=1
    } else if (event.target.drop1.value === "innovation"){
      innovationValue+=1
    } else if (event.target.drop1.value === "freedom"){
      freedomValue+=1
    }

    if (event.target.drop2.value  === "gameplay") {
      gameplayValue +=1;
    }  else if (event.target.drop2.value === "story"){
      storyValue+=1
    } else if (event.target.drop2.value === "style"){
      styleValue+=1
    } else if (event.target.drop2.value === "challenge"){
      challengeValue+=1
    } else if (event.target.drop2.value === "replay"){
      replayValue+=1
    } else if (event.target.drop2.value === "social"){
      socialValue+=1
    } else if (event.target.drop2.value === "innovation"){
      innovationValue+=1
    } else if (event.target.drop2.value === "freedom"){
      freedomValue+=1
    }

    if (event.target.drop3.value  === "gameplay") {
      gameplayValue +=1;
    }  else if (event.target.drop3.value === "story"){
      storyValue+=1
    } else if (event.target.drop3.value === "style"){
      styleValue+=1
    } else if (event.target.drop3.value === "challenge"){
      challengeValue+=1
    } else if (event.target.drop3.value === "replay"){
      replayValue+=1
    } else if (event.target.drop3.value === "social"){
      socialValue+=1
    } else if (event.target.drop3.value === "innovation"){
      innovationValue+=1
    } else if (event.target.drop3.value === "freedom"){
      freedomValue+=1
    }
    
    let propertiesToUpdate = {
      story: game.story += storyValue,
      gameplay: game.gameplay += gameplayValue,
      style: game.style += styleValue,
      challenge: game.challenge += challengeValue,
      replay: game.replay += replayValue,
      social: game.social += socialValue,
      innovation: game.innovation += innovationValue,
      freedom: game.freedom += freedomValue,
    };
    return firestore.update(
      {collection: "games", doc: game.id },
      propertiesToUpdate
    );
  }

  return (
    <div className='background'>
    <Container className='form-container'>
      <Card className='review-card'>
        <Card.Header>
          <h3 className='title'>What does this game do best?</h3>
        </Card.Header>
        <Form onSubmit={addReviewToFirestore}>
          <Form.Group className='form-group' controlId="top3">
            <Form.Control className='dropdown' as='select' name='drop1'>
              <option value="story" >Story</option>
              <option value="gameplay">Gameplay</option>
              <option value="style">Style</option>
              <option value="challenge">Challenge</option>
              <option value="replay">Replay value</option>
              <option value="social">Social/Community</option>
              <option value="innovation">Innovation</option>
              <option value="freedom">Freedom</option>
            </Form.Control>
            <br />
            <Form.Control className='dropdown' as='select' name='drop2'>
              <option value="style">Style</option>
              <option value="story" >Story</option>
              <option value="gameplay">Gameplay</option>
              <option value="challenge">Challenge</option>
              <option value="replay">Replay value</option>
              <option value="social">Social/Community</option>
              <option value="innovation">Innovation</option>
              <option value="freedom">Freedom</option>
            </Form.Control>
            <br />
            <Form.Control className='dropdown' as='select' name='drop3'>
              <option value="gameplay">Gameplay</option>
              <option value="story" >Story</option>
              <option value="style">Style</option>
              <option value="challenge">Challenge</option>
              <option value="replay">Replay value</option>
              <option value="social">Social/Community</option>
              <option value="innovation">Innovation</option>
              <option value="freedom">Freedom</option>
            </Form.Control>
            <br />
          <Button type='submit'>Submit</Button>
          </Form.Group>
        
        </Form>
      </Card>
    </Container>
    <div className='footer' />
    </div>
  )
}
    AddReviewForm.propTypes = {
      onEditTicket: PropTypes.func,
    };
    
    export default AddReviewForm;