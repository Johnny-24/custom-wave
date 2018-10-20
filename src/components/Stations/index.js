import React, { Component } from 'react'

import StationsList from './../StationsList'

import styles from './styles.scss'

class Stations extends Component {
  render() {
    const {
      stations,
      play,
      audio,
      changeNumber,
      changePlayStatus,
      stationNumber,
    } = this.props
    return (
      <div className={styles.root}>
        Stations List
        <StationsList
          stations={stations}
          play={play}
          audio={audio}
          changeNumber={changeNumber}
          changePlayStatus={changePlayStatus}
          stationNumber={stationNumber}
        />
      </div>
    )
  }
}

export default Stations
