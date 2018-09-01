import React, { Component } from "react";

import RadioTitle from './../RadioTitle';
import StationsList from './../StationsList';

import './styles.sass';

class Header extends Component {
  render() {
    const { 
      stations,
      stationNumber,
      play,
      player,
      changeNumber,
      changePlayStatus
    } = this.props;
    return <header className="header">
      <StationsList 
        stations={stations}
        play={play}
        audio={player}
        changeNumber={changeNumber}
        changePlayStatus={changePlayStatus}
      />
      <RadioTitle 
        stations={stations}
        stationNumber={stationNumber}
      />
      </header>;
  }
}

export default Header;
