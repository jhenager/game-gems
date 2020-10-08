import React from "react";
import PropTypes from "prop-types";
import {Radar} from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import './css/game.css';


function Game(props){
  const data =  {
      labels: ['Story', 'Gameplay', 'Style', 'Challenge', 'Replay Value', 'Social', 'Innovation', 'Freedom'],
      datasets: [
        {
          label: `${props.title}`,
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [`${props.story}`, `${props.gameplay}`, `${props.style}`, `${props.challenge}`, `${props.replay}`, `${props.social}`, `${props.innovation}`, `${props.freedom}`]
      }
    ],
  };
 
  const options = {
    responsive: true,
    
    legend: {
      display: false,
    },
    scales: {
      ticks:[{
        display: false,
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
            display: false,
          
        },
      }],
    }
  }
  return (
    <React.Fragment>
      <br />
      <Container>
      <Accordion defaultActiveKey="0">
        <Card> 
            <Card.Header>
              <Accordion.Toggle as={Button} variant="text" eventKey="1">
                <h3 className='title'>{props.title}</h3>
              </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <div onClick = {() => props.whenGameClicked(props.id)}>
                  <Card.Body><Radar data={data} options={options} /></Card.Body>
                </div>
              </Accordion.Collapse>
          <hr/>
        </Card>
        </Accordion>
      </Container>
    </React.Fragment>
  );
}


Game.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  story: PropTypes.number,
  id: PropTypes.string,
  whenGameClicked: PropTypes.func
};

export default Game;