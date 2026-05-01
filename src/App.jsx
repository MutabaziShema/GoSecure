import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyGoSecure from './components/WhyGoSecure'
import UseCases from './components/UseCases'
import BookingForm from './components/BookingForm'
import About from './components/About'
import SafetyPromise from './components/SafetyPromise'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const openBooking = () => {
  window.location.href = '/booking-form.html'
}

export default function App() {
  return (
    <>
      <Header onBookNow={openBooking} />
      <main>
        <Hero onBookNow={openBooking} />
        <HowItWorks />
        <WhyGoSecure />
        <UseCases onBookNow={openBooking} />
        <BookingForm onBookNow={openBooking} />
        <About />
        <SafetyPromise />
        <FAQ />
      </main>
      <Footer onBookNow={openBooking} />
    </>
  )
}
