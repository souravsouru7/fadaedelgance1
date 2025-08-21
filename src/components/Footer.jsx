import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden py-10 lg:py-14" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)'
    }}>
      {/* Ornamental top arc */}
      <svg aria-hidden="true" width="520" height="120" viewBox="0 0 640 160" className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 opacity-40">
        <defs>
          <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7a4a10"/>
            <stop offset="50%" stopColor="#D89F30"/>
            <stop offset="100%" stopColor="#7a4a10"/>
          </linearGradient>
        </defs>
        <path d="M0,150 C160,10 480,10 640,150" fill="none" stroke="url(#goldStroke)" strokeWidth="1.5"/>
      </svg>
      {/* Subtle diagonal pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{
        backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 22px)'
      }} />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src="/footerlogo.png"
          alt=""
          className="select-none w-[520px] max-w-none opacity-20"
          style={{ filter: 'grayscale(100%) brightness(1.4) drop-shadow(0 16px 40px rgba(0,0,0,0.35))', transform: 'rotate(-8deg)' }}
        />
      </div>
      {/* Floating gold dust */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="dust absolute w-1 h-1 rounded-full bg-[#D89F30]" style={{ left: '12%', top: '30%', opacity: 0.25, filter: 'blur(0.5px)', animationDuration: '14s' }}></span>
        <span className="dust absolute w-1 h-1 rounded-full bg-[#D89F30]" style={{ left: '78%', top: '18%', opacity: 0.2, filter: 'blur(0.5px)', animationDuration: '18s', animationDelay: '1s' }}></span>
        <span className="dust absolute w-[6px] h-[6px] rounded-full bg-[#D89F30]" style={{ left: '64%', top: '72%', opacity: 0.16, filter: 'blur(1px)', animationDuration: '16s', animationDelay: '0.5s' }}></span>
        <span className="dust absolute w-[3px] h-[3px] rounded-full bg-[#D89F30]" style={{ left: '22%', top: '68%', opacity: 0.18, filter: 'blur(0.5px)', animationDuration: '20s', animationDelay: '0.2s' }}></span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Brand */}
          <div>
            <div className="relative mb-4 lg:mb-6">
              <div className="absolute inset-0 -z-10 rounded-full blur-3xl" style={{ background: 'conic-gradient(from 180deg, rgba(216,159,48,0.18), rgba(122,74,16,0.06), transparent 60%)' }}></div>
              <img 
                src="/fenav.png"
                alt="Faded Elegance Logo"
                className="w-24 lg:w-32 h-auto object-contain"
              />
            </div>
            <p className="text-gray-200 leading-relaxed text-sm lg:text-base font-light tracking-wide" style={{
              fontFamily: '"Playfair Display", serif'
            }}>
              Luxury restoration for handbags, footwear, and leather goods. 
              Crafted with precision and a commitment to timeless elegance.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D89F30] text-xl lg:text-2xl font-medium mb-4 tracking-wider" style={{
              fontFamily: '"Abhaya Libre", serif'
            }}>
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Phone</span>
                <a href="tel:+971545770967" className="text-gray-200 hover:text-[#D89F30] transition-colors text-sm lg:text-base font-light tracking-wide" style={{
                  fontFamily: '"Playfair Display", serif'
                }}>
                  +971 54 5770967
                </a>
              </li>
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">WhatsApp</span>
                <a href="https://wa.me/971545770967" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-[#D89F30] transition-colors text-sm lg:text-base font-light tracking-wide" style={{
                  fontFamily: '"Playfair Display", serif'
                }}>
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Location</span>
                <p className="text-gray-200 text-sm lg:text-base font-light tracking-wide" style={{
                  fontFamily: '"Playfair Display", serif'
                }}>
                  Dubai, United Arab Emirates
                </p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D89F30] text-xl lg:text-2xl font-medium mb-4 tracking-wider" style={{
              fontFamily: '"Abhaya Libre", serif'
            }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="group flex items-center text-gray-300 hover:text-[#D89F30] transition-all duration-300">
                  <div className="w-2 h-2 bg-[#D89F30] rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="link-underline text-sm lg:text-base font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300" style={{
                    fontFamily: '"Playfair Display", serif'
                  }}>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="group flex items-center text-gray-300 hover:text-[#D89F30] transition-all duration-300">
                  <div className="w-2 h-2 bg-[#D89F30] rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="link-underline text-sm lg:text-base font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300" style={{
                    fontFamily: '"Playfair Display", serif'
                  }}>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="group flex items-center text-gray-300 hover:text-[#D89F30] transition-all duration-300">
                  <div className="w-2 h-2 bg-[#D89F30] rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="link-underline text-sm lg:text-base font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300" style={{
                    fontFamily: '"Playfair Display", serif'
                  }}>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D89F30]/20 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
            <p className="text-gray-400 text-xs lg:text-sm font-light tracking-wide text-center lg:text-left" style={{
              fontFamily: '"Playfair Display", serif'
            }}>
              © {currentYear} Faded Elegance. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-end">
              <a 
                href="#"
                className="text-gray-400 hover:text-[#D89F30] text-xs lg:text-sm font-light tracking-wide transition-colors duration-300" style={{
                  fontFamily: '"Playfair Display", serif'
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="#"
                className="text-gray-400 hover:text-[#D89F30] text-xs lg:text-sm font-light tracking-wide transition-colors duration-300" style={{
                  fontFamily: '"Playfair Display", serif'
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Component-scoped styles for unique effects */}
      <style>{`
        @keyframes floatY {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
        .dust { animation: floatY var(--dur,12s) ease-in-out infinite; }
        .link-underline {
          background-image: linear-gradient(to right, rgba(255,255,255,0) 0, rgba(255,255,255,0) 100%), linear-gradient(90deg, #7a4a10, #D89F30, #7a4a10);
          background-size: 100% 1px, 0 1px;
          background-position: 0 100%, 0 100%;
          background-repeat: no-repeat;
          transition: background-size .35s ease;
        }
        .group:hover .link-underline { background-size: 100% 1px, 100% 1px; }
        @keyframes shine {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        .btn-shine .shine {
          position: absolute;
          top: -2px; bottom: -2px; left: -2px; right: -2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          filter: blur(2px);
          animation: shine 3.2s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </footer>
  )
}
