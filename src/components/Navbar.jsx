import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const servicesData = [
  {
    title: 'Reborn',
    tagline: 'Where your luxury items get a second life.',
    subcategories: [
      {
        name: 'Handbag & Wallet',
        items: [
          'Cleaning & Conditioning',
          'Color Restoration',
          'Stitching & Edging',
          'Zipper Repair & Replacement',
          'Hardware Repair & Replacement',
          
        ]
      },
      {
        name: 'Shoes & Sandals (Men & Women)',
        items: [
          'Cleaning & Conditioning',
          'Stitching',
          'Color Restoration',
          'Shoe Stretching',
          'Heel & Sole Repair',
          
        ]
      },
     
     
    ]
  },
  {
    title: 'Signature',
    tagline: 'Personalized elegance, crafted for you.',
    subcategories: [
      {
        name: 'Handbag & Wallet',
        items: [
          'Custom Coloring & Patterns',
          'Customized Artwork',
          'Hardware & Zipper Upgrades',
          'Fine Stitch Detailing'
        ]
      },
      {
        name: 'Shoes & Sandals (Men & Women)',
        items: [
          'Bespoke Coloring & Patterns',
          'Customized Artwork',
          
        ]
      },
     
      
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
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState({})
  const [mobileSubcategoryOpen, setMobileSubcategoryOpen] = useState({})
  
  // Use black color for navbar on all pages
  const navTextClass = 'text-black'
  const navBorderClass = 'border-black'
  const navHoverClass = 'hover:border-black/60'

  // Function to handle service navigation
  const handleServiceClick = (category, subcategory, service) => {
    setServicesOpen(false)
    setMobileServicesOpen(false)
    setMobileOpen(false)
    
    // Navigate to services page with parameters
    navigate(`/services?category=${category}&subcategory=${encodeURIComponent(subcategory)}&service=${encodeURIComponent(service)}`)
  }
  
  return (
    <header className="relative flex items-center justify-between p-3 lg:p-6">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img 
            src="/fenav.png" 
            alt="Faded Elegance Logo" 
            className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
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
          href="tel:+971545770967"
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
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Full screen panel */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 transform transition-transform duration-300 ease-out">
            <div className="flex flex-col h-full">
              {/* Elegant header with centered logo */}
              <div className="relative p-6 bg-white border-b border-gray-100">
                <div className="flex flex-col items-center space-y-4">
                  {/* Close button positioned absolutely */}
                  <button
                    className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200"
                    aria-label="Close menu"
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  {/* Centered logo with elegant styling */}
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative">
                      {/* Elegant shadow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D89F30]/20 to-[#F4B942]/20 rounded-2xl blur-sm scale-110"></div>
                      {/* Logo container */}
                      <div className="relative w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg flex items-center justify-center border border-gray-100">
                        <img 
                          src="/fenav.png" 
                          alt="Faded Elegance Logo" 
                          className="w-14 h-14 object-contain drop-shadow-sm"
                        />
                      </div>
                    </div>
                    
                    {/* Brand text */}
                    <div className="text-center">
                      <h2 className="text-gray-800 font-bold text-xl tracking-wide">Faded Elegance</h2>
                      <p className="text-gray-500 text-sm font-medium">Navigate with elegance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation content with modern cards */}
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                {/* Main navigation items */}
                <div className="space-y-2">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => `group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-200 ${
                      isActive 
                        ? 'text-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/80 text-gray-800 hover:shadow-md backdrop-blur-sm'
                    }`}
                    style={({ isActive }) => isActive ? {
                      background: 'linear-gradient(135deg, #D89F30, #734918)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
                      border: '1px solid rgba(216,159,48,0.35)'
                    } : {}}
                    onClick={() => setMobileOpen(false)}
                  >
                    {({ isActive }) => (
                      <>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isActive ? 'bg-white/20' : 'bg-[#D89F30]/10'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <span className="font-semibold">Home</span>
                      </>
                    )}
                  </NavLink>

                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => `group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-200 ${
                      isActive 
                        ? 'text-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/80 text-gray-800 hover:shadow-md backdrop-blur-sm'
                    }`}
                    style={({ isActive }) => isActive ? {
                      background: 'linear-gradient(135deg, #D89F30, #734918)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
                      border: '1px solid rgba(216,159,48,0.35)'
                    } : {}}
                    onClick={() => setMobileOpen(false)}
                  >
                    {({ isActive }) => (
                      <>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isActive ? 'bg-white/20' : 'bg-[#D89F30]/10'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-semibold">About</span>
                      </>
                    )}
                  </NavLink>

                  {/* Services with modern accordion */}
                  <div className="bg-white/50 rounded-2xl backdrop-blur-sm overflow-hidden">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between p-4 hover:bg-white/60 transition-all duration-200"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                             style={{
                               background: 'linear-gradient(135deg, #D89F30, #734918)',
                               boxShadow: '0 4px 15px rgba(216,159,48,0.3)'
                             }}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-800">Services</span>
                      </div>
                      <svg className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    
                    {mobileServicesOpen && (
                      <div className="px-4 pb-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
                        {servicesData.map((cat) => {
                          const categoryKey = cat.title
                          const isCategoryOpen = mobileCategoryOpen[categoryKey]
                          
                          return (
                            <div key={cat.title} className="bg-white/30 rounded-xl overflow-hidden backdrop-blur-sm">
                              {/* Main Category Button */}
                              <button
                                type="button"
                                className="w-full flex items-center justify-between p-4 hover:bg-white/40 transition-all duration-200"
                                onClick={() => setMobileCategoryOpen(prev => ({
                                  ...prev,
                                  [categoryKey]: !prev[categoryKey]
                                }))}
                                aria-expanded={isCategoryOpen}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 rounded-xl bg-[#D89F30]/20 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#D89F30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                  </div>
                                  <div className="text-left">
                                    <h4 className="font-bold text-[#D89F30] text-sm">{cat.title}</h4>
                                    {cat.tagline && (
                                      <p className="text-gray-600 text-xs italic">{cat.tagline}</p>
                                    )}
                                  </div>
                                </div>
                                <svg className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M6 9l6 6 6-6" />
                                </svg>
                              </button>
                              
                              {/* Subcategories */}
                              {isCategoryOpen && (
                                <div className="px-4 pb-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
                                  {cat.subcategories?.map((sub) => {
                                    const subcategoryKey = `${cat.title}-${sub.name}`
                                    const isSubcategoryOpen = mobileSubcategoryOpen[subcategoryKey]
                                    
                                    return (
                                      <div key={sub.name} className="bg-white/20 rounded-lg overflow-hidden">
                                        <button
                                          type="button"
                                          className="w-full flex items-center justify-between p-3 hover:bg-white/30 transition-all duration-200"
                                          onClick={() => setMobileSubcategoryOpen(prev => ({
                                            ...prev,
                                            [subcategoryKey]: !prev[subcategoryKey]
                                          }))}
                                          aria-expanded={isSubcategoryOpen}
                                        >
                                          <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#D89F30]/20 flex items-center justify-center">
                                              <svg className="w-4 h-4 text-[#D89F30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                              </svg>
                                            </div>
                                            <span className="text-gray-800 font-semibold text-sm">{sub.name}</span>
                                          </div>
                                          <svg className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isSubcategoryOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 9l6 6 6-6" />
                                          </svg>
                                        </button>
                                        
                                        {/* Individual Services */}
                                        {isSubcategoryOpen && (
                                          <div className="px-3 pb-3 space-y-1 animate-in slide-in-from-top-2 duration-200">
                                            {sub.items.map((svc) => (
                                              <button 
                                                key={svc}
                                                type="button"
                                                className="w-full text-left p-2 rounded-lg hover:bg-[#D89F30]/10 hover:text-[#D89F30] transition-all duration-200 text-xs text-gray-700 flex items-center space-x-2"
                                                onClick={() => handleServiceClick(cat.title, sub.name, svc)}
                                              >
                                                <div className="w-1.5 h-1.5 bg-[#D89F30]/60 rounded-full flex-shrink-0"></div>
                                                <span>{svc}</span>
                                              </button>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    )
                                  })}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  {/* Gallery link hidden on mobile */}

                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => `group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-200 ${
                      isActive 
                        ? 'text-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/80 text-gray-800 hover:shadow-md backdrop-blur-sm'
                    }`}
                    style={({ isActive }) => isActive ? {
                      background: 'linear-gradient(135deg, #D89F30, #734918)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
                      border: '1px solid rgba(216,159,48,0.35)'
                    } : {}}
                    onClick={() => setMobileOpen(false)}
                  >
                    {({ isActive }) => (
                      <>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isActive ? 'bg-white/20' : 'bg-[#D89F30]/10'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="font-semibold">Contact Us</span>
                      </>
                    )}
                  </NavLink>
                </div>

                {/* Call to action */}
                <div className="pt-4">
                  <a 
                    href="tel:+971545770967" 
                    className="w-full flex items-center justify-center space-x-3 p-4 rounded-2xl text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #D89F30, #734918)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)',
                      border: '1px solid rgba(216,159,48,0.35)'
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Quick Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

