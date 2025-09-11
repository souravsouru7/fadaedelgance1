import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function About() {
  // Load same fonts as Services page
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600&display=swap'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  const pageFont = { fontFamily: 'Manrope, system-ui, Arial, sans-serif' }
  const displayFont = { fontFamily: 'Cormorant Garamond, serif' }

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Faded Elegance",
    "description": "Learn about Faded Elegance's craftsmanship, care, and customization services for luxury furniture restoration in Dubai.",
    "url": "https://fadedelegance.ae/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Faded Elegance",
      "description": "Premium furniture restoration services in Dubai, specializing in luxury furniture repair, antique restoration, and premium upholstery.",
      "foundingDate": "2020",
      "areaServed": "Dubai, UAE"
    }
  };

  return (
    <div className="min-h-screen bg-white text-black" style={pageFont}>
      <SEO 
        title="About Faded Elegance Dubai | Luxury Leather Restoration"
        description="Discover Faded Elegance's story of craftsmanship in premium leather restoration: handbags, shoes, wallets and jackets. Cleaning & conditioning, color restoration, stitching and bespoke artistry."
        keywords="about leather restoration dubai, luxury leather repair dubai, handbag restoration dubai, shoe restoration dubai, leather color restoration"
        url="https://fadedelegance.ae/about"
        image="https://fadedelegance.ae/Faded%20Elegance%20Logo%20Final-07.png"
        structuredData={aboutStructuredData}
      />
      <Navbar />

      <main className="relative z-10 max-w-[1120px] mx-auto px-4 sm:px-5 lg:px-8 py-12 lg:py-16">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-neutral-600 text-[11px] tracking-[0.25em] uppercase">About Us</span>
          <h1 className="text-3xl lg:text-5xl mt-3 leading-tight font-light" style={displayFont}>Craft, Care & Customization</h1>
          <div className="mx-auto mt-4 h-px w-48 bg-black/10"></div>
          <div className="mx-auto mt-2 h-px w-24 bg-black/10 opacity-60"></div>
        </div>

        {/* 3 Image Sections */}
        <div className="space-y-20 lg:space-y-24 mb-20">
          {/* Section 1 (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="relative group">
                <img
                  src="/nowimages/Color Restoration.jpg"
                  alt="Luxury leather craftsmanship"
                  className="w-full h-[250px] lg:h-[300px] object-cover rounded-2xl border border-black/10 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 group-hover:ring-black/20 transition"></div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl p-8 lg:p-10 border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-black/20">
                <p className="text-neutral-800 text-[13px] sm:text-[14px] leading-relaxed">
              At Faded Elegance, we believe every piece of premium leather deserves a second chance to shine.
Our mission is to revive your treasured items with care, precision, and creative craftsmanship.

                </p>
              </div>
            </div>
          </div>

          {/* Section 2 (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl p-8 lg:p-10 border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-black/20">
                <p className="text-neutral-800 text-[13px] sm:text-[14px] leading-relaxed">
                 Craftsmanship in leather care, color restoration, stitching, and custom artistry—brought to life by
creative artists who treat every piece as a work of art.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <img
                  src="/nowimages/Customized Artwork.jpg"
                  alt="Leather restoration process"
                  className="w-full h-[250px] lg:h-[300px] object-cover rounded-2xl border border-black/10 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 group-hover:ring-black/20 transition"></div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="relative group">
                <img
                  src="/nowimages/abouts.jpg"
                  alt="Custom leather design"
                  className="w-full h-[250px] lg:h-[300px] object-cover rounded-2xl border border-black/10 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 group-hover:ring-black/20 transition"></div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl p-8 lg:p-10 border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-colors duration-300 hover:border-black/20">
                <p className="text-neutral-800 text-[13px] sm:text-[14px] leading-relaxed">
                Signature Style, Your Way
We transform your favorite pieces into one-of-a-kind expressions. From sneakers to handbags, our
creative customization lets your personality shine through every detail.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-light" style={displayFont}>Our Promise</h2>
            <div className="mx-auto mt-4 h-px w-32 bg-black/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="rounded-2xl p-6 lg:p-8 border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20">
              <div className="h-px w-10 bg-black/10 mb-3"></div>
              <div className="text-2xl">✅</div>
              <h3 className="text-black text-base lg:text-lg mt-3 mb-2">Restore beauty without compromising quality</h3>
              <p className="text-neutral-700 text-[12px] sm:text-[13px]">Every restoration honors the original craftsmanship while elevating finish and feel.</p>
            </div>
            <div className="rounded-2xl p-6 lg:p-8 border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20">
              <div className="h-px w-10 bg-black/10 mb-3"></div>
              <div className="text-2xl">🧴</div>
              <h3 className="text-black text-base lg:text-lg mt-3 mb-2">Use safe, premium-grade materials</h3>
              <p className="text-neutral-700 text-[12px] sm:text-[13px]">We source professional, material-safe solutions trusted by luxury houses.</p>
            </div>
            <div className="rounded-2xl p-6 lg:p-8 border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20">
              <div className="h-px w-10 bg-black/10 mb-3"></div>
              <div className="text-2xl">🌟</div>
              <h3 className="text-black text-base lg:text-lg mt-3 mb-2">Deliver results that exceed expectations</h3>
              <p className="text-neutral-700 text-[12px] sm:text-[13px]">Meticulous checks ensure color, texture, and finish look stunning and last.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block px-10 py-10 lg:px-12 lg:py-12 rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition-transform duration-300 hover:scale-[1.01] hover:border-black/20">
            <h3 className="text-xl lg:text-2xl mb-6 font-light" style={displayFont}>Ready to restore your favorite piece?</h3>
            <p className="text-neutral-700 mb-8 max-w-2xl mx-auto text-[13px] sm:text-[14px]">Start with a quick consultation and let our artisans guide you through the best options.</p>
            <a href="/contact" className="bg-black text-white px-8 py-3 rounded-full font-medium inline-block text-sm lg:text-base border border-black hover:bg-white hover:text-black transition-colors">
              ENQUIRE NOW
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


