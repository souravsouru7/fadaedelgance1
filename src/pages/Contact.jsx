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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-12 lg:mb-16">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="rounded-3xl p-5 lg:p-6" style={{
                background: 'linear-gradient(135deg, rgba(216,159,48,0.10) 0%, rgba(115,73,24,0.06) 100%)',
                border: '1px solid rgba(216,159,48,0.25)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.35)'
              }}>
                <h2 className="luxury-nav text-[#D89F30] text-xl lg:text-2xl mb-4 tracking-wide">Contact Information</h2>
                
                <div className="space-y-4">
                  {/* Visit Us */}
                  <div className="flex items-start gap-4">
                    <div className="text-xl">📍</div>
                    <div>
                      <h3 className="luxury-nav text-[#D89F30] text-base font-semibold mb-1">Visit Us</h3>
                      <a 
                        href="https://maps.app.goo.gl/zFidmBYZ8mU5ytB69" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/90 text-sm lg:text-base hover:text-[#D89F30] transition-colors underline"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  {/* Call / WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="text-xl">📞</div>
                    <div>
                      <h3 className="luxury-nav text-[#D89F30] text-base font-semibold mb-1">Call / WhatsApp</h3>
                      <p className="text-white/90 text-sm lg:text-base">+971 54 5770967</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="text-xl">✉️</div>
                    <div>
                      <h3 className="luxury-nav text-[#D89F30] text-base font-semibold mb-1">Email</h3>
                      <p className="text-white/90 text-sm lg:text-base">info@fadedelegance.ae</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="text-xl">🕒</div>
                    <div>
                      <h3 className="luxury-nav text-[#D89F30] text-base font-semibold mb-1">Business Hours</h3>
                      <div className="text-white/90 text-sm lg:text-base space-y-0.5">
                        <p>Mon–Sat: 10:00 AM – 8:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl p-5 lg:p-6" style={{
              background: 'linear-gradient(135deg, rgba(216,159,48,0.10) 0%, rgba(115,73,24,0.06) 100%)',
              border: '1px solid rgba(216,159,48,0.25)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.35)'
            }}>
              <h2 className="luxury-nav text-[#D89F30] text-xl lg:text-2xl mb-4 tracking-wide">Contact Form</h2>
              <p className="luxury-subtitle text-white/85 text-sm lg:text-base mb-4">
                Or simply fill out our contact form and we'll get back to you shortly.
              </p>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#D89F30] text-sm font-semibold mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-black/50 border border-[#D89F30]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D89F30] transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#D89F30] text-sm font-semibold mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-black/50 border border-[#D89F30]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D89F30] transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[#D89F30] text-sm font-semibold mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-black/50 border border-[#D89F30]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D89F30] transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-[#D89F30] text-sm font-semibold mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 bg-black/50 border border-[#D89F30]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D89F30] transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-[#D89F30] text-sm font-semibold mb-1">Message</label>
                  <textarea 
                    rows="3"
                    className="w-full px-3 py-2 bg-black/50 border border-[#D89F30]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D89F30] transition-colors resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 py-3 rounded-full font-semibold text-base hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-12 lg:mb-16">
            <div className="rounded-3xl overflow-hidden" style={{
              background: 'linear-gradient(135deg, rgba(216,159,48,0.10) 0%, rgba(115,73,24,0.06) 100%)',
              border: '1px solid rgba(216,159,48,0.25)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.35)'
            }}>
              <div className="p-5 lg:p-6">
                <h2 className="luxury-nav text-[#D89F30] text-xl lg:text-2xl mb-4 tracking-wide text-center">Find Us</h2>
                                 <div className="aspect-video w-full rounded-2xl overflow-hidden relative">
                   <div className="w-full h-full relative">
                     {/* Map Image Background */}
                     <img 
                       src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                       alt="Dubai Map"
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                     />
                     
                     {/* Fallback if image doesn't load */}
                     <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center" style={{display: 'none'}}>
                       <div className="text-center p-8">
                         <div className="text-8xl mb-8 filter drop-shadow-lg">🗺️</div>
                         <h3 className="luxury-nav text-[#D89F30] text-4xl mb-6 tracking-wide">Our Location</h3>
                         <p className="text-white/90 text-2xl mb-8 font-light tracking-wide">Dubai, United Arab Emirates</p>
                       </div>
                     </div>
                     
                     {/* Overlay with location info */}
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                       <div className="text-center p-8 relative z-10">
                         <div className="bg-gradient-to-r from-[#D89F30]/20 to-[#734918]/20 backdrop-blur-md rounded-2xl p-8 mb-8 border border-[#D89F30]/30 shadow-2xl">
                           <div className="flex items-center justify-center gap-3 mb-4">
                             <div className="w-3 h-3 bg-[#D89F30] rounded-full animate-pulse"></div>
                             <p className="text-white text-lg font-medium tracking-wide">Premium Location</p>
                             <div className="w-3 h-3 bg-[#D89F30] rounded-full animate-pulse"></div>
                           </div>
                           <h3 className="luxury-nav text-[#D89F30] text-3xl mb-4 tracking-wide">Dubai, UAE</h3>
                           <p className="text-white/90 text-lg font-light">📍 Click below to discover our exact location</p>
                         </div>
                         
                         <a 
                           href="https://maps.app.goo.gl/zFidmBYZ8mU5ytB69" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="luxury-button bg-gradient-to-r from-[#D89F30] via-[#F4B942] to-[#734918] text-white px-12 py-5 rounded-full font-semibold text-xl inline-block hover:scale-105 transition-all duration-300 shadow-2xl border border-[#D89F30]/30 hover:shadow-[#D89F30]/25 hover:shadow-2xl"
                         >
                           📍 EXPLORE LOCATION
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
                <div className="text-center mt-4">
                  <a 
                    href="https://maps.app.goo.gl/zFidmBYZ8mU5ytB69" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 py-3 rounded-full font-semibold inline-block hover:scale-105 transition-all duration-300"
                  >
                    OPEN IN GOOGLE MAPS
                  </a>
                </div>
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
