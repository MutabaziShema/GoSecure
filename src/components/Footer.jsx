import { ACCENT, NAVY, GOLD, BORDER } from '../constants'
import { HOTLINE, EMAIL } from '../constants'
import logo from '/gosecure-logo.png'

const smoothScroll = (href) => {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

const PhoneIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v.92z"/></svg>

const CONTACTS = [
  { icon: <PhoneIcon />, label: HOTLINE, sub: 'WhatsApp' },
  { icon: <PhoneIcon />, label: HOTLINE, sub: 'Hotline' },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: EMAIL, sub: 'Email' },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Kigali, Rwanda', sub: 'Location' },
]

export default function Footer({ onBookNow }) {
  return (
    <footer id="contact" style={{ background: NAVY, color: '#fff', padding: '72px 24px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${GOLD}, rgba(245,184,75,0.3))` }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>

          {/* Brand */}
          <div>
            <img src={logo} alt="GoSecure" style={{ height: 40, width: 'auto', marginBottom: 20, filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 280 }}>
              Trusted driver-dispatch service connecting customers with verified drivers. Human-controlled. Kigali-based.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {CONTACTS.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, background: 'rgba(255,255,255,0.06)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{item.label}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', margin: '0 0 20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Navigate</h4>
            {[['Home','#home'],['How It Works','#how-it-works'],['Why GoSecure','#why-gosecure'],['Safety','#safety'],['FAQ','#faq']].map(([label, href]) => (
              <a key={label} href={href} onClick={e => { e.preventDefault(); smoothScroll(href) }}
                style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: 12 }}
                onMouseEnter={e => (e.target.style.color = ACCENT)}
                onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.55)')}
              >{label}</a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', margin: '0 0 20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Services</h4>
            {['Driver dispatch','Safe night movement','Family trips','Corporate driving','Temporary support'].map(item => (
              <div key={item} style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 12 }}>{item}</div>
            ))}
          </div>

          {/* Book Now */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', margin: '0 0 20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Book now</h4>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, marginBottom: 20 }}>Ready for a trusted driver? Book via WhatsApp or call our hotline anytime.</p>
            <button onClick={onBookNow} style={{ display: 'flex', alignItems: 'center', gap: 8, background: ACCENT, color: '#fff', padding: '12px 20px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, border: 'none', cursor: 'pointer', marginBottom: 12, width: '100%', justifyContent: 'center', boxSizing: 'border-box' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#009960')}
              onMouseLeave={e => (e.currentTarget.style.background = ACCENT)}>
              Book on WhatsApp
            </button>
            <a href={`tel:${HOTLINE}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '12px 20px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}>
              Call Hotline
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>© 2026 GoSecure. All rights reserved. Kigali, Rwanda.</span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: GOLD, fontStyle: 'italic', fontWeight: 500 }}>Safe hands for every journey.</span>
        </div>
      </div>
    </footer>
  )
}
