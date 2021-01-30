import React from 'react'
import styles from './UserProfile.module.css'

export default function UserProfile() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Δοκιμαστικό component προφίλ χρήστη</h3>
      <p className={styles.info}>
        {' '}
        Με μερικά endpoints θα μπορούσε να εμφανίζει όλες τις βασικές πληροφορίες του πελάτη.
      </p>
      <hr />
      <h3 className={styles.title}>Tech Stack</h3>
      <p className={styles.info}>
        Όλα τα <code>components</code> είναι φτιαγμένα με τεχνικές <code>props.children</code> για
        να μπορούν να είναι όσο πιο reusable γίνεται. Κάθε component έχει δημιουργηθεί ως ξεχωριστή
        μονάδα με δικό του <code>module.css</code> και εκεί θα μπορεί να έχει και το σχετικό logic.
      </p>
      <p className={styles.info}>
        Για τη μετακίνηση ανάμεσα στις σελίδες χρησιμοποιήθηκε το industry standard{' '}
        <a href="https://reactrouter.com/">React Router</a>. Η μετακίνηση από σελίδα σε σελίδα
        γίνεται ακαριαία χωρίς να γίνεται κανένα request στον server.
      </p>
      <p className={styles.info}>
        Για την παρουσίαση των δεδομένων στον χρήστη χρησιμοποιήθηκε η πιο γνωστή βιβλιοθήκη{' '}
        <a href="http://recharts.org/en-US">Recharts</a>
      </p>
      <p className={styles.info}>
        Για την επιλογή των υπηρεσιών από τους πελάτες έχει δημιουργηθεί ένα drag and drop component
        με τη βιβλιοθήκη{' '}
        <a href="https://github.com/atlassian/react-beautiful-dnd">React-beautiful-DnD</a>
      </p>
    </div>
  )
}
