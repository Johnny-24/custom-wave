import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayer } from './../../actions/getPlayer'

class Player extends Component {
  render() {
    return (
      <React.Fragment>
        <audio
          id="audio"
          preload="auto"
          src={'http://stream.laut.fm/deutschrap'}
          ref={audioTag => {
            this.player = audioTag
          }}
        />
      </React.Fragment>
    )
  }

  componentDidMount() {
    const { getPlayer } = this.props
    getPlayer(this.player, false)
  }
}

export default connect(
  null,
  { getPlayer }
)(Player)
