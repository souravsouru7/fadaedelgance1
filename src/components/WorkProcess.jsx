import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function WorkProcess() {
  const navigate = useNavigate()
  
  // Page-scoped premium fonts (match Services page)
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600&display=swap'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  const pageFont = { fontFamily: 'Manrope, system-ui, Arial, sans-serif' }
  const displayFont = { fontFamily: 'Cormorant Garamond, serif' }
  
  // Navigation functions
  const handleBookConsultation = () => {
    navigate('/contact')
    window.scrollTo(0, 0)
  }
  
  const handleLearnMore = () => {
    navigate('/about')
    window.scrollTo(0, 0)
  }
  
  const processSteps = [
    { number: '01', title: 'CONSULTATION', description: 'Tell us about your item and goal.', icon: '💬', color: 'from-[#D89F30] to-[#F4B942]' },
    { number: '02', title: 'ASSESSMENT', description: 'We review material and condition.', icon: '🔍', color: 'from-[#F4B942] to-[#D89F30]' },
    { number: '03', title: 'QUOTATION', description: 'Clear price and timeline upfront.', icon: '📋', color: 'from-[#D89F30] to-[#734918]' },
    { number: '04', title: 'RESTORATION / CUSTOMIZATION', description: 'Crafted with premium techniques.', icon: '⚒️', color: 'from-[#734918] to-[#D89F30]' },
    { number: '05', title: 'FINAL QUALITY CHECK', description: 'Detailed inspection for perfection.', icon: '✅', color: 'from-[#D89F30] to-[#F4B942]' },
    { number: '06', title: 'DELIVERY / PICKUP', description: 'Return looking fresh and refined.', icon: '🎁', color: 'from-[#F4B942] to-[#734918]' }
  ]

  return (
    <section id="work" className="relative py-10 lg:py-14 overflow-hidden bg-white text-black" style={pageFont}>
      {/* Subtle background like Services */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 50% at 20% -10%, rgba(0,0,0,0.05), transparent 60%), radial-gradient(50% 40% at 100% 120%, rgba(0,0,0,0.05), transparent 60%)'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-block mb-3 lg:mb-4">
            <span className="text-neutral-700 text-xs tracking-widest uppercase">Our Work Process</span>
            <div className="w-full h-px bg-neutral-200 mt-2"></div>
          </div>
          <h2 className="text-2xl lg:text-4xl mb-3 lg:mb-4 leading-tight" style={displayFont}>Simple & Stress-Free</h2>
          <p className="text-sm lg:text-base text-neutral-700 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
            We make luxury restoration simple and stress-free. Every step is designed to ensure your complete satisfaction.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - neutral */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-black/10 hidden lg:block transform -translate-x-1/2 z-0"></div>
          <div className="space-y-8 lg:space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
                {index % 2 === 0 ? (
                  <>
                    {/* Left Side Content */}
                    <div className="flex-1 text-center lg:text-right lg:pr-6 relative z-10">
                      <div className="group">
                        <div className="inline-block mb-3 lg:mb-4">
                          <span className="text-3xl lg:text-5xl leading-none" style={displayFont}>
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4 tracking-wide">{step.title}</h3>
                        <p className="text-neutral-700 leading-relaxed text-xs lg:text-sm max-w-md mx-auto lg:mx-0 lg:ml-auto font-light tracking-wide">{step.description}</p>
                      </div>
                    </div>

                    {/* Right Side Icon */}
                    <div className="flex-1 flex justify-center lg:justify-start lg:pl-6 relative z-10">
                      <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-base lg:text-xl bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                        {step.icon}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left Side Icon */}
                    <div className="flex-1 flex justify-center lg:justify-end lg:pr-6 relative z-10">
                      <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-base lg:text-xl bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                        {step.icon}
                      </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="flex-1 text-center lg:text-left lg:pl-6 relative z-10">
                      <div className="group">
                        <div className="inline-block mb-3 lg:mb-4">
                          <span className="text-3xl lg:text-5xl leading-none" style={displayFont}>
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-base lg:text-2xl font-semibold mb-2 lg:mb-4 tracking-wide">{step.title}</h3>
                        <p className="text-neutral-700 leading-relaxed text-xs lg:text-sm max-w-md mx-auto lg:mx-0 font-light tracking-wide">{step.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-10 lg:mt-14">
          <div className="inline-block p-5 lg:p-8 rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <h3 className="text-lg lg:text-2xl mb-3 lg:mb-4" style={displayFont}>Ready to start your journey?</h3>
            <p className="text-xs lg:text-sm text-neutral-700 mb-4 lg:mb-6 max-w-2xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
              Begin with a consultation and let us transform your cherished items into timeless treasures.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button onClick={handleBookConsultation} className="px-5 lg:px-7 py-2 rounded-full text-xs lg:text-sm font-semibold text-white bg-black hover:bg-black/90 transition-colors">
                Book Consultation
              </button>
              <button onClick={handleLearnMore} className="px-5 lg:px-7 py-2 rounded-full text-xs lg:text-sm font-semibold border border-black/20 hover:border-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative floating elements removed for clean neutral style */}
    </section>
  )
}
