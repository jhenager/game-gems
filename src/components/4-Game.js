import React from "react";
import PropTypes from "prop-types";
import {Radar} from 'react-chartjs-2';



const data =  {
    labels: ['Story', 'Gameplay', 'Style', 'Challenge', 'Replay Value', 'Social', 'Innovation', 'Freedom'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40, 20]
    }
  ]
};

function Game(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenGameClicked(props.id)}>
        <h3>{props.title} - {props.year}</h3>
        <Radar data={data} />
      </div>
      <hr/>
    </React.Fragment>
  );
}


Game.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  stats: PropTypes.array,
  id: PropTypes.string,
  whenGameClicked: PropTypes.func
};

export default Game;