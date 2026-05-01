import SectionHeading from './SectionHeading'
import useBookingForm from '../hooks/useBookingForm'
import { ACCENT, NAVY, OFFWHITE, BORDER, TEXT, HOTLINE } from '../constants'

const inputStyle = (err) => ({
  width: '100%', padding: '13px 16px', borderRadius: 10,
  border: `1.5px solid ${err ? '#E53E3E' : BORDER}`,
  background: err ? 'rgba(229,62,62,0.03)' : '#fff',
  fontFamily: 'Inter, sans-serif', fontSize: 15, color: TEXT, outline: 'none', boxSizing: 'border-box',
})
const labelStyle = { display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 6, letterSpacing: '0.01em' }
const ErrMsg = ({ msg }) => msg ? <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#E53E3E', marginTop: 4, display: 'block' }}>{msg}</span> : null
const onFocus = e => { e.target.style.borderColor = ACCENT; e.target.style.boxShadow = '0 0 0 3px rgba(0,168,107,0.12)' }
const makeBlur = (err) => e => { e.target.style.borderColor = err ? '#E53E3E' : BORDER; e.target.style.boxShadow = 'none' }

export default function BookingForm() {
  const { form, errors, submitted, update, handleWhatsApp } = useBookingForm()

  const dropdownStyle = {
    ...inputStyle(false),
    cursor: 'pointer', appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230B1F3A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center',
  }

  return (
    <section id="booking" style={{ background: `linear-gradient(180deg, ${OFFWHITE} 0%, #fff 100%)`, padding: '96px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <SectionHeading eyebrow="Book a driver" title="Book a trusted driver" subtitle="Fill in your details and we'll prepare a WhatsApp message for our operations team." center />

        <div className="booking-form-card" style={{ background: '#fff', borderRadius: 24, padding: '48px 48px', boxShadow: '0 20px 60px rgba(11,31,58,0.08), 0 4px 16px rgba(11,31,58,0.04)', border: `1px solid ${BORDER}`, marginTop: 48 }}>
          <form onSubmit={(e) => handleWhatsApp(e)} noValidate>

            {/* Honeypot — hidden from humans, bots will fill it */}
            <div className="hp-field" aria-hidden="true">
              <input tabIndex="-1" autoComplete="off" value={form._hp} onChange={e => update('_hp', e.target.value)} />
            </div>

            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Full name <span style={{ color: '#E53E3E' }}>*</span></label>
                <input type="text" placeholder="e.g. Jean-Paul Nzeyimana" value={form.name} onChange={e => update('name', e.target.value)} style={inputStyle(errors.name)} onFocus={onFocus} onBlur={makeBlur(errors.name)} />
                <ErrMsg msg={errors.name} />
              </div>
              <div>
                <label style={labelStyle}>Phone number <span style={{ color: '#E53E3E' }}>*</span></label>
                <input type="tel" placeholder="e.g. +250 7XX XXX XXX" value={form.phone} onChange={e => update('phone', e.target.value)} style={inputStyle(errors.phone)} onFocus={onFocus} onBlur={makeBlur(errors.phone)} />
                <ErrMsg msg={errors.phone} />
              </div>
            </div>

            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Pickup location <span style={{ color: '#E53E3E' }}>*</span></label>
                <input type="text" placeholder="e.g. Kacyiru, Kigali" value={form.pickup} onChange={e => update('pickup', e.target.value)} style={inputStyle(errors.pickup)} onFocus={onFocus} onBlur={makeBlur(errors.pickup)} />
                <ErrMsg msg={errors.pickup} />
              </div>
              <div>
                <label style={labelStyle}>Destination <span style={{ color: '#E53E3E' }}>*</span></label>
                <input type="text" placeholder="e.g. Nyamirambo, Kigali" value={form.destination} onChange={e => update('destination', e.target.value)} style={inputStyle(errors.destination)} onFocus={onFocus} onBlur={makeBlur(errors.destination)} />
                <ErrMsg msg={errors.destination} />
              </div>
            </div>

            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Preferred time <span style={{ color: '#E53E3E' }}>*</span></label>
                <input type="text" placeholder="e.g. Today at 9:00 PM" value={form.time} onChange={e => update('time', e.target.value)} style={inputStyle(errors.time)} onFocus={onFocus} onBlur={makeBlur(errors.time)} />
                <ErrMsg msg={errors.time} />
              </div>
              <div>
                <label style={labelStyle}>Car type</label>
                <select value={form.carType} onChange={e => update('carType', e.target.value)} style={dropdownStyle}>
                  <option>Automatic</option><option>Manual</option><option>Not sure</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <label style={labelStyle}>Extra note (optional)</label>
              <textarea placeholder="Any additional information for our operations team..." value={form.note} onChange={e => update('note', e.target.value)} rows={4} style={{ ...inputStyle(false), resize: 'vertical', minHeight: 100 }} onFocus={onFocus} onBlur={e => { e.target.style.borderColor = BORDER; e.target.style.boxShadow = 'none' }} />
            </div>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16 }}>
              <button type="submit" style={{ flex: 1, minWidth: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: submitted ? '#009960' : ACCENT, color: '#fff', border: 'none', padding: '16px 28px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,168,107,0.3)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {submitted ? 'Opening WhatsApp…' : 'Book Now on WhatsApp'}
              </button>
              <a href={`tel:${HOTLINE}`} style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: 'transparent', color: NAVY, border: `2px solid ${NAVY}`, padding: '14px 28px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = NAVY; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = NAVY }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v.92z"/></svg>
                Call Hotline
              </a>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#718096', textAlign: 'center', margin: 0 }}>No app download required. Book through WhatsApp or call our hotline.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
