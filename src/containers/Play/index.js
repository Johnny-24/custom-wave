import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { handleStatusPlayer } from './../../actions/handleStatusPlayer'

import styles from './styles.scss'

class Play extends Component {
  state = {
    active:
      this.props.audio && this.props.audio.status
        ? this.props.audio.status
        : false,
  }
  render() {
    const { active } = this.state
    return (
      <button
        type="button"
        className={classnames(styles.root, active && styles.isActive)}
        onClick={this.handlePlay}
      />
    )
  }

  handlePlay = () => {
    const { audio, handleStatusPlayer } = this.props
    if (!audio.status) {
      audio.player.play()
      handleStatusPlayer(true)
      this.setState({ active: true })
    } else {
      audio.player.pause()
      handleStatusPlayer(false)
      this.setState({ active: false })
    }
  }
}

export default connect(
  state => ({
    audio: state.player,
  }),
  { handleStatusPlayer }
)(Play)
