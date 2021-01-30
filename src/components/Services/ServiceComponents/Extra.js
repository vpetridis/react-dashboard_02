import React from 'react'
import styles from './ServiceComponent.module.css'

export default function Extra(props) {
  return (
    <div
      style={{ background: `${props.color}` }}
      className={`animate__animated animate__fadeIn ${styles.container}`}>
      <h3 className={styles.title}>Component Έξτρα</h3>
      <i className="fas fa-balance-scale-right"></i>
    </div>
  )
}
