import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Grayscale image helper
const ImageBlock = ({ src, aspect = 'aspect-[4/3]', alt = '', extra = '' }) => (
  <div className={`bg-neutral-200 ${aspect} w-full overflow-hidden ${extra}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover grayscale"/>
  </div>
)

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="max-w-[1120px] mx-auto px-4 sm:px-5 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Top hero split */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.05fr,1fr] gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[56px] font-light tracking-tight leading-[1.1] sm:leading-[1.05]">
              UNLEASHING YOUR
              <br />
              BRAND'S POTENTIAL
            </h2>
            <p className="mt-3 sm:mt-4 text-neutral-700 max-w-[460px] text-[13px] sm:text-[14px] leading-6">
              Comprehensive branding solutions that help fashion, lifestyle, and luxury brands connect
              with their target audience.
            </p>

            {/* Numbered list */}
            <div className="mt-6 sm:mt-8 border-t">
              {[
                { n: '01', t: 'BRANDING' },
                { n: '02', t: 'CAMPAIGNS' },
                { n: '03', t: 'E-COMMERCE' },
                { n: '04', t: 'SOCIAL MEDIA' }
              ].map((row) => (
                <div key={row.n} className="flex items-center justify-between py-2 sm:py-3 border-b">
                  <span className="text-[11px] sm:text-[12px] tracking-wide text-neutral-500">{row.n}</span>
                  <span className="text-[12px] sm:text-[13px] lg:text-[14px]">{row.t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ImageBlock
              aspect="h-[200px] sm:h-[240px] lg:h-[520px]"
              alt="Hero models"
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            />
          </div>
        </section>

        {/* Middle split */}
        <section className="mt-8 sm:mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-[1fr,1.05fr] gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ImageBlock
              aspect="h-[180px] sm:h-[200px] lg:h-[360px]"
              alt="Editorial group"
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-[24px] sm:text-[28px] lg:text-[56px] font-light tracking-tight">TAILORED BRAND
              <br />
              SOLUTIONS
            </h3>
            <p className="mt-3 sm:mt-4 text-neutral-700 max-w-[460px] text-[12px] sm:text-[13px] leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.
            </p>
          </div>
        </section>

        {/* Our Services grid with image */}
        <section className="mt-8 sm:mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-[1.05fr,1fr] gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <h4 className="text-[22px] sm:text-[24px] lg:text-[44px] font-light">OUR
              <br />
              SERVICES
            </h4>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {[
                { h: 'BRANDING', d: 'Establish a strong brand identity that sets you apart.' },
                { h: 'CAMPAIGNS', d: 'Utilize data and analytics to optimize marketing performance.' },
                { h: 'E-COMMERCE', d: 'Develop customized online stores that convert your brand\'s vision.' },
                { h: 'SOCIAL MEDIA', d: 'Create engaging and sharable content that grows brand awareness.' }
              ].map((card) => (
                <div key={card.h} className="border border-neutral-200 p-3 sm:p-4">
                  <div className="text-[11px] sm:text-[12px] text-neutral-500 tracking-wide">ABOUT {card.h}</div>
                  <div className="mt-2 text-[14px] sm:text-[16px]">{card.h}</div>
                  <p className="mt-2 text-neutral-700 text-[11px] sm:text-[12px] leading-6">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <ImageBlock
              aspect="h-[200px] sm:h-[240px] lg:h-[520px]"
              alt="Runway group"
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600&auto=format&fit=crop"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


