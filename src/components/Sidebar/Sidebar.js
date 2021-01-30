import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoModulus from './assets/logo-horizontal-white.svg'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styles.sidebar}>
      <img src={logoModulus} alt="logo of modulus" />
      <ul className={styles.nav}>
        <Link to="/main">
          <li className={styles.navItem}>Πίνακας</li>
        </Link>
        <Link to="/services">
          <li className={styles.navItem}>Λειτουργίες</li>
        </Link>
        <Link to="/profile">
          <li className={styles.navItem}>Προφίλ</li>
        </Link>
      </ul>
      <div className={styles.info}>
        <p>Επικοινωνία</p>
        <i className="fas fa-phone"> </i>
      </div>
    </div>
  )
}
