import React from 'react'

export default function WorkProcess() {
  const processSteps = [
    {
      number: "01",
      title: "CONSULTATION",
      description: "Share details about your item and what you'd like restored or customized.",
      icon: "💬",
      color: "from-[#D89F30] to-[#F4B942]"
    },
    {
      number: "02", 
      title: "ASSESSMENT",
      description: "Our experts evaluate the material, damage, and requirements.",
      icon: "🔍",
      color: "from-[#F4B942] to-[#D89F30]"
    },
    {
      number: "03",
      title: "QUOTATION", 
      description: "We provide a clear price and timeline before we begin.",
      icon: "📋",
      color: "from-[#D89F30] to-[#734918]"
    },
    {
      number: "04",
      title: "RESTORATION / CUSTOMIZATION",
      description: "Our craftsmen carefully repair, restore, or customize your piece using premium materials.",
      icon: "⚒️",
      color: "from-[#734918] to-[#D89F30]"
    },
    {
      number: "05",
      title: "FINAL QUALITY CHECK",
      description: "Every detail is inspected to meet our luxury standards.",
      icon: "✅",
      color: "from-[#D89F30] to-[#F4B942]"
    },
    {
      number: "06",
      title: "DELIVERY / PICKUP",
      description: "Your treasured item is returned looking stunning and ready to be enjoyed again.",
      icon: "🎁",
      color: "from-[#F4B942] to-[#734918]"
    }
  ]

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #2d2d2d 100%)'
    }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-br from-[#D89F30]/10 to-[#734918]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-tl from-[#D89F30]/15 to-[#734918]/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#D89F30]/5 to-[#734918]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="inline-block mb-4 lg:mb-6">
            <span className="luxury-nav text-[#D89F30] text-sm tracking-widest uppercase">
              Our Work Process
            </span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D89F30] to-transparent mt-2"></div>
          </div>
          
          <h2 className="luxury-title text-3xl lg:text-6xl mb-4 lg:mb-6 leading-tight">
            SIMPLE & STRESS-FREE
          </h2>
          
          <p className="luxury-subtitle text-base lg:text-xl text-white max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
            We make luxury restoration simple and stress-free. Every step is designed to ensure your complete satisfaction.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile, shown on desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D89F30] via-[#F4B942] to-[#734918] hidden lg:block transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-10 lg:space-y-24">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0"
              >
                {/* First Element - Content or Icon based on step number */}
                {index % 2 === 0 ? (
                  // Even steps (0, 2, 4): Content on left, Icon on right
                  <>
                    {/* Left Side Content */}
                    <div className="flex-1 text-center lg:text-right lg:pr-8 relative z-10">
                      <div className="group">
                        {/* Step Number */}
                        <div className="inline-block mb-4 lg:mb-6">
                          <span className="luxury-title text-4xl lg:text-7xl leading-none" style={{
                            background: `linear-gradient(135deg, ${step.color})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 4px 8px rgba(216, 159, 48, 0.3))'
                          }}>
                            {step.number}
                          </span>
                        </div>
                        
                        {/* Step Title */}
                        <h3 className="luxury-nav text-[#D89F30] text-lg lg:text-3xl font-semibold mb-3 lg:mb-6 tracking-wide">
                          {step.title}
                        </h3>
                        
                        {/* Step Description */}
                        <p className="luxury-subtitle text-gray-200 leading-relaxed text-sm lg:text-lg max-w-2xl mx-auto lg:mx-0 lg:ml-auto font-light tracking-wide">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Side Icon */}
                    <div className="flex-1 flex justify-center lg:justify-start lg:pl-8 relative z-10">
                      {/* Icon Container */}
                      <div className="relative w-20 h-20 lg:w-32 lg:h-32 rounded-full flex items-center justify-center text-2xl lg:text-4xl shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: `linear-gradient(135deg, ${step.color})`,
                          border: '4px solid rgba(216, 159, 48, 0.3)',
                          boxShadow: '0 20px 40px rgba(216, 159, 48, 0.2)'
                        }}
                      >
                        {step.icon}
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D89F30]/30 to-[#734918]/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Inner Glow */}
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      
                      {/* Decorative Elements - Hidden on mobile, shown on desktop */}
                      <div className="hidden lg:block absolute -top-6 -right-6 w-12 h-12 border-t-3 border-r-3 border-[#D89F30] rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform rotate-12"></div>
                      <div className="hidden lg:block absolute -bottom-6 -left-6 w-12 h-12 border-b-3 border-l-3 border-[#D89F30] rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform -rotate-12"></div>
                      
                      {/* Floating Dots - Hidden on mobile, shown on desktop */}
                      <div className="hidden lg:block absolute -top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#D89F30] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                      <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#F4B942] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-ping"></div>
                    </div>
                  </>
                ) : (
                  // Odd steps (1, 3, 5): Icon on left, Content on right
                  <>
                    {/* Left Side Icon */}
                    <div className="flex-1 flex justify-center lg:justify-end lg:pr-8 relative z-10">
                      {/* Icon Container */}
                      <div className="relative w-20 h-20 lg:w-32 lg:h-32 rounded-full flex items-center justify-center text-2xl lg:text-4xl shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: `linear-gradient(135deg, ${step.color})`,
                          border: '4px solid rgba(216, 159, 48, 0.3)',
                          boxShadow: '0 20px 40px rgba(216, 159, 48, 0.2)'
                        }}
                      >
                        {step.icon}
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D89F30]/30 to-[#734918]/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Inner Glow */}
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      
                      {/* Decorative Elements - Hidden on mobile, shown on desktop */}
                      <div className="hidden lg:block absolute -top-6 -right-6 w-12 h-12 border-t-3 border-r-3 border-[#D89F30] rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform rotate-12"></div>
                      <div className="hidden lg:block absolute -bottom-6 -left-6 w-12 h-12 border-b-3 border-l-3 border-[#D89F30] rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform -rotate-12"></div>
                      
                      {/* Floating Dots - Hidden on mobile, shown on desktop */}
                      <div className="hidden lg:block absolute -top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#D89F30] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                      <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#F4B942] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-ping"></div>
                    </div>

                    {/* Right Side Content */}
                    <div className="flex-1 text-center lg:text-left lg:pl-8 relative z-10">
                      <div className="group">
                        {/* Step Number */}
                        <div className="inline-block mb-4 lg:mb-6">
                          <span className="luxury-title text-4xl lg:text-7xl leading-none" style={{
                            background: `linear-gradient(135deg, ${step.color})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 4px 8px rgba(216, 159, 48, 0.3))'
                          }}>
                            {step.number}
                          </span>
                        </div>
                        
                        {/* Step Title */}
                        <h3 className="luxury-nav text-[#D89F30] text-lg lg:text-3xl font-semibold mb-3 lg:mb-6 tracking-wide">
                          {step.title}
                        </h3>
                        
                        {/* Step Description */}
                        <p className="luxury-subtitle text-gray-200 leading-relaxed text-sm lg:text-lg max-w-2xl mx-auto lg:mx-0 font-light tracking-wide">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-12 lg:mt-20">
          <div className="inline-block p-6 lg:p-10 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(216, 159, 48, 0.1) 0%, rgba(115, 73, 24, 0.05) 100%)',
            border: '2px solid rgba(216, 159, 48, 0.2)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <h3 className="luxury-title text-xl lg:text-4xl mb-4 lg:mb-6">
              READY TO START YOUR JOURNEY?
            </h3>
            <p className="luxury-subtitle text-sm lg:text-lg text-white mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
              Begin with a consultation and let us transform your cherished items into timeless treasures.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 justify-center">
              <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 lg:px-10 py-2 lg:py-4 rounded-full text-sm lg:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                BOOK CONSULTATION
              </button>
              <button className="luxury-button border-2 border-[#D89F30] text-[#D89F30] px-6 lg:px-10 py-2 lg:py-4 rounded-full text-sm lg:text-lg font-semibold hover:bg-[#D89F30] hover:text-white transition-all duration-300 hover:scale-105">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 lg:w-4 lg:h-4 bg-[#D89F30] rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 lg:w-3 lg:h-3 bg-[#F4B942] rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 lg:w-2 lg:h-2 bg-[#734918] rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 lg:w-3 lg:h-3 bg-[#D89F30] rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 lg:w-1 lg:h-1 bg-[#F4B942] rounded-full animate-ping"></div>
      <div className="absolute top-1/4 right-1/3 w-1 h-1 lg:w-2 lg:h-2 bg-[#734918] rounded-full animate-bounce"></div>
    </section>
  )
}
