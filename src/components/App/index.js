import React, { Component } from 'react';

import Header from './../Header';
import Controls from "./../Controls";
import Player from "./../Player";

import './styles.sass';

class App extends Component {
  state = {
    stationNumber: 0,
    player: null,
    stations: null,
    play: false
  };

  render() {
    const { stations, stationNumber, play } = this.state;
    return (
      <div className="App">
        <Header 
          stations={stations}
          stationNumber={stationNumber}
          play={play}
          changePlayStatus={this.changePlayStatus}
          changeNumber={this.changeNumber}
          player={this.state.player}
        />
        <Player
          getPlayer={this.getPlayer}
          stationNumber={stationNumber}
          stations={stations}
        />
        <Controls
          player={this.state}
          changeNumber={this.changeNumber}
          stationNumber={stationNumber}
          stations={stations}
          play={play}
          changePlayStatus={this.changePlayStatus}
        />
      </div>
    );
  }

  componentDidMount() {
    fetch("http://johnny123.16mb.com/data/stations.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ stations: data });
      });
  }

  changePlayStatus = () => {
    this.setState({ play: !this.state.play })
  }

  getPlayer = val => {
    this.setState({ player: val });
  };

  changeNumber = (number, fun) => {
    if(fun === 'next') {
      this.setState({ stationNumber: number + 1 }) 
    } else if (fun === 'prev') {
      this.setState({ stationNumber: number - 1 })
    } else {
      this.setState({ stationNumber: number})
    }
  };
}

export default App;
