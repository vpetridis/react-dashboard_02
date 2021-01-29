import React from 'react'
import logoModulus from './assets/logo-horizontal-white.svg'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={logoModulus} alt="logo of modulus" />
      <hr />
      <ul className={styles.nav}>
        <li className={styles.navItem}>Πίνακας</li>
        <li className={styles.navItem}>Προφίλ</li>
      </ul>
    </div>
  )
}
