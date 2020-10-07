import React from "react";
import PropTypes from "prop-types";
import {Radar} from 'react-chartjs-2';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

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
} else if (numbers[1] === `${game.gameplay}`) {
  second = "Gameplay"
} else if (numbers[1] === `${game.style}`) {
  second = "Style"
} else if (numbers[1] === `${game.challenge}`) {
  second = "Challenge"
} else if (numbers[1] === `${game.replay}`) {
  second = "Replay"
} else if (numbers[1] === `${game.social}`) {
  second = "Social"
} else if (numbers[1] === `${game.innovation}`) {
  second = "Innovation"
} else if (numbers[1] === `${game.freedom}`) {
  second = "Freedom"
}

let third = ""
if (numbers[2] === `${game.story}`) {
  third = "Story"
} else if (numbers[2] === `${game.gameplay}`) {
  third = "Gameplay"
} else if (numbers[2] === `${game.style}`) {
  third = "Style"
} else if (numbers[2] === `${game.challenge}`) {
  third = "Challenge"
} else if (numbers[2] === `${game.replay}`) {
  third = "Replay"
} else if (numbers[2] === `${game.social}`) {
  third = "Social"
} else if (numbers[2] === `${game.innovation}`) {
  third = "Innovation"
} else if (numbers[2] === `${game.freedom}`) {
  third = "Freedom"
}
  return (
    
    <React.Fragment>
      <Container fluid>
        <Card>
          <Container>

            <h1>{game.title}</h1>
            <p>Year Released: {game.year}</p>
            <p>Developer(s): {game.developers}</p>
            <p>Publisher(s): {game.publishers}</p>  
            <p>Genre: {game.genre}</p>
            <p>Synopsis: {game.synopsis}</p>
            <Button  variant="secondary" size="lg" block onClick={ props.onClickingReview }>Review this game</Button>
            <br />
            <Radar data={data} />
            <p>{first}</p>
          </Container>
        </Card>
        <Card>
          <Container>
            
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