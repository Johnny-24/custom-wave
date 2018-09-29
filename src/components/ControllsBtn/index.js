import React, { Component } from 'react'
import classnames from 'classnames'

import styles from './styles.scss'

class ControllsBtn extends Component {
  render() {
    const { modClass } = this.props
    return (
      <button
        type="button"
        className={classnames(styles.root, modClass && styles[modClass])}
      />
    )
  }
}

export default ControllsBtn
