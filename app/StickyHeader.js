'use client'

import { useEffect, useState } from 'react'

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(245,243,239,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #d8ddd6' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <a href="/" aria-label="Teasley Lawn Care Home">
          <img
            src="/logo.png"
            alt="Teasley Lawn Care Services"
            className="h-12 md:h-16 w-auto object-contain transition-all duration-500"
            style={{
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
            }}
          />
        </a>

        <nav
          className="hidden md:flex gap-14 uppercase tracking-[0.2em] text-sm transition-colors duration-500"
          style={{ color: scrolled ? '#112018' : '#ffffff' }}
        >
          <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#estimate" className="hover:opacity-70 transition-opacity">Estimate</a>
          <a href="#areas" className="hover:opacity-70 transition-opacity">Service Areas</a>
        </nav>

        <a
          href="tel:9197466062"
          className="rounded-full px-4 md:px-8 py-3 md:py-4 text-sm transition-all duration-500"
          style={{
            background: scrolled ? '#315645' : 'rgba(255,255,255,0.15)',
            color: '#ffffff',
            border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.4)',
          }}
        >
          ☏ <span className="hidden sm:inline">919-746-6062</span><span className="sm:hidden">Call Us</span>
        </a>
      </div>
    </header>
  )
}
