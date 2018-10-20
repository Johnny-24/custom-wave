import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayer } from './../../actions/getPlayer'

class Player extends Component {
  render() {
    const { stations, counter } = this.props
    return (
      <audio
        id="audio"
        preload="auto"
        src={stations[0] && stations[counter].url}
        ref={audioTag => {
          this.player = audioTag
        }}
      />
    )
  }

  componentDidMount() {
    const { getPlayer } = this.props
    getPlayer(this.player, false)
  }
}

export default connect(
  state => ({
    counter: state.counter,
    stations: state.station,
  }),
  { getPlayer }
)(Player)
