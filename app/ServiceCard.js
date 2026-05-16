'use client'

import { useState, useRef } from 'react'

export default function ServiceCard({ service }) {
  const [open, setOpen] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) scale(1.02)`
    card.style.transition = 'transform 0.1s ease'
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)'
    card.style.transition = 'transform 0.5s ease'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <div className="overflow-hidden mb-6">
        <img
          src={service.image}
          className="w-full h-[240px] md:h-[360px] object-cover hover:scale-105 transition duration-700"
          alt={service.title}
        />
      </div>

      <h3 className="font-serif text-2xl md:text-4xl mb-4">{service.title}</h3>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-40 opacity-100 mb-5' : 'max-h-0 opacity-0 mb-0'
        }`}
      >
        <p className="text-[#4e6055] text-lg leading-relaxed">{service.description}</p>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="text-[#50685a] text-lg flex items-center gap-1 hover:gap-2 transition-all"
      >
        {open ? 'Show less ↑' : 'Learn more →'}
      </button>
    </div>
  )
}
