import React from 'react'
import Card from '../Card/Card'
import LineChart from '../Chart/LineChart'
import BarChartItem from '../Chart/BarChart'
import styles from './Main.module.css'
import InfoItem from '../Info/InfoItem'

export default function Main(props) {
  return (
    <div className={styles.container}>
      <Card row="1/3" col="1/4">
        <h3>Ενεργές τηλεφωνικές γραμμές</h3>
        <BarChartItem />
      </Card>
      <InfoItem row="1/3" col="4/6">
        <h3 className="infoTitle">Τηλεφωνικά Κέντρα</h3>
        <p>
          Οι ενεργές τηλεφωνικές γραμμές για το πρώτο εξάμηνο παρουσιάζονται με υπολογισμό των
          εβδομαδιαίων κλήσεων που έχουν πραγματοποιηθεί
        </p>
      </InfoItem>
      <Card row="3/4" col="5/6" background="var(--fc-accent-a)">
        <h3>Λεπτά ομιλίας</h3>
        <LineChart />
      </Card>
      <InfoItem row="3/4" col="1/5">
        <h3 className="infoTitle">Χρεώσεις Ομιλίας</h3>
        <p>
          Οι χρεώσεις της ομιλίας καθορίζονται μετά την έκπτωση του δωρεάν πακέτου σας. Μπορείτε να
          αυξήσετε τις ανάγκες ομιλίας σας οποιαδήποτε στιγμή το επιθυμείτε.
        </p>
      </InfoItem>
    </div>
  )
}
