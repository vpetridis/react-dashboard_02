import React from 'react'
import styles from './Summary.module.css'

export default function TopInfo(props) {
  return (
    <div className={styles.container} style={{ borderLeftColor: props.borderLeft }}>
      <div className={styles.info}>
        <h3 style={{ color: props.color }} className={styles.title}>
          {props.title}
        </h3>
        <h3 className={styles.money}>{props.money}</h3>
      </div>
      <span style={{ fontSize: '3em', color: props.color }}>
        <i className={`fas fa-${props.iconName}`}></i>
      </span>{' '}
    </div>
  )
}
