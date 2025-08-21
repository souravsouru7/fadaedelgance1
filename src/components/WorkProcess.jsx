import React from 'react'

export default function WorkProcess() {
  const processSteps = [
    { number: '01', title: 'CONSULTATION', description: "Share details about your item and what you'd like restored or customized.", icon: '💬', color: 'from-[#D89F30] to-[#F4B942]' },
    { number: '02', title: 'ASSESSMENT', description: 'Our experts evaluate the material, damage, and requirements.', icon: '🔍', color: 'from-[#F4B942] to-[#D89F30]' },
    { number: '03', title: 'QUOTATION', description: 'We provide a clear price and timeline before we begin.', icon: '📋', color: 'from-[#D89F30] to-[#734918]' },
    { number: '04', title: 'RESTORATION / CUSTOMIZATION', description: 'Our craftsmen carefully repair, restore, or customize your piece using premium materials.', icon: '⚒️', color: 'from-[#734918] to-[#D89F30]' },
    { number: '05', title: 'FINAL QUALITY CHECK', description: 'Every detail is inspected to meet our luxury standards.', icon: '✅', color: 'from-[#D89F30] to-[#F4B942]' },
    { number: '06', title: 'DELIVERY / PICKUP', description: 'Your treasured item is returned looking stunning and ready to be enjoyed again.', icon: '🎁', color: 'from-[#F4B942] to-[#734918]' }
  ]

  return (
    <section className="relative py-10 lg:py-14 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #2d2d2d 100%)'
    }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-[#D89F30]/10 to-[#734918]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-gradient-to-tl from-[#D89F30]/15 to-[#734918]/8 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-[#D89F30]/5 to-[#734918]/3 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-block mb-3 lg:mb-4">
            <span className="luxury-nav text-[#D89F30] text-xs tracking-widest uppercase">Our Work Process</span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D89F30] to-transparent mt-2"></div>
          </div>
          <h2 className="luxury-title text-2xl lg:text-4xl mb-3 lg:mb-4 leading-tight">SIMPLE & STRESS-FREE</h2>
          <p className="luxury-subtitle text-sm lg:text-base text-white max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
            We make luxury restoration simple and stress-free. Every step is designed to ensure your complete satisfaction.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile, shown on desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D89F30] via-[#F4B942] to-[#734918] hidden lg:block transform -translate-x-1/2 z-0"></div>
          <div className="space-y-8 lg:space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
                {index % 2 === 0 ? (
                  <>
                    {/* Left Side Content */}
                    <div className="flex-1 text-center lg:text-right lg:pr-6 relative z-10">
                      <div className="group">
                        <div className="inline-block mb-3 lg:mb-4">
                          <span className="luxury-title text-3xl lg:text-5xl leading-none" style={{
                            background: `linear-gradient(135deg, ${step.color})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 3px 6px rgba(216, 159, 48, 0.3))'
                          }}>
                            {step.number}
                          </span>
                        </div>
                        <h3 className="luxury-nav text-[#D89F30] text-base lg:text-2xl font-semibold mb-2 lg:mb-4 tracking-wide">{step.title}</h3>
                        <p className="luxury-subtitle text-gray-200 leading-relaxed text-xs lg:text-sm max-w-2xl mx-auto lg:mx-0 lg:ml-auto font-light tracking-wide">{step.description}</p>
                      </div>
                    </div>

                    {/* Right Side Icon */}
                    <div className="flex-1 flex justify-center lg:justify-start lg:pl-6 relative z-10">
                      <div className="relative w-16 h-16 lg:w-24 lg:h-24 rounded-full flex items-center justify-center text-xl lg:text-3xl shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: `linear-gradient(135deg, ${step.color})`,
                          border: '3px solid rgba(216, 159, 48, 0.3)',
                          boxShadow: '0 16px 28px rgba(216, 159, 48, 0.2)'
                        }}
                      >
                        {step.icon}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D89F30]/30 to-[#734918]/20 blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left Side Icon */}
                    <div className="flex-1 flex justify-center lg:justify-end lg:pr-6 relative z-10">
                      <div className="relative w-16 h-16 lg:w-24 lg:h-24 rounded-full flex items-center justify-center text-xl lg:text-3xl shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: `linear-gradient(135deg, ${step.color})`,
                          border: '3px solid rgba(216, 159, 48, 0.3)',
                          boxShadow: '0 16px 28px rgba(216, 159, 48, 0.2)'
                        }}
                      >
                        {step.icon}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D89F30]/30 to-[#734918]/20 blur-lg scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="flex-1 text-center lg:text-left lg:pl-6 relative z-10">
                      <div className="group">
                        <div className="inline-block mb-3 lg:mb-4">
                          <span className="luxury-title text-3xl lg:text-5xl leading-none" style={{
                            background: `linear-gradient(135deg, ${step.color})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 3px 6px rgba(216, 159, 48, 0.3))'
                          }}>
                            {step.number}
                          </span>
                        </div>
                        <h3 className="luxury-nav text-[#D89F30] text-base lg:text-2xl font-semibold mb-2 lg:mb-4 tracking-wide">{step.title}</h3>
                        <p className="luxury-subtitle text-gray-200 leading-relaxed text-xs lg:text-sm max-w-2xl mx-auto lg:mx-0 font-light tracking-wide">{step.description}</p>
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
          <div className="inline-block p-5 lg:p-8 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(216, 159, 48, 0.1) 0%, rgba(115, 73, 24, 0.05) 100%)',
            border: '2px solid rgba(216, 159, 48, 0.2)',
            backdropFilter: 'blur(16px)'
          }}>
            <h3 className="luxury-title text-lg lg:text-2xl mb-3 lg:mb-4">READY TO START YOUR JOURNEY?</h3>
            <p className="luxury-subtitle text-xs lg:text-sm text-white mb-4 lg:mb-6 max-w-2xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
              Begin with a consultation and let us transform your cherished items into timeless treasures.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-5 lg:px-7 py-2 rounded-full text-xs lg:text-sm font-semibold hover:scale-105 transition-all duration-300">
                BOOK CONSULTATION
              </button>
              <button className="luxury-button border-2 border-[#D89F30] text-[#D89F30] px-5 lg:px-7 py-2 rounded-full text-xs lg:text-sm font-semibold hover:bg-[#D89F30] hover:text-white transition-all duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-1.5 h-1.5 lg:w-3 lg:h-3 bg-[#D89F30] rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 lg:w-2 lg:h-2 bg-[#F4B942] rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#734918] rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#D89F30] rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 lg:w-1 lg:h-1 bg-[#F4B942] rounded-full animate-ping"></div>
      <div className="absolute top-1/4 right-1/3 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#734918] rounded-full animate-bounce"></div>
    </section>
  )
}
