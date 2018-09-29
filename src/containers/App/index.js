import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStation } from '../../actions/getStation'
import classnames from 'classnames'

import Player from './../../containers/Player'
import Controlls from './../Controlls'

import styles from './styles.scss'

class App extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <Player />
        <Controlls />
      </div>
    )
  }

  componentDidMount() {
    const { getStation } = this.props
    fetch('http://localhost:3000/data/stations.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        data.map(station => getStation(station.id, station.title, station.url))
      })
  }
}

export default connect(
  null,
  { getStation }
)(App)
