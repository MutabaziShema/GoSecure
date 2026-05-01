import { useEffect, useState } from 'react'
import { ACCENT, NAVY, OFFWHITE, BORDER, TEXT, HOTLINE } from '../constants'

const ZOHO_ACTION = 'https://desk.zoho.com/support/WebToCase'
const RETURN_URL  = 'https://go-secure-zeta.vercel.app'

const iStyle = (err) => ({
  width: '100%', padding: '11px 14px', borderRadius: 9,
  border: `1.5px solid ${err ? '#E53E3E' : BORDER}`,
  background: err ? 'rgba(229,62,62,0.03)' : OFFWHITE,
  fontFamily: 'Inter, sans-serif', fontSize: 14, color: TEXT,
  outline: 'none', boxSizing: 'border-box',
})
const lStyle = {
  display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 12,
  fontWeight: 600, color: NAVY, marginBottom: 5, letterSpacing: '0.01em',
}
const selStyle = (err) => ({
  ...iStyle(err),
  cursor: 'pointer', appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230B1F3A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center',
})
const onFocus = e => { e.target.style.borderColor = ACCENT; e.target.style.boxShadow = '0 0 0 3px rgba(0,168,107,0.1)' }
const makeBlur = (err) => e => { e.target.style.borderColor = err ? '#E53E3E' : BORDER; e.target.style.boxShadow = 'none' }
const ErrMsg = ({ msg }) => msg ? <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#E53E3E', marginTop: 3, display: 'block' }}>{msg}</span> : null

const HOURS   = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
const MINUTES = ['00', '15', '30', '45']

const empty = { firstName: '', lastName: '', location: '', destination: '', pickupDate: '', pickupHour: '09', pickupMinute: '00', pickupAmPm: 'AM', carType: 'Automatic', email: '' }

