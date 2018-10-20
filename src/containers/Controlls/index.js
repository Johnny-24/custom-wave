import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { handleStatusPlayer } from './../../actions/handleStatusPlayer'
import { countIncrement } from './../../actions/countIncrement'
import { countDecrement } from './../../actions/countDecrement'

// Components
import ControlBtn from './../../components/ControlBtn'

// Styles
import styles from './styles.scss'

class Controls extends Component {
  state = {
    status: false,
  }

  render() {
    const { status } = this.state
    const { counter, stations } = this.props
    return (
      <div className={styles.root}>
        <ControlBtn
          ico="skip_previous"
          onClick={this.onPrev}
          small={true}
          inActive={counter === 0 && true}
        />
        <ControlBtn
          ico={status ? 'pause' : 'play_arrow'}
          onClick={this.onPlay}
        />
        <ControlBtn
          ico="skip_next"
          onClick={this.onNext}
          small={true}
          inActive={counter === stations.length - 1 && true}
        />
      </div>
    )
  }

  // Play music
  onPlay = () => {
    const { status } = this.state
    const { audio, handleStatusPlayer } = this.props
    this.setState({ status: !status })
    handleStatusPlayer(status)
    !audio.status ? audio.player.play() : audio.player.pause()
  }

  // Prev track
  onPrev = () => {
    const { status } = this.state
    const { audio, counter, handleStatusPlayer, countDecrement } = this.props
    if (counter > 0) {
      this.setState({ status: false })
      handleStatusPlayer(status)
      audio.player.pause()
      countDecrement()
    }
  }

  // Next track
  onNext = () => {
    const { status } = this.state
    const {
      audio,
      counter,
      stations,
      handleStatusPlayer,
      countIncrement,
    } = this.props
    if (counter < stations.length - 1) {
      this.setState({ status: false })
      handleStatusPlayer(status)
      audio.player.pause()
      countIncrement()
    }
  }
}

export default connect(
  state => ({
    audio: state.player,
    counter: state.counter,
    stations: state.station,
  }),
  { handleStatusPlayer, countIncrement, countDecrement }
)(Controls)
