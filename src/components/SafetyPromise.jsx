import { ACCENT, NAVY, GOLD } from '../constants'

const PROMISES = [
  'We verify drivers before assigning them',
  'We confirm trip details before dispatch',
  'We keep requests visible to our operations team',
  'We provide WhatsApp and hotline support',
  'We record every request for accountability',
]

export default function SafetyPromise() {
  return (
    <section id="safety" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0d2545 50%, ${NAVY} 100%)`, padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,168,107,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, right: -80, width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,184,75,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            <div style={{ width: 20, height: 2, background: GOLD }} />Our commitment<div style={{ width: 20, height: 2, background: GOLD }} />
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#fff', margin: '0 0 16px', letterSpacing: '-0.02em' }}>Our safety promise</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto' }}>Safety isn't a feature — it's the foundation of everything we do.</p>
        </div>

        <div className="safety-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 180, height: 180, background: 'rgba(255,255,255,0.05)', borderRadius: 40, border: '1px solid rgba(0,168,107,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <svg width="90" height="90" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(0,168,107,0.15)" stroke={ACCENT} strokeWidth="1.5" />
                <path d="M9 12l2 2 4-4" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ position: 'absolute', inset: -8, borderRadius: 48, border: '2px solid rgba(245,184,75,0.2)' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {PROMISES.map((promise, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '18px 20px' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,168,107,0.08)'; e.currentTarget.style.borderColor = 'rgba(0,168,107,0.2)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}>
                <div style={{ width: 28, height: 28, flexShrink: 0, background: 'rgba(0,168,107,0.15)', border: '1px solid rgba(0,168,107,0.3)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
