import React, { useEffect } from 'react'

export default function WhyChooseUs() {
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
  const features = [
    {
      icon: "✨",
      title: "EXPERT CRAFTSMANSHIP",
      description: "Decades of experience in luxury restoration with master artisans who understand the finest details of premium materials."
    },
    {
      icon: "💎",
      title: "PREMIUM MATERIALS",
      description: "Only the highest quality leathers, fabrics, and hardware sourced from world-renowned suppliers and manufacturers."
    },
    {
      icon: "🎨",
      title: "CUSTOM DESIGN",
      description: "Personalized restoration services that transform your cherished items into unique pieces that reflect your style."
    },
    {
      icon: "⚡",
      title: "FAST TURNAROUND",
      description: "Efficient service without compromising quality. Your luxury items restored to perfection in record time."
    },
    {
      icon: "🛡️",
      title: "LIFETIME WARRANTY",
      description: "Complete confidence in our work with comprehensive warranty coverage on all restoration services."
    },
    {
      icon: "🌟",
      title: "EXCLUSIVE SERVICE",
      description: "VIP treatment with dedicated consultation, progress updates, and white-glove delivery service."
    }
  ]

  return (
    <section className="relative py-10 lg:py-12 bg-white text-black" style={pageFont}>
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 50% at 20% -10%, rgba(0,0,0,0.05), transparent 60%), radial-gradient(50% 40% at 100% 120%, rgba(0,0,0,0.05), transparent 60%)'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="inline-block mb-3 lg:mb-4">
            <span className="text-neutral-700 text-xs lg:text-sm tracking-widest uppercase">
              Why Choose
            </span>
            <div className="w-full h-px bg-neutral-200 mt-2"></div>
          </div>

          <h2 className="text-2xl lg:text-4xl mb-3 lg:mb-4 leading-tight" style={displayFont}>
            <img 
              src="/fetext.png" 
              alt="FADED ELEGANCE" 
              className="h-10 lg:h-16 mx-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </h2>

          <p className="text-sm lg:text-base text-neutral-700 max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
            Where every restoration tells a story of luxury, craftsmanship, and timeless elegance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-5 lg:p-6 rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-3 lg:mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black text-white flex items-center justify-center text-lg lg:text-xl shadow-sm">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-sm lg:text-base font-semibold mb-2 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed text-xs lg:text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-block p-5 lg:p-6 rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <h3 className="text-lg lg:text-2xl mb-3" style={displayFont}>
              Ready to restore your luxury?
            </h3>
            <p className="text-xs lg:text-sm text-neutral-700 mb-4 max-w-2xl mx-auto px-4 lg:px-0">
              Experience the difference that true craftsmanship makes. Your luxury items deserve nothing less than perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button className="px-5 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-semibold text-white bg-black hover:bg-black/90 transition-colors">
                Start Your Project
              </button>
              <button className="px-5 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-semibold border border-black/20 hover:border-black">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
