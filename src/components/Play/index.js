import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleStatusPlayer } from './../../actions/handleStatusPlayer'

import './styles.sass'

class Play extends Component {
  render() {
    return (
      <React.Fragment>
        <button type="button" className="play" onClick={this.handlePlay}>
          <i className="play__ico" />
        </button>
      </React.Fragment>
    )
  }

  handlePlay = () => {
    const { audio } = this.props

    if (!this.state.PlayerStatus) {
      audio.player.play()
      this.setState({ PlayerStatus: true })
      //handleStatusPlayer(true)
    } else {
      audio.player.pause()
      this.setState({ PlayerStatus: false })
      //handleStatusPlayer(false)
    }
  }
}

export default connect(
  state => ({
    audio: state.player,
  }),
  { handleStatusPlayer }
)(Play)
