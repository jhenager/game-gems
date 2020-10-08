import React from "react";
import PropTypes from "prop-types";
import {Radar} from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';



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
      <Container fluid>
        <Card> 
          <div onClick = {() => props.whenGameClicked(props.id)}>
            <Card.Header><h3>{props.title}</h3></Card.Header>
            <Card.Body><Radar data={data} options={options} /></Card.Body>
          </div>
          <hr/>
        </Card>
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