import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { handleStatusPlayer } from './../../actions/handleStatusPlayer'
import ControllsBtn from './../../components/ControllsBtn'
import Play from './../Play'

import styles from './styles.scss'

class Controls extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <ControllsBtn modClass={'prev'} />
        <Play />
        <ControllsBtn modClass={'next'} />
      </div>
    )
  }
}

export default connect(
  state => ({
    audio: state.player,
  }),
  { handleStatusPlayer }
)(Controls)
