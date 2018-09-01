import React, { Component } from "react";

import "./styles.sass";

class Next extends Component {
  render() {
    return (
      <button type="button" className="next" onClick={this.next}>
        next
      </button>
    );
  }

  next = () => {
    if (this.props.stations.length - 2 >= this.props.stationNumber) {
      if (this.props.play) {
        this.props.audio.player.pause();
        this.props.changePlayStatus();
      }
      this.props.nextStation(this.props.stationNumber, "next");
    }
  }
}

export default Next;
