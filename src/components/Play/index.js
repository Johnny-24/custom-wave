import React, { Component } from "react";

import "./styles.sass";

class Play extends Component {
  state = {
    play: false
  };

  render() {
    return (
      <button type="button" onClick={this.handleClick.bind(this)}>
        Play
      </button>
    );
  }

  handleClick() {
    this.state.play ? this.props.audio.player.pause() : this.props.audio.player.play();
    this.setState(prevState => {
      return {
        play: !prevState.play
      };
    });
  }
}

export default Play;
