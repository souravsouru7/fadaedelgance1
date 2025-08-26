import React, { useState, useEffect } from 'react'

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button when user scrolls down 300px
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed right-4 bottom-4 lg:right-6 lg:bottom-6 z-[50] flex flex-col items-end gap-3 select-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group relative inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none"
          style={{
            background: 'linear-gradient(135deg, #D89F30, #734918)',
            boxShadow: '0 10px 25px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
            border: '1px solid rgba(216,159,48,0.35)'
          }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-7 lg:h-7 text-black" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
          <span className="sr-only">Scroll to top</span>
        </button>
      )}

      <a
        href="https://wa.me/971545770967"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 focus:outline-none"
        style={{
          background: 'linear-gradient(135deg, #D89F30, #734918)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
          border: '1px solid rgba(216,159,48,0.35)'
        }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-7 lg:h-7 text-black" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.93 11.93 0 0012.06 0C5.47 0 .12 5.35.12 11.94c0 2.1.55 4.15 1.59 5.96L0 24l6.26-1.64a12.02 12.02 0 005.8 1.48h.01c6.59 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.19-3.49-8.38zM12.07 21.35h-.01a9.4 9.4 0 01-4.79-1.3l-.34-.2-3.72.98.99-3.63-.22-.37a9.27 9.27 0 01-1.42-4.89c0-5.14 4.18-9.32 9.32-9.32 2.49 0 4.83.97 6.59 2.74a9.26 9.26 0 012.73 6.58c0 5.14-4.18 9.32-9.32 9.32zm5.36-6.96c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.14-.14.29-.37.44-.56.14-.19.19-.33.29-.55.1-.22.05-.41-.02-.56-.07-.15-.64-1.55-.88-2.12-.23-.55-.46-.48-.64-.49l-.55-.01c-.19 0-.56.08-.85.41-.29.33-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.31.16.22 2.26 3.45 5.48 4.83.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.35-.07-.13-.26-.21-.55-.35z"/>
        </svg>
        <span className="sr-only">WhatsApp</span>
      </a>

      <a
        href="tel:+971545770967"
        aria-label="Call us"
        className="group relative inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 focus:outline-none"
        style={{
          background: 'linear-gradient(135deg, #D89F30, #734918)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
          border: '1px solid rgba(216,159,48,0.35)'
        }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-7 lg:h-7 text-black" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C11.3 21 3 12.7 3 2a1 1 0 011-1h3.49a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
        </svg>
        <span className="sr-only">Phone</span>
      </a>

      <a
        href="mailto:info@fadedelegance.ae"
        aria-label="Email us"
        className="group relative inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 focus:outline-none"
        style={{
          background: 'linear-gradient(135deg, #D89F30, #734918)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
          border: '1px solid rgba(216,159,48,0.35)'
        }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-7 lg:h-7 text-black" fill="currentColor" aria-hidden="true">
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l7.4 5.55a1 1 0 001.2 0L20 8.24V18H4z"/>
        </svg>
        <span className="sr-only">Email</span>
      </a>
    </div>
  )
}


