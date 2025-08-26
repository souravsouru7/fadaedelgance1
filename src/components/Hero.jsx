import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
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
        <main className="flex flex-col lg:flex-row items-center min-h-[70vh] lg:min-h-[80vh] px-4 lg:px-10 pt-8 lg:pt-0">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl fade-in-up text-center lg:text-left mb-8 lg:mb-0">
            {/* Main Title */}
            <div className="mb-1 lg:mb-1">
              <img 
                src="/fetext.png" 
                alt="Faded Elegance" 
                className="w-full max-w-md lg:max-w-xl h-auto object-contain mx-auto lg:mx-0"
              />
            </div>

            {/* Subtitle */}
            <p className="luxury-subtitle text-lg lg:text-xl mb-6 lg:mb-8 text-white px-4 lg:px-0 text-center max-w-md lg:max-w-xl mx-auto lg:mx-0">
              WHERE LUXURY IS REBORN
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center px-4 lg:px-0 max-w-md lg:max-w-xl mx-auto lg:mx-0">
              <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 text-sm lg:text-base font-semibold">
                WHO WE ARE
              </button>
              <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 text-sm lg:text-base font-semibold">
                ENQUIRE NOW
              </button>
            </div>
          </div>

          
        </main>
      </div>
    </div>
  )
}