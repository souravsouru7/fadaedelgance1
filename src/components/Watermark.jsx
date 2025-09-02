import React from 'react'

const Watermark = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large diagonal watermark */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-[0.04] transform -rotate-45 scale-150"
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <img
          src="/bck.png"
          alt="Faded Elegance watermark"
          className="max-w-none select-none"
          style={{
            width: 'clamp(30rem, 60vw, 80rem)',
            height: 'auto',
            filter: 'grayscale(100%)',
            opacity: 1
          }}
        />
      </div>
      
      {/* Additional smaller watermarks for coverage */}
      <div 
        className="absolute top-1/4 left-1/4 opacity-[0.03] transform rotate-12 scale-75"
        style={{
          width: 'clamp(12rem, 25vw, 28rem)'
        }}
      >
        <img
          src="/bck.png"
          alt="Faded Elegance watermark"
          className="max-w-none select-none"
          style={{
            width: '100%',
            height: 'auto',
            filter: 'grayscale(100%)'
          }}
        />
      </div>
      
      <div 
        className="absolute bottom-1/4 right-1/4 opacity-[0.03] transform -rotate-12 scale-75"
        style={{
          width: 'clamp(12rem, 25vw, 28rem)'
        }}
      >
        <img
          src="/bck.png"
          alt="Faded Elegance watermark"
          className="max-w-none select-none"
          style={{
            width: '100%',
            height: 'auto',
            filter: 'grayscale(100%)'
          }}
        />
      </div>
      
      {/* Corner watermarks */}
      <div 
        className="absolute top-8 left-8 opacity-[0.025] transform rotate-45 scale-50"
        style={{
          width: 'clamp(8rem, 15vw, 16rem)'
        }}
      >
        <img
          src="/bck.png"
          alt="Faded Elegance watermark"
          className="max-w-none select-none"
          style={{
            width: '100%',
            height: 'auto',
            filter: 'grayscale(100%)'
          }}
        />
      </div>
      
      <div 
        className="absolute bottom-8 right-8 opacity-[0.025] transform -rotate-45 scale-50"
        style={{
          width: 'clamp(8rem, 15vw, 16rem)'
        }}
      >
        <img
          src="/bck.png"
          alt="Faded Elegance watermark"
          className="max-w-none select-none"
          style={{
            width: '100%',
            height: 'auto',
            filter: 'grayscale(100%)'
          }}
        />
      </div>
    </div>
  )
}

export default Watermark
