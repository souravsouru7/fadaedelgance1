import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

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

// Service detail data
const SERVICE_DETAILS = {
  // Reborn Collection Services
  'Cleaning & Conditioning': {
    title: 'Cleaning & Conditioning',
    description: 'Deep cleaning and moisturizing to refresh leather.',
    images: [
      '/FE%20JPEG/pexels-monicore-134064.jpg',
      '/FE%20JPEG/pexels-scottwebb-137603.jpg'
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
      '/FE%20JPEG/pexels-polina-kovaleva-5828577.jpg',
      '/FE%20JPEG/pexels-bellazhong-3076787.jpg'
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
    additionalInfo: 'We use advanced color-matching technology to ensure your item\'s restored color perfectly matches its original shade.'
  },
  'Stitching & Edging': {
    title: 'Stitching & Edging',
    description: 'Repairing loose stitches and edges for a refined finish.',
    images: [
      '/FE%20JPEG/pexels-mikhail-nilov-8731040.jpg',
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
      '/FE%20JPEG/pexels-ron-lach-9595289.jpg',
      '/FE%20JPEG/pexels-vlada-karpovich-4452502.jpg'
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
      '/FE%20JPEG/pexels-castorlystock-3682292.jpg',
      '/FE%20JPEG/pexels-august-de-richelieu-4427712.jpg'
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
  'Custom Coloring & Patterns': {
    title: 'Custom Coloring & Patterns',
    description: 'Personalized colors or patterns for a unique style.',
    images: [
      '/FE%20JPEG/pexels-conojeghuo-175689.jpg',
      '/FE%20JPEG/pexels-karolina-grabowska-5713293.jpg'
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
    description: 'Handcrafted designs to make your item one of a kind.',
    images: [
      '/FE%20JPEG/pexels-karolina-grabowska-5713781.jpg',
      '/FE%20JPEG/pexels-matt-hatchett-982360-2599270.jpg'
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
  // Additional Reborn Services
  'Stitching': {
    title: 'Stitching',
    description: 'Repairing seams for durability.',
    images: [
      '/FE%20JPEG/pexels-kristian-bogh-141442255-10340652.jpg',
      '/FE%20JPEG/pexels-kristian-bogh-141442255-10340652 (1).jpg'
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
      '/FE%20JPEG/pexels-josh-dago-377312171-30050886.jpg',
      '/FE%20JPEG/pexels-mikhail-nilov-8731040.jpg'
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
      '/FE%20JPEG/pexels-matt-hatchett-982360-2599270.jpg',
      '/FE%20JPEG/pexels-nishantaneja-12105084.jpg'
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
  'Shoe Shine': {
    title: 'Shoe Shine',
    description: 'A luxury shine to enhance elegance.',
    images: [
      '/FE%20JPEG/pexels-pedrofurtadoo-31451028.jpg',
      '/FE%20JPEG/pexels-dhanno-23223837.jpg'
    ],
    process: [
      'Surface cleaning and preparation',
      'Conditioning and moisturizing',
      'Multiple polish applications',
      'Buffing for mirror finish',
      'Protective coating application'
    ],
    benefits: [
      'Professional mirror shine',
      'Protects leather surface',
      'Enhances appearance',
      'Long-lasting shine',
      'Premium finish quality'
    ],
    additionalInfo: 'Our luxury shoe shine service creates a mirror-like finish that lasts and protects your shoes.'
  },
  'Hardware Repair': {
    title: 'Hardware Repair',
    description: 'Fixing clips, chains, and metallic details.',
    images: [
      '/FE%20JPEG/pexels-scottwebb-137603.jpg',
      '/FE%20JPEG/pexels-geyonk-1152077.jpg'
    ],
    process: [
      'Hardware condition evaluation',
      'Cleaning and restoration attempt',
      'Replacement if necessary',
      'Precise installation and alignment',
      'Functionality testing'
    ],
    benefits: [
      'Restores functionality',
      'Maintains original design',
      'Prevents further damage',
      'Professional finish',
      'Long-lasting durability'
    ],
    additionalInfo: 'We can restore most wallet hardware to like-new condition or source authentic replacements.'
  },
  'Stitching & Sole Repair': {
    title: 'Stitching & Sole Repair',
    description: 'Fixing straps, edges, and soles.',
    images: [
      '/FE%20JPEG/pexels-alexakeiart-6809887.jpg',
      '/FE%20JPEG/pexels-ihsanaditya-1445696.jpg'
    ],
    process: [
      'Damage assessment and planning',
      'Strap and sole repair',
      'Edge refinishing',
      'Quality testing',
      'Final inspection'
    ],
    benefits: [
      'Restores functionality',
      'Improves comfort',
      'Extends lifespan',
      'Professional finish',
      'Maintains original design'
    ],
    additionalInfo: 'Our sandal repair service ensures your favorite sandals continue to provide comfort and style.'
  },
  'Heel Tips': {
    title: 'Heel Tips',
    description: 'Replacing worn-out tips for comfort.',
    images: [
      '/FE%20JPEG/pexels-vlada-karpovich-4452502.jpg',
      '/FE%20JPEG/pexels-ron-lach-9595289.jpg'
    ],
    process: [
      'Heel tip condition assessment',
      'Removal of worn tips',
      'Installation of new tips',
      'Adjustment for comfort',
      'Quality testing'
    ],
    benefits: [
      'Restores comfort',
      'Prevents further damage',
      'Improves safety',
      'Professional finish',
      'Long-lasting durability'
    ],
    additionalInfo: 'We use high-quality heel tips that provide comfort and durability for your sandals.'
  },
  'Custom Coloring & Artwork': {
    title: 'Custom Coloring & Artwork',
    description: 'Personal touches to elevate your sandals.',
    images: [
      '/FE%20JPEG/pexels-pedro-furtado-2149998739-31450735.jpg',
      '/FE%20JPEG/pexels-pedro-furtado-2149998739-31450738.jpg'
    ],
    process: [
      'Design consultation',
      'Color and artwork selection',
      'Surface preparation',
      'Custom application',
      'Protective coating'
    ],
    benefits: [
      'Unique personalized design',
      'Reflects your style',
      'High-quality finish',
      'Long-lasting results',
      'Professional execution'
    ],
    additionalInfo: 'Transform your sandals into a unique piece that reflects your personal style and creativity.'
  },
  // Signature Collection Services
  'Hardware & Zipper Upgrades': {
    title: 'Hardware & Zipper Upgrades',
    description: 'Luxury-level detailing.',
    images: [
      '/FE%20JPEG/pexels-ron-lach-9595289.jpg',
      '/FE%20JPEG/pexels-monicore-134064.jpg'
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
      '/FE%20JPEG/pexels-castorlystock-3682292.jpg',
      '/FE%20JPEG/pexels-monicore-134064.jpg'
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
      '/FE%20JPEG/pexels-mikhail-nilov-8731040.jpg',
      '/FE%20JPEG/pexels-lum3n-44775-167703.jpg'
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
  'Luxury Shoe Shine': {
    title: 'Luxury Shoe Shine',
    description: 'A glossy, mirror-like shine for formal occasions.',
    images: [
      '/FE%20JPEG/pexels-scottwebb-137603.jpg',
      '/FE%20JPEG/pexels-ron-lach-9595289.jpg'
    ],
    process: [
      'Deep cleaning and preparation',
      'Multiple polish applications',
      'Mirror finish buffing',
      'Protective coating',
      'Final inspection'
    ],
    benefits: [
      'Mirror-like shine',
      'Professional appearance',
      'Long-lasting finish',
      'Protects leather',
      'Premium quality'
    ],
    additionalInfo: 'Our luxury shoe shine creates a mirror-like finish perfect for formal occasions.'
  },
  'Unique Sole & Heel Finishing': {
    title: 'Unique Sole & Heel Finishing',
    description: 'Special treatments for a refined touch.',
    images: [
      '/FE%20JPEG/pexels-geyonk-1152077.jpg',
      '/FE%20JPEG/pexels-monicore-134064.jpg'
    ],
    process: [
      'Design consultation',
      'Sole and heel treatment selection',
      'Precise application',
      'Quality testing',
      'Final inspection'
    ],
    benefits: [
      'Unique appearance',
      'Enhanced comfort',
      'Professional finish',
      'Long-lasting results',
      'Refined touch'
    ],
    additionalInfo: 'Add a unique touch to your shoes with our special sole and heel finishing treatments.'
  },
  'Signature Coloring Styles': {
    title: 'Signature Coloring Styles',
    description: 'Personalized tones.',
    images: [
      '/FE%20JPEG/pexels-polina-kovaleva-5828577.jpg',
      '/FE%20JPEG/pexels-bellazhong-3076787.jpg'
    ],
    process: [
      'Color consultation',
      'Personalized tone selection',
      'Surface preparation',
      'Custom application',
      'Protective coating'
    ],
    benefits: [
      'Personalized appearance',
      'Unique color tones',
      'Professional finish',
      'Long-lasting results',
      'Reflects your style'
    ],
    additionalInfo: 'Create a wallet with colors that perfectly match your personal style and preferences.'
  },
  'Artistic Detailing': {
    title: 'Artistic Detailing',
    description: 'Handcrafted accents.',
    images: [
      '/FE%20JPEG/pexels-ron-lach-9595289.jpg',
      '/FE%20JPEG/pexels-scottwebb-137603.jpg'
    ],
    process: [
      'Design consultation',
      'Artistic detail planning',
      'Handcrafted application',
      'Quality inspection',
      'Protective finishing'
    ],
    benefits: [
      'Unique artistic touches',
      'Handcrafted quality',
      'Personalized design',
      'Professional finish',
      'Conversation piece'
    ],
    additionalInfo: 'Add handcrafted artistic details that make your wallet truly unique and personal.'
  },
  'Hardware Upgrades': {
    title: 'Hardware Upgrades',
    description: 'Luxury metallic upgrades.',
    images: [
      '/FE%20JPEG/pexels-conojeghuo-175689.jpg',
      '/FE%20JPEG/pexels-monicore-134064.jpg'
    ],
    process: [
      'Hardware selection',
      'Design consultation',
      'Precise installation',
      'Quality testing',
      'Final inspection'
    ],
    benefits: [
      'Enhanced functionality',
      'Premium appearance',
      'Long-lasting durability',
      'Professional finish',
      'Luxury upgrade'
    ],
    additionalInfo: 'Upgrade your wallet with premium metallic hardware for enhanced function and style.'
  },
  'Premium Stitch Craft': {
    title: 'Premium Stitch Craft',
    description: 'Precision for elegance.',
    images: [
      '/FE%20JPEG/pexels-mikhail-nilov-8731040.jpg',
      '/FE%20JPEG/pexels-geyonk-1152077.jpg'
    ],
    process: [
      'Stitch pattern planning',
      'Thread selection',
      'Precise stitch application',
      'Quality testing',
      'Final finishing'
    ],
    benefits: [
      'Enhanced elegance',
      'Improved durability',
      'Professional finish',
      'Precision quality',
      'Long-lasting results'
    ],
    additionalInfo: 'Our premium stitch craft adds elegance and precision to your wallet construction.'
  },
  'Exclusive Coloring & Patterns': {
    title: 'Exclusive Coloring & Patterns',
    description: 'Distinctive customization.',
    images: [
      '/FE%20JPEG/pexels-alexakeiart-6809887.jpg',
      '/FE%20JPEG/pexels-ihsanaditya-1445696.jpg'
    ],
    process: [
      'Design consultation',
      'Exclusive pattern creation',
      'Color selection',
      'Custom application',
      'Protective finishing'
    ],
    benefits: [
      'Exclusive design',
      'Unique appearance',
      'Professional finish',
      'Long-lasting results',
      'Distinctive style'
    ],
    additionalInfo: 'Create sandals with exclusive patterns and colors that set you apart.'
  },
  'Artistic Customization': {
    title: 'Artistic Customization',
    description: 'Elevating style with design work.',
    images: [
      '/FE%20JPEG/pexels-pedro-furtado-2149998739-31450745.jpg',
      '/FE%20JPEG/pexels-pedro-furtado-2149998739-31450738.jpg'
    ],
    process: [
      'Artistic design consultation',
      'Custom artwork creation',
      'Surface preparation',
      'Artistic application',
      'Protective coating'
    ],
    benefits: [
      'Unique artistic design',
      'Personalized style',
      'Professional artwork',
      'Long-lasting finish',
      'Elevated appearance'
    ],
    additionalInfo: 'Transform your sandals with artistic customization that elevates your style.'
  },
  'Sole Refinement': {
    title: 'Sole Refinement',
    description: 'Comfortable yet stylish finishing.',
    images: [
      '/FE%20JPEG/pexels-lum3n-44775-167703.jpg',
      '/FE%20JPEG/pexels-scottwebb-137603.jpg'
    ],
    process: [
      'Sole condition assessment',
      'Refinement planning',
      'Precise application',
      'Comfort testing',
      'Final inspection'
    ],
    benefits: [
      'Enhanced comfort',
      'Improved style',
      'Professional finish',
      'Long-lasting results',
      'Stylish appearance'
    ],
    additionalInfo: 'Our sole refinement ensures your sandals are both comfortable and stylish.'
  },
  'Elegant Stitch Work': {
    title: 'Elegant Stitch Work',
    description: 'Detailing for luxury feel.',
    images: [
      '/FE%20JPEG/pexels-geyonk-1152077.jpg',
      '/FE%20JPEG/pexels-monicore-134064.jpg'
    ],
    process: [
      'Stitch pattern design',
      'Thread selection',
      'Elegant stitch application',
      'Quality testing',
      'Final finishing'
    ],
    benefits: [
      'Luxury appearance',
      'Enhanced durability',
      'Professional finish',
      'Elegant detailing',
      'Long-lasting quality'
    ],
    additionalInfo: 'Add elegant stitch work that gives your sandals a luxury feel and appearance.'
  },
  // Kids Collection Services
  'Creative Coloring & Patterns': {
    title: 'Creative Coloring & Patterns',
    description: 'Unique, playful looks.',
    images: [
      '/FE%20JPEG/pexels-746807869-18576107.jpg',
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
      '/FE%20JPEG/pexels-746807869-18576107.jpg',
      '/FE%20JPEG/pexels-monicore-134064.jpg'
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
        title: 'Handbag Restoration',
        subtitle: 'Clean • Restore • Detail',
        sources: [
          '/FE%20JPEG/pexels-monicore-134064.jpg',
          '/FE%20JPEG/pexels-ron-lach-9595289.jpg'
        ],
        tags: ['Cleaning', 'Color', 'Stitching', 'Hardware'],
        details: [
          {
            title: 'Cleaning & Conditioning',
            description: 'Deep cleaning and moisturizing to refresh leather.'
          },
          {
            title: 'Color Restoration',
            description: 'Reviving faded or discolored bags to their original charm.'
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
          },
          {
            title: 'Custom Coloring & Patterns',
            description: 'Personalized colors or patterns for a unique style.'
          },
          {
            title: 'Customized Artwork',
            description: 'Handcrafted designs to make your handbag one of a kind.'
          }
        ],
        additionalInfo: 'Our handbag restoration process begins with a thorough assessment of your item\'s condition, followed by specialized treatments tailored to the specific leather type and damage.'
      },
      {
        title: 'Shoes (Men & Women)',
        subtitle: 'Shine • Repair • Comfort',
        sources: [
          '/FE%20JPEG/pexels-mikhail-nilov-8731040.jpg',
          '/FE%20JPEG/pexels-scottwebb-137603.jpg'
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
          },
          {
            title: 'Shoe Shine',
            description: 'A luxury shine to enhance elegance.'
          },
          {
            title: 'Custom Coloring & Patterns',
            description: 'Transforming shoes with unique colors and designs.'
          },
          {
            title: 'Customized Artwork',
            description: 'Exclusive hand-painted detailing.'
          }
        ]
      },
      {
        title: 'Wallet Detailing',
        subtitle: 'Refinish • Repair • Personalize',
        sources: [
          '/FE%20JPEG/pexels-conojeghuo-175689.jpg',
          '/FE%20JPEG/pexels-polina-kovaleva-5828577.jpg'
        ],
        tags: ['Edges', 'Zipper', 'Hardware', 'Color'],
        details: [
          {
            title: 'Cleaning & Conditioning',
            description: 'Restoring suppleness and finish.'
          },
          {
            title: 'Color Restoration',
            description: 'Bringing back the wallet\'s true shade.'
          },
          {
            title: 'Stitching & Edging',
            description: 'Seam repairs and edge refinishing.'
          },
          {
            title: 'Zipper Repair & Replacement',
            description: 'Smooth zipper replacement when needed.'
          },
          {
            title: 'Hardware Repair',
            description: 'Fixing clips, chains, and metallic details.'
          },
          {
            title: 'Custom Coloring & Patterns',
            description: 'Adding unique touches.'
          },
          {
            title: 'Customized Artwork',
            description: 'Personal artwork for a standout wallet.'
          }
        ]
      },
      {
        title: 'Sandals Care',
        subtitle: 'Refresh • Repair • Refine',
        sources: [
          '/FE%20JPEG/pexels-alexakeiart-6809887.jpg',
          '/FE%20JPEG/pexels-ihsanaditya-1445696.jpg'
        ],
        tags: ['Straps', 'Sole', 'Tips', 'Color'],
        details: [
          {
            title: 'Cleaning & Conditioning',
            description: 'Refreshing leather straps and soles.'
          },
          {
            title: 'Color Restoration',
            description: 'Reviving faded tones.'
          },
          {
            title: 'Stitching & Sole Repair',
            description: 'Fixing straps, edges, and soles.'
          },
          {
            title: 'Heel Tips',
            description: 'Replacing worn-out tips for comfort.'
          },
          {
            title: 'Custom Coloring & Artwork',
            description: 'Personal touches to elevate your sandals.'
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
        title: 'Handbag Custom',
        subtitle: 'Color • Artwork • Hardware',
        sources: [
          '/FE%20JPEG/pexels-ron-lach-9595289.jpg',
          '/FE%20JPEG/pexels-monicore-134064.jpg'
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
        title: 'Bespoke Shoes',
        subtitle: 'Patterns • Shine • Finish',
        sources: [
          '/FE%20JPEG/pexels-mikhail-nilov-8731040.jpg',
          '/FE%20JPEG/pexels-lum3n-44775-167703.jpg'
        ],
        tags: ['Patterns', 'Mirror Shine', 'Unique Finish'],
        details: [
          {
            title: 'Bespoke Coloring & Patterns',
            description: 'Premium finishes that stand out.'
          },
          {
            title: 'Luxury Shoe Shine',
            description: 'A glossy, mirror-like shine for formal occasions.'
          },
          {
            title: 'Customized Artwork',
            description: 'Exclusive hand-painted artistry.'
          },
          {
            title: 'Unique Sole & Heel Finishing',
            description: 'Special treatments for a refined touch.'
          }
        ]
      },
      {
        title: 'Wallet Personal',
        subtitle: 'Tones • Detailing • Premium',
        sources: [
          '/FE%20JPEG/pexels-polina-kovaleva-5828577.jpg',
          '/FE%20JPEG/pexels-bellazhong-3076787.jpg'
        ],
        tags: ['Signature Tones', 'Accents', 'Hardware'],
        details: [
          {
            title: 'Signature Coloring Styles',
            description: 'Personalized tones.'
          },
          {
            title: 'Artistic Detailing',
            description: 'Handcrafted accents.'
          },
          {
            title: 'Hardware Upgrades',
            description: 'Luxury metallic upgrades.'
          },
          {
            title: 'Premium Stitch Craft',
            description: 'Precision for elegance.'
          }
        ]
      },
      {
        title: 'Sandals Design',
        subtitle: 'Exclusive • Artistic • Refined',
        sources: [
          '/FE%20JPEG/pexels-alexakeiart-6809887.jpg',
          '/FE%20JPEG/pexels-ihsanaditya-1445696.jpg'
        ],
        tags: ['Exclusive', 'Artistic', 'Refined'],
        details: [
          {
            title: 'Exclusive Coloring & Patterns',
            description: 'Distinctive customization.'
          },
          {
            title: 'Artistic Customization',
            description: 'Elevating style with design work.'
          },
          {
            title: 'Sole Refinement',
            description: 'Comfortable yet stylish finishing.'
          },
          {
            title: 'Elegant Stitch Work',
            description: 'Detailing for luxury feel.'
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
          '/FE%20JPEG/pexels-746807869-18576107.jpg',
          '/FE%20JPEG/pexels-ron-lach-9595289.jpg'
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
          '/FE%20JPEG/pexels-pedro-furtado-2149998739-31450735.jpg',
          '/FE%20JPEG/pexels-pedro-furtado-2149998739-31450738.jpg'
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

    if (category && subcategory && service) {
      // Map navbar categories to tab keys
      const categoryMap = {
        'Reborn': 'reborn',
        'Signature': 'signature',
        'Kids': 'kids'
      }

      const tabKey = categoryMap[category]
      if (tabKey) {
        setActive(tabKey)
        
        // Find the matching service card
        const tab = TABS.find(t => t.key === tabKey)
        if (tab) {
          const matchingCard = tab.cards.find(card => {
            // Map subcategory names to card titles
            const subcategoryMap = {
              'Handbag': 'Handbag Restoration',
              'Shoes (Women\'s & Men\'s)': 'Shoes (Men & Women)',
              'Shoes': 'Shoes (Men & Women)',
              'Wallet': 'Wallet Detailing',
              'Sandals': 'Sandals Care',
              'Handbag Custom': 'Handbag Custom',
              'Bespoke Shoes': 'Bespoke Shoes',
              'Wallet Personal': 'Wallet Personal',
              'Sandals Design': 'Sandals Design',
              'Kids Shoes': 'Kids Shoes',
              'Bags': 'Kids Bags'
            }
            
            const mappedTitle = subcategoryMap[subcategory]
            return card.title === mappedTitle || card.title === subcategory
          })

          if (matchingCard) {
            // Find the matching service detail
            const matchingDetail = matchingCard.details?.find(detail => 
              detail.title === service
            )

            if (matchingDetail) {
              setSelectedService(matchingCard)
              setModalOpen(true)
              
              // Also open the detail modal for the specific service
              const detailData = SERVICE_DETAILS[service]
              if (detailData) {
                setTimeout(() => {
                  setSelectedDetail({ ...detailData, parentService: matchingCard })
                  setDetailModalOpen(true)
                }, 100)
              }
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
        title="Furniture Restoration Services Dubai | Luxury Furniture Repair & Antique Restoration"
        description="Premium furniture restoration services in Dubai. Expert luxury furniture repair, antique restoration, upholstery, and custom design. Transform your furniture with our master craftsmen."
        keywords="furniture restoration services dubai, luxury furniture repair, antique furniture restoration, upholstery services dubai, custom furniture design, furniture refinishing dubai"
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
            <ImageCard 
              key={c.title} 
              {...c} 
              onClick={() => handleCardClick(c)}
            />
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


