import { useEffect } from 'react'
import { NAVY, OFFWHITE, BORDER, HOTLINE } from '../constants'

export default function BookingModal({ open, onClose }) {
  // ESC to close
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', h)
    return () => document.removeEventListener('keydown', h)
  }, [open, onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(11,31,58,0.6)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px 16px', animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 20, width: '100%', maxWidth: 640,
          maxHeight: '90vh', overflowY: 'auto',
          boxShadow: '0 32px 80px rgba(11,31,58,0.25)', animation: 'slideUp 0.25s ease',
        }}
      >

        {/* ── Header ── */}
        <div style={{
          padding: '24px 28px 20px', borderBottom: `1px solid ${BORDER}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, background: '#fff', zIndex: 1,
          borderRadius: '20px 20px 0 0',
        }}>
          <div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, color: NAVY, margin: 0 }}>
              Book a trusted driver
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#718096', margin: '4px 0 0' }}>
              Our team will confirm your booking by phone or email.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 36, height: 36, borderRadius: 10,
              background: OFFWHITE, border: `1px solid ${BORDER}`,
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = BORDER)}
            onMouseLeave={e => (e.currentTarget.style.background = OFFWHITE)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* ── Zoho form (iframe) ── */}
        <div style={{ padding: '20px 28px 8px' }}>
          <iframe
            src="/booking-form.html"
            title="Book a driver"
            scrolling="no"
            style={{
              width: '100%',
              height: 490,
              border: 'none',
              display: 'block',
            }}
          />
        </div>

        {/* ── Call hotline fallback ── */}
        <div style={{ padding: '0 28px 28px' }}>
          <a
            href={`tel:${HOTLINE}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: 'transparent', color: NAVY,
              border: `2px solid ${NAVY}`, padding: '12px 20px',
              borderRadius: 10, fontFamily: 'Inter, sans-serif',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = NAVY; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = NAVY }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v.92z"/>
            </svg>
            Or call us: {HOTLINE}
          </a>
        </div>

      </div>
    </div>
  )
}
