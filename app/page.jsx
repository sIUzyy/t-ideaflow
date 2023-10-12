import About from '@components/About'
import Promo from '@components/Promo'
import Sponsor from '@components/Sponsor'
import Team from '@components/Team'
import React from 'react'

const page = () => {
  return (
    <>
        <Sponsor/>
        <Promo/>
        <About/>
        <Team/>
    </>
  )
}

export default page