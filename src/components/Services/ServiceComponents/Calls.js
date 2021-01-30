import React from 'react'
import styles from './ServiceComponent.module.css'

export default function Calls(props) {
  return (
    <div
      style={{ background: `${props.color}` }}
      className={`animate__animated animate__fadeIn ${styles.container}`}>
      <h3 className={styles.title}>Component Κλήσεων</h3>
      <i className="fas fa-phone-volume"></i>
    </div>
  )
}
