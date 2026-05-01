import { useState, useEffect } from 'react'
import { ACCENT, NAVY, TEXT, OFFWHITE, BORDER } from '../constants'
import logo from '/gosecure-logo.png'

const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'How It Works',  href: '#how-it-works' },
  { label: 'Why GoSecure',  href: '#why-gosecure' },
  { label: 'Safety',        href: '#safety' },
  { label: 'FAQ',           href: '#faq' },
  { label: 'Contact',       href: '#contact' },
]

const smoothScroll = (href) => {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Header({ onBookNow }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    smoothScroll(href)
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(247,249,252,0.97)' : 'rgba(247,249,252,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? `1px solid ${BORDER}` : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 20px rgba(11,31,58,0.06)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

        {/* Logo */}
        <a href="#home" onClick={(e) => handleNav(e, '#home')} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src={logo} alt="GoSecure — Safe hands for every journey" style={{ height: 50, width: 'auto' }} />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)}
              style={{ textDecoration: 'none', color: TEXT, fontSize: 14, fontWeight: 500, fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em', whiteSpace: 'nowrap' }}
              onMouseEnter={e => (e.target.style.color = ACCENT)}
              onMouseLeave={e => (e.target.style.color = TEXT)}
            >{link.label}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={onBookNow} className="desktop-nav" style={{ background: ACCENT, color: '#fff', padding: '10px 22px', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,168,107,0.25)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#009960'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.transform = 'none' }}
          >Book Now</button>

          {/* Hamburger */}
          <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle navigation"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ display: 'block', width: 24, height: 2, background: NAVY, borderRadius: 2, transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: NAVY, borderRadius: 2, opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: NAVY, borderRadius: 2, transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="mobile-menu" style={{ maxHeight: menuOpen ? 400 : 0, overflow: 'hidden', background: OFFWHITE, borderTop: menuOpen ? `1px solid ${BORDER}` : 'none', transition: 'max-height 0.35s ease' }}>
        <div style={{ padding: '16px 24px 24px' }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)}
              style={{ display: 'block', padding: '12px 0', textDecoration: 'none', color: TEXT, fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16, borderBottom: `1px solid ${BORDER}` }}>
              {link.label}
            </a>
          ))}
          <button onClick={() => { setMenuOpen(false); onBookNow() }}
            style={{ display: 'block', marginTop: 16, width: '100%', background: ACCENT, color: '#fff', padding: '14px 22px', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, border: 'none', cursor: 'pointer', textAlign: 'center' }}>
            Book Now
          </button>
        </div>
      </div>
    </header>
  )
}
