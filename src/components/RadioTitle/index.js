import React, { Component } from "react";
import './styles.sass';

class RadioTitle extends Component {
  render() {
    return <div className="radio-title">
        {this.props.stations &&
          this.props.stations[this.props.stationNumber].title}
      </div>;
  }
}

export default RadioTitle;
