import React, { Component } from "react";

import "./styles.sass";

class Next extends Component {
  render() {
    return (
      <button type="button" className="next" onClick={this.next.bind(this)}>
        next
      </button>
    );
  }

  next() {
    if (this.props.stations.length - 2 >= this.props.stationNumber) {
      this.props.nextStation(this.props.stationNumber, true)
    }
  }
}

export default Next;
