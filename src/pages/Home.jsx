import React from 'react'
import Banner from '../components/Banner'
import Abouts from '../components/Abouts'
import Services from '../components/Services'
import Portfolios from '../components/Portfolios'
import Contacts from '../components/Contacts'
import Skills from './Skills'

const Home = () => {
  return (
    <div>
      <Banner />
      <Abouts/>
      <Skills/>
      <Services/>
      <Portfolios/>
      <Contacts/>
    </div>
  )
}

export default Home