import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './Pages/Header/Header'
import Hero from './Pages/Hero/Hero'
import Department from './Pages/Department/Department'
import About from './Pages/About/About'
import Testimonials from './Pages/Testimonials/Testimonials'
import WhyChooseUs from './Pages/WhyChooseUs/WhyChooseUs'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'
import Floating from "./Pages/Floating/Floating"
import Appointment from './Pages/Appointment/Appointment'
import Mission from './Pages/Mission/Mission'
import Vission from './Pages/Vision/Vision'
import Faq from './Pages/Faq/Faq'

function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  useEffect(() => {
    // Open the popup automatically after 1.5 seconds of website load
    const timer = setTimeout(() => {
      setIsAppointmentOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans antialiased text-slate-800 overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <Floating />
      <Appointment isOpen={isAppointmentOpen} onClose={() => setIsAppointmentOpen(false)} />
      
      <main className="pt-24">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Mission />
              <Vission />
              <Testimonials />
              <WhyChooseUs />
              <Faq />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/department" element={<Department />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App