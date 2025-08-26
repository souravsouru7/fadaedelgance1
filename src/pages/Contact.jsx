import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Contact() {
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
    <div className="min-h-screen bg-black text-white">
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
        {/* Ambient background accents */}
        <div className="absolute inset-0 overflow-hidden opacity-80">
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-gradient-to-br from-[#D89F30]/10 to-[#734918]/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 -left-20 w-60 h-60 bg-gradient-to-tr from-[#734918]/10 to-[#F4B942]/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-16 right-1/4 w-52 h-52 bg-gradient-to-bl from-[#D89F30]/10 to-transparent rounded-full blur-2xl"></div>
        </div>

        <main className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          {/* Heading */}
          <div className="text-center mb-8 lg:mb-12">
            <span className="luxury-nav text-[#D89F30] text-sm tracking-[0.3em] uppercase">Contact Us</span>
            <h1 className="luxury-title text-3xl lg:text-5xl mt-4 leading-tight">Get In Touch</h1>
            <div className="mx-auto mt-5 h-px w-44 bg-gradient-to-r from-transparent via-[#D89F30] to-transparent"></div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#D89F30]/5 to-[#734918]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#D89F30]/20 h-full flex flex-col">
                <h2 className="text-[#D89F30] text-2xl font-bold mb-6">Get In Touch</h2>
                
                <div className="space-y-6 flex-1">
                  {/* Visit Us */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D89F30] to-[#734918] rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      📍
                    </div>
                    <div>
                      <h3 className="text-[#D89F30] font-semibold mb-1">Visit Us</h3>
                      <a 
                        href="https://maps.app.goo.gl/zFidmBYZ8mU5ytB69" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-[#D89F30] transition-colors text-sm"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  {/* Call / WhatsApp */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D89F30] to-[#734918] rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      📞
                    </div>
                    <div>
                      <h3 className="text-[#D89F30] font-semibold mb-1">Call / WhatsApp</h3>
                      <p className="text-white/80 text-sm">+971 54 5770967</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D89F30] to-[#734918] rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      ✉️
                    </div>
                    <div>
                      <h3 className="text-[#D89F30] font-semibold mb-1">Email</h3>
                      <p className="text-white/80 text-sm">info@fadedelegance.ae</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D89F30] to-[#734918] rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      🕒
                    </div>
                    <div>
                      <h3 className="text-[#D89F30] font-semibold mb-1">Business Hours</h3>
                      <div className="text-white/80 text-sm space-y-0.5">
                        <p>Mon–Sat: 10:00 AM – 8:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small Map below contact info */}
                <div className="mt-auto pt-8">
                  <div className="bg-gradient-to-br from-[#D89F30]/5 to-[#734918]/5 backdrop-blur-sm rounded-xl p-4 border border-[#D89F30]/20">
                    <h3 className="text-[#D89F30] text-lg font-semibold mb-3 text-center">Find Us</h3>
                    <div className="aspect-video w-full rounded-lg overflow-hidden relative bg-gradient-to-br from-slate-800 to-slate-900">
                      <img 
                        src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                        alt="Dubai Map"
                        className="w-full h-full object-cover opacity-80"
                      />
                      
                      {/* Location overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="bg-black/60 backdrop-blur-md rounded-lg p-3 mb-3 border border-[#D89F30]/30">
                            <h4 className="text-[#D89F30] text-sm font-bold mb-1">Dubai, UAE</h4>
                            <p className="text-white/90 text-xs">Premium services</p>
                          </div>
                          
                          <a 
                            href="https://maps.app.goo.gl/zFidmBYZ8mU5ytB69" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-4 py-2 rounded-lg font-medium text-sm inline-block hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#D89F30]/25"
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
              <div className="bg-gradient-to-br from-[#D89F30]/5 to-[#734918]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#D89F30]/20 h-full flex flex-col">
                <h2 className="text-[#D89F30] text-2xl font-bold mb-2">Send us a Message</h2>
                <p className="text-white/70 mb-6">We'd love to hear from you. Fill out the form below and we'll get back to you shortly.</p>
                
                <form className="space-y-6 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#D89F30] text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/5 border border-[#D89F30]/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#D89F30] focus:bg-white/10 transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#D89F30] text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/5 border border-[#D89F30]/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#D89F30] focus:bg-white/10 transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#D89F30] text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-white/5 border border-[#D89F30]/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#D89F30] focus:bg-white/10 transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-[#D89F30] text-sm font-medium mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-white/5 border border-[#D89F30]/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#D89F30] focus:bg-white/10 transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[#D89F30] text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-3 bg-white/5 border border-[#D89F30]/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#D89F30] focus:bg-white/10 transition-all resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>
                </form>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#D89F30]/25 mt-auto"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block px-6 py-6 lg:px-8 lg:py-8 rounded-3xl" style={{
              background: 'linear-gradient(135deg, rgba(216, 159, 48, 0.10) 0%, rgba(115, 73, 24, 0.06) 100%)',
              border: '2px solid rgba(216, 159, 48, 0.25)',
              backdropFilter: 'blur(20px)'
            }}>
              <h3 className="luxury-title text-xl lg:text-3xl mb-3">Ready to restore your favorite piece?</h3>
              <p className="luxury-subtitle text-white/85 mb-4 max-w-2xl mx-auto">Start with a quick consultation and let our artisans guide you through the best options.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+971545770967" className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full font-semibold inline-block hover:scale-105 transition-all duration-300">
                  CALL NOW
                </a>
                <a href="https://wa.me/971545770967" className="luxury-button border-2 border-[#D89F30] text-[#D89F30] px-6 lg:px-8 py-2 lg:py-3 rounded-full font-semibold inline-block hover:bg-[#D89F30] hover:text-white transition-all duration-300 hover:scale-105">
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
