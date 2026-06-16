'use client'

import { useState } from 'react'

export default function ResultsCard({ result }) {
  const [showBefore, setShowBefore] = useState(true)

  return (
    <div className="bg-white border border-[#d7dcd5] overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={showBefore ? result.beforeImage : result.afterImage}
          alt={showBefore ? 'Before' : 'After'}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Toggle Button */}
        <button
          onClick={() => setShowBefore(!showBefore)}
          className="absolute bottom-4 right-4 bg-[#021c16] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0a3a2e] transition-colors duration-200"
        >
          {showBefore ? 'See After →' : '← See Before'}
        </button>

        {/* Label */}
        <div className="absolute top-4 left-4 bg-[#50685a] text-white px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] font-medium">
          {showBefore ? 'Before' : 'After'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-3xl mb-2 text-[#112018]">
          {result.title}
        </h3>
        
        <p className="text-[#50685a] text-sm uppercase tracking-[0.3em] mb-4">
          {result.service}
        </p>

        <p className="text-[#4e6055] text-base leading-relaxed">
          {result.description}
        </p>
      </div>
    </div>
  )
}
