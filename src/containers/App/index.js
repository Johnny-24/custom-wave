import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { getStation } from '../../actions/getStation'

// Components
import Background from './../../components/Background'
import Player from './../../containers/Player'
import Controlls from './../Controlls'

// Styles
import styles from './styles.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Background />
        <Player />
        <Controlls />
      </div>
    )
  }

  // Download data
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
