import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Testimonials from '../Testimonials/Testimonials'
import WhyChoose from '../WhyChooseUs/WhyChooseUs'
import Contact from '../Contact/Contact'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Testimonials />
      <WhyChoose />
      <Contact />
    </main>
  )
}

export default HomePage
