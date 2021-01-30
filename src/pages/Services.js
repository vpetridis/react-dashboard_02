import React from 'react'
import Answers from '../components/Services/ServiceComponents/Answers'
import Calls from '../components/Services/ServiceComponents/Calls'
import Delay from '../components/Services/ServiceComponents/Delay'
import Extra from '../components/Services/ServiceComponents/Extra'
import ServicesDnD from '../components/Services/ServicesDnD'

export default function Services() {
  return (
    <>
      <ServicesDnD>
        <Calls color="var(--clr-services-a)" />
        <Delay color="var(--clr-services-c)" />
        <Extra color="var(--clr-services-b)" />
        <Answers color="var(--clr-services-d)" />
      </ServicesDnD>
    </>
  )
}
