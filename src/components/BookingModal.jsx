import { useEffect } from 'react'
import useBookingForm from '../hooks/useBookingForm'
import { ACCENT, NAVY, OFFWHITE, BORDER, TEXT, HOTLINE } from '../constants'

const mInput = (err) => ({
  width: '100%', padding: '11px 14px', borderRadius: 9,
  border: `1.5px solid ${err ? '#E53E3E' : BORDER}`,
  background: err ? 'rgba(229,62,62,0.03)' : OFFWHITE,
  fontFamily: 'Inter, sans-serif', fontSize: 14, color: TEXT, outline: 'none', boxSizing: 'border-box',
})
const mLabel = { display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: NAVY, marginBottom: 5, letterSpacing: '0.01em' }
const mFocus = e => { e.target.style.borderColor = ACCENT; e.target.style.boxShadow = '0 0 0 3px rgba(0,168,107,0.1)' }
const makeBlur = (err) => e => { e.target.style.borderColor = err ? '#E53E3E' : BORDER; e.target.style.boxShadow = 'none' }

export default function BookingModal({ open, onClose }) {
  const { form, errors, submitted, update, handleWhatsApp } = useBookingForm()

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const dropdownStyle = {
    ...mInput(false),
    cursor: 'pointer', appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230B1F3A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center',
  }

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(11,31,58,0.6)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 16px', animation: 'fadeIn 0.2s ease' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 20, width: '100%', maxWidth: 640, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 32px 80px rgba(11,31,58,0.25)', animation: 'slideUp 0.25s ease' }}>

        {/* Header */}
        <div style={{ padding: '24px 28px 20px', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#fff', zIndex: 1, borderRadius: '20px 20px 0 0' }}>
          <div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, color: NAVY, margin: 0 }}>Book a trusted driver</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#718096', margin: '4px 0 0' }}>We'll prepare a WhatsApp message for our team.</p>
          </div>
          <button onClick={onClose} aria-label="Close modal" style={{ width: 36, height: 36, borderRadius: 10, background: OFFWHITE, border: `1px solid ${BORDER}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            onMouseEnter={e => (e.currentTarget.style.background = BORDER)}
            onMouseLeave={e => (e.currentTarget.style.background = OFFWHITE)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px 28px 28px' }}>
          <form onSubmit={(e) => handleWhatsApp(e, onClose)} noValidate>

            {/* Honeypot — hidden from humans, bots will fill it */}
            <div className="hp-field" aria-hidden="true">
              <input tabIndex="-1" autoComplete="off" value={form._hp} onChange={e => update('_hp', e.target.value)} />
            </div>

            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={mLabel}>Full name <span style={{ color: '#E53E3E' }}>*</span></label>
                <input type="text" placeholder="e.g. Jean-Paul Nzeyimana" value={form.name} onChange={e => update('name', e.target.value)} style={mInput(errors.name)} onFocus={mFocus} onBlur={makeBlur(errors.name)} />
                {errors.name && <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#E53E3E', marginTop: 3, display: 'block' }}>{errors.name}</span>}
              </div>
              <div>
                <label style={mLabel}>Phone number <span style={{ color: '#E53E3E' }}>*</span></label>
                <input type="tel" placeholder="e.g. +250 7XX XXX XXX" value={form.phone} onChange={e => update('phone', e.target.value)} style={mInput(errors.phone)} onFocus={mFocus} onBlur={makeBlur(errors.phone)} />
                {errors.phone && <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#E53E3E', marginTop: 3, display: 'block' }}>{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={mLabel}>Pickup location <span style={{ color: '#E53E3E' }}>*</span></label>
                <input type="text" placeholder="e.g. Kacyiru, Kigali" value={form.pickup} onChange={e => update('pickup', e.target.value)} style={mInput(errors.pickup)} onFocus={mFocus} onBlur={makeBlur(errors.pickup)} />
                {errors.pickup && <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#E53E3E', marginTop: 3, display: 'block' }}>{errors.pickup}</span>}
              </div>
              <div>
                <label style={mLabel}>Destination <span style={{ color: '#E53E3E' }}>*</span></label>
                <input type="text" placeholder="e.g. Nyamirambo, Kigali" value={form.destination} onChange={e => update('destination', e.target.value)} style={mInput(errors.destination)} onFocus={mFocus} onBlur={makeBlur(errors.destination)} />
                {errors.destination && <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#E53E3E', marginTop: 3, display: 'block' }}>{errors.destination}</span>}
              </div>
            </div>

            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={mLabel}>Preferred time <span style={{ color: '#E53E3E' }}>*</span></label>
                <input type="text" placeholder="e.g. Today at 9:00 PM" value={form.time} onChange={e => update('time', e.target.value)} style={mInput(errors.time)} onFocus={mFocus} onBlur={makeBlur(errors.time)} />
                {errors.time && <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#E53E3E', marginTop: 3, display: 'block' }}>{errors.time}</span>}
              </div>
              <div>
                <label style={mLabel}>Car type</label>
                <select value={form.carType} onChange={e => update('carType', e.target.value)} style={dropdownStyle}>
                  <option>Automatic</option><option>Manual</option><option>Not sure</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={mLabel}>Extra note (optional)</label>
              <textarea placeholder="Any additional information for our team..." value={form.note} onChange={e => update('note', e.target.value)} rows={3} style={{ ...mInput(false), resize: 'vertical', minHeight: 80 }} onFocus={mFocus} onBlur={e => { e.target.style.borderColor = BORDER; e.target.style.boxShadow = 'none' }} />
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
              <button type="submit" style={{ flex: 1, minWidth: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: submitted ? '#009960' : ACCENT, color: '#fff', border: 'none', padding: '14px 24px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,168,107,0.28)' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {submitted ? 'Opening WhatsApp…' : 'Book Now on WhatsApp'}
              </button>
              <a href={`tel:${HOTLINE}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'transparent', color: NAVY, border: `2px solid ${NAVY}`, padding: '12px 20px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = NAVY; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = NAVY }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v.92z"/></svg>
                Call Hotline
              </a>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#A0AEC0', textAlign: 'center', margin: 0 }}>No app download required. Book through WhatsApp or call our hotline.</p>
          </form>
        </div>
      </div>
    </div>
  )
}
