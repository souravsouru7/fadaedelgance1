import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Contact() {
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
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Faded Elegance",
    "description": "Get in touch with Faded Elegance for premium furniture restoration services in Dubai. Contact us for luxury furniture repair, antique restoration, and upholstery services.",
    "url": "https://fadedelegance.ae/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Faded Elegance",
      "telephone": "+971545770967",
      "email": "info@fadedelegance.ae",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "openingHours": "Mo-Sa 10:00-20:00"
    }
  };

  return (
    <div className="min-h-screen bg-white text-black" style={pageFont}>
      <SEO 
        title="Contact Faded Elegance Dubai | Furniture Restoration Services"
        description="Contact Faded Elegance for premium furniture restoration in Dubai. Expert luxury furniture repair, antique restoration, and upholstery services. Call +971 54 5770967 or visit our location."
        keywords="contact furniture restoration dubai, luxury furniture repair contact, antique restoration dubai contact, upholstery services dubai, furniture repair contact"
        url="https://fadedelegance.ae/contact"
        image="https://fadedelegance.ae/Faded%20Elegance%20Logo%20Final-07.png"
        structuredData={contactStructuredData}
      />
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Subtle neutral background accents (match Services aesthetic) */}
        <div className="absolute inset-0 overflow-hidden opacity-80 pointer-events-none">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(60% 50% at 20% -10%, rgba(0,0,0,0.05), transparent 60%), radial-gradient(50% 40% at 100% 120%, rgba(0,0,0,0.05), transparent 60%)'
          }} />
        </div>

        <main className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          {/* Heading */}
          <div className="text-center mb-8 lg:mb-12">
            <span className="text-black/70 text-sm tracking-[0.25em] uppercase">Contact Us</span>
            <h1 className="text-3xl lg:text-5xl mt-4 leading-tight font-light" style={displayFont}>Get In Touch</h1>
            <div className="mx-auto mt-5 h-px w-44 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] h-full flex flex-col">
                <h2 className="text-2xl font-light mb-6" style={displayFont}>Get In Touch</h2>
                
                <div className="space-y-6 flex-1">
                  {/* Visit Us */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      📍
                    </div>
                    <div>
                      <h3 className="text-black font-medium mb-1">Visit Us</h3>
                      <a 
                        href="https://maps.app.goo.gl/zFidmBYZ8mU5ytB69" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-black/70 hover:text-black transition-colors text-sm"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  {/* Call / WhatsApp */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      📞
                    </div>
                    <div>
                      <h3 className="text-black font-medium mb-1">Call / WhatsApp</h3>
                      <p className="text-black/70 text-sm">+971 54 5770967</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      ✉️
                    </div>
                    <div>
                      <h3 className="text-black font-medium mb-1">Email</h3>
                      <p className="text-black/70 text-sm">info@fadedelegance.ae</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      🕒
                    </div>
                    <div>
                      <h3 className="text-black font-medium mb-1">Business Hours</h3>
                      <div className="text-black/70 text-sm space-y-0.5">
                        <p>Mon–Sat: 10:00 AM – 8:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small Map below contact info */}
                <div className="mt-auto pt-8">
                  <div className="bg-white rounded-xl p-4 border border-black/10 shadow-sm">
                    <h3 className="text-lg font-medium mb-3 text-center" style={displayFont}>Find Us</h3>
                    <div className="aspect-video w-full rounded-lg overflow-hidden relative bg-gradient-to-br from-neutral-100 to-neutral-200">
                      <img 
                        src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                        alt="Dubai Map"
                        className="w-full h-full object-cover opacity-90"
                      />
                      
                      {/* Location overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <a 
                            href="https://maps.app.goo.gl/zFidmBYZ8mU5ytB69" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-black text-white px-4 py-2 rounded-lg font-medium text-sm inline-block hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-black/25"
                          >
                            📍 View Map
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] h-full flex flex-col">
                <h2 className="text-2xl font-light mb-2" style={displayFont}>Send us a Message</h2>
                <p className="text-black/70 mb-6">We'd love to hear from you. Fill out the form below and we'll get back to you shortly.</p>
                
                <form className="space-y-6 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-black text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-black text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-black text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-black text-sm font-medium mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-3 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>
                </form>
                
                <button 
                  type="submit" 
                  className="w-full bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-black/25 mt-auto"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block px-6 py-6 lg:px-8 lg:py-8 rounded-3xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
              <h3 className="text-xl lg:text-3xl mb-3 font-light" style={displayFont}>Ready to restore your favorite piece?</h3>
              <p className="text-black/80 mb-4 max-w-2xl mx-auto">Start with a quick consultation and let our artisans guide you through the best options.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+971545770967" className="bg-black text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full font-semibold inline-block hover:scale-105 transition-all duration-300">
                  CALL NOW
                </a>
                <a href="https://wa.me/971545770967" className="border-2 border-black text-black px-6 lg:px-8 py-2 lg:py-3 rounded-full font-semibold inline-block hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
                  WHATSAPP US
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
