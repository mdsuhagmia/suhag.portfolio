import React from 'react'
import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTopButton from '../ScrollToTopButton '

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Menu/>
      <Outlet/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
}

export default RootLayout