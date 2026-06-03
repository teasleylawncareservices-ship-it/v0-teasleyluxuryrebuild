'use client'

import { useState } from 'react'

function Star({ filled, size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? '#caa14a' : 'none'}
      stroke={filled ? '#caa14a' : '#9aa89f'}
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5z" />
    </svg>
  )
}

// Read-only display of a rating (for testimonial cards)
export function StarDisplay({ value = 5, size = 18 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} filled={n <= value} size={size} />
      ))}
    </div>
  )
}

// Interactive rating input for the review form
export default function StarRating({ name = 'rating' }) {
  const [value, setValue] = useState(5)
  const [hover, setHover] = useState(0)

  return (
    <div>
      <input type="hidden" name={name} value={value} />
      <div className="flex items-center gap-2" role="radiogroup" aria-label="Rating">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setValue(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            className="transition-transform duration-150 hover:scale-110"
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
            aria-pressed={value === n}
          >
            <Star filled={n <= (hover || value)} size={34} />
          </button>
        ))}
        <span className="ml-3 text-[#4e6055] text-lg">{value}.0</span>
      </div>
    </div>
  )
}
