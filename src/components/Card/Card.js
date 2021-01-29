import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
  return (
    <div
      style={{
        gridRow: `${props.row}`,
        gridColumn: `${props.col}`,
        background: `${props.background}`,
        xAxis: `${props.xAxisColor}`,
        yAxis: `${props.yAxisColor}`
      }}
      className={`${styles.container}`}>
      {props.children}
    </div>
  )
}
