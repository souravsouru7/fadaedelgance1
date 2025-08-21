import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <img 
          src="/fvlogo.png" 
          alt="Faded Elegance Logo" 
          className="w-32 h-32 lg:w-48 lg:h-48 object-contain mb-6"
        />
        {/* Loading Text */}
       
      </div>
    </div>
  )
}
