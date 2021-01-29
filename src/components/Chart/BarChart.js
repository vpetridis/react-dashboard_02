import React from 'react'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
const styles = {
  xAxis: 'var(--fc-primary)',
  yAxis: 'var(--fc-primary)',
  linePrimary: 'var(--fc-accent-a)',
  lineSecondary: 'var(--fc-accent-b)'
}
const data = [
  {
    name: 'Κέντρο',
    minutes: 4000,
    answers: 2400,
    amt: 2400
  },
  {
    name: 'Γραφεία',
    minutes: 3000,
    answers: 1398,
    amt: 2210
  },
  {
    name: 'Καμπάνιες',
    minutes: 2000,
    answers: 9800,
    amt: 2290
  },
  {
    name: 'Επικοινωνία',
    minutes: 2780,
    answers: 3908,
    amt: 2000
  }
]
export default function BarChartItem() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" stroke={styles.xAxis} />
      <YAxis stroke={styles.yAxis} />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Bar name="Αριθμός" dataKey="answers" fill="#8884d8" />
      <Bar name="Λεπτά" dataKey="minutes" fill="#82ca9d" />
    </BarChart>
  )
}
