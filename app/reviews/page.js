import ScrollReveal from '../ScrollReveal'
import StickyHeader from '../StickyHeader'
import StarRating, { StarDisplay } from '../StarRating'

export const metadata = {
  title: 'Customer Reviews | Teasley Lawn Care Services',
  description:
    'See what homeowners across Raleigh and the Triangle are saying about Teasley Lawn Care Services, and share your own experience.',
}

const reviews = [
  {
    name: 'Marcus Bell',
    city: 'Raleigh, NC',
    rating: 5,
    service: 'Weekly Lawn Maintenance',
    text: 'My lawn has never looked this good. The crew is punctual, professional, and the edging is razor sharp every single week. Worth every penny.',
  },
  {
    name: 'Danielle Harper',
    city: 'Cary, NC',
    rating: 5,
    service: 'Mulching & Planting',
    text: 'They transformed our front beds with fresh mulch and new plantings. The curb appeal is unreal. Neighbors keep asking who did the work.',
  },
  {
    name: 'James Whitfield',
    city: 'Wake Forest, NC',
    rating: 5,
    service: 'Bi-Weekly Maintenance',
    text: 'Reliable, detail-oriented, and genuinely kind people. They treat my property like it is their own. I recommend them to everyone on my street.',
  },
  {
    name: 'Priya Nair',
    city: 'Knightdale, NC',
    rating: 4,
    service: 'Pruning',
    text: 'Great pruning work on our shrubs and small trees. Everything looks healthy and shaped beautifully. Quick to respond and easy to schedule.',
  },
  {
    name: 'Robert & Lisa Coleman',
    city: 'Rolesville, NC',
    rating: 5,
    service: 'Weekly Lawn Maintenance',
    text: 'We have used a few lawn services over the years and Teasley is by far the best. Consistent quality and a finished look that lasts all week.',
  },
  {
    name: 'Tanya Brooks',
    city: 'Zebulon, NC',
    rating: 5,
    service: 'Planting',
    text: 'They listened to exactly what I wanted and delivered a landscape that feels custom and high-end. Communication was excellent throughout.',
  },
]

const average = (
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
).toFixed(1)

export default function ReviewsPage() {
  return (
    <main className="bg-[#f5f3ef] text-[#112018] overflow-x-hidden">
      <StickyHeader />

      {/* Hero */}
      <section className="bg-[#021c16] text-white pt-36 md:pt-48 pb-16 md:pb-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <p className="uppercase tracking-[0.5em] text-sm text-[#83998e] mb-6">
              CUSTOMER REVIEWS
            </p>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-[90px] leading-[0.9] mb-8 md:mb-10">
              Loved by
              <br />
              <em>Neighbors</em>
            </h1>

            <div className="w-16 h-[1px] bg-[#83998e] mb-10 md:mb-14"></div>

            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <div className="flex items-center gap-4">
                <span className="font-serif text-5xl md:text-6xl">{average}</span>
                <div>
                  <StarDisplay value={Math.round(average)} size={20} />
                  <p className="text-[#83998e] text-sm mt-2">
                    Based on {reviews.length} verified reviews
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Review grid */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <p className="uppercase tracking-[0.5em] text-[#50685a] text-sm mb-6">
              WHAT CLIENTS SAY
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-[80px] leading-[0.9] mb-8 md:mb-10">
              Real <em>Results</em>
            </h2>
            <div className="w-16 h-[1px] bg-[#50685a] mb-12 md:mb-20"></div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 100}>
                <article className="border border-[#d7dcd5] bg-white p-8 h-full flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <StarDisplay value={review.rating} />
                  <p className="text-[#4e6055] text-lg leading-relaxed my-6 flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="border-t border-[#e4e8e1] pt-5">
                    <p className="font-serif text-2xl">{review.name}</p>
                    <p className="uppercase tracking-[0.25em] text-xs text-[#50685a] mt-2">
                      {review.city}
                    </p>
                    <p className="text-sm text-[#809086] mt-2">{review.service}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Submit a review */}
      <section id="submit" className="bg-[#021c16] text-white py-16 md:py-32">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <p className="uppercase tracking-[0.5em] text-sm text-[#83998e] mb-6">
              SHARE YOUR EXPERIENCE
            </p>
            <h2 className="font-serif text-5xl sm:text-7xl md:text-[80px] leading-[0.9] mb-8 md:mb-10">
              Leave a
              <br />
              <em>Review</em>
            </h2>
            <div className="w-16 h-[1px] bg-[#83998e] mb-10 md:mb-16"></div>
          </ScrollReveal>

          <form action="https://formsubmit.co/teasleylawncareservices@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Customer Review — Teasley Lawn Care" />
            <input type="hidden" name="_template" value="table" />

            <p className="text-2xl mb-6">How would you rate us?</p>
            <div className="mb-10">
              <StarRating name="rating" />
            </div>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full bg-transparent border border-[#31453d] px-6 py-5 mb-5 text-lg placeholder-[#6f8479] focus:border-[#64786f] outline-none transition-colors"
            />

            <input
              type="text"
              name="city"
              placeholder="City (e.g. Raleigh, NC)"
              className="w-full bg-transparent border border-[#31453d] px-6 py-5 mb-5 text-lg placeholder-[#6f8479] focus:border-[#64786f] outline-none transition-colors"
            />

            <input
              type="text"
              name="service"
              placeholder="Service received (optional)"
              className="w-full bg-transparent border border-[#31453d] px-6 py-5 mb-5 text-lg placeholder-[#6f8479] focus:border-[#64786f] outline-none transition-colors"
            />

            <textarea
              rows="6"
              name="review"
              required
              placeholder="Tell us about your experience"
              className="w-full bg-transparent border border-[#31453d] px-6 py-5 mb-10 text-lg placeholder-[#6f8479] focus:border-[#64786f] outline-none transition-colors"
            />

            <button className="bg-[#2f4c40] hover:bg-[#3a5d4e] px-10 py-5 rounded-full uppercase tracking-[0.2em] transition-colors">
              Submit Review →
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#021c16] text-white border-t border-[#1a3a2e] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <p className="font-serif text-3xl md:text-4xl italic mb-2">TLC</p>
              <p className="uppercase tracking-[0.4em] text-xs text-[#83998e]">
                Teasley Lawn Care Services
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 md:gap-16 text-[#c4cfc9]">
              <div>
                <p className="uppercase tracking-[0.35em] text-xs text-[#83998e] mb-3">Phone</p>
                <a href="tel:9197466062" className="text-lg hover:text-white transition-colors duration-200">
                  919-746-6062
                </a>
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-xs text-[#83998e] mb-3">Email</p>
                <a
                  href="mailto:teasleylawncareservices@gmail.com"
                  className="text-lg hover:text-white transition-colors duration-200 break-all"
                >
                  teasleylawncareservices@gmail.com
                </a>
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-xs text-[#83998e] mb-3">Back to</p>
                <a href="/" className="text-lg hover:text-white transition-colors duration-200">
                  Home →
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1a3a2e] mt-12 pt-8 text-[#4e6055] text-sm flex flex-col sm:flex-row sm:justify-between gap-2">
            <p>&copy; {new Date().getFullYear()} Teasley Lawn Care Services. All rights reserved.</p>
            <p>Raleigh · Cary · Wake Forest &amp; beyond</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
