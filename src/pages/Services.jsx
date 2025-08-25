import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Reliable image with multiple fallbacks and skeleton
const FallbackImage = ({ sources, alt, className = '' }) => {
  const sourceList = Array.isArray(sources) ? sources : [sources]
  const [loaded, setLoaded] = useState(false)
  const [index, setIndex] = useState(0)

  const fallback = 'data:image/svg+xml;utf8,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">\
    <defs>\
      <linearGradient id="g" x1="0" x2="1">\
        <stop offset="0%" stop-color="%23e5e7eb"/>\
        <stop offset="100%" stop-color="%23f3f4f6"/>\
      </linearGradient>\
    </defs>\
    <rect width="400" height="300" fill="url(%23g)"/>\
  </svg>'

  const currentSrc = sourceList[index] || fallback

  return (
    <div className={`relative ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-neutral-200" />}
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover grayscale ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (index < sourceList.length - 1) {
            setIndex(index + 1)
          } else {
            // show fallback silently
            setIndex(sourceList.length)
            setLoaded(true)
          }
        }}
      />
    </div>
  )
}

// Image card component (premium)
const ImageCard = ({ sources, title, subtitle, tags = [] }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
    <FallbackImage sources={sources} alt={title} className="h-56 sm:h-64 lg:h-72 w-full" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
      <div className="text-[11px] sm:text-[12px] opacity-90">{subtitle}</div>
      <div className="text-lg sm:text-xl font-medium mt-1 tracking-wide">{title}</div>
      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-[10px] sm:text-[11px] px-2 py-1 bg-white/10 rounded-full backdrop-blur border border-white/15">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute -inset-[1px] rounded-2xl" style={{
        background: 'radial-gradient(1200px 300px at 0% 100%, rgba(0,0,0,0.15), transparent 60%)'
      }} />
    </div>
  </div>
)

const TABS = [
  {
    key: 'reborn',
    label: 'Reborn',
    blurb: 'Where timeless pieces are renewed with expert care.',
    cards: [
      {
        title: 'Handbag Restoration',
        subtitle: 'Clean • Restore • Detail',
        sources: [
          'https://images.unsplash.com/photo-1592878904946-b3cd9e8f2c8f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://picsum.photos/seed/handbag/1600/900'
        ],
        tags: ['Cleaning', 'Color', 'Stitching', 'Hardware']
      },
      {
        title: 'Shoes (Men & Women)',
        subtitle: 'Shine • Repair • Comfort',
        sources: [
          'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9b?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://picsum.photos/seed/shoes/1600/900'
        ],
        tags: ['Sole', 'Heel', 'Stretch', 'Shine']
      },
      {
        title: 'Wallet Detailing',
        subtitle: 'Refinish • Repair • Personalize',
        sources: [
          'https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://picsum.photos/seed/wallet/1600/900'
        ],
        tags: ['Edges', 'Zipper', 'Hardware', 'Color']
      },
      {
        title: 'Sandals Care',
        subtitle: 'Refresh • Repair • Refine',
        sources: [
          'https://images.unsplash.com/photo-1520975731276-1c7ed1f9e1f5?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://picsum.photos/seed/sandals/1600/900'
        ],
        tags: ['Straps', 'Sole', 'Tips', 'Color']
      }
    ]
  },
  {
    key: 'signature',
    label: 'Signature',
    blurb: 'Luxury personalization with your unique style.',
    cards: [
      {
        title: 'Handbag Custom',
        subtitle: 'Color • Artwork • Hardware',
        sources: [
          'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://picsum.photos/seed/handbag2/1600/900'
        ],
        tags: ['Custom Color', 'Artwork', 'Upgrades']
      },
      {
        title: 'Bespoke Shoes',
        subtitle: 'Patterns • Shine • Finish',
        sources: [
          'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://picsum.photos/seed/shoes2/1600/900'
        ],
        tags: ['Patterns', 'Mirror Shine', 'Unique Finish']
      },
      {
        title: 'Wallet Personal',
        subtitle: 'Tones • Detailing • Premium',
        sources: [
          'https://images.unsplash.com/photo-1555529771-35a38f2345fd?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://picsum.photos/seed/wallet2/1600/900'
        ],
        tags: ['Signature Tones', 'Accents', 'Hardware']
      },
      {
        title: 'Sandals Design',
        subtitle: 'Exclusive • Artistic • Refined',
        sources: [
          'https://images.unsplash.com/photo-1520975855684-5cc8439b5f2b?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://picsum.photos/seed/sandals2/1600/900'
        ],
        tags: ['Exclusive', 'Artistic', 'Refined']
      }
    ]
  },
  {
    key: 'kids',
    label: 'Kids',
    blurb: 'Fun, colorful, and creative for the little ones.',
    cards: [
      {
        title: 'Kids Shoes',
        subtitle: 'Bright • Playful • Personalized',
        sources: [
          'https://images.unsplash.com/photo-1520975693411-6c7094a0d593?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://picsum.photos/seed/kids1/1600/900'
        ],
        tags: ['Color', 'Artwork']
      },
      {
        title: 'Kids Bags',
        subtitle: 'Creative • Unique • Personal',
        sources: [
          'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://picsum.photos/seed/kids2/1600/900'
        ],
        tags: ['Patterns', 'Artwork']
      }
    ]
  }
]

export default function Services() {
  const [active, setActive] = useState('reborn')
  const current = TABS.find((t) => t.key === active) || TABS[0]

  // Page-scoped premium fonts (no global change)
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600&display=swap'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  const pageFont = { fontFamily: 'Manrope, system-ui, Arial, sans-serif' }
  const displayFont = { fontFamily: 'Cormorant Garamond, serif' }

  return (
    <div className="min-h-screen bg-white text-black" style={pageFont}>
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(60% 50% at 20% -10%, rgba(0,0,0,0.05), transparent 60%), radial-gradient(50% 40% at 100% 120%, rgba(0,0,0,0.05), transparent 60%)'
        }} />
        <div className="relative max-w-[1120px] mx-auto px-4 sm:px-5 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-6 sm:gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[28px] sm:text-[36px] lg:text-[56px] font-light leading-[1.08] tracking-tight" style={displayFont}>
                Care. Restore. Customize.
              </h1>
              <p className="mt-3 sm:mt-4 max-w-xl text-[13px] sm:text-[14px] text-neutral-700">
                Premium restoration and bespoke customization for handbags, shoes, wallets, and more.
              </p>

              {/* Tabs */}
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                {TABS.map((t) => {
                  const isActive = active === t.key
                  return (
                    <button
                      key={t.key}
                      onClick={() => setActive(t.key)}
                      className={`px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] rounded-full border transition ${
                        isActive ? 'bg-black text-white border-black shadow-[0_10px_25px_rgba(0,0,0,0.15)]' : 'bg-white text-black border-black/20 hover:border-black'
                      }`}
                    >
                      {t.label}
                    </button>
                  )
                })}
              </div>

              <div className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] text-neutral-600">
                {current.blurb}
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
                <FallbackImage
                  sources={[
                    current.cards[0]?.sources?.[0],
                    current.cards[0]?.sources?.[1],
                    'https://picsum.photos/seed/fallback-hero/1600/900'
                  ]}
                  alt={current.cards[0]?.title || 'services'}
                  className="h-[220px] sm:h-[280px] lg:h-[420px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <main className="max-w-[1120px] mx-auto px-4 sm:px-5 lg:px-8 pb-12 sm:pb-16 lg:pb-24">
        <section className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {current.cards.map((c) => (
            <ImageCard key={c.title} {...c} />
          ))}
        </section>

        {/* CTA strip */}
        <section className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-black">
            <FallbackImage
              sources={[
                'https://images.unsplash.com/photo-1549575810-39f0ebd28fe3?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
                'https://picsum.photos/seed/cta/1600/900'
              ]}
              alt="craft"
              className="absolute inset-0 w-full h-full opacity-20"
            />
            <div className="relative px-5 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 text-white">
              <h3 className="text-[20px] sm:text-[24px] lg:text-[32px] font-light" style={displayFont}>Luxury deserves to last</h3>
              <p className="mt-2 text-[12px] sm:text-[13px] max-w-2xl opacity-90">
                Every item receives meticulous attention to detail—from restoration to personalization—so it looks as elegant as the day you first owned it.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


