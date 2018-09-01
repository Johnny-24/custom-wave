import React, { Component } from 'react';

import Play from "./../Play";
import Next from "./../Next";
import Prev from './../Prev';

import './styles.sass';

class Controls extends Component {
  render() {
    const { 
      stations, 
      stationNumber, 
      play, 
      player, 
      changeNumber, 
      changePlayStatus 
    } = this.props;
    return <div className="controls">
        <Prev 
          prevStation={changeNumber}
          stationNumber={stationNumber}
          stations={stations}
          audio={player}
          changePlayStatus={changePlayStatus}
          play={play}
        />
        <Play 
          audio={player} 
          play={play}
          changePlayStatus={changePlayStatus}
          />
        <Next 
          nextStation={changeNumber} 
          stationNumber={stationNumber}
          stations={stations}
          audio={player}
          changePlayStatus={changePlayStatus}
          play={play}
        />
      </div>;
  }
}


export default Controls;
