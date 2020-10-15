import React from "react";
import PropTypes from "prop-types";
import {Radar} from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/details.css';

function GameDetail(props){
  const { game } = props;

  // Chart js data settings

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

// Chart js custom options

const options = {
  responsive: true,
  
  legend: {
    display: false,
  },
  scale: {
    angleLines: {
      display: true,
    },
    
    gridLines: {
      circular: true,
    },
    pointLabels: {
      fontSize: 20,
      fontFamily: 'Crimson Text',
    },
    ticks:{
      display: false,
      beginAtZero: true,
      suggestedMin: 0,
      suggestedMax: 100,
    },
  }
}

// Function for ordering traits in descending order numerically

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
      <div className='background'>
      <Container fluid>
        <br />
        <Card className='detail-card'>
          <Container>
            <Card.Header>
              <h1 className='title'>{game.title}</h1>
            </Card.Header>
            <Row className='detail-body'>
              <Col className='col-left'>
              <p><strong>Year Released:</strong> {game.year}</p>
              <p><strong>Developer(s):</strong> {game.developers}</p>
              <p><strong>Publisher(s):</strong> {game.publishers}</p>  
              <p><strong>Genre:</strong> {game.genre}</p>
              </Col>
              <Col className='col-right'>
                <p><strong>Synopsis:</strong> <br />{game.synopsis}</p>
              </Col>
            </Row>
            <Button size="lg" block onClick={ props.onClickingReview }>Review this game</Button>
            <br />
            <Container  className='radar'>
              <Radar data={data} options={options} />
            </Container>
          </Container>
        </Card>
        <Card className='trait-body'>
          <Container>
            <Card.Header>
                <h3 className='title'>Top Traits</h3>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col><p className='trait'>{first}</p></Col>
                <Col><p className='trait'>{second}</p></Col>
                <Col><p className='trait'>{third}</p></Col>
              </Row>
            </Card.Body>
          </Container>
        </Card>
        <Container className='button-card'>
          <Row>
            <Button onClick={ props.clicked }>Back to Games</Button>
          </Row>
        </Container>
      </Container>
      </div>
      <div className='footer'></div>
    </React.Fragment>
  );
}

GameDetail.propTypes = {
  game: PropTypes.object,
  onClickingReview: PropTypes.func
}

export default GameDetail;