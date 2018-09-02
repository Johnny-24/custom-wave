import React, { Component } from "react";

import RadioTitle from './../RadioTitle';
import Stations from "./../Stations";
import Burger from "./../Burger";

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
      <Burger 
        stations={stations}
        play={play}
        audio={player}
        changeNumber={changeNumber}
        changePlayStatus={changePlayStatus}
        stationNumber={stationNumber}
      />
      <Stations 
        stations={stations}
        play={play}
        audio={player}
        changeNumber={changeNumber}
        changePlayStatus={changePlayStatus}
        stationNumber={stationNumber}
      />
      <RadioTitle 
        stations={stations}
        stationNumber={stationNumber}
      />
      </header>;
  }
}

export default Header;
