import React, { Component } from "react";

import "./styles.sass";

class Prev extends Component {
  render() {
    return (
      <button type="button" className="prev" onClick={this.prev}>
        prev
      </button>
    );
  }

  prev = () => {
    if (this.props.stationNumber > 0) {

      if (this.props.play) {
        this.props.audio.player.pause();
        this.props.changePlayStatus();
      }
      this.props.prevStation(this.props.stationNumber, 'prev');
    }
  }
}

export default Prev;