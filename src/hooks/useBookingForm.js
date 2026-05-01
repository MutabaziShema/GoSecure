import { useState } from 'react'
import { WA_NUMBER } from '../constants'

/**
 * Shared booking-form state + submit logic.
 * Includes honeypot check — if the hidden field is filled, the bot
 * submission is silently dropped (no WhatsApp message sent).
 */
export default function useBookingForm() {
  const [form, setForm] = useState({
    name: '', phone: '', pickup: '', destination: '',
    time: '', carType: 'Not sure', note: '',
    _hp: '', // honeypot — must stay empty
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const required = {
      name: 'Full name',
      phone: 'Phone number',
      pickup: 'Pickup location',
      destination: 'Destination',
      time: 'Preferred time',
    }
    const newErrors = {}
    Object.entries(required).forEach(([key, label]) => {
      if (!form[key].trim()) newErrors[key] = `${label} is required`
    })
    return newErrors
  }

  const handleWhatsApp = (e, afterOpen) => {
    e.preventDefault()

    // Honeypot check — bots fill hidden fields, humans don't
    if (form._hp) return

    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    const msg =
      `Hello GoSecure, I need a trusted driver.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Pickup location: ${form.pickup}\n` +
      `Destination: ${form.destination}\n` +
      `Preferred time: ${form.time}\n` +
      `Car type: ${form.carType}\n` +
      `Extra note: ${form.note || 'None'}`

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    )
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); afterOpen?.() }, 2500)
  }

  return { form, errors, submitted, update, handleWhatsApp }
}
