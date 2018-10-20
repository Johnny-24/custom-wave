import React from 'react'
import classnames from 'classnames'

// Styles
import styles from './styles.scss'

const ControlBtn = props => {
  const { ico, onClick, small, inActive } = props

  const handleClick = () => {
    onClick()
  }

  return (
    <button
      type="button"
      className={classnames(
        styles.root,
        small && styles.small,
        inActive && styles.inActive
      )}
      onClick={handleClick}
    >
      <i className={classnames('material-icons', styles.ico)}>{ico}</i>
    </button>
  )
}

export default ControlBtn
