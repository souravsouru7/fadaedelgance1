import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

const CompanyInfo = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  const companyInfoStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Faded Elegance",
    "description": "Premium furniture restoration services in Dubai, specializing in luxury furniture repair, antique restoration, and premium upholstery.",
    "url": "https://fadedelegance.ae/company-info",
    "logo": "https://fadedelegance.ae/Faded%20Elegance%20Logo%20Final-07.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971545770967",
      "contactType": "customer service",
      "availableLanguage": "English, Arabic"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://maps.app.goo.gl/zFidmBYZ8mU5ytB69"
    ]
  };

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Company information data
  const companyData = {
    logo: '/Faded Elegance Logo Final-07.png',
    companyName: 'Faded Elegance',
    companySlogan: 'Where Elegance Meets Innovation',
    companyService: 'Digital Marketing & Web Development Services',
    phone: '+971 50 123 4567',
    email: 'info@fadedelegance.com',
    website: 'www.fadedelegance.com',
    gmbReview: '4.8/5 (150+ reviews)',
    gmap: 'https://maps.google.com/?q=Dubai,UAE',
    whatsapp: '+971 50 123 4567',
    facebook: 'https://facebook.com/fadedelegance',
    instagram: 'https://instagram.com/fadedelegance'
  }

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${value}`, '_self')
        break
      case 'email':
        window.open(`mailto:${value}`, '_self')
        break
      case 'website':
        window.open(`https://${value}`, '_blank')
        break
      case 'gmap':
        window.open(value, '_blank')
        break
      case 'whatsapp':
        window.open(`https://wa.me/${value.replace(/\s/g, '')}`, '_blank')
        break
      case 'facebook':
        window.open(value, '_blank')
        break
      case 'instagram':
        window.open(value, '_blank')
        break
      default:
        break
    }
  }

  const handleAddToContacts = () => {
    const sanitizedPhone = (companyData.phone || '').replace(/\s+/g, '')
    const httpsWebsite = companyData.website?.startsWith('http')
      ? companyData.website
      : `https://${companyData.website}`

    // Build a richer vCard to maximize native contact autofill support on iOS/Android
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      // Company record
      `N:;${companyData.companyName};;;`,
      `FN:${companyData.companyName}`,
      `ORG:${companyData.companyName}`,
      'X-ABShowAs:COMPANY',
      `TITLE:${companyData.companyService}`,
      `TEL;TYPE=CELL,VOICE,WORK:${sanitizedPhone}`,
      `EMAIL;TYPE=INTERNET,WORK:${companyData.email}`,
      `URL:${httpsWebsite}`,
      // ADR has 7 fields: PO Box;Extended;Street;City;Region;PostalCode;Country
      'ADR;TYPE=WORK:; ; ;Dubai; ; ;AE',
      `NOTE:${companyData.companySlogan}`,
      'END:VCARD'
    ].join('\r\n')

    const fileName = `${companyData.companyName.replace(/\s+/g, '_')}.vcf`
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })

    // Try Web Share API with files (best UX on modern mobile browsers)
    const tryWebShare = async () => {
      try {
        const file = new File([blob], fileName, { type: 'text/vcard' })
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: 'Add contact' })
          return true
        }
      } catch {
        // Ignore and fall through
      }
      return false
    }

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent || ''
    )

    const openOrDownloadVcf = async () => {
      const objectUrl = URL.createObjectURL(blob)

      if (isMobile) {
        const shared = await tryWebShare()
        if (!shared) {
          // Create a temporary link element to trigger the contacts app
          // This opens the contact form with pre-filled information
          const tempLink = document.createElement('a')
          tempLink.href = objectUrl
          tempLink.style.display = 'none'
          document.body.appendChild(tempLink)
          
          // Click the link to open contacts app with pre-filled form
          tempLink.click()
          
          // Clean up
          document.body.removeChild(tempLink)
          
          // Show a helpful message to the user
          setTimeout(() => {
            if (confirm('Contact form opened with pre-filled details!\n\nReview the information and choose:\n• "OK" to continue with the contact form\n• "Cancel" to close this message\n\nYou can then decide whether to save or cancel in the contacts app.')) {
              // User acknowledged
            }
          }, 1000)
        }
      } else {
        // Desktop: download the file
        const link = document.createElement('a')
        link.href = objectUrl
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }

      // Revoke shortly after navigation/click
      setTimeout(() => URL.revokeObjectURL(objectUrl), 4000)
    }

    openOrDownloadVcf()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <SEO 
        title="Company Information - Faded Elegance Dubai | Furniture Restoration Services"
        description="Learn about Faded Elegance, Dubai's premier furniture restoration company. Expert luxury furniture repair, antique restoration, and premium upholstery services."
        keywords="faded elegance company dubai, furniture restoration company, luxury furniture repair dubai, antique restoration company, upholstery services dubai"
        url="https://fadedelegance.ae/company-info"
        image="https://fadedelegance.ae/Faded%20Elegance%20Logo%20Final-07.png"
        structuredData={companyInfoStructuredData}
      />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center relative z-10">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <img 
                    src={companyData.logo} 
                    alt="Company Logo" 
                    className="relative h-24 w-auto object-contain z-10"
                  />
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 mb-6 leading-tight">
                {companyData.companyName}
              </h1>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                {companyData.companySlogan}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Information Grid */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Company Overview Card */}
            <div className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-white/50 shadow-2xl hover:shadow-purple-200/50 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Company Overview</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="group/item">
                    <p className="text-gray-500 text-sm mb-2">Company Name</p>
                    <p className="text-gray-800 font-semibold text-lg group-hover/item:text-purple-600 transition-colors">{companyData.companyName}</p>
                  </div>

                  <div className="group/item">
                    <p className="text-gray-500 text-sm mb-2">Services</p>
                    <p className="text-gray-800 font-semibold text-lg group-hover/item:text-purple-600 transition-colors">{companyData.companyService}</p>
                  </div>

                  <div className="group/item">
                    <p className="text-gray-500 text-sm mb-2">Rating</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-800 font-semibold">{companyData.gmbReview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className={`transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-white/50 shadow-2xl hover:shadow-blue-200/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Contact Info</h2>
                </div>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => handleContactClick('phone', companyData.phone)}
                    onMouseEnter={() => setActiveCard('phone')}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`w-full group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
                      activeCard === 'phone' 
                        ? 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300' 
                        : 'bg-white/50 hover:bg-white/80 border border-white/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeCard === 'phone' ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-110' : 'bg-blue-100'
                      }`}>
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-gray-500 text-sm">Phone</p>
                        <p className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">{companyData.phone}</p>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleContactClick('email', companyData.email)}
                    onMouseEnter={() => setActiveCard('email')}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`w-full group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
                      activeCard === 'email' 
                        ? 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300' 
                        : 'bg-white/50 hover:bg-white/80 border border-white/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeCard === 'email' ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-110' : 'bg-purple-100'
                      }`}>
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-gray-500 text-sm">Email</p>
                        <p className="text-gray-800 font-semibold group-hover:text-purple-600 transition-colors">{companyData.email}</p>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleContactClick('website', companyData.website)}
                    onMouseEnter={() => setActiveCard('website')}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`w-full group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
                      activeCard === 'website' 
                        ? 'bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300' 
                        : 'bg-white/50 hover:bg-white/80 border border-white/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeCard === 'website' ? 'bg-gradient-to-r from-green-400 to-emerald-400 scale-110' : 'bg-green-100'
                      }`}>
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-gray-500 text-sm">Website</p>
                        <p className="text-gray-800 font-semibold group-hover:text-green-600 transition-colors">{companyData.website}</p>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={handleAddToContacts}
                    onMouseEnter={() => setActiveCard('addcontact')}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`w-full group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
                      activeCard === 'addcontact' 
                        ? 'bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300' 
                        : 'bg-white/50 hover:bg-white/80 border border-white/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeCard === 'addcontact' ? 'bg-gradient-to-r from-amber-400 to-yellow-400 scale-110' : 'bg-amber-100'
                      }`}>
                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 11-4 0 2 2 0 014 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5m-2.5-2.5V22M5.121 17.804A7 7 0 1118 9m-7 12a7 7 0 01-5.879-3.196" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-gray-500 text-sm">Contacts</p>
                        <p className="text-gray-800 font-semibold group-hover:text-amber-600 transition-colors">Auto-fill Contact Form</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-white/50 shadow-2xl hover:shadow-pink-200/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Social Media</h2>
                </div>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => handleContactClick('whatsapp', companyData.whatsapp)}
                    onMouseEnter={() => setActiveCard('whatsapp')}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`w-full group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
                      activeCard === 'whatsapp' 
                        ? 'bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300' 
                        : 'bg-white/50 hover:bg-white/80 border border-white/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeCard === 'whatsapp' ? 'bg-gradient-to-r from-green-400 to-emerald-400 scale-110' : 'bg-green-100'
                      }`}>
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-gray-500 text-sm">WhatsApp</p>
                        <p className="text-gray-800 font-semibold group-hover:text-green-600 transition-colors">{companyData.whatsapp}</p>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleContactClick('facebook', companyData.facebook)}
                    onMouseEnter={() => setActiveCard('facebook')}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`w-full group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
                      activeCard === 'facebook' 
                        ? 'bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-300' 
                        : 'bg-white/50 hover:bg-white/80 border border-white/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeCard === 'facebook' ? 'bg-gradient-to-r from-blue-400 to-indigo-400 scale-110' : 'bg-blue-100'
                      }`}>
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-gray-500 text-sm">Facebook</p>
                        <p className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">@fadedelegance</p>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleContactClick('instagram', companyData.instagram)}
                    onMouseEnter={() => setActiveCard('instagram')}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`w-full group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
                      activeCard === 'instagram' 
                        ? 'bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-300' 
                        : 'bg-white/50 hover:bg-white/80 border border-white/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeCard === 'instagram' ? 'bg-gradient-to-r from-pink-400 to-purple-400 scale-110' : 'bg-pink-100'
                      }`}>
                        <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-gray-500 text-sm">Instagram</p>
                        <p className="text-gray-800 font-semibold group-hover:text-pink-600 transition-colors">@fadedelegance</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className={`mt-12 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-white/50 shadow-2xl hover:shadow-red-200/50 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Location</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <button 
                    onClick={() => handleContactClick('gmap', companyData.gmap)}
                    onMouseEnter={() => setActiveCard('gmap')}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`w-full group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                      activeCard === 'gmap' 
                        ? 'bg-gradient-to-r from-red-100 to-orange-100 border border-red-300' 
                        : 'bg-white/50 hover:bg-white/80 border border-white/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeCard === 'gmap' ? 'bg-gradient-to-r from-red-400 to-orange-400 scale-110' : 'bg-red-100'
                      }`}>
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-gray-500 text-sm">Google Maps</p>
                        <p className="text-gray-800 font-semibold text-lg group-hover:text-red-600 transition-colors">View on Google Maps</p>
                        <p className="text-gray-500 text-sm">Dubai, United Arab Emirates</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="bg-gradient-to-br from-white/50 to-white/80 rounded-2xl p-6 border border-white/30">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Visit Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience the perfect blend of innovation and elegance at our Dubai office. 
                    We're located in the heart of the city, ready to transform your digital presence 
                    with cutting-edge solutions and unparalleled creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CompanyInfo
