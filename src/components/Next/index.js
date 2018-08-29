import React, { Component } from "react";

import "./styles.sass";

class Next extends Component {
  state = {
    
  };

  render() {
    return (
      <div className="next" onClick={this.next.bind(this)}>
        next
      </div>
    );
  }

  next() {
    alert('Next');
  }
}

export default Next;
