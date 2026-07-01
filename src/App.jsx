import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
import Floating from "./Pages/Floating/Floating"
import Appointment from './Pages/Appointment/Appointment'

// Pages
import HomePage from './Pages/Home/HomePage'
import DepartmentsPage from './Pages/Departments/DepartmentsPage'
import AboutPage from './Pages/About/AboutPage'
import ContactPage from './Pages/Contact/ContactPage'
// import DoctorsPage from './Pages/Doctors/DoctorsPage'
import ScrollToTop from './ScrollToTop'

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
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        {/* <Route path="/doctors" element={<DoctorsPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App