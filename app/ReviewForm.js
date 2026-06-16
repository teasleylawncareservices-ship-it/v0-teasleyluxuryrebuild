'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    title: '',
    review: '',
    serviceUsed: '',
    city: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Submit to FormSubmit
      const response = await fetch('https://formsubmit.co/teasleylawncareservices@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New Customer Review — Teasley Lawn Care',
          _template: 'table',
          _captcha: false,
          Name: formData.name,
          Email: formData.email,
          Rating: `${'⭐'.repeat(formData.rating)} (${formData.rating}/5)`,
          'Review Title': formData.title,
          'Service Used': formData.serviceUsed,
          City: formData.city,
          Review: formData.review
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          rating: 5,
          title: '',
          review: '',
          serviceUsed: '',
          city: ''
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting review:', error)
    } finally {
      setLoading(false)
    }
  }

  const services = [
    'Weekly Lawn Maintenance',
    'Bi-Weekly Lawn Maintenance',
    'Mulching',
    'Planting',
    'Pruning',
    'Other'
  ]

  const cities = [
    'Raleigh',
    'Cary',
    'Wake Forest',
    'Rolesville',
    'Knightdale',
    'Zebulon',
    'Wendell',
    'Nashville',
    'Other'
  ]

  return (
    <ScrollReveal>
      <div className="bg-white border border-[#d7dcd5] p-8 md:p-12">
        {submitted ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="font-serif text-3xl text-[#021c16] mb-3">Thank You!</h3>
            <p className="text-[#4e6055] text-lg leading-relaxed max-w-md mx-auto">
              Your review has been submitted successfully. We appreciate your feedback and will review it shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Star Rating */}
            <div className="mb-10">
              <label className="block uppercase tracking-[0.3em] text-[#50685a] text-sm font-medium mb-4">
                Rate Your Experience
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    className={`text-4xl transition-transform duration-200 hover:scale-110 ${
                      star <= formData.rating ? 'text-[#50685a]' : 'text-[#d7dcd5]'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="mb-6">
              <label className="block uppercase tracking-[0.3em] text-[#50685a] text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="w-full bg-[#f5f3ef] border border-[#d7dcd5] px-6 py-4 text-lg focus:outline-none focus:border-[#50685a] transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block uppercase tracking-[0.3em] text-[#50685a] text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-[#f5f3ef] border border-[#d7dcd5] px-6 py-4 text-lg focus:outline-none focus:border-[#50685a] transition-colors duration-200"
              />
            </div>

            {/* Service Used */}
            <div className="mb-6">
              <label className="block uppercase tracking-[0.3em] text-[#50685a] text-sm font-medium mb-2">
                Service Used *
              </label>
              <select
                name="serviceUsed"
                value={formData.serviceUsed}
                onChange={handleChange}
                required
                className="w-full bg-[#f5f3ef] border border-[#d7dcd5] px-6 py-4 text-lg focus:outline-none focus:border-[#50685a] transition-colors duration-200"
              >
                <option value="">Select a service...</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="mb-6">
              <label className="block uppercase tracking-[0.3em] text-[#50685a] text-sm font-medium mb-2">
                Your City
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-[#f5f3ef] border border-[#d7dcd5] px-6 py-4 text-lg focus:outline-none focus:border-[#50685a] transition-colors duration-200"
              >
                <option value="">Select a city...</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Review Title */}
            <div className="mb-6">
              <label className="block uppercase tracking-[0.3em] text-[#50685a] text-sm font-medium mb-2">
                Review Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="e.g., Transformed My Yard, Outstanding Service"
                className="w-full bg-[#f5f3ef] border border-[#d7dcd5] px-6 py-4 text-lg focus:outline-none focus:border-[#50685a] transition-colors duration-200"
              />
            </div>

            {/* Review Text */}
            <div className="mb-8">
              <label className="block uppercase tracking-[0.3em] text-[#50685a] text-sm font-medium mb-2">
                Your Review *
              </label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Share your experience with Teasley Lawn Care. What did we do well? How has our service impacted your property?..."
                className="w-full bg-[#f5f3ef] border border-[#d7dcd5] px-6 py-4 text-lg focus:outline-none focus:border-[#50685a] transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#021c16] text-white px-8 py-5 rounded-full uppercase tracking-[0.2em] font-medium hover:bg-[#0a3a2e] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Review'}
            </button>

            <p className="text-center text-[#4e6055] text-sm mt-6">
              Your review helps us maintain our high standards and helps other customers discover our services.
            </p>
          </form>
        )}
      </div>
    </ScrollReveal>
  )
}
