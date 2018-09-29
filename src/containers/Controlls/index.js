import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import ControllsBtn from './../../components/ControllsBtn'

import styles from './styles.scss'

class Controls extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <ControllsBtn modClass={'play'} />
      </div>
    )
  }
}

export default connect(state => ({
  audio: state.player,
}))(Controls)
