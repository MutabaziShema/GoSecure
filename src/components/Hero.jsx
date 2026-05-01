import { useState, useEffect, Fragment } from 'react'
import { ACCENT, NAVY, GOLD, OFFWHITE, BORDER, TEXT, MUTED } from '../constants'
import { HOTLINE } from '../constants'

function HeroVisualCard() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 3), 2000)
    return () => clearInterval(t)
  }, [])

  const statuses = [
    { label: 'Request Received', color: GOLD,   bg: 'rgba(245,184,75,0.12)' },
    { label: 'Officer Assigned',  color: ACCENT, bg: 'rgba(0,168,107,0.12)' },
    { label: 'Driver Confirmed',  color: NAVY,   bg: 'rgba(11,31,58,0.1)' },
  ]

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 440 }}>
      {/* Main card */}
      <div style={{ background: '#fff', borderRadius: 20, padding: 28, boxShadow: '0 20px 60px rgba(11,31,58,0.12), 0 4px 16px rgba(11,31,58,0.06)', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16, color: NAVY }}>Booking Request</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#718096', marginTop: 2 }}>Managed by GoSecure ops</div>
          </div>
          <div style={{ width: 44, height: 44, background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a5c 100%)`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill={ACCENT} stroke={ACCENT} strokeWidth="0.5"/>
              <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Route */}
        <div style={{ background: OFFWHITE, borderRadius: 12, padding: 16, marginBottom: 20, border: `1px solid ${BORDER}` }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 2 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: ACCENT, border: '2px solid #fff', boxShadow: `0 0 0 2px ${ACCENT}` }} />
              <div style={{ width: 2, height: 28, background: `linear-gradient(180deg, ${ACCENT}, ${NAVY})`, margin: '3px 0' }} />
              <div style={{ width: 10, height: 10, borderRadius: 3, background: NAVY, border: '2px solid #fff', boxShadow: `0 0 0 2px ${NAVY}` }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#718096', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pickup</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: TEXT, fontWeight: 600 }}>Kacyiru, Kigali</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#718096', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Destination</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: TEXT, fontWeight: 600 }}>Nyamirambo, Kigali</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status badges */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {statuses.map((s, i) => (
            <span key={s.label} style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, color: i === step ? s.color : '#A0AEC0', background: i === step ? s.bg : 'transparent', border: `1px solid ${i === step ? s.color : BORDER}`, borderRadius: 100, padding: '4px 10px', transition: 'all 0.5s ease' }}>{s.label}</span>
          ))}
        </div>

        {/* Driver card */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: `linear-gradient(135deg, ${NAVY} 0%, #1a3560 100%)`, borderRadius: 12, padding: '12px 16px' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(135deg, ${ACCENT}, #009960)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, color: '#fff' }}>Verified Driver</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>ID verified • Background checked</div>
          </div>
          <div style={{ background: 'rgba(0,168,107,0.2)', border: '1px solid rgba(0,168,107,0.4)', borderRadius: 6, padding: '3px 8px' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: ACCENT }}>✓</span>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div style={{ position: 'absolute', top: -18, right: -18, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 8px 30px rgba(11,31,58,0.12)', display: 'flex', alignItems: 'center', gap: 8, zIndex: 3 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: GOLD }} />
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: NAVY }}>Est. 5 min</span>
      </div>
      <div style={{ position: 'absolute', bottom: -18, left: -18, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 8px 30px rgba(11,31,58,0.12)', display: 'flex', alignItems: 'center', gap: 8, zIndex: 3 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(0,168,107,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A86B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, color: NAVY }}>Booking confirmed</span>
      </div>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '110%', height: '110%', background: 'radial-gradient(ellipse, rgba(0,168,107,0.06) 0%, transparent 70%)', borderRadius: '50%', zIndex: 1, pointerEvents: 'none' }} />
    </div>
  )
}

export default function Hero({ onBookNow }) {
  return (
    <section id="home" style={{ minHeight: '100vh', background: OFFWHITE, display: 'flex', alignItems: 'center', paddingTop: 72, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -120, right: -120, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,168,107,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,31,58,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(11,31,58,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', width: '100%', position: 'relative' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,168,107,0.1)', border: '1px solid rgba(0,168,107,0.2)', borderRadius: 100, padding: '6px 14px', marginBottom: 28 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, color: ACCENT, letterSpacing: '0.02em' }}>Trusted driver-dispatch service</span>
          </div>

          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(36px, 4.5vw, 58px)', lineHeight: 1.15, color: NAVY, margin: '0 0 20px', letterSpacing: '-0.02em' }}>
            Book a trusted driver<br />
            <span style={{ color: ACCENT }}>for your car</span>, anytime.
          </h1>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(15px, 1.8vw, 18px)', color: MUTED, lineHeight: 1.7, margin: '0 0 36px', maxWidth: 520 }}>
            GoSecure connects you with verified drivers who can safely drive you in your own car. Every request is managed by our operations team from booking to completion.
          </p>

          <div className="hero-btns" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
            <button onClick={onBookNow} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: ACCENT, color: '#fff', border: 'none', padding: '15px 28px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 15, cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,168,107,0.3)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#009960'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,168,107,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,168,107,0.3)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book a Driver
            </button>
            <a href={`tel:${HOTLINE}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: NAVY, border: `2px solid ${NAVY}`, padding: '13px 26px', borderRadius: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = NAVY; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = NAVY }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v.92z"/></svg>
              Call Hotline
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            {['Verified drivers', 'Human-controlled dispatch', 'Safe journeys'].map((item, i) => (
              <Fragment key={item}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, color: MUTED, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span> {item}
                </span>
                {i < 2 && <span style={{ color: '#CBD5E0', fontSize: 12 }}>•</span>}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="hero-visual" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <HeroVisualCard />
        </div>
      </div>
    </section>
  )
}
