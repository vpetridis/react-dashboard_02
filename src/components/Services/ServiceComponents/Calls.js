import React from 'react'
import styles from './ServiceComponent.module.css'

export default function Calls(props) {
   return (
      <div style={{background:`${props.color}`}} className={styles.container}>
         <h3 className={styles.title}>Component Κλήσεων</h3>
      </div>
   )
}
