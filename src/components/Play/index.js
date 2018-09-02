import React, { Component } from "react";

import "./styles.sass";

class Play extends Component {
  render() {
    return <button type="button" className={`play ${this.props.play && 'active'}`} onClick={this.handlePlay.bind(this)} />;
  }

  handlePlay() {
    this.props.changePlayStatus()
    this.props.play ? this.props.audio.player.pause() : this.props.audio.player.play();
  }
}

export default Play;
