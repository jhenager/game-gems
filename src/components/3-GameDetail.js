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