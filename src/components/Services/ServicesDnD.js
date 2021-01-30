import React from 'react'
import styles from './Services.module.css'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function ServicesDnD(props) {

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Επιλογή Υπηρεσιών</h3>
      {props.children}
    </div>
  )
}
