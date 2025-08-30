import React from 'react'

const Watermark = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large diagonal watermark */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-[0.04] transform -rotate-45 scale-150"
        style={{
          fontSize: 'clamp(8rem, 20vw, 20rem)',
          fontWeight: 100,
          letterSpacing: '0.1em',
          color: '#000000',
          fontFamily: 'Cormorant Garamond, serif'
        }}
      >
        Faded Elegance
      </div>
      
      {/* Additional smaller watermarks for coverage */}
      <div 
        className="absolute top-1/4 left-1/4 opacity-[0.03] transform rotate-12 scale-75"
        style={{
          fontSize: 'clamp(4rem, 10vw, 10rem)',
          fontWeight: 100,
          letterSpacing: '0.1em',
          color: '#000000',
          fontFamily: 'Cormorant Garamond, serif'
        }}
      >
        Faded Elegance
      </div>
      
      <div 
        className="absolute bottom-1/4 right-1/4 opacity-[0.03] transform -rotate-12 scale-75"
        style={{
          fontSize: 'clamp(4rem, 10vw, 10rem)',
          fontWeight: 100,
          letterSpacing: '0.1em',
          color: '#000000',
          fontFamily: 'Cormorant Garamond, serif'
        }}
      >
        Faded Elegance
      </div>
      
      {/* Corner watermarks */}
      <div 
        className="absolute top-8 left-8 opacity-[0.025] transform rotate-45 scale-50"
        style={{
          fontSize: 'clamp(2rem, 5vw, 5rem)',
          fontWeight: 100,
          letterSpacing: '0.1em',
          color: '#000000',
          fontFamily: 'Cormorant Garamond, serif'
        }}
      >
        Faded Elegance
      </div>
      
      <div 
        className="absolute bottom-8 right-8 opacity-[0.025] transform -rotate-45 scale-50"
        style={{
          fontSize: 'clamp(2rem, 5vw, 5rem)',
          fontWeight: 100,
          letterSpacing: '0.1em',
          color: '#000000',
          fontFamily: 'Cormorant Garamond, serif'
        }}
      >
        Faded Elegance
      </div>
    </div>
  )
}

export default Watermark
