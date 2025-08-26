import React, { useState } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'

const servicesData = [
  {
    title: 'Reborn',
    tagline: 'Where your luxury items get a second life.',
    subcategories: [
      {
        name: 'Handbag Restoration',
        items: [
          'Cleaning & Conditioning',
          'Color Restoration',
          'Stitching & Edging',
          'Zipper Repair & Replacement',
          'Hardware Repair & Replacement',
          'Custom Coloring & Patterns',
          'Customized Artwork'
        ]
      },
      {
        name: 'Shoes (Men & Women)',
        items: [
          'Cleaning & Conditioning',
          'Stitching',
          'Color Restoration',
          'Shoe Stretching',
          'Heel & Sole Repair',
          'Shoe Shine',
          'Custom Coloring & Patterns',
          'Customized Artwork'
        ]
      },
      {
        name: 'Wallet Detailing',
        items: [
          'Cleaning & Conditioning',
          'Color Restoration',
          'Stitching & Edging',
          'Zipper Repair & Replacement',
          'Hardware Repair',
          'Custom Coloring & Patterns',
          'Customized Artwork'
        ]
      },
      {
        name: 'Sandals Care',
        items: [
          'Cleaning & Conditioning',
          'Color Restoration',
          'Stitching & Sole Repair',
          'Heel Tips',
          'Custom Coloring & Artwork'
        ]
      }
    ]
  },
  {
    title: 'Signature',
    tagline: 'Personalized elegance, crafted for you.',
    subcategories: [
      {
        name: 'Handbag Custom',
        items: [
          'Custom Coloring & Patterns',
          'Customized Artwork',
          'Hardware & Zipper Upgrades',
          'Fine Stitch Detailing'
        ]
      },
      {
        name: 'Bespoke Shoes',
        items: [
          'Bespoke Coloring & Patterns',
          'Luxury Shoe Shine',
          'Customized Artwork',
          'Unique Sole & Heel Finishing'
        ]
      },
      {
        name: 'Wallet Personal',
        items: [
          'Signature Coloring Styles',
          'Artistic Detailing',
          'Hardware Upgrades',
          'Premium Stitch Craft'
        ]
      },
      {
        name: 'Sandals Design',
        items: [
          'Exclusive Coloring & Patterns',
          'Artistic Customization',
          'Sole Refinement',
          'Elegant Stitch Work'
        ]
      }
    ]
  },
  {
    title: 'Kids',
    tagline: 'Special care for little ones\' favorites.',
    subcategories: [
      {
        name: 'Kids Shoes',
        items: [
          'Custom Coloring & Patterns',
          'Customized Artwork'
        ]
      },
      {
        name: 'Kids Bags',
        items: [
          'Creative Coloring & Patterns',
          'Personalized Artwork'
        ]
      }
    ]
  }
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  
  // Check if current page should use golden navbar
  const isGoldenNavbar = location.pathname === '/about' || location.pathname === '/contact'
  const navTextClass = isGoldenNavbar ? 'gold-text' : 'text-black'
  const navBorderClass = isGoldenNavbar ? 'border-[#D89F30]' : 'border-black'
  const navHoverClass = isGoldenNavbar ? 'hover:border-[#D89F30]/60' : 'hover:border-black/60'

  // Function to handle service navigation
  const handleServiceClick = (category, subcategory, service) => {
    setServicesOpen(false)
    setMobileServicesOpen(false)
    setMobileOpen(false)
    
    // Navigate to services page with parameters
    navigate(`/services?category=${category}&subcategory=${subcategory}&service=${encodeURIComponent(service)}`)
  }
  
  return (
    <header className="relative flex items-center justify-between p-3 lg:p-6">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img 
            src="/fenav.png" 
            alt="Faded Elegance Logo" 
            className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
          />
        </Link>
      </div>

      {/* Centered navigation (desktop) */}
      <nav className="hidden lg:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2 z-50">
        <NavLink
          to="/"
          className={({ isActive }) => `luxury-nav ${navTextClass} hover:opacity-90 transition-opacity duration-300 pb-0.5 font-bold text-xs lg:text-sm tracking-wide ${isActive ? `border-b-2 ${navBorderClass}` : `border-b-2 border-transparent ${navHoverClass}`}`}
        >
          HOME
        </NavLink>
        <span className="text-black/30 text-sm lg:text-base font-bold">|</span>
        <NavLink
          to="/about"
          className={({ isActive }) => `luxury-nav ${navTextClass} hover:opacity-90 transition-opacity duration-300 pb-0.5 font-bold text-xs lg:text-sm tracking-wide ${isActive ? `border-b-2 ${navBorderClass}` : `border-b-2 border-transparent ${navHoverClass}`}`}
        >
          ABOUT
        </NavLink>
        <span className="text-black/30 text-sm lg:text-base font-bold">|</span>
        <div
          className="relative before:content-[''] before:absolute before:left-0 before:right-0 before:top-full before:h-4"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button type="button" onClick={() => navigate('/services')} className={`luxury-nav ${navTextClass} hover:opacity-90 transition-opacity duration-300 font-bold text-xs lg:text-sm tracking-wide flex items-center gap-2`}>
            <span>SERVICES</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {/* Dropdown Panel */}
          <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[min(90vw,1000px)] transition-opacity duration-200 ${servicesOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="rounded-3xl p-6 font-sans" style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(216,159,48,0.25)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.02)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto pr-2">
                {servicesData.map((cat) => (
                  <div key={cat.title} className="">
                    <h4 className="luxury-nav text-[#D89F30] text-sm lg:text-base font-bold tracking-wide">
                      {cat.title}
                    </h4>
                    {cat.tagline ? (
                      <p className="text-gray-300 text-xs lg:text-sm mb-3 mt-1">{cat.tagline}</p>
                    ) : null}
                    <div className="space-y-4">
                      {cat.subcategories?.map((sub) => (
                        <div key={sub.name}>
                          <h5 className="text-white font-bold text-xs lg:text-sm mb-1">{sub.name}</h5>
                          <ul className="space-y-1 pl-1">
                            {sub.items.map((svc) => (
                              <li key={svc}>
                                <button 
                                  type="button" 
                                  className="w-full text-left flex items-start gap-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md px-2 py-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D89F30]/60"
                                  onClick={() => handleServiceClick(cat.title, sub.name, svc)}
                                >
                                  <svg className="mt-1 w-3 h-3 text-[#F4B942] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 2.75l2.955 6.001 6.62.962-4.788 4.668 1.13 6.594L12 17.98l-5.917 3.0 1.13-6.594L2.425 9.713l6.62-.962L12 2.75z"/>
                                  </svg>
                                  <span className="text-[11px] lg:text-xs">{svc}</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="text-black/30 text-sm lg:text-base font-bold">|</span>
        <a href="#" className={`luxury-nav ${navTextClass} hover:opacity-90 transition-opacity duration-300 font-bold text-xs lg:text-sm tracking-wide`}>
          GALLERY
        </a>
        <span className="text-black/30 text-sm lg:text-base font-bold">|</span>
        <NavLink
          to="/contact"
          className={({ isActive }) => `luxury-nav ${navTextClass} hover:opacity-90 transition-opacity duration-300 pb-0.5 font-bold text-xs lg:text-sm tracking-wide ${isActive ? `border-b-2 ${navBorderClass}` : `border-b-2 border-transparent ${navHoverClass}`}`}
        >
          CONTACT US
        </NavLink>
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <a
          href="tel:+971000000000"
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D89F30] text-black font-semibold shadow-sm hover:bg-[#eab75a] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 5a2 2 0 012-2h1.3a2 2 0 011.8 1.1l1.2 2.4a2 2 0 01-.5 2.3l-1.1 1.1a16 16 0 006.4 6.4l1.1-1.1a2 2 0 012.3-.5l2.4 1.2A2 2 0 0121 19.7V21a2 2 0 01-2 2h-1C9.8 23 1 14.2 1 4V3a2 2 0 012-2" />
          </svg>
          Quick Call
        </a>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#D89F30] p-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur border-t border-[#D89F30]/30 shadow-xl z-40">
          <div className="p-4 space-y-2">
            <NavLink to="/" className={({ isActive }) => `block luxury-nav ${isActive ? 'text-[#D89F30]' : 'text-black'} text-sm py-2`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `block luxury-nav ${isActive ? 'text-[#D89F30]' : 'text-black'} text-sm py-2`}>About</NavLink>
            <button
              type="button"
              className="w-full text-left luxury-nav text-black text-sm py-2 flex items-center justify-between"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 space-y-3">
                {servicesData.map((cat) => (
                  <div key={cat.title}>
                    <div className="luxury-nav text-[#D89F30] text-xs mb-1">{cat.title}</div>
                    <div className="grid grid-cols-1 gap-1">
                      {cat.subcategories?.map((sub) => (
                        <div key={sub.name} className="">
                          <div className="text-[12px] font-semibold">{sub.name}</div>
                          <ul className="pl-3 list-disc text-[12px] text-black/80">
                            {sub.items.map((svc) => (
                              <li key={svc}>
                                <button 
                                  type="button"
                                  className="text-left hover:text-[#D89F30] transition-colors"
                                  onClick={() => handleServiceClick(cat.title, sub.name, svc)}
                                >
                                  {svc}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <a href="#" className="block luxury-nav text-black text-sm py-2">Gallery</a>
            <NavLink to="/contact" className={({ isActive }) => `block luxury-nav ${isActive ? 'text-[#D89F30]' : 'text-black'} text-sm py-2`}>Contact Us</NavLink>
            <a href="tel:+971000000000" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D89F30] text-black font-semibold shadow-sm mt-2">Quick Call</a>
          </div>
        </div>
      )}
    </header>
  )
}


