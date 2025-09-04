import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  // Function to navigate to pages
  const navigateToPage = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0" style={{
        background: 'radial-gradient(1200px 400px at 50% -10%, rgba(216,159,48,0.10), transparent 40%), linear-gradient(180deg, #0b0b0b 0%, #0a0a0a 60%, #0b0b0b 100%)'
      }} />

      {/* Top divider glow */}
      <div aria-hidden="true" className="absolute left-0 right-0 top-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(216,159,48,0.7), transparent)'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* CTA Card */}
        <div className="relative mb-10 lg:mb-14">
          <div className="rounded-2xl p-6 lg:p-8 bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(216,159,48,0.25) 0%, rgba(216,159,48,0.06) 35%, transparent 60%)',
              maskImage: 'radial-gradient(500px 120px at 50% 0%, black, transparent)'
            }} />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#D89F30]/15 border border-[#D89F30]/30 grid place-items-center">
                  <span className="h-2 w-2 rounded-full bg-[#D89F30] shadow-[0_0_20px_2px_rgba(216,159,48,0.6)]"></span>
                </div>
                <div>
                  <h3 className="text-white text-lg lg:text-2xl font-medium tracking-wide" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Ready to restore your luxury items?</h3>
                  <p className="text-gray-300 text-sm lg:text-base" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>Talk to a specialist now and get a tailored quote.</p>
                </div>
              </div>
              <div className="flex-1" />
              <div className="relative">
                <a href="https://wa.me/971545770967" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm lg:text-base text-black bg-[#D89F30] hover:bg-[#e0ab4a] transition-colors">
                  <span className="h-2 w-2 rounded-full bg-black/30"></span>
                  <span>Chat on WhatsApp</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 lg:mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/fenav.png" alt="Faded Elegance" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Precision restoration for handbags, footwear, and leather goods in Dubai.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="tel:+971545770967" className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center gap-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5.5C2.5 15 9 21.5 18.5 21.5c1.2 0 2-1 2-2.2v-2.3c0-.8-.5-1.5-1.3-1.7l-3.1-.8c-.6-.1-1.2.1-1.6.5l-.9.9c-3.1-1.3-5.6-3.7-6.9-6.9l.9-.9c.4-.4.6-1 .5-1.6l-.8-3.1C7.1 2.5 6.4 2 5.6 2H3.2C2 2 1 2.8 1 4c0 .5.2 1 .5 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                +971 54 5770967
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Services</h4>
            <ul className="space-y-3 text-sm" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              <li><button onClick={() => navigateToPage('/services')} className="link text-gray-300 hover:text-white transition-colors text-left w-full">Handbag Restoration</button></li>
              <li><button onClick={() => navigateToPage('/services')} className="link text-gray-300 hover:text-white transition-colors text-left w-full">Footwear Care</button></li>
              <li><button onClick={() => navigateToPage('/services')} className="link text-gray-300 hover:text-white transition-colors text-left w-full">Color Refinishing</button></li>
              <li><button onClick={() => navigateToPage('/services')} className="link text-gray-300 hover:text-white transition-colors text-left w-full">Deep Cleaning</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Company</h4>
            <ul className="space-y-3 text-sm" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              <li><button onClick={() => navigateToPage('/about')} className="link text-gray-300 hover:text-white transition-colors text-left w-full">About Us</button></li>
              <li><button onClick={() => navigateToPage('/contact')} className="link text-gray-300 hover:text-white transition-colors text-left w-full">Contact</button></li>
              <li><button onClick={() => navigateToPage('/services')} className="link text-gray-300 hover:text-white transition-colors text-left w-full">Services</button></li>
              <li><button onClick={() => navigateToPage('/gallery')} className="link text-gray-300 hover:text-white transition-colors text-left w-full">Gallery</button></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Connect</h4>
            <div className="flex gap-3">
              <a href="https://wa.me/971545770967" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors">
                <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.9 11.9 0 0012.06 0C5.53.03.27 5.29.3 11.82a11.77 11.77 0 001.62 6.05L0 24l6.31-1.65a11.85 11.85 0 005.69 1.47h.01c6.53 0 11.79-5.26 11.82-11.79a11.75 11.75 0 00-3.31-8.55zM12 21.17h-.01a9.8 9.8 0 01-5.01-1.37l-.36-.21-3.74.98 1-3.65-.24-.37A9.73 9.73 0 012.2 11.8C2.18 6.47 6.55 2.1 11.88 2.08a9.7 9.7 0 016.93 2.86 9.66 9.66 0 012.83 6.95c-.02 5.33-4.39 9.68-9.64 9.68zm5.53-7.26c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47a9.01 9.01 0 01-1.67-2.06c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.81.38-.27.3-1.06 1.04-1.06 2.54s1.08 2.94 1.23 3.14c.15.2 2.13 3.24 5.16 4.54.72.31 1.29.49 1.73.63.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
              </a>
              <a href="https://www.instagram.com/fadedelegancedxb?igsh=MXUyOWR5OXp0M2cxMg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/share/19PVWf9dBr/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs lg:text-sm" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>© {currentYear} Faded Elegance. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs lg:text-sm" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              <button onClick={() => window.open('/privacy-policy', '_blank')} className="text-gray-300 hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => window.open('/terms-of-service', '_blank')} className="text-gray-300 hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>

      {/* Component styles */}
      <style>{`
        .link { position: relative; }
        .link:after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px; height: 1px; width: 0%;
          background: linear-gradient(90deg, #7a4a10, #D89F30, #7a4a10);
          transition: width .3s ease;
        }
        .link:hover:after { width: 100%; }
      `}</style>
    </footer>
  )
}
