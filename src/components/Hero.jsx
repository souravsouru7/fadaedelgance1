import React, { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const LogoSlider = lazy(() => import('./LogoSlider'))

export default function Hero() {
  const navigate = useNavigate()

  const handleWhoWeAre = () => {
    navigate('/about')
  }

  const handleEnquireNow = () => {
    navigate('/contact')
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center' }}
      >
        <source src="/load.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen">
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row items-center min-h-[70vh] lg:min-h-[80vh] px-4 lg:px-10 pt-2 lg:pt-0">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl fade-in-up text-center lg:text-left mb-2 lg:mb-0">
            {/* Main Title */}
            <div className="mb-1 lg:mb-1">
              <img 
                src="/fetext.png" 
                alt="Faded Elegance" 
                className="w-full max-w-lg lg:max-w-2xl h-auto object-contain mx-auto lg:mx-0"
              />
            </div>

            {/* Subtitle */}
            <div className="mb-6 lg:mb-8">
              <p className="luxury-subtitle text-lg lg:text-xl mb-2 text-white px-4 lg:px-0 text-center max-w-md lg:max-w-xl mx-auto lg:mx-0">
                WHERE LUXURY IS REBORN
              </p>
              
              <p className="luxury-subtitle text-base lg:text-lg text-white px-4 lg:px-0 text-center max-w-md lg:max-w-xl mx-auto lg:mx-0 opacity-90">
                premium leather restoration
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center px-4 lg:px-0 max-w-md lg:max-w-xl mx-auto lg:mx-0">
              <button 
                onClick={handleWhoWeAre}
                className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 text-sm lg:text-base font-semibold cursor-pointer"
              >
                WHO WE ARE
              </button>
              <button 
                onClick={handleEnquireNow}
                className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 text-sm lg:text-base font-semibold cursor-pointer"
              >
                ENQUIRE NOW
              </button>
            </div>

          </div>

          
        </main>

        {/* Full-width Brand Logos outside inner container */}
        <div className="-mt-2 md:-mt-4 lg:-mt-6 w-screen" style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
          <Suspense fallback={null}>
            <LogoSlider />
          </Suspense>
        </div>
      </div>
    </div>
  )
}