import React from 'react'
import styles from './Summary.module.css'
export default function Summary(props) {
  return <div className={styles.summaryContainer}>{props.children}</div>
}
