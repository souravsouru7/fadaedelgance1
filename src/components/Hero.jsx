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
            <div className="mb-5 lg:mb-6">
              <img 
                src="/fetext.png" 
                alt="Faded Elegance" 
                className="w-full max-w-md lg:max-w-xl h-auto object-contain mx-auto lg:mx-0"
              />
            </div>

            {/* Subtitle */}
            <p className="luxury-subtitle text-sm lg:text-base mb-6 lg:mb-8 text-white px-4 lg:px-0">
              WHERE LUXURY IS REBORN
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start px-4 lg:px-0">
              <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full shadow-lg text-sm lg:text-base font-semibold">
                WHO WE ARE
              </button>
              <button className="luxury-button border-2 border-white text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full hover:bg-white hover:text-[#D89F30] transition-all duration-300 relative overflow-hidden group text-sm lg:text-base font-semibold">
                <span className="relative z-10">ENQUIRE NOW</span>
                <div className="absolute inset-0 bg-white w-0 h-full transition-all duration-300 group-hover:w-full rounded-full"></div>
              </button>
            </div>
          </div>

          {/* Right Image - Hidden on mobile, shown on desktop */}
          <div className="flex-1 hidden lg:block">
            <div className="relative fade-in-up flex justify-center items-center" style={{animationDelay: '0.3s'}}>
              {/* Main image with impressive shape */}
              <div className="relative w-[500px] h-[354px]">
                {/* Glowing border effect */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
                    background: 'linear-gradient(45deg, rgba(216, 159, 48, 0.8), rgba(115, 73, 24, 0.8))',
                    transform: 'rotate(-2deg) scale(1.02)',
                    filter: 'blur(8px)',
                    zIndex: 1
                  }}
                ></div>
                
                {/* Main image */}
                <img
                  src="/mainimg.png"
                  alt="Luxury leather craftsmanship showcase"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
                    transform: 'rotate(-2deg)',
                    zIndex: 2
                  }}
                />
                
                {/* Sharp border */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
                    background: 'transparent',
                    transform: 'rotate(-2deg)',
                    border: '3px solid #D89F30',
                    zIndex: 3
                  }}
                ></div>
              </div>
              
              {/* Premium badge overlay */}
              <div className="absolute top-6 right-6 bg-[#D89F30] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg luxury-nav">
                PREMIUM
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-[#D89F30]/30 to-[#734918]/20 rounded-full blur-lg"></div>
              <div className="absolute bottom-12 right-12 w-16 h-16 bg-gradient-to-tl from-[#D89F30]/20 to-[#734918]/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}