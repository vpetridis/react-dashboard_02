import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default function Chart() {
  const styles = {
    xAxis: 'var(--fc-primary)',
    yAxis: 'var(--fc-primary)',
    linePrimary: 'var(--color-primary)',
    lineSecondary: 'var(--color-accent)'
  }
  const data = [
    {
      name: 'Ιαν',
      minutes: 4000,
      answers: 2400,
      amt: 2400
    },
    {
      name: 'Φεβ',
      minutes: 3000,
      answers: 1398,
      amt: 2210
    },
    {
      name: 'Μαρ',
      minutes: 2000,
      answers: 9800,
      amt: 2290
    },
    {
      name: 'Απρ',
      minutes: 2780,
      answers: 3908,
      amt: 2000
    },
    {
      name: 'Μάι',
      minutes: 1890,
      answers: 4800,
      amt: 2181
    },
    {
      name: 'Ιουν',
      minutes: 2390,
      answers: 3800,
      amt: 2500
    }
  ]
  return (
    <LineChart
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
      <Line
        name="Κλήσεις"
        type="monotone"
        dataKey="answers"
        stroke={styles.linePrimary}
        strokeDasharray="5 5"
      />
      <Line
        name="Λεπτά ομιλίας"
        type="monotone"
        dataKey="minutes"
        stroke={styles.lineSecondary}
        strokeDasharray="3 4 5 2"
      />
    </LineChart>
  )
}
