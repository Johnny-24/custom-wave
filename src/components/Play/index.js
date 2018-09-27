import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleStatusPlayer } from './../../actions/handleStatusPlayer'

import './styles.sass'

class Play extends Component {
  render() {
    return (
      <React.Fragment>
        <button type="button" className={`play`} onClick={this.handlePlay}>
          <i className="play__ico" />
        </button>
      </React.Fragment>
    )
  }

  handlePlay = () => {
    const { audio, handleStatusPlayer } = this.props
    if (!audio.status) {
      //audio.player.play()
      handleStatusPlayer(true)
    } else {
      //audio.player.pause()
      handleStatusPlayer(false)
    }
  }
}

export default connect(
  state => ({
    audio: state.player,
  }),
  { handleStatusPlayer }
)(Play)
