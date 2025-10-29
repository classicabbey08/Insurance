import React from 'react'
import Hero from './Components/Hero'

import Plans from './Components/Plans'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'
// import Services from './Components/Services'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      {/* <Services /> */}
      <Plans />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
