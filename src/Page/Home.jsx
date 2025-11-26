import React from 'react'
import HomeCn from '../Component/HomeCn'
import HomeSlider from '../Component/HomeSlider'
import OurVision from '../Component/OurVision'
import OurService from '../Component/OurService'
import Project from '../Component/Project'
import OurCustomer from '../Component/OurCustomer'

export default function Home() {
  return (
    <div>
      <HomeCn></HomeCn>
      <HomeSlider></HomeSlider>
      <OurVision></OurVision>
      <OurService></OurService>
      <Project></Project>
      <OurCustomer></OurCustomer>
    </div>
  )
}
