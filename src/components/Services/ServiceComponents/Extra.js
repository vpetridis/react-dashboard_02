import React from 'react'
import styles from './ServiceComponent.module.css'

export default function Extra(props) {
  return (
    <div style={{ background: `${props.color}` }} className={styles.container}>
      <h3 className={styles.title}>Component Έξτρα</h3>
    </div>
  )
}
