import React from 'react'
import styles from './ServiceComponent.module.css'

export default function Answers(props) {
  return (
    <div style={{ background: `${props.color}` }}  className={`animate__animated animate__fadeIn ${styles.container}`}>
      <h3 className={styles.title}>Component Απαντήσεων</h3>
      <i className="fas fa-headset"></i>
    </div>
  )
}
