import React from 'react'
import styles from './Services.module.css'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function ServicesDnD(props) {
  const children = props.children
  const childrenArray = React.Children.map(children, (child) => child)
  console.log(childrenArray)
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Επιλογή Υπηρεσιών</h3>
      <DragDropContext>
        <Droppable droppableId="id">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {childrenArray.map((component, index) => {
                return (
                  <Draggable key={component.key} draggableId={component.key} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <div>{component}</div>
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
