import React, { Component } from 'react';

import Play from "./../Play";
import Next from "./../Next";
import Prev from './../Prev';

import './styles.sass';

class Controls extends Component {
  render() {
    return <div className="controls">
        <Prev />
        <Play audio={this.props.player} />
        <Next 
          nextStation={this.props.changeNumber} 
          stationNumber={this.props.stationNumber}
          stations={this.props.stations}
        />
      </div>;
  }
}


export default Controls;
