import React from 'react'
import Card from '../Card/Card'
import LineChart from '../Chart/LineChart'
import BarChartItem from '../Chart/BarChart'
import styles from './Main.module.css'
import InfoItem from '../Info/InfoItem'
import Summary from '../Summary/Summary'
import SummaryItem from '../Summary/SummaryItem'
export default function Main(props) {
  return (
    <div className={styles.container}>
      <Summary>
        <SummaryItem
          borderLeft="var(--color-primary)"
          color="var(--color-primary)"
          title="ΧΡΕΩΣΕΙΣ"
          money="5000€"
          iconName="euro-sign"
          color="var(--color-primary)"
        />
        <SummaryItem
          borderLeft="var(--fc-accent-a)"
          color="var(--fc-accent-a)"
          title="ΠΑΚΕΤΑ"
          money="23"
          iconName="clipboard-list"
          color="var(--fc-accent-a)"
        />
        <SummaryItem
          borderLeft="var(--fc-accent-b)"
          color="var(--fc-accent-b)"
          title="ΓΡΑΜΜΕΣ"
          money="1005"
          iconName="clipboard-list"
          color="var(--fc-accent-b)"
        />
        <SummaryItem
          borderLeft="var(--color-accent)"
          color="var(--color-accent)"
          title="ΛΕΠΤΑ"
          money="26549'"
          iconName="clipboard-list"
          color="var(--color-accent)"
        />
      </Summary>
      <Card row="2/4" col="1/4">
        <h3>Ενεργές τηλεφωνικές γραμμές</h3>
        <BarChartItem />
      </Card>
      <InfoItem row="2/4" col="4/6">
        <h3 className="infoTitle">Τηλεφωνικά Κέντρα</h3>
        <p>
          Οι ενεργές τηλεφωνικές γραμμές για το πρώτο εξάμηνο παρουσιάζονται με υπολογισμό των
          εβδομαδιαίων κλήσεων που έχουν πραγματοποιηθεί.
        </p>
        <h3>Έξτρα features</h3>
        <p>
          Όλες οι καταχωρήσεις έχουν tooltips με περαιτέρω πληροφορίες. Ο χρήστης πολύ έυκολα με ένα
          slider θα μπορεί να αλλάξει τους μήνες παρουσίασης των δεδομένων.
        </p>
        
      </InfoItem>
      <Card row="4/5" col="5/6" background="var(--fc-accent-a)">
        <h3>Λεπτά ομιλίας</h3>
        <LineChart />
      </Card>
      <InfoItem row="4/5" col="1/5">
        <h3 className="infoTitle">Χρεώσεις Ομιλίας</h3>
        <p>
          Οι χρεώσεις της ομιλίας καθορίζονται μετά την έκπτωση του δωρεάν πακέτου σας. Μπορείτε να
          αυξήσετε τις ανάγκες ομιλίας σας οποιαδήποτε στιγμή το επιθυμείτε.
        </p>
        <h3>Έξτρα features</h3>
        <p>
          Όλες οι καταχωρήσεις έχουν tooltips με περαιτέρω πληροφορίες. Ο χρήστης πολύ έυκολα με ένα
          slider θα μπορεί να αλλάξει τους μήνες παρουσίασης των δεδομένων.
        </p>
      </InfoItem>
    </div>
  )
}
