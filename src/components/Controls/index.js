import React, { Component } from 'react';

import Play from "./../Play";
import Next from "./../Next";
import Prev from './../Prev';

import './styles.sass';

class Controls extends Component {
  state = {
    
  };

  render() {
    //http://stream.laut.fm/deutschrap
    return <div className="controls">
        <Prev />
        <Play audio={this.props.player}/>
        <Next />
      </div>;
  }
}


export default Controls;
