'use client'

import { useState, useEffect } from 'react'
import ResultsCard from '../ResultsCard'
import ReviewForm from '../ReviewForm'
import ScrollReveal from '../ScrollReveal'

export default function Results() {
  const [projects, setProjects] = useState([])

  // Load projects from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('teasleyProjects')
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }, [])

  // Sample before/after projects (fallback)
  const defaultProjects = [
    {
      id: 1,
      title: 'Overgrown Yard Transformation',
      service: 'Weekly Maintenance',
      description: 'This residential property was transformed from an overgrown landscape to a lush, manicured lawn. Regular weekly maintenance restored the lawn health and kept edges crisp and clean.',
      beforeImage: 'https://images.pexels.com/photos/1092664/pexels-photo-1092664.jpeg?auto=compress&cs=tinysrgb&w=1600',
      afterImage: 'https://images.pexels.com/photos/2440111/pexels-photo-2440111.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      title: 'Garden Bed Restoration',
      service: 'Mulching & Planting',
      description: 'Fresh mulch installation and seasonal plantings brought new life to this front yard. The vibrant colors and healthy plantings created immediate curb appeal.',
      beforeImage: 'https://images.pexels.com/photos/33013000/pexels-photo-33013000.jpeg?auto=compress&cs=tinysrgb&w=1600',
      afterImage: 'https://images.pexels.com/photos/2402517/pexels-photo-2402517.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      title: 'Shrub Pruning & Cleanup',
      service: 'Pruning',
      description: 'Selective pruning of overgrown shrubs enhanced the landscape structure and improved overall property aesthetics. A complete cleanup left the yard looking pristine.',
      beforeImage: 'https://images.pexels.com/photos/2516216/pexels-photo-2516216.jpeg?auto=compress&cs=tinysrgb&w=1600',
      afterImage: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      title: 'Landscape Design Install',
      service: 'Planting & Design',
      description: 'A complete landscape redesign with new plantings and mulched beds created a cohesive, modern look. The property now has year-round visual interest.',
      beforeImage: 'https://images.pexels.com/photos/2502517/pexels-photo-2502517.jpeg?auto=compress&cs=tinysrgb&w=1600',
      afterImage: 'https://images.pexels.com/photos/3714896/pexels-photo-3714896.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 5,
      title: 'Bi-Weekly Maintenance Results',
      service: 'Bi-Weekly Maintenance',
      description: 'After six months of consistent bi-weekly care, this lawn went from patchy and thin to thick and vibrant. Proper feeding and regular mowing transformed the property.',
      beforeImage: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1600',
      afterImage: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 6,
      title: 'Complete Yard Refresh',
      service: 'Full Service',
      description: 'Combining mulching, pruning, and planting services resulted in a completely rejuvenated outdoor space. The property now showcases professional landscaping.',
      beforeImage: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=1600',
      afterImage: 'https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ]

  // Use uploaded projects if available, otherwise use defaults
  const displayProjects = projects.length > 0 ? projects : defaultProjects

  return (
    <main className="bg-[#f5f3ef] text-[#112018] overflow-x-hidden">
      {/* Header Section */}
      <section className="bg-[#021c16] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <p className="uppercase tracking-[0.5em] text-sm text-[#83998e] mb-6">
              OUR PORTFOLIO
            </p>
            
            <h1 className="font-serif text-5xl sm:text-7xl md:text-[90px] leading-[0.9] mb-8">
              Before &amp;
              <br />
              <em>After</em>
            </h1>

            <div className="w-16 h-[1px] bg-[#83998e] mb-8"></div>

            <p className="text-lg md:text-2xl text-[#c4cfc9] max-w-3xl leading-relaxed">
              See the transformative results we've achieved for homeowners across Raleigh and the surrounding areas. Each project showcases our commitment to excellence and attention to detail.
            </p>

            {/* Admin Link */}
            <div className="mt-8">
              <a
                href="/admin/projects"
                className="text-[#83998e] hover:text-white transition-colors text-sm uppercase tracking-[0.2em]"
              >
                ↳ Manage Projects
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <div className="mb-12 md:mb-20">
              <p className="uppercase tracking-[0.5em] text-[#50685a] text-sm mb-6">
                TRANSFORMATIONS
              </p>
              
              <h2 className="font-serif text-4xl sm:text-6xl md:text-[80px] leading-[0.9] mb-8">
                Project
                <br />
                <em>Gallery</em>
              </h2>

              <div className="w-16 h-[1px] bg-[#50685a]"></div>
            </div>
          </ScrollReveal>

          {displayProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#4e6055] text-lg">No projects yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {displayProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 80}>
                  <ResultsCard result={project} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[#f0ede8] py-16 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <ScrollReveal>
            <div className="mb-12 md:mb-20">
              <p className="uppercase tracking-[0.5em] text-[#50685a] text-sm mb-6">
                SHARE YOUR EXPERIENCE
              </p>
              
              <h2 className="font-serif text-4xl sm:text-6xl md:text-[80px] leading-[0.9] mb-8">
                Leave a
                <br />
                <em>Review</em>
              </h2>

              <div className="w-16 h-[1px] bg-[#50685a] mb-8"></div>

              <p className="text-lg md:text-xl text-[#4e6055] leading-relaxed">
                Have you experienced the Teasley Lawn Care difference? Share your feedback and help other homeowners discover our services.
              </p>
            </div>
          </ScrollReveal>

          <ReviewForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#021c16] text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-[70px] leading-[0.9] mb-8">
              Ready for Your
              <br />
              <em>Transformation?</em>
            </h2>

            <p className="text-lg md:text-xl text-[#c4cfc9] mb-10 leading-relaxed">
              Let's discuss how we can bring luxury landscaping to your property.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/#estimate"
                className="bg-[#2f4c40] hover:bg-[#3a6054] px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm font-medium transition-colors duration-200 inline-block"
              >
                Get Free Estimate
              </a>
              
              <a
                href="tel:9197466062"
                className="border-2 border-[#83998e] text-[#83998e] hover:bg-[#83998e] hover:text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm font-medium transition-colors duration-200 inline-block"
              >
                Call 919-746-6062
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#021c16] text-white py-14 md:py-20 border-t border-[#1a3a2e]">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
            <div>
              <p className="font-serif text-3xl md:text-4xl italic mb-2">TLC</p>
              <p className="uppercase tracking-[0.4em] text-xs text-[#83998e]">Teasley Lawn Care Services</p>
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
                <a href="mailto:teasleylawncareservices@gmail.com" className="text-lg hover:text-white transition-colors duration-200 break-all">
                  teasleylawncareservices@gmail.com
                </a>
              </div>

              <div>
                <p className="uppercase tracking-[0.35em] text-xs text-[#83998e] mb-3">Service Area</p>
                <p className="text-lg">Raleigh, NC &amp; Surrounding</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1a3a2e] pt-8 text-[#4e6055] text-sm flex flex-col sm:flex-row sm:justify-between gap-2">
            <p>&copy; {new Date().getFullYear()} Teasley Lawn Care Services. All rights reserved.</p>
            <p>Raleigh · Cary · Wake Forest &amp; beyond</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
