import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import './styles.sass';

class StationsList extends Component {
  render() {
    const { stationNumber, play, active } = this.props
    const stations = this.props.stations && this.props.stations.map(
        station => (
          <li
            key={station.id}
            className={`stations-list__item ${station.id ===
              stationNumber + 1 && "active"} ${play &&
              station.id === stationNumber + 1 &&
              "stations-list__item--play"}
              `}
            onClick={this.handleStation.bind(this, station.id)}
          >
            <div className="stations-list__item-text">
              {station.title}
            </div>
          </li>
        )
      );
    return <Scrollbars className={`stations-list ${active && "active"}`}>
        <ul>
          {stations}
        </ul>
    </Scrollbars>;
  }

  handleStation(id)  {
    if (this.props.play && id - 1 !== this.props.stationNumber) {
      this.props.audio.pause();
      this.props.changePlayStatus();
    }
    this.props.changeNumber(id - 1);
  }
}

export default StationsList;
