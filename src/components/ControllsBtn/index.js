import React, { Component } from 'react'
import classnames from 'classnames'

import styles from './styles.scss'

class ControllsBtn extends Component {
  render() {
    const { modClass, activeClass } = this.props
    return (
      <button
        type="button"
        className={classnames(
          styles.root,
          modClass && styles[modClass],
          activeClass && styles.isActive
        )}
        onClick={this.onHandleClick}
      />
    )
  }

  onHandleClick = () => {
    const { handleStatusPlayer, audio } = this.props
    handleStatusPlayer(!audio.status)
  }
}

export default ControllsBtn
