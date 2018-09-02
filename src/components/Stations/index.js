import React, { Component } from 'react';

import StationsList from "./../StationsList";

import './styles.sass'

class Stations extends Component {
  render() {
    const {
      stations,
      play,
      audio,
      changeNumber,
      changePlayStatus,
      stationNumber
    } = this.props;
    return (
      <div className="stations">
        Stations List
        <StationsList
          stations={stations}
          play={play}
          audio={audio}
          changeNumber={changeNumber}
          changePlayStatus={changePlayStatus}
          stationNumber={stationNumber}
        />
      </div>
    );
  }
}

export default Stations;
