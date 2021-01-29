import React from 'react'
import styles from './Header.module.css'

export default function Header(props) {
  return (
    <header className={styles.container}>
      <h3 className={styles.title}>{props.title}</h3>
      <ul className={styles.nav}>
        <li className={styles.navItem}></li>
        <li className={styles.navItem}></li>
        <li className={styles.navItem}></li>
      </ul>
    </header>
  )
}
