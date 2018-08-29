import React, { Component } from 'react';

import Header from './../Header';
import Controls from "./../Controls";
import Player from "./../Player";

import './styles.sass';

class App extends Component {
  state = {
    stations: null,
    stationNumber: 0,
    player: null
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/stations.json")
      .then(response => {
        return response.json();
      })

      .then(data => {
        setTimeout(() => {
          this.setState({ stations: data });
        }, 1000);
      });
  }

  render() {
    // const { stations } = this.state;
    return <div className="App">
        <Header />
        <Player getPlayer={this.getPlayer} />
        <Controls player={this.state}/>
      </div>;
  }

  getPlayer = (val) => {
    this.setState({player: val});
  }
}

export default App;
