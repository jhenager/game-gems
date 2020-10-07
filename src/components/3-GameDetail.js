import React from "react";
import PropTypes from "prop-types";
import {Radar} from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GameDetail(props){
  const { game } = props;

  const data =  {
    labels: ['Story', 'Gameplay', 'Style', 'Challenge', 'Replay Value', 'Social', 'Innovation', 'Freedom'],
    datasets: [
      {
        label: `${game.title}`,
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [`${game.story}`, `${game.gameplay}`, `${game.style}`, `${game.challenge}`, `${game.replay}`, `${game.social}`, `${game.innovation}`, `${game.freedom}`]
    }
  ]
};
let numbers = [`${game.story}`, `${game.gameplay}`, `${game.style}`, `${game.challenge}`, `${game.replay}`, `${game.social}`, `${game.innovation}`, `${game.freedom}`];
numbers.sort(function(a, b) {
  return b - a;
});

let first = ""
if (numbers[0] === `${game.story}`) {
  first = "Story"
} else if (numbers[0] === `${game.gameplay}`) {
  first = "Gameplay"
} else if (numbers[0] === `${game.style}`) {
  first = "Style"
} else if (numbers[0] === `${game.challenge}`) {
  first = "Challenge"
} else if (numbers[0] === `${game.replay}`) {
  first = "Replay"
} else if (numbers[0] === `${game.social}`) {
  first = "Social"
} else if (numbers[0] === `${game.innovation}`) {
  first = "Innovation"
} else if (numbers[0] === `${game.freedom}`) {
  first = "Freedom"
}

let second = ""
if (numbers[1] === `${game.story}`) {
  second = "Story"
} else if ((numbers[1] === `${game.gameplay}`) && (numbers[1] !== numbers[0])) {
  second = "Gameplay"
} else if ((numbers[1] === `${game.style}`) && (numbers[1] !== numbers[0])) {
  second = "Style"
} else if ((numbers[1] === `${game.challenge}`) && (numbers[1] !== numbers[0])) {
  second = "Challenge"
} else if ((numbers[1] === `${game.replay}`) && (numbers[1] !== numbers[0])) {
  second = "Replay"
} else if ((numbers[1] === `${game.social}`) && (numbers[1] !== numbers[0])) {
  second = "Social"
} else if ((numbers[1] === `${game.innovation}`) && (numbers[1] !== numbers[0])) {
  second = "Innovation"
} else if ((numbers[1] === `${game.freedom}`) && (numbers[1] !== numbers[0])) {
  second = "Freedom"
}

let third = ""
if (numbers[2] === `${game.story}`) {
  third = "Story"
} else if ((numbers[2] === `${game.gameplay}`) && (numbers[2] !== numbers[1])) {
  third = "Gameplay"
} else if ((numbers[2] === `${game.style}`) && (numbers[2] !== numbers[1])){
  third = "Style"
} else if ((numbers[2] === `${game.challenge}`) && (numbers[2] !== numbers[1])) {
  third = "Challenge"
} else if ((numbers[2] === `${game.replay}`) && (numbers[2] !== numbers[1])) {
  third = "Replay"
} else if ((numbers[2] === `${game.social}`) && (numbers[2] !== numbers[1])) {
  third = "Social"
} else if ((numbers[2] === `${game.innovation}`) && (numbers[2] !== numbers[1])) {
  third = "Innovation"
} else if ((numbers[2] === `${game.freedom}`) && (numbers[2] !== numbers[1])) {
  third = "Freedom"
}
  return (
    
    <React.Fragment>
      <Container fluid>
        <Card>
          <Container>
            <Card.Header>
              <h1>{game.title}</h1>
            </Card.Header>
            <Row>
              <Col>
              <p>Year Released: {game.year}</p>
              <p>Developer(s): {game.developers}</p>
              <p>Publisher(s): {game.publishers}</p>  
              <p>Genre: {game.genre}</p>
              </Col>
              <Col>
                <p>Synopsis: {game.synopsis}</p>
              </Col>

            </Row>
            <Button  variant="secondary" size="lg" block onClick={ props.onClickingReview }>Review this game</Button>
            <br />
            <Radar data={data} />
            <p>{first}</p>
          </Container>
        </Card>
        <Card>
          <Container>
            <Card.Header>
              <Row>
                <h3>Top Traits</h3>
              </Row>
              <Row>
                <Col>{first}</Col>
                <Col>{second}</Col>
                <Col>{third}</Col>
              </Row>
            </Card.Header>
          </Container>
        </Card>
        <Button onClick={ props.clicked }>Back to Games</Button>
      </Container>
    </React.Fragment>
  );
}

GameDetail.propTypes = {
  game: PropTypes.object,
  onClickingReview: PropTypes.func
}

export default GameDetail;