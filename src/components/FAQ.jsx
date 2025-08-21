import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How long does the repair or restoration take?",
      answer: "Depending on the service, it usually takes 3–7 working days. We'll confirm the exact time after assessment."
    },
    {
      question: "Can you restore all types of leather?",
      answer: "Yes, we work on most types of leather and similar materials, ensuring proper care for each."
    },
    {
      question: "Do you offer custom designs?",
      answer: "Absolutely! From unique color patterns to personalized artwork, we can make your item truly one of a kind."
    },
    {
      question: "How do I get a price estimate?",
      answer: "Simply send us photos of your item via WhatsApp or visit our store, and we'll provide a free quote."
    },
    {
      question: "Do you handle branded luxury items?",
      answer: "Yes, we specialize in premium brands and treat every piece with the highest level of care."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)'
    }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-[#D89F30]/8 to-[#734918]/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-[#D89F30]/12 to-[#734918]/6 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-[#D89F30]/6 to-[#734918]/3 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="inline-block mb-4 lg:mb-6">
            <span className="luxury-nav text-[#D89F30] text-base tracking-widest uppercase">
              Frequently Asked Questions
            </span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D89F30] to-transparent mt-2"></div>
          </div>
          
          <h2 className="luxury-title text-3xl lg:text-6xl mb-4 lg:mb-6 leading-tight">
            ANSWERS YOU NEED
          </h2>
          
          <p className="luxury-subtitle text-base lg:text-xl text-white max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
            Everything you need to know about our luxury restoration services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 lg:space-y-5">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group"
            >
              <div 
                className={`relative p-5 lg:p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                  openIndex === index 
                    ? 'bg-gradient-to-r from-[#D89F30]/15 to-[#734918]/8 border-[#D89F30]/30' 
                    : 'bg-gradient-to-r from-[#D89F30]/5 to-[#734918]/2 border-[#D89F30]/10 hover:bg-gradient-to-r hover:from-[#D89F30]/10 hover:to-[#734918]/5'
                }`}
                style={{
                  border: '1px solid',
                  backdropFilter: 'blur(10px)',
                  boxShadow: openIndex === index 
                    ? '0 20px 40px rgba(216, 159, 48, 0.2)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question */}
                <div className="flex items-center justify-between">
                  <h3 className="luxury-nav text-[#D89F30] text-base lg:text-xl font-semibold tracking-wide pr-4 lg:pr-6">
                    {faq.question}
                  </h3>
                  
                  {/* Toggle Icon */}
                  <div className={`flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                    openIndex === index 
                      ? 'bg-[#D89F30] rotate-180' 
                      : 'bg-[#D89F30]/20 group-hover:bg-[#D89F30]/30'
                  }`}>
                    <svg 
                      className="w-3 h-3 lg:w-4 lg:h-4 text-white transition-transform duration-500" 
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
                  openIndex === index ? 'max-h-96 opacity-100 mt-3 lg:mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-3 border-t border-[#D89F30]/20">
                    <p className="luxury-subtitle text-gray-200 leading-relaxed text-sm lg:text-lg font-light tracking-wide">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements - Hidden on mobile, shown on desktop */}
                <div className={`hidden lg:block absolute top-4 right-4 w-2 h-2 bg-[#D89F30] rounded-full transition-all duration-500 ${
                  openIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
                <div className={`hidden lg:block absolute bottom-4 left-4 w-1 h-1 bg-[#F4B942] rounded-full transition-all duration-500 ${
                  openIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-10 lg:mb-16">
          <div className="inline-block p-6 lg:p-8 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(216, 159, 48, 0.1) 0%, rgba(115, 73, 24, 0.05) 100%)',
            border: '2px solid rgba(216, 159, 48, 0.2)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <h3 className="luxury-title text-xl lg:text-3xl mb-3 lg:mb-4">
              STILL HAVE QUESTIONS?
            </h3>
            <p className="luxury-subtitle text-sm lg:text-lg text-white mb-4 lg:mb-6 max-w-2xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
              Our expert team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                CONTACT US
              </button>
              <button className="luxury-button border-2 border-[#D89F30] text-[#D89F30] px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-[#D89F30] hover:text-white transition-all duration-300 hover:scale-105">
                WHATSAPP US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-16 w-2 h-2 lg:w-3 lg:h-3 bg-[#D89F30] rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-1 h-1 lg:w-2 lg:h-2 bg-[#F4B942] rounded-full animate-ping"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 lg:w-1 lg:h-1 bg-[#734918] rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/2 right-1/4 w-1 h-1 lg:w-2 lg:h-2 bg-[#D89F30] rounded-full animate-pulse"></div>
    </section>
  )
}