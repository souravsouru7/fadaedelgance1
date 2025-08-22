import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="luxury-nav text-[#D89F30] text-xs tracking-[0.4em] uppercase">About Us</span>
          <h1 className="luxury-title text-3xl lg:text-5xl mt-4 leading-tight">Craft, Care & Customization</h1>
          <div className="mx-auto mt-4 h-px w-48 bg-gradient-to-r from-transparent via-[#D89F30] to-transparent"></div>
          <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-[#D89F30]/50 to-transparent opacity-60"></div>
        </div>

        {/* 3 Image Sections */}
        <div className="space-y-20 lg:space-y-24 mb-20">
          {/* Section 1 (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=75"
                  alt="Luxury leather craftsmanship"
                  className="w-full h-[250px] lg:h-[300px] object-cover rounded-2xl border border-[#D89F30]/30 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#D89F30]/15 group-hover:ring-[#D89F30]/30 transition"></div>
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-3 py-1 rounded-full text-xs font-bold luxury-nav tracking-wide border border-white/10">
                  CRAFTSMANSHIP
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl p-8 lg:p-10 border border-[#D89F30]/20 bg-black/20 backdrop-blur-sm transition-colors duration-300 hover:border-[#D89F30]/40">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D89F30]/60 rounded-tl-md"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D89F30]/60 rounded-br-md"></div>
                <p className="luxury-subtitle text-white/95 text-sm lg:text-base leading-relaxed">
                  At Faded Elegance, we believe every luxury item deserves a second chance to shine. Our mission is to bring your treasured
                  pieces back to life with care, precision, and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl p-8 lg:p-10 border border-[#D89F30]/20 bg-black/20 backdrop-blur-sm transition-colors duration-300 hover:border-[#D89F30]/40">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D89F30]/60 rounded-tl-md"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D89F30]/60 rounded-br-md"></div>
                <p className="luxury-subtitle text-white/95 text-sm lg:text-base leading-relaxed">
                  With years of expertise in leather care, color restoration, stitching, and custom artistry, we offer a unique blend of craftsmanship and passion.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=75"
                  alt="Leather restoration process"
                  className="w-full h-[250px] lg:h-[300px] object-cover rounded-2xl border border-[#D89F30]/30 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#D89F30]/15 group-hover:ring-[#D89F30]/30 transition"></div>
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-3 py-1 rounded-full text-xs font-bold luxury-nav tracking-wide border border-white/10">
                  RESTORATION
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=75"
                  alt="Custom leather design"
                  className="w-full h-[250px] lg:h-[300px] object-cover rounded-2xl border border-[#D89F30]/30 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#D89F30]/15 group-hover:ring-[#D89F30]/30 transition"></div>
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-3 py-1 rounded-full text-xs font-bold luxury-nav tracking-wide border border-white/10">
                  CUSTOMIZATION
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl p-8 lg:p-10 border border-[#D89F30]/20 bg-black/20 backdrop-blur-sm transition-colors duration-300 hover:border-[#D89F30]/40">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D89F30]/60 rounded-tl-md"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D89F30]/60 rounded-br-md"></div>
                <p className="luxury-subtitle text-white/95 text-sm lg:text-base leading-relaxed">
                  Designer shoes, or adding custom patterns to your sneakers — we do it with the same dedication as if it were our own.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="luxury-title text-2xl lg:text-3xl">Our Promise</h2>
            <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-[#D89F30] to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="rounded-2xl p-6 lg:p-8 border border-[#D89F30]/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D89F30]/40">
              <div className="h-px w-10 bg-[#D89F30]/40 mb-3"></div>
              <div className="text-2xl">✅</div>
              <h3 className="luxury-nav text-[#D89F30] text-base lg:text-lg mt-3 mb-2">Restore beauty without compromising quality</h3>
              <p className="text-white/85 text-xs lg:text-sm">Every restoration honors the original craftsmanship while elevating finish and feel.</p>
            </div>
            <div className="rounded-2xl p-6 lg:p-8 border border-[#D89F30]/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D89F30]/40">
              <div className="h-px w-10 bg-[#D89F30]/40 mb-3"></div>
              <div className="text-2xl">🧴</div>
              <h3 className="luxury-nav text-[#D89F30] text-base lg:text-lg mt-3 mb-2">Use safe, premium-grade materials</h3>
              <p className="text-white/85 text-xs lg:text-sm">We source professional, material-safe solutions trusted by luxury houses.</p>
            </div>
            <div className="rounded-2xl p-6 lg:p-8 border border-[#D89F30]/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D89F30]/40">
              <div className="h-px w-10 bg-[#D89F30]/40 mb-3"></div>
              <div className="text-2xl">🌟</div>
              <h3 className="luxury-nav text-[#D89F30] text-base lg:text-lg mt-3 mb-2">Deliver results that exceed expectations</h3>
              <p className="text-white/85 text-xs lg:text-sm">Meticulous checks ensure color, texture, and finish look stunning and last.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block px-10 py-10 lg:px-12 lg:py-12 rounded-2xl border border-[#D89F30]/20 bg-black/20 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.01] hover:border-[#D89F30]/40">
            <h3 className="luxury-title text-xl lg:text-2xl mb-6">Ready to restore your favorite piece?</h3>
            <p className="luxury-subtitle text-white/90 mb-8 max-w-2xl mx-auto text-sm lg:text-base">Start with a quick consultation and let our artisans guide you through the best options.</p>
            <a href="#contact" className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-8 py-3 rounded-full font-bold inline-block text-sm lg:text-base">
              ENQUIRE NOW
            </a>
          </div>
        </div>
      </main>

      <Footer />

      {/* Background Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(#D89F30 0.5px, transparent 0.5px), radial-gradient(#734918 0.5px, transparent 0.5px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 14px 14px'
        }}></div>
        <div className="absolute top-24 right-20 w-72 h-72 bg-gradient-to-br from-[#D89F30]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 left-20 w-64 h-64 bg-gradient-to-tl from-[#734918]/15 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}


