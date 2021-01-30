import React, { useState } from 'react'
import styles from './Services.module.css'

export default function ServiceSide(props) {


  return (
    <>
      <ul className={styles.nav}>
         <li>Η δομή μπορεί να αλλάξει πολύ εύκολα με drag and drop</li>
         <li>Η ενημέρωση του state περνάει σε άλλα components  με το Context API</li>
         <li>Τo re-rendering σταματάει με ένα απλό useEffect</li>
      </ul>
    </>
  )
}
