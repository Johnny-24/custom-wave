import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <React.Fragment>
        <audio id="audio" src="http://stream.laut.fm/deutschrap" ref={audioTag => { this.audio = audioTag }} />
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.getPlayer(this.audio)
  }
}

export default Player;
