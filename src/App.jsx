import React, { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Loading from './components/Loading'
import WhyChooseUs from './components/WhyChooseUs'
import WorkProcess from './components/WorkProcess'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SEO from './components/SEO'
import SEOOptimizer from './components/SEOOptimizer'
import Watermark from './components/Watermark'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Faded Elegance",
    "description": "Premium furniture restoration services in Dubai. Specializing in luxury furniture repair, antique restoration, and premium upholstery.",
    "url": "https://fadedelegance.ae",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fadedelegance.ae/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('fe_has_visited')
    if (hasVisited) {
      setIsLoading(false)
      return
    }

    const timer = setTimeout(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('fe_has_visited', 'true')
      }, 300) 
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      <SEOOptimizer />
      <SEO 
        title="Faded Elegance - Premium Furniture Restoration Dubai | Luxury Furniture Repair"
        description="Expert furniture restoration services in Dubai. Specializing in luxury furniture repair, antique restoration, and premium upholstery. Transform your furniture with our master craftsmen. Call +971 54 5770967"
        keywords="furniture restoration dubai, luxury furniture repair, antique furniture restoration, upholstery dubai, furniture refinishing, wood restoration, leather repair dubai, furniture repair services"
        url="https://fadedelegance.ae"
        image="https://fadedelegance.ae/Faded%20Elegance%20Logo%20Final-07.png"
        structuredData={homeStructuredData}
      />

      {isLoading && (
        <div 
          className={`absolute inset-0 z-50 transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Loading />
        </div>
      )}
      {/* Background watermark */}
      <Watermark />

      <div 
        className={`relative z-10 transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Hero />
        <WhyChooseUs />
        <WorkProcess />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default App
