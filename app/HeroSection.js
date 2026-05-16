'use client'

import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const imgRef = useRef(null)
  const overlayRef = useRef(null)
  const sectionRef = useRef(null)

  // Parallax: bg image drifts slower than scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return
      imgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse spotlight: subtle radial light follows cursor across hero
  const handleMouseMove = (e) => {
    const overlay = overlayRef.current
    const section = sectionRef.current
    if (!overlay || !section) return
    const rect = section.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    overlay.style.transition = 'background 0.15s ease'
    overlay.style.background = `radial-gradient(ellipse 55% 45% at ${x}% ${y}%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.55) 70%)`
  }

  const handleMouseLeave = () => {
    const overlay = overlayRef.current
    if (!overlay) return
    overlay.style.transition = 'background 1s ease'
    overlay.style.background = 'rgba(0,0,0,0.45)'
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k6y5Mhf32YUe2iTYCtRHeoUkkHYGTI.png"
        className="absolute w-full object-cover pointer-events-none"
        style={{ top: '-15%', height: '130%', willChange: 'transform' }}
        alt="Luxury lawn"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.45)' }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-white w-full pt-24">

          <p
            className="uppercase text-xs md:text-sm mb-5 md:mb-10"
            style={{ letterSpacing: '0.4em', animation: 'heroFadeUp 0.8s ease both 0.1s' }}
          >
            PROFESSIONAL LAWN CARE · RALEIGH, NC
          </p>

          <h1
            className="font-serif text-5xl sm:text-7xl md:text-[120px] leading-[0.9] max-w-5xl mb-6 md:mb-10"
            style={{ animation: 'heroFadeUp 0.9s ease both 0.3s' }}
          >
            Give Your Lawn
            <br />
            Some <em style={{ color: '#7ab897', fontStyle: 'italic' }}>TLC</em>
          </h1>

          <p
            className="text-base md:text-2xl max-w-3xl text-[#e5dfd5] leading-relaxed mb-8 md:mb-12"
            style={{ animation: 'heroFadeUp 0.8s ease both 0.55s' }}
          >
            Professional lawn maintenance and landscaping services for residential and commercial properties.
          </p>

          <div
            className="flex gap-4 md:gap-6 flex-wrap"
            style={{ animation: 'heroFadeUp 0.8s ease both 0.75s' }}
          >
            <a
              href="#estimate"
              className="bg-[#315645] px-7 md:px-10 py-4 md:py-6 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[#3d6b57] transition-colors duration-300"
            >
              Request Free Estimate
            </a>
            <a
              href="tel:9197466062"
              className="border border-white/30 px-7 md:px-10 py-4 md:py-6 rounded-full uppercase tracking-[0.2em] text-sm hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            >
              Call 919-746-6062
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
