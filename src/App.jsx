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

const ZOHO_FORM_URL = 'https://forms.zohopublic.com/shematresor19gm1/form/GoSecureRequestaDriver/formperma/U2JPzdBwlB5aC2wKa2x88mnIKBvL69OMlE9c_fbu7Mc'

const openBooking = () => {
  const w = 700, h = 648
  const left = Math.round((screen.width  - w) / 2)
  const top  = Math.round((screen.height - h) / 2)
  window.open(ZOHO_FORM_URL, null, `width=${w},height=${h},left=${left},top=${top},toolbar=0,location=0,status=1,scrollbars=1,resizable=1`)
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
