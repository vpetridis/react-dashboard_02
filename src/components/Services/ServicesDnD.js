import React, { useState, useEffect } from 'react'
import styles from './Services.module.css'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ServiceSide from './ServiceSide'

export default function ServicesDnD(props) {
  let children = props.children
  let childrenArray = React.Children.map(children, (child) => child)
  const [items, setItems] = useState(childrenArray)

  const reorder = (list, startIndex, endIndex) => {
    const result = list
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return
    }
    console.log(result.destination.index)

    const items = reorder(childrenArray, result.source.index, result.destination.index)
    setItems(items)
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Επιλογή Υπηρεσιών</h3>
      <p className={styles.info}>
        Αναδιαμορφώστε τις υπηρεσίες VoIP μετακινώντας το ανάλογο τμήμα.
      </p>
      <div className={styles.serviceContainer}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="vertical">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {items.map((item, index) => (
                  <Draggable
                    className={styles.item}
                    key={item.key}
                    draggableId={item.key}
                    index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className={styles.serviceSide}>
          <ServiceSide />
        </div>
      </div>
    </div>
  )
}
