import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Team/>
      <ContactUs/>
      <Footer theme={theme}/>
    </div>
  )
}

export default App
