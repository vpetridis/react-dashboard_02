import React from 'react'
import styles from './ServiceComponent.module.css'

export default function Delay(props) {
  return (
    <div style={{ background: `${props.color}` }} className={styles.container}>
      <h3 className={styles.title}>Component Αναμονής</h3>
      <i class="fas fa-phone-volume"></i>
    </div>
  )
}
