import React, { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Loading from './components/Loading'
import WhyChooseUs from './components/WhyChooseUs'
import WorkProcess from './components/WorkProcess'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

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

      {isLoading && (
        <div 
          className={`absolute inset-0 z-50 transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Loading />
        </div>
      )}
      
    
      <div 
        className={`transition-opacity duration-700 ${
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
