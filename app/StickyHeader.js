'use client'

import { useEffect, useState } from 'react'

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  const navColor = scrolled ? '#112018' : '#ffffff'

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled || menuOpen ? 'rgba(245,243,239,0.97)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid #d8ddd6' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <a href="/" aria-label="Teasley Lawn Care Home" className="outline-none flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Teasley Lawn Care Services"
            className="h-12 md:h-16 w-auto object-contain transition-all duration-500"
            style={{
              filter: scrolled || menuOpen ? 'none' : 'brightness(0) invert(1)',
            }}
          />
          {/* Business name — visible on mobile, hidden on desktop (shown in nav instead) */}
          <div className="md:hidden transition-colors duration-500" style={{ color: scrolled || menuOpen ? '#112018' : '#ffffff' }}>
            <p className="font-serif text-base leading-tight">Teasley Lawn Care</p>
            <p className="uppercase text-[9px] tracking-[0.3em] opacity-70">Services</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-10 uppercase tracking-[0.2em] text-sm transition-colors duration-500"
          style={{ color: navColor }}
        >
          <div className="transition-colors duration-500 border-r pr-10 mr-2" style={{ color: scrolled || menuOpen ? '#112018' : '#ffffff', borderColor: scrolled ? '#d8ddd6' : 'rgba(255,255,255,0.25)' }}>
            <p className="font-serif text-lg leading-tight normal-case tracking-normal">Teasley Lawn Care</p>
            <p className="uppercase text-[10px] tracking-[0.3em] opacity-70">Services</p>
          </div>
          <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#estimate" className="hover:opacity-70 transition-opacity">Estimate</a>
          <a href="#areas" className="hover:opacity-70 transition-opacity">Service Areas</a>
        </nav>

        {/* Desktop call button */}
        <a
          href="tel:9197466062"
          className="hidden md:block rounded-full px-8 py-4 text-sm transition-all duration-500"
          style={{
            background: scrolled ? '#315645' : 'rgba(255,255,255,0.15)',
            color: '#ffffff',
            border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.4)',
          }}
        >
          ☏ 919-746-6062
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-[2px] transition-all duration-300" style={{ background: scrolled || menuOpen ? '#112018' : '#ffffff', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span className="block w-6 h-[2px] transition-all duration-300" style={{ background: scrolled || menuOpen ? '#112018' : '#ffffff', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-[2px] transition-all duration-300" style={{ background: scrolled || menuOpen ? '#112018' : '#ffffff', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '300px' : '0' }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-5 uppercase tracking-[0.2em] text-sm text-[#112018]">
          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#estimate" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition-opacity">Estimate</a>
          <a href="#areas" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition-opacity">Service Areas</a>
          <a href="tel:9197466062" onClick={() => setMenuOpen(false)} className="bg-[#315645] text-white rounded-full px-6 py-3 text-center">
            ☏ 919-746-6062
          </a>
        </nav>
      </div>
    </header>
  )
}
