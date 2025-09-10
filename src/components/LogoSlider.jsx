import React from 'react'

const logos = [
  'Brands Logo-01.png',
  'Brands Logo-02.png',
  'Brands Logo-03.png',
  'Brands Logo-04.png',
  'Brands Logo-05.png',
  'Brands Logo-06.png',
  'Brands Logo-07.png',
  'Brands Logo-08.png',
  'Brands Logo-09.png',
  'Brands Logo-10.png',
  'Brands Logo-11.png',
  'Brands Logo-12.png',
  'Brands Logo-13.png',
  'Brands Logo-14.png',
  'Brands Logo-15.png',
  'Brands Logo-16.png',
  'Brands Logo-17.png',
  'Brands Logo-18.png'
]

function LogoSlider() {
  const allLogos = [...logos, ...logos]

  return (
    <div className="w-full py-8 select-none">
      <div className="overflow-hidden">
        <div className="logo-marquee flex items-center gap-12">
          {allLogos.map((fileName, idx) => (
            <div key={idx} className="shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200">
              <img
                src={`/companylogo/${fileName}`}
                alt={`Company logo ${idx + 1}`}
                className="h-12 md:h-16 object-contain"
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoSlider


