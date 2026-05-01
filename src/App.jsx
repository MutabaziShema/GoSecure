import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyGoSecure from './components/WhyGoSecure'
import UseCases from './components/UseCases'
import BookingForm from './components/BookingForm'
import BookingModal from './components/BookingModal'
import About from './components/About'
import SafetyPromise from './components/SafetyPromise'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <Header onBookNow={openModal} />
      <main>
        <Hero onBookNow={openModal} />
        <HowItWorks />
        <WhyGoSecure />
        <UseCases onBookNow={openModal} />
        <BookingForm onBookNow={openModal} />
        <About />
        <SafetyPromise />
        <FAQ />
      </main>
      <Footer onBookNow={openModal} />
      <BookingModal open={modalOpen} onClose={closeModal} />
    </>
  )
}
