import React from 'react'
import styles from './Info.module.css'

export default function InfoItem(props) {
  return (
    <div
      style={{ gridRow: `${props.row}`, gridColumn: `${props.col}` }}
      className={styles.container}>
      {props.children}
    </div>  
  )
}
