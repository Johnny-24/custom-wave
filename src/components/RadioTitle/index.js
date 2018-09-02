import React, { Component } from "react";
import './styles.sass';

class RadioTitle extends Component {
  render() {
    return <div className="radio-title">
        <div className="radio-title__wrap">
          <div className="radio-title__text">
            {this.props.stations &&
              this.props.stations[this.props.stationNumber].title}
          </div>
        </div>
      </div>;
  }
}

export default RadioTitle;
