'use client'

import ScrollReveal from './ScrollReveal'

export default function ReviewCard({ review }) {
  return (
    <ScrollReveal>
      <div className="bg-white border border-[#d7dcd5] p-8 hover:shadow-lg transition-shadow duration-300">
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#50685a] text-lg">
              {'★'}
            </span>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-[#4e6055] text-lg leading-relaxed mb-6 italic">
          "{review.text}"
        </p>

        {/* Author */}
        <div className="border-t border-[#e8ebea] pt-4">
          <p className="font-serif text-lg text-[#112018]">
            {review.author}
          </p>
          <p className="text-[#50685a] text-sm">
            {review.location}
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}
