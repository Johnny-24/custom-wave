import React, { Component } from "react";

import "./styles.sass";

class Next extends Component {

  render() {
    return (
      <button
        type="button"
        className={
          `next ${this.props.stations 
          && this.props.stations.length 
          && this.props.stations.length 
          === this.props.stationNumber + 1 
          && "inactive"}`
        }
        onClick={this.next}
      />
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
  };
}

export default Next;
