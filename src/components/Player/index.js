import React, { Component } from 'react';

class Player extends Component {
  render() {
    return <React.Fragment>
        <audio id="audio" preload="auto" src={this.props.stations && this.props.stations[this.props.stationNumber].url} ref={audioTag => {
            this.audio = audioTag;
          }} 
        />
      </React.Fragment>;
  }

  componentDidMount() {
    this.props.getPlayer(this.audio);
  }
}

export default Player;
