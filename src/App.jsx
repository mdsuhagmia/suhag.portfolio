
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import ScrollToTopButton from './components/ScrollToTopButton '
import Service from './components/Service'

function App() {

  return (
    <>
      <Menu/>
      <Banner/>
      <ScrollToTopButton/>
      <About/>
      <Service/>
      <Pricing/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
