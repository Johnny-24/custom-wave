import React from 'react'

// Styles
import styles from './styles.scss'

const Background = () => {
  return (
    <div className={styles.root}>
      <div className={styles.bgTop} />
      <div className={styles.bgBottom} />
    </div>
  )
}

export default Background