export default function BookingModal({ open, onClose }) {
  const [fields, setFields] = useState(empty)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  // ESC to close
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', h)
    return () => document.removeEventListener('keydown', h)
  }, [open, onClose])

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Reset when opened
  useEffect(() => {
    if (open) { setFields(empty); setErrors({}); setSubmitting(false) }
  }, [open])

  if (!open) return null

  const set = (k, v) => setFields(f => ({ ...f, [k]: v }))

  const validate = () => {
    const e = {}
    if (!fields.firstName.trim()) e.firstName = 'Please enter your first name'
    if (!fields.lastName.trim())  e.lastName  = 'Please enter your last name'
    if (!fields.location.trim())  e.location  = 'Please enter your current location'
    if (!fields.destination.trim()) e.destination = 'Please enter your destination'
    if (!fields.pickupDate) e.pickupDate = 'Please select a pickup date'
    return e
  }

  const handleSubmit = (e) => {
    const errs = validate()
    if (Object.keys(errs).length) {
      e.preventDefault()
      setErrors(errs)
      // Scroll to first error
      const first = document.querySelector('[data-error="true"]')
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setSubmitting(true)
    // Allow native form POST to Zoho — returnURL brings user back
  }

  // Compose the Pickup Time value Zoho stores as a single text field
  const pickupTimeValue = fields.pickupDate
    ? `${fields.pickupDate} ${fields.pickupHour}:${fields.pickupMinute} ${fields.pickupAmPm}`
    : ''

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(11,31,58,0.6)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 16px', animation: 'fadeIn 0.2s ease' }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: '#fff', borderRadius: 20, width: '100%', maxWidth: 640, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 32px 80px rgba(11,31,58,0.25)', animation: 'slideUp 0.25s ease' }}
      >

        {/* ── Modal header ── */}
        <div style={{ padding: '24px 28px 20px', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#fff', zIndex: 1, borderRadius: '20px 20px 0 0' }}>
          <div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, color: NAVY, margin: 0 }}>Book a trusted driver</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#718096', margin: '4px 0 0' }}>Our team will confirm your booking by phone or email.</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{ width: 36, height: 36, borderRadius: 10, background: OFFWHITE, border: `1px solid ${BORDER}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            onMouseEnter={e => (e.currentTarget.style.background = BORDER)}
            onMouseLeave={e => (e.currentTarget.style.background = OFFWHITE)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* ── Form body ── */}
        <div style={{ padding: '24px 28px 32px' }}>
          <form
            name="zsWebToCase_1333745000000420191"
            action={ZOHO_ACTION}
            method="POST"
            acceptCharset="UTF-8"
            onSubmit={handleSubmit}
          >
            {/* Zoho authentication & routing — do not remove */}
            <input type="hidden" name="xnQsjsdp" value="edbsnf30ba5478c5b01e68c26e95e2e6d91bc70c94b43b6cfa26e4de0bbb52978b7e" />
            <input type="hidden" name="xmIwtLD"  value="edbsn2c7892e15cafc72f0fcd17424b92b4d2b0282b4c31a80f3c9432d1af3f42de8" />
            <input type="hidden" name="xJdfEaS"  value="" />
            <input type="hidden" name="actionType" value="Q2FzZXM=" />
            <input type="hidden" name="returnURL"  value={RETURN_URL} />

            {/* Subject — always "Request Driver - GoSecure", never shown to user */}
            <input type="hidden" name="Subject" value="Request Driver - GoSecure" />

            {/* Pickup Time composed value (Zoho reads this single field) */}
            <input type="hidden" name="Pickup Time" value={pickupTimeValue} />

            {/* ── First / Last name ── */}
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div data-error={!!errors.firstName}>
                <label style={lStyle}>First name <span style={{ color: '#E53E3E' }}>*</span></label>
                <input
                  type="text" name="First Name" maxLength="40"
                  placeholder="e.g. Jean-Paul"
                  value={fields.firstName} onChange={e => set('firstName', e.target.value)}
                  style={iStyle(errors.firstName)} onFocus={onFocus} onBlur={makeBlur(errors.firstName)}
                />
                <ErrMsg msg={errors.firstName} />
              </div>
              <div data-error={!!errors.lastName}>
                <label style={lStyle}>Last name <span style={{ color: '#E53E3E' }}>*</span></label>
                <input
                  type="text" name="Last Name" maxLength="80"
                  placeholder="e.g. Nzeyimana"
                  value={fields.lastName} onChange={e => set('lastName', e.target.value)}
                  style={iStyle(errors.lastName)} onFocus={onFocus} onBlur={makeBlur(errors.lastName)}
                />
                <ErrMsg msg={errors.lastName} />
              </div>
            </div>

            {/* ── Location / Destination ── */}
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div data-error={!!errors.location}>
                <label style={lStyle}>Current location <span style={{ color: '#E53E3E' }}>*</span></label>
                <input
                  type="text" name="Current Location" maxLength="255"
                  placeholder="e.g. Kacyiru, Kigali"
                  value={fields.location} onChange={e => set('location', e.target.value)}
                  style={iStyle(errors.location)} onFocus={onFocus} onBlur={makeBlur(errors.location)}
                />
                <ErrMsg msg={errors.location} />
              </div>
              <div data-error={!!errors.destination}>
                <label style={lStyle}>Destination <span style={{ color: '#E53E3E' }}>*</span></label>
                <input
                  type="text" name="Destination" maxLength="255"
                  placeholder="e.g. Nyamirambo, Kigali"
                  value={fields.destination} onChange={e => set('destination', e.target.value)}
                  style={iStyle(errors.destination)} onFocus={onFocus} onBlur={makeBlur(errors.destination)}
                />
                <ErrMsg msg={errors.destination} />
              </div>
            </div>

            {/* ── Pickup date & time ── */}
            <div style={{ marginBottom: 16 }} data-error={!!errors.pickupDate}>
              <label style={lStyle}>Pickup date & time <span style={{ color: '#E53E3E' }}>*</span></label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 68px 68px 68px', gap: 8 }}>
                <input
                  type="date"
                  value={fields.pickupDate} onChange={e => set('pickupDate', e.target.value)}
                  style={iStyle(errors.pickupDate)} onFocus={onFocus} onBlur={makeBlur(errors.pickupDate)}
                />
                <select value={fields.pickupHour}   onChange={e => set('pickupHour', e.target.value)}   style={selStyle(false)}>
                  {HOURS.map(h => <option key={h}>{h}</option>)}
                </select>
                <select value={fields.pickupMinute} onChange={e => set('pickupMinute', e.target.value)} style={selStyle(false)}>
                  {MINUTES.map(m => <option key={m}>{m}</option>)}
                </select>
                <select value={fields.pickupAmPm}   onChange={e => set('pickupAmPm', e.target.value)}   style={selStyle(false)}>
                  <option>AM</option><option>PM</option>
                </select>
              </div>
              <ErrMsg msg={errors.pickupDate} />
            </div>

            {/* ── Car type ── */}
            <div style={{ marginBottom: 16 }}>
              <label style={lStyle}>Car type <span style={{ color: '#E53E3E' }}>*</span></label>
              <select
                name="CarType"
                value={fields.carType} onChange={e => set('carType', e.target.value)}
                style={selStyle(false)}
              >
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            {/* ── Email (optional) ── */}
            <div style={{ marginBottom: 28 }}>
              <label style={lStyle}>
                Email&nbsp;
                <span style={{ fontWeight: 400, color: '#A0AEC0', fontSize: 11 }}>(optional — for booking confirmation)</span>
              </label>
              <input
                type="email" name="Email" maxLength="100"
                placeholder="e.g. your@email.com"
                value={fields.email} onChange={e => set('email', e.target.value)}
                style={iStyle(false)} onFocus={onFocus} onBlur={makeBlur(false)}
              />
            </div>

            {/* ── Actions ── */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
              <button
                type="submit"
                id="zsSubmitButton_1333745000000420191"
                disabled={submitting}
                style={{ flex: 1, minWidth: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: submitting ? '#009960' : ACCENT, color: '#fff', border: 'none', padding: '14px 24px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, cursor: submitting ? 'default' : 'pointer', boxShadow: '0 4px 16px rgba(0,168,107,0.28)', opacity: submitting ? 0.85 : 1, transition: 'background 0.2s' }}
                onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = '#009960' }}
                onMouseLeave={e => { if (!submitting) e.currentTarget.style.background = ACCENT }}
              >
                {submitting ? 'Submitting…' : 'Request a Driver'}
              </button>
              <a
                href={`tel:${HOTLINE}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'transparent', color: NAVY, border: `2px solid ${NAVY}`, padding: '12px 20px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = NAVY; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = NAVY }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v.92z"/>
                </svg>
                Call Hotline
              </a>
            </div>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#A0AEC0', textAlign: 'center', margin: 0 }}>
              No app required. Your request goes straight to our operations team.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
