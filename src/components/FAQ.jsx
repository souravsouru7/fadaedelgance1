import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FAQ() {
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState(null)

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

  // Navigation function
  const handleContactUs = () => {
    navigate('/contact')
    window.scrollTo(0, 0)
  }

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
    <section id="faq" className="relative py-10 lg:py-14 overflow-hidden bg-white text-black" style={pageFont}>
      {/* Subtle background like Services */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 50% at 20% -10%, rgba(0,0,0,0.05), transparent 60%), radial-gradient(50% 40% at 100% 120%, rgba(0,0,0,0.05), transparent 60%)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-block mb-3 lg:mb-4">
            <span className="text-neutral-700 text-xs tracking-widest uppercase">Frequently Asked Questions</span>
            <div className="w-full h-px bg-neutral-200 mt-2"></div>
          </div>
          
          <h2 className="text-2xl lg:text-4xl mb-3 lg:mb-4 leading-tight" style={displayFont}>Answers You Need</h2>
          
          <p className="text-sm lg:text-base text-neutral-700 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
            Everything you need to know about our luxury restoration services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 lg:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div 
                className={`relative p-4 lg:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                  openIndex === index 
                    ? 'border-black/10 shadow-[0_14px_28px_rgba(0,0,0,0.10)]' 
                    : 'border-black/10 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]'
                } bg-white`}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question */}
                <div className="flex items-center justify-between">
                  <h3 className="text-sm lg:text-base font-semibold tracking-wide pr-3 lg:pr-5">
                    {faq.question}
                  </h3>
                  
                  {/* Toggle Icon */}
                  <div className={`flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-black text-white rotate-180' 
                      : 'bg-black/10 text-black group-hover:bg-black/20'
                  }`}>
                    <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-80 opacity-100 mt-2 lg:mt-3' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-2 border-t border-neutral-200">
                    <p className="leading-relaxed text-xs lg:text-sm font-light tracking-wide text-neutral-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-8 lg:mb-12">
          <div className="inline-block p-5 lg:p-6 rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <h3 className="text-lg lg:text-2xl mb-3" style={displayFont}>Still have questions?</h3>
            <p className="text-xs lg:text-sm text-neutral-700 mb-4 max-w-2xl mx-auto leading-relaxed font-light tracking-wide px-4 lg:px-0">
              Our expert team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button onClick={handleContactUs} className="px-5 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-semibold text-white bg-black hover:bg-black/90 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative floating elements removed for clean neutral style */}
    </section>
  )
}