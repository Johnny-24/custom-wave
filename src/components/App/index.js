import React, { Component } from 'react';

import Header from './../Header';
import Controls from "./../Controls";
import Player from "./../Player";

import './styles.sass';

class App extends Component {
  state = {
    stationNumber: 0,
    player: null,
    stations: null
  };

  render() {
    return <div className="App">
        <Header />
        <Player 
          getPlayer={this.getPlayer} 
          stationNumber={this.state.stationNumber} 
          stations={this.state.stations}
        />
        <Controls 
          player={this.state} 
          changeNumber={this.changeNumber} 
          stationNumber={this.state.stationNumber} 
          stations={this.state.stations}
        />
      </div>;
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/stations.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ stations: data });
      });
  }

  getPlayer = (val) => {
    this.setState({player: val});
  }

  changeNumber = (number, fun) => {
    fun ? this.setState({
          stationNumber: number + 1
        }) : this.setState({ 
          stationNumber: number - 1 
        });
  }
}

export default App;
