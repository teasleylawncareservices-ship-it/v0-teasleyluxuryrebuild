
import ServiceCard from './ServiceCard'
import HeroSection from './HeroSection'
import ScrollReveal from './ScrollReveal'
import StickyHeader from './StickyHeader'

const services = [
  {
    title: 'Weekly Lawn Maintenance',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-Y6BFS4csWKHIFfeJ8Hadz6P4zO7v4O.jpeg',
    description: 'Weekly mowing, edging, and cleanup keep your lawn thick, healthy, and looking pristine every week.'
  },
  {
    title: 'Bi-Weekly Lawn Maintenance',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-luis-negron-260501657-13630739-kpzkGGYW5RjPmcdVFwgoBmjTyQnfHc.jpg',
    description: 'A reliable biweekly schedule for steady growth, seasonal feeding, and tidy lawn edges.'
  },
  {
    title: 'Mulching',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-bvShQRCZGG9NV0uEFU3wVefOJJV7yV.jpeg',
    description: 'Fresh mulch installation to protect plant roots, retain moisture, and give beds a polished landscape finish.'
  },
  {
    title: 'Planting',
    image: 'https://images.pexels.com/photos/33012937/pexels-photo-33012937.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Planting and installation services for flowers, shrubs, and ornamental plants to enhance curb appeal and support healthy landscapes.'
  },
  {
    title: 'Pruning',
    image: 'https://images.pexels.com/photos/36713694/pexels-photo-36713694.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Selective pruning for shrubs and small trees to improve health, shape growth, and keep your property neat.'
  }
]

const cities = [
  'Raleigh','Cary','Wake Forest','Rolesville',
  'Knightdale','Zebulon','Wendell','Nashville'
]

export default function Home() {
  return (
    <main className="bg-[#f5f3ef] text-[#112018] overflow-x-hidden">

      <StickyHeader />

      <HeroSection />

      <section id="services" className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10">

          <ScrollReveal>
            <p className="uppercase tracking-[0.5em] text-[#50685a] text-sm mb-6">
              OUR SERVICES
            </p>

            <h2 className="font-serif text-5xl sm:text-7xl md:text-[90px] leading-[0.9] mb-10 md:mb-20">
              Maintenance
              <br />
              <em>Mastery</em>
            </h2>

            <div className="w-16 h-[1px] bg-[#50685a] mb-12 md:mb-24"></div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 120}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate" className="bg-[#021c16] text-white py-16 md:py-32">
        <div className="max-w-3xl mx-auto px-5 md:px-10">

          <ScrollReveal>
            <p className="uppercase tracking-[0.5em] text-sm text-[#83998e] mb-6">
              FREE ESTIMATES
            </p>

            <h2 className="font-serif text-5xl sm:text-7xl md:text-[80px] leading-[0.9] mb-8 md:mb-10">
              Request Your
              <br />
              <em>Estimate</em>
            </h2>

            <div className="w-16 h-[1px] bg-[#83998e] mb-10 md:mb-16"></div>
          </ScrollReveal>

          <div className="flex flex-wrap items-center gap-3 md:gap-6 text-[#809086] mb-10 md:mb-16">
            <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center">1</div>
            <span>Service</span>
            <div className="w-6 md:w-10 h-[1px] bg-[#32423a]"></div>
            <div className="border border-[#32423a] rounded-full w-10 h-10 flex items-center justify-center">2</div>
            <span>Property</span>
            <div className="w-6 md:w-10 h-[1px] bg-[#32423a]"></div>
            <div className="border border-[#32423a] rounded-full w-10 h-10 flex items-center justify-center">3</div>
            <span>Contact</span>
          </div>

          <form action="https://formsubmit.co/teasleylawncareservices@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Estimate Request — Teasley Lawn Care" />
            <input type="hidden" name="_template" value="table" />

            <p className="text-2xl mb-10">Which services are you interested in?</p>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {services.map((service) => (
                <label key={service.title} className="border border-[#31453d] px-6 py-6 cursor-pointer hover:border-[#64786f] transition">
                  <input type="checkbox" name="services" value={service.title} className="mr-3" />
                  {service.title}
                </label>
              ))}
            </div>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-transparent border border-[#31453d] px-6 py-5 mb-5 text-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-[#31453d] px-6 py-5 mb-5 text-lg"
            />

            <textarea
              rows="6"
              name="notes"
              placeholder="Tell us about your project"
              className="w-full bg-transparent border border-[#31453d] px-6 py-5 mb-10 text-lg"
            />

            <button className="bg-[#2f4c40] px-10 py-5 rounded-full uppercase tracking-[0.2em]">
              Submit Estimate Request →
            </button>
          </form>
        </div>
      </section>

      <section id="areas" className="py-16 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-10">

          <ScrollReveal>
            <p className="uppercase tracking-[0.5em] text-[#50685a] text-sm mb-6">
              WHERE WE SERVE
            </p>

            <h2 className="font-serif text-5xl sm:text-7xl md:text-[90px] leading-[0.9] mb-8 md:mb-10">
              Our <em>Region</em>
            </h2>

            <div className="w-16 h-[1px] bg-[#50685a] mb-8 md:mb-12"></div>

            <p className="text-lg md:text-2xl text-[#4e6055] max-w-4xl leading-relaxed mb-10 md:mb-20">
            Click any city below to see the specific neighborhoods and communities we serve.
              Not sure if you're in our area? Give us a call — we're happy to confirm.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {cities.map((city, i) => (
              <ScrollReveal key={city} delay={i * 60}>
              <div className="border border-[#d7dcd5] bg-white px-8 py-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span>⌖</span>
                    <span className="font-serif text-2xl md:text-4xl">{city}</span>
                    <span className="uppercase tracking-[0.3em] text-sm text-[#50685a]">
                      NC
                    </span>
                  </div>

                  <span>⌄</span>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="border border-dashed border-[#d7dcd5] p-5 md:p-8 mt-10 md:mt-16 text-base md:text-lg text-[#4e6055]">
            <strong className="text-[#102018]">Don't see your neighborhood?</strong> We also serve many surrounding communities throughout Wake, Nash, and Johnston counties.
          </div>

        </div>
      </section>

      <footer className="bg-[#021c16] text-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

            <div>
              <p className="font-serif text-3xl md:text-4xl italic mb-2">TLC</p>
              <p className="uppercase tracking-[0.4em] text-xs text-[#83998e]">Teasley Lawn Care Services</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 md:gap-16 text-[#c4cfc9]">
              <div>
                <p className="uppercase tracking-[0.35em] text-xs text-[#83998e] mb-3">Phone</p>
                <a
                  href="tel:9197466062"
                  className="text-lg hover:text-white transition-colors duration-200"
                >
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
                <p className="uppercase tracking-[0.35em] text-xs text-[#83998e] mb-3">Service Area</p>
                <p className="text-lg">Raleigh, NC &amp; Surrounding</p>
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
