import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { question: 'How long does the repair or restoration take?', answer: "Depending on the service, it usually takes 3–7 working days. We'll confirm the exact time after assessment." },
    { question: 'Can you restore all types of leather?', answer: 'Yes, we work on most types of leather and similar materials, ensuring proper care for each.' },
    { question: 'Do you offer custom designs?', answer: 'Absolutely! From unique color patterns to personalized artwork, we can make your item truly one of a kind.' },
    { question: 'How do I get a price estimate?', answer: "Simply send us photos of your item via WhatsApp or visit our store, and we'll provide a free quote." },
    { question: 'Do you handle branded luxury items?', answer: 'Yes, we specialize in premium brands and treat every piece with the highest level of care.' }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-10 lg:py-14 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)'
    }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-[#D89F30]/8 to-[#734918]/4 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-gradient-to-tl from-[#D89F30]/12 to-[#734918]/6 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-[#D89F30]/6 to-[#734918]/3 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-block mb-3 lg:mb-4">
            <span className="luxury-nav text-[#D89F30] text-xs tracking-widest uppercase">Frequently Asked Questions</span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D89F30] to-transparent mt-2"></div>
          </div>
          
          <h2 className="luxury-title text-2xl lg:text-4xl mb-3 lg:mb-4 leading-tight">ANSWERS YOU NEED</h2>
          
          <p className="luxury-subtitle text-sm lg:text-base text-white max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
            Everything you need to know about our luxury restoration services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 lg:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div 
                className={`relative p-4 lg:p-5 rounded-2xl transition-all duration-500 cursor-pointer ${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-[#D89F30]/15 to-[#734918]/8 border-[#D89F30]/30' 
                    : 'bg-gradient-to-r from-[#D89F30]/5 to-[#734918]/2 border-[#D89F30]/10 hover:bg-gradient-to-r hover:from-[#D89F30]/10 hover:to-[#734918]/5'
                }`}
                style={{
                  border: '1px solid',
                  backdropFilter: 'blur(8px)',
                  boxShadow: openIndex === index 
                    ? '0 14px 28px rgba(216, 159, 48, 0.18)' 
                    : '0 8px 18px rgba(0, 0, 0, 0.08)'
                }}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question */}
                <div className="flex items-center justify-between">
                  <h3 className="luxury-nav text-[#D89F30] text-sm lg:text-base font-semibold tracking-wide pr-3 lg:pr-5">
                    {faq.question}
                  </h3>
                  
                  {/* Toggle Icon */}
                  <div className={`flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIndex === index 
                      ? 'bg-[#D89F30] rotate-180' 
                      : 'bg-[#D89F30]/20 group-hover:bg-[#D89F30]/30'
                  }`}>
                    <svg 
                      className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 text-white transition-transform duration-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-80 opacity-100 mt-2 lg:mt-3' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-2 border-t border-[#D89F30]/20">
                    <p className="luxury-subtitle !text-white leading-relaxed text-xs lg:text-sm font-light tracking-wide">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements - Hidden on mobile, shown on desktop */}
                <div className={`hidden lg:block absolute top-3 right-3 w-1.5 h-1.5 bg-[#D89F30] rounded-full transition-all duration-500 ${
                  openIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
                <div className={`hidden lg:block absolute bottom-3 left-3 w-1 h-1 bg-[#F4B942] rounded-full transition-all duration-500 ${
                  openIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-8 lg:mb-12">
          <div className="inline-block p-5 lg:p-6 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(216, 159, 48, 0.1) 0%, rgba(115, 73, 24, 0.05) 100%)',
            border: '2px solid rgba(216, 159, 48, 0.2)',
            backdropFilter: 'blur(16px)'
          }}>
            <h3 className="luxury-title text-lg lg:text-2xl mb-3">STILL HAVE QUESTIONS?</h3>
            <p className="luxury-subtitle text-xs lg:text-sm text-white mb-4 max-w-2xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
              Our expert team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-5 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-semibold hover:scale-105 transition-all duration-300">
                CONTACT US
              </button>
              <button className="luxury-button border-2 border-[#D89F30] text-[#D89F30] px-5 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-semibold hover:bg-[#D89F30] hover:text-white transition-all duration-300">
                WHATSAPP US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-28 left-14 w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 bg-[#D89F30] rounded-full animate-pulse"></div>
      <div className="absolute bottom-28 right-14 w-1 h-1 lg:w-2 lg:h-2 bg-[#F4B942] rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#734918] rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/2 right-1/4 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-[#D89F30] rounded-full animate-pulse"></div>
    </section>
  )
}