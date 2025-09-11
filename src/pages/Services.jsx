import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

// Helpers to make URL param matching resilient to label edits
const normalize = (str) => (str || '')
  .toString()
  .toLowerCase()
  .normalize('NFKD')
  .replace(/\p{Diacritic}/gu, '')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim()

// Map navbar subcategory labels to card titles
const aliasMap = {
  reborn: {
    'handbag wallet': 'Handbag & Wallet',
    'handbag & wallet': 'Handbag & Wallet',
    'shoes sandals': 'Shoes & Sandals (Men & Women)',
    'shoes & sandals': 'Shoes & Sandals (Men & Women)',
    'shoes & sandals (men & women)': 'Shoes & Sandals (Men & Women)'
  },
  signature: {
    'handbag wallet': 'Handbag & Wallet',
    'handbag & wallet': 'Handbag & Wallet',
    'shoes sandals': 'Shoes & Sandals (Men & Women)',
    'shoes & sandals': 'Shoes & Sandals (Men & Women)',
    'shoes & sandals (men & women)': 'Shoes & Sandals (Men & Women)'
  },
  kids: {
    'kids shoes': 'Kids Shoes',
    'kids bags': 'Kids Bags'
  }
}

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
        className={`w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
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
const ImageCard = ({ sources, title, subtitle, tags = [], onClick }) => (
  <div 
    className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] cursor-pointer"
    onClick={onClick}
  >
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

// Service Detail Modal for individual services
const ServiceDetailModal = ({ isOpen, onClose, serviceDetail, parentService }) => {
  if (!isOpen || !serviceDetail) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-3xl h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 backdrop-blur hover:bg-black/20 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image */}
          <div className="w-full lg:w-1/2 h-full min-h-[280px]">
            <FallbackImage
              sources={serviceDetail.images}
              alt={serviceDetail.title}
              className="w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
            <div className="text-xs text-neutral-500 mb-2">{parentService?.title}</div>
            <h2 className="text-xl lg:text-2xl font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {serviceDetail.title}
            </h2>
            <p className="text-sm text-neutral-600 mb-4">{serviceDetail.description}</p>
            
            {serviceDetail.process && (
              <div className="mb-6">
                <h3 className="font-medium text-sm mb-3">Our Process:</h3>
                <div className="space-y-2">
                  {serviceDetail.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="mt-1 text-xs bg-black text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <div className="text-sm text-neutral-700">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {serviceDetail.benefits && (
              <div className="mb-6">
                <h3 className="font-medium text-sm mb-3">Benefits:</h3>
                <div className="space-y-2">
                  {serviceDetail.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="mt-1 text-green-500">✓</span>
                      <div className="text-sm text-neutral-700">{benefit}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {serviceDetail.additionalInfo && (
              <div className="p-4 bg-neutral-50 rounded-lg">
                <p className="text-sm text-neutral-700">{serviceDetail.additionalInfo}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Service Modal component
const ServiceModal = ({ isOpen, onClose, service, onServiceClick }) => {
  if (!isOpen || !service) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 backdrop-blur hover:bg-black/20 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image */}
          <div className="w-full lg:w-1/2 h-full min-h-[300px]">
            <FallbackImage
              sources={service.sources}
              alt={service.title}
              className="w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
            <h2 className="text-2xl lg:text-3xl font-light mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {service.title}
            </h2>
            <p className="text-sm text-neutral-600 mb-6">{service.subtitle}</p>
            
            <div className="space-y-3">
              {service.details?.map((detail, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors"
                  onClick={() => onServiceClick(detail)}
                >
                  <span className="mt-1 text-neutral-400">●</span>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{detail.title}</div>
                    <div className="text-sm text-neutral-600 mt-1">{detail.description}</div>
                  </div>
                  <svg className="w-4 h-4 text-neutral-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>

            {service.additionalInfo && (
              <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
                <p className="text-sm text-neutral-700">{service.additionalInfo}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Service detail data - only services that are in navbar
const SERVICE_DETAILS = {
  // Reborn Collection Services
  'Cleaning & Conditioning': {
    title: 'Cleaning & Conditioning',
    description: 'Deep cleaning and moisturizing to refresh leather.',
    images: [
      '/nowimages/1000048222.jpg',
      '/nowimages/Cleaning & Conditioning.jpg'
    ],
    process: [
      'Assessment of leather type and condition',
      'Gentle surface cleaning with specialized products',
      'Deep conditioning with premium leather oils',
      'Buffing and polishing for natural shine',
      'Final inspection and quality check'
    ],
    benefits: [
      'Restores natural leather suppleness',
      'Removes dirt and grime buildup',
      'Prevents leather from drying and cracking',
      'Enhances natural color and texture',
      'Extends the life of your leather items'
    ],
    additionalInfo: 'Our cleaning process uses only premium, pH-balanced products that are safe for all types of leather, including exotic skins and vintage pieces.'
  },
  'Color Restoration': {
    title: 'Color Restoration',
    description: 'Reviving faded or discolored items to their original charm.',
    images: [
      '/nowimages/Color Restoration.jpg',
      '/nowimages/Cleaning & Conditioning.jpg'
    ],
    process: [
      'Color analysis and matching',
      'Surface preparation and cleaning',
      'Application of color restoration products',
      'Multiple layers for depth and richness',
      'Sealing and protection treatment'
    ],
    benefits: [
      'Brings back original color vibrancy',
      'Covers scratches and scuffs',
      'Uniform color distribution',
      'Long-lasting color protection',
      'Professional finish that looks natural'
    ],
    additionalInfo: 'Our skilled artists use expert color matching and multi-tone shading techniques to recreate the authentic look and feel of your leather item—ensuring seamless restoration and flawless texture.'
  },
  'Stitching & Edging': {
    title: 'Stitching & Edging',
    description: 'Repairing loose stitches and edges for a refined finish.',
    images: [
      '/nowimages/Fine Stitch Detailing.jpg',
      '/FE%20JPEG/pexels-geyonk-1152077.jpg'
    ],
    process: [
      'Inspection of damaged areas',
      'Thread matching and selection',
      'Precise stitch repair or replacement',
      'Edge refinishing and sealing',
      'Quality testing and reinforcement'
    ],
    benefits: [
      'Restores structural integrity',
      'Prevents further damage',
      'Maintains original design aesthetics',
      'Extends item lifespan',
      'Professional finish quality'
    ],
    additionalInfo: 'Our expert craftsmen use traditional techniques combined with modern tools to ensure every stitch matches the original quality.'
  },
  'Zipper Repair & Replacement': {
    title: 'Zipper Repair & Replacement',
    description: 'Fixing or replacing zippers for smooth use.',
    images: [
      '/nowimages/zip.jpg',
      '/nowimages/zip.jpg'
    ],
    process: [
      'Zipper functionality assessment',
      'Repair vs replacement decision',
      'Precise removal of damaged zipper',
      'Installation of new zipper',
      'Testing and adjustment for smooth operation'
    ],
    benefits: [
      'Restores full functionality',
      'Prevents further damage',
      'Smooth opening and closing',
      'Durable and long-lasting',
      'Maintains original appearance'
    ],
    additionalInfo: 'We source high-quality zippers that match your item\'s original specifications and ensure perfect installation.'
  },
  'Hardware Repair & Replacement': {
    title: 'Hardware Repair & Replacement',
    description: 'Restoring metal clasps, locks, and buckles.',
    images: [
      '/nowimages/repair.jpg',
      '/nowimages/repair.jpg'
    ],
    process: [
      'Hardware condition evaluation',
      'Cleaning and restoration attempt',
      'Replacement if necessary',
      'Precise installation and alignment',
      'Functionality testing'
    ],
    benefits: [
      'Restores security and functionality',
      'Maintains original design',
      'Prevents further damage',
      'Professional finish',
      'Long-lasting durability'
    ],
    additionalInfo: 'We can restore most hardware to like-new condition or source authentic replacements when needed.'
  },
  'Stitching': {
    title: 'Stitching',
    description: 'Repairing seams for durability.',
    images: [
      '/nowimages/Fine Stitch Detailing.jpg',
      '/nowimages/1000048222.jpg'
    ],
    process: [
      'Seam inspection and damage assessment',
      'Thread selection and color matching',
      'Precise stitch repair or reinforcement',
      'Quality testing for durability',
      'Final finishing and inspection'
    ],
    benefits: [
      'Restores structural integrity',
      'Prevents further seam damage',
      'Maintains original appearance',
      'Extends shoe lifespan',
      'Professional repair quality'
    ],
    additionalInfo: 'We use industrial-grade thread and techniques to ensure your shoes maintain their original strength and appearance.'
  },
  'Shoe Stretching': {
    title: 'Shoe Stretching',
    description: 'Adjusting size for perfect comfort.',
    images: [
      '/nowimages/ShoeStretching.jpg',
      '/nowimages/s.jpg'
    ],
    process: [
      'Foot measurement and analysis',
      'Shoe material assessment',
      'Gradual stretching process',
      'Comfort testing and adjustment',
      'Final fit verification'
    ],
    benefits: [
      'Perfect fit for your feet',
      'Eliminates discomfort',
      'Preserves shoe integrity',
      'Professional stretching technique',
      'Long-lasting comfort'
    ],
    additionalInfo: 'Our stretching process is gentle and gradual, ensuring your shoes maintain their shape while achieving the perfect fit.'
  },
  'Heel & Sole Repair': {
    title: 'Heel & Sole Repair',
    description: 'Fixing worn heels, adding new soles, or sole guards.',
    images: [
      '/nowimages/Stitching.jpg',
      '/nowimages/Stitching.jpg'
    ],
    process: [
      'Heel and sole condition assessment',
      'Repair vs replacement decision',
      'Precise removal of damaged parts',
      'Installation of new heels or soles',
      'Quality testing and adjustment'
    ],
    benefits: [
      'Restores full functionality',
      'Extends shoe lifespan',
      'Improves comfort and safety',
      'Professional finish',
      'Durable and long-lasting'
    ],
    additionalInfo: 'We use high-quality materials that match your shoes\' original specifications for seamless repair.'
  },
  // Signature Collection Services
  'Custom Coloring & Patterns': {
    title: 'Custom Coloring & Patterns',
    description: 'Exclusive colors to match your personality.',
    images: [
      '/nowimages/1000048222.jpg',
      '/nowimages/1000048222.jpg'
    ],
    process: [
      'Design consultation and planning',
      'Color and pattern selection',
      'Surface preparation',
      'Custom application process',
      'Sealing and protection'
    ],
    benefits: [
      'Unique personalized design',
      'Reflects your style',
      'High-quality finish',
      'Long-lasting results',
      'Professional execution'
    ],
    additionalInfo: 'Work with our design team to create a truly unique piece that reflects your personal style.'
  },
  'Customized Artwork': {
    title: 'Customized Artwork',
    description: 'Artistic hand designs for uniqueness.',
    images: [
      '/nowimages/Color Restoration.jpg',
      '/nowimages/Color Restoration.jpg'
    ],
    process: [
      'Artwork concept development',
      'Design approval and refinement',
      'Surface preparation',
      'Hand-painted application',
      'Protective coating application'
    ],
    benefits: [
      'Truly unique piece',
      'Personalized design',
      'Professional artwork quality',
      'Protected and durable',
      'Conversation starter'
    ],
    additionalInfo: 'Our artists can create anything from subtle monograms to elaborate custom artwork that tells your story.'
  },
  'Hardware & Zipper Upgrades': {
    title: 'Hardware & Zipper Upgrades',
    description: 'Luxury-level detailing.',
    images: [
      '/nowimages/zip.jpg',
      '/nowimages/zip.jpg'
    ],
    process: [
      'Design consultation',
      'Hardware selection and sourcing',
      'Precise installation',
      'Quality testing',
      'Final inspection'
    ],
    benefits: [
      'Enhanced functionality',
      'Premium appearance',
      'Long-lasting durability',
      'Professional finish',
      'Unique customization'
    ],
    additionalInfo: 'Upgrade your handbag with premium hardware that enhances both function and style.'
  },
  'Fine Stitch Detailing': {
    title: 'Fine Stitch Detailing',
    description: 'Elegant refinishing of seams.',
    images: [
      '/nowimages/Fine Stitch Detailing.jpg',
      '/nowimages/Stitching.jpg'
    ],
    process: [
      'Seam inspection and planning',
      'Thread selection and matching',
      'Precise stitch application',
      'Quality testing',
      'Final finishing'
    ],
    benefits: [
      'Enhanced aesthetics',
      'Improved durability',
      'Professional finish',
      'Maintains design integrity',
      'Long-lasting results'
    ],
    additionalInfo: 'Our fine stitch detailing adds elegance and durability to your handbag seams.'
  },
  'Bespoke Coloring & Patterns': {
    title: 'Bespoke Coloring & Patterns',
    description: 'Premium finishes that stand out.',
    images: [
      '/nowimages/Customized Artwork.jpg',
      '/nowimages/Customized Artwork.jpg'
    ],
    process: [
      'Design consultation',
      'Pattern and color selection',
      'Surface preparation',
      'Custom application',
      'Protective finishing'
    ],
    benefits: [
      'Unique personalized design',
      'Premium finish quality',
      'Long-lasting results',
      'Professional execution',
      'Stand-out appearance'
    ],
    additionalInfo: 'Create shoes that are truly unique with our bespoke coloring and pattern services.'
  },
  // Kids Collection Services
  'Creative Coloring & Patterns': {
    title: 'Creative Coloring & Patterns',
    description: 'Unique, playful looks.',
    images: [
      '/nowimages/1000048222.jpg',
      '/FE%20JPEG/pexels-27298298 (1).jpg'
    ],
    process: [
      'Child-friendly design consultation',
      'Color and pattern selection',
      'Safe surface preparation',
      'Creative application',
      'Child-safe protective coating'
    ],
    benefits: [
      'Fun and playful design',
      'Child-safe materials',
      'Unique appearance',
      'Durable finish',
      'Kid-approved style'
    ],
    additionalInfo: 'Create fun and playful bags that kids will love with our child-safe creative coloring and patterns.'
  },
  'Personalized Artwork': {
    title: 'Personalized Artwork',
    description: 'Fun artwork designed for children.',
    images: [
      '/nowimages/nice.jpg',
      '/nowimages/nice.jpg'
    ],
    process: [
      'Child-friendly artwork consultation',
      'Personalized design creation',
      'Safe surface preparation',
      'Child-safe application',
      'Protective finishing'
    ],
    benefits: [
      'Personalized for your child',
      'Fun and engaging design',
      'Child-safe materials',
      'Durable finish',
      'Unique keepsake'
    ],
    additionalInfo: 'Create personalized artwork that makes your child\'s bag special and unique.'
  }
}

const TABS = [
  {
    key: 'reborn',
    label: 'Reborn',
    blurb: 'Where timeless pieces are renewed with expert care.',
    cards: [
      {
        title: 'Handbag & Wallet',
        subtitle: 'Clean • Restore • Detail',
        sources: [
          '/nowimages/repair.jpg',
          '/nowimages/repair.jpg'
        ],
        tags: ['Cleaning', 'Color', 'Stitching', 'Hardware'],
        details: [
          {
            title: 'Cleaning & Conditioning',
            description: 'Deep cleaning and moisturizing to refresh leather.'
          },
          {
            title: 'Color Restoration',
            description: 'Reviving faded or discolored items to their original charm.'
          },
          {
            title: 'Stitching & Edging',
            description: 'Repairing loose stitches and edges for a refined finish.'
          },
          {
            title: 'Zipper Repair & Replacement',
            description: 'Fixing or replacing zippers for smooth use.'
          },
          {
            title: 'Hardware Repair & Replacement',
            description: 'Restoring metal clasps, locks, and buckles.'
          }
        ],
        additionalInfo: 'Our handbag and wallet restoration process begins with a thorough assessment of your item\'s condition, followed by specialized treatments tailored to the specific leather type and damage.'
      },
      {
        title: 'Shoes & Sandals (Men & Women)',
        subtitle: 'Shine • Repair • Comfort',
        sources: [
          '/nowimages/Stitching.jpg',
          '/nowimages/Stitching.jpg'
        ],
        tags: ['Sole', 'Heel', 'Stretch', 'Shine'],
        details: [
          {
            title: 'Cleaning & Conditioning',
            description: 'Reviving shine and softness of leather.'
          },
          {
            title: 'Stitching',
            description: 'Repairing seams for durability.'
          },
          {
            title: 'Color Restoration',
            description: 'Restoring faded or worn-out shades.'
          },
          {
            title: 'Shoe Stretching',
            description: 'Adjusting size for perfect comfort.'
          },
          {
            title: 'Heel & Sole Repair',
            description: 'Fixing worn heels, adding new soles, or sole guards.'
          }
        ]
      }
    ]
  },
  {
    key: 'signature',
    label: 'Signature',
    blurb: 'Luxury personalization with your unique style.',
    cards: [
      {
        title: 'Handbag & Wallet',
        subtitle: 'Color • Artwork • Hardware',
        sources: [
          '/nowimages/Custom Coloring & Patterns .jpg',
          '/nowimages/Customized Artwork.jpg'
        ],
        tags: ['Custom Color', 'Artwork', 'Upgrades'],
        details: [
          {
            title: 'Custom Coloring & Patterns',
            description: 'Exclusive colors to match your personality.'
          },
          {
            title: 'Customized Artwork',
            description: 'Artistic hand designs for uniqueness.'
          },
          {
            title: 'Hardware & Zipper Upgrades',
            description: 'Luxury-level detailing.'
          },
          {
            title: 'Fine Stitch Detailing',
            description: 'Elegant refinishing of seams.'
          }
        ]
      },
      {
        title: 'Shoes & Sandals (Men & Women)',
        subtitle: 'Patterns • Shine • Finish',
        sources: [
          '/nowimages/Cleaning & Conditioning.jpg',
          '/nowimages/Cleaning & Conditioning.jpg'
        ],
        tags: ['Patterns', 'Mirror Shine', 'Unique Finish'],
        details: [
          {
            title: 'Bespoke Coloring & Patterns',
            description: 'Premium finishes that stand out.'
          },
          {
            title: 'Customized Artwork',
            description: 'Exclusive hand-painted artistry.'
          }
        ]
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
          '/nowimages/Customized Artwork.jpg',
          '/nowimages/Customized Artwork.jpg'
        ],
        tags: ['Color', 'Artwork'],
        details: [
          {
            title: 'Custom Coloring & Patterns',
            description: 'Bright and creative designs kids love.'
          },
          {
            title: 'Customized Artwork',
            description: 'Personalized cartoon characters or patterns.'
          }
        ]
      },
      {
        title: 'Kids Bags',
        subtitle: 'Creative • Unique • Personal',
        sources: [
          '/nowimages/nice.jpg',
          '/nowimages/nice.jpg'
        ],
        tags: ['Patterns', 'Artwork'],
        details: [
          {
            title: 'Creative Coloring & Patterns',
            description: 'Unique, playful looks.'
          },
          {
            title: 'Personalized Artwork',
            description: 'Fun artwork designed for children.'
          }
        ]
      }
    ]
  }
]

export default function Services() {
  const [searchParams] = useSearchParams()
  const [active, setActive] = useState('reborn')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [detailModalOpen, setDetailModalOpen] = useState(false)
  const [selectedDetail, setSelectedDetail] = useState(null)
  const current = TABS.find((t) => t.key === active) || TABS[0]

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Furniture Restoration Services",
    "description": "Comprehensive furniture restoration services including luxury furniture repair, antique restoration, upholstery, and custom design services in Dubai.",
    "url": "https://fadedelegance.ae/services",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Luxury Furniture Repair",
        "description": "Expert repair services for high-end furniture pieces"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Antique Furniture Restoration",
        "description": "Specialized restoration of antique and vintage furniture"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Premium Upholstery",
        "description": "High-quality upholstery services for furniture"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Custom Furniture Design",
        "description": "Bespoke furniture design and customization services"
      }
    ]
  };

  // Page-scoped premium fonts (no global change)
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600&display=swap'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  // Handle URL parameters for navbar navigation
  useEffect(() => {
    const category = searchParams.get('category')
    const subcategory = searchParams.get('subcategory')
    const service = searchParams.get('service')

    console.log('URL Parameters:', { category, subcategory, service })

    if (category && subcategory && service) {
      // Map navbar categories to tab keys
      const categoryMap = {
        'Reborn': 'reborn',
        'Signature': 'signature',
        'Kids': 'kids'
      }

      const tabKey = categoryMap[category]
      console.log('Tab Key:', tabKey)
      
      if (tabKey) {
        setActive(tabKey)
        
        // Find the matching service card
        const tab = TABS.find(t => t.key === tabKey)
        if (tab) {
          console.log('Available cards:', tab.cards.map(c => c.title))
          const normSub = normalize(subcategory)
          const aliasedTitle = aliasMap[tabKey]?.[normSub]

          // Try alias first, then fallback to fuzzy normalization match
          const matchingCard = tab.cards.find(card => {
            if (aliasedTitle && card.title === aliasedTitle) return true
            const nTitle = normalize(card.title)
            return nTitle === normSub || nTitle.includes(normSub) || normSub.includes(nTitle)
          })

          console.log('Matching card:', matchingCard)

          if (matchingCard) {
            // Find the matching service detail
            const normSvc = normalize(service)
            const matchingDetail = matchingCard.details?.find(detail => {
              const n = normalize(detail.title)
              return n === normSvc || n.includes(normSvc) || normSvc.includes(n)
            })

            console.log('Matching detail:', matchingDetail)

            if (matchingDetail) {
              // Check if the service detail exists in SERVICE_DETAILS
              const detailData = SERVICE_DETAILS[matchingDetail.title] || SERVICE_DETAILS[service] || SERVICE_DETAILS[aliasedTitle]
              
              if (detailData) {
                // Use a timeout to ensure proper state management
                setTimeout(() => {
                  setSelectedService(matchingCard)
                  setSelectedDetail({ ...detailData, parentService: matchingCard })
                  setDetailModalOpen(true)
                  setModalOpen(false) // Close service modal since we're opening detail directly
                }, 100)
              } else {
                // Fallback: just open the service modal
                setTimeout(() => {
                  setSelectedService(matchingCard)
                  setModalOpen(true)
                }, 100)
              }
            } else {
              // If no specific service detail found, just open the service card
              setTimeout(() => {
                setSelectedService(matchingCard)
                setModalOpen(true)
              }, 100)
            }
          }
        }
      }
    }
  }, [searchParams])

  const pageFont = { fontFamily: 'Manrope, system-ui, Arial, sans-serif' }
  const displayFont = { fontFamily: 'Cormorant Garamond, serif' }

  const handleCardClick = (service) => {
    setSelectedService(service)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedService(null)
  }

  const handleServiceClick = (serviceDetail) => {
    const detail = SERVICE_DETAILS[serviceDetail.title]
    if (detail) {
      setSelectedDetail({ ...detail, parentService: selectedService })
      setDetailModalOpen(true)
    }
  }

  const closeDetailModal = () => {
    setDetailModalOpen(false)
    setSelectedDetail(null)
  }

  return (
    <div className="min-h-screen bg-white text-black" style={pageFont}>
      <SEO 
        title="Faded Elegance — Luxury Leather Restoration Services Dubai"
        description="Premium luxury leather restoration in Dubai for handbags, shoes, wallets and jackets. Cleaning & conditioning, color restoration, recoloring, stitching, hardware repair and bespoke customization."
        keywords="leather restoration services dubai, handbag repair dubai, shoe restoration dubai, leather recoloring dubai, leather color restoration, leather cleaning conditioning, zipper repair dubai, stitching repair leather dubai"
        url="https://fadedelegance.ae/services"
        image="https://fadedelegance.ae/Faded%20Elegance%20Logo%20Final-07.png"
        structuredData={servicesStructuredData}
      />
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
                Premium leather restoration and bespoke customization for handbags, shoes, wallets, and more.
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
            <ImageCard 
              key={c.title} 
              {...c} 
              onClick={() => handleCardClick(c)}
            />
          ))}
        </section>

        {/* CTA strip */}
       
      </main>

      {/* Main Service Modal */}
      <ServiceModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        service={selectedService}
        onServiceClick={handleServiceClick}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={detailModalOpen}
        onClose={closeDetailModal}
        serviceDetail={selectedDetail}
        parentService={selectedService}
      />

      <Footer />
    </div>
  )
}


