import React, { Component } from "react";
import './styles.sass';

class StationsList extends Component {
  render() {
    const stations =
      this.props.stations &&
      this.props.stations.map(station => (
        <ul key={station.id}>
          <li onClick={this.handleStation.bind(this, station.id)}>
            {station.title}
          </li>
        </ul>
      ));
    return <div className="stations-list">{stations}</div>;
  }

  handleStation(id)  {
    if (this.props.play) {
      this.props.audio.player.pause();
      this.props.changePlayStatus();
    }
    this.props.changeNumber(id - 1);
  }
}

export default StationsList;
