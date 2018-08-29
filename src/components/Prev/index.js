import React, { Component } from "react";

import "./styles.sass";

class Prev extends Component {
  state = {

  };

  render() {
    return (
      <div className="next" onClick={this.prev.bind(this)}>
        prev
      </div>
    );
  }

  prev() {
    alert('Prev');
  }
}

export default Prev;