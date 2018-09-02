import React, { Component } from 'react';

import StationsList from './../StationsList'

import './styles.sass'

class Burger extends Component {
  state = {
    active: false
  }

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
      <div className={`burger ${this.state.active && 'active'}`} onClick={this.handleBurger}>
      <i className="burger__ico"></i>
        <StationsList
          active={this.state.active}
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

  handleBurger = () => {
    this.setState({ active: !this.state.active })
  }
}

export default Burger;
