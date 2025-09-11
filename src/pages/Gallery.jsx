import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Gallery() {
  // Load same fonts as other pages
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600&display=swap'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  const pageFont = { fontFamily: 'Manrope, system-ui, Arial, sans-serif' }
  const displayFont = { fontFamily: 'Cormorant Garamond, serif' }

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Faded Elegance Gallery",
    "description": "Explore our portfolio of luxury furniture restoration work. See before and after transformations of handbags, shoes, wallets, and sandals.",
    "url": "https://fadedelegance.ae/gallery",
    "mainEntity": {
      "@type": "Organization",
      "name": "Faded Elegance",
      "description": "Premium furniture restoration services in Dubai"
    }
  };

  const categories = [
    { id: 'all', name: 'All Work', icon: '✨' },
    { id: 'handbags', name: 'Handbags', icon: '👜' },
    { id: 'shoes', name: 'Shoes', icon: '👞' },
    { id: 'wallets', name: 'Wallets', icon: '👛' },
    { id: 'sandals', name: 'Sandals', icon: '👡' }
  ]

  const galleryImages = [
    // Handbags
    {
      id: 1,
      category: 'handbags',
      title: 'Luxury Leather Handbag Restoration',
      description: 'Complete restoration of a vintage leather handbag including color restoration and hardware replacement. This piece showcases our expertise in bringing timeless elegance back to life.',
      beforeImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
      tags: ['Color Restoration', 'Hardware Repair', 'Leather Care'],
      duration: '3-5 days',
      price: 'Premium'
    },
    {
      id: 2,
      category: 'handbags',
      title: 'Designer Bag Customization',
      description: 'Custom artwork and pattern application on a premium designer handbag. Each stroke tells a story of personal style and artistic vision.',
      beforeImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
      tags: ['Custom Artwork', 'Pattern Design', 'Premium Finish'],
      duration: '5-7 days',
      price: 'Bespoke'
    },
    // Shoes
    {
      id: 3,
      category: 'shoes',
      title: 'Luxury Shoe Restoration',
      description: 'Complete restoration of leather shoes including sole repair and color enhancement. Every detail matters in our meticulous restoration process.',
      beforeImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800&q=80',
      tags: ['Sole Repair', 'Color Enhancement', 'Leather Care'],
      duration: '2-4 days',
      price: 'Premium'
    },
    {
      id: 4,
      category: 'shoes',
      title: 'Bespoke Shoe Customization',
      description: 'Custom coloring and artistic detailing on premium leather shoes. Where craftsmanship meets creativity for truly unique footwear.',
      beforeImage: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
      tags: ['Custom Coloring', 'Artistic Detailing', 'Bespoke Design'],
      duration: '4-6 days',
      price: 'Bespoke'
    },
    // Wallets
    {
      id: 5,
      category: 'wallets',
      title: 'Leather Wallet Restoration',
      description: 'Restoration of a vintage leather wallet with stitching repair and color restoration. Preserving heritage while enhancing functionality.',
      beforeImage: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      tags: ['Stitching Repair', 'Color Restoration', 'Leather Care'],
      duration: '1-3 days',
      price: 'Standard'
    },
    {
      id: 6,
      category: 'wallets',
      title: 'Premium Wallet Customization',
      description: 'Custom artwork and premium stitch detailing on leather wallet. Elevating everyday essentials to works of art.',
      beforeImage: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      tags: ['Custom Artwork', 'Premium Stitching', 'Design'],
      duration: '3-5 days',
      price: 'Premium'
    },
    // Sandals
    {
      id: 7,
      category: 'sandals',
      title: 'Leather Sandal Restoration',
      description: 'Complete restoration of leather sandals including sole repair and color enhancement. Comfort meets style in perfect harmony.',
      beforeImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
      tags: ['Sole Repair', 'Color Enhancement', 'Leather Care'],
      duration: '2-4 days',
      price: 'Standard'
    },
    {
      id: 8,
      category: 'sandals',
      title: 'Designer Sandal Customization',
      description: 'Custom artwork and pattern application on premium leather sandals. Where summer style meets artistic expression.',
      beforeImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
      tags: ['Custom Artwork', 'Pattern Design', 'Premium Finish'],
      duration: '4-6 days',
      price: 'Bespoke'
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white text-black" style={pageFont}>
      <SEO 
        title="Gallery - Faded Elegance Dubai | Luxury Leather Restoration Portfolio"
        description="Explore our gallery of luxury leather restoration work. See before and after transformations of handbags, shoes, wallets and jackets. Premium restoration services in Dubai."
        keywords="leather restoration gallery dubai, luxury leather repair portfolio, before after leather restoration, handbag restoration examples, shoe restoration dubai"
        url="https://fadedelegance.ae/gallery"
        image="https://fadedelegance.ae/Faded%20Elegance%20Logo%20Final-07.png"
        structuredData={galleryStructuredData}
      />
      <Navbar />

      {/* Hero Section - Matching Services page style */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'radial-gradient(60% 50% at 20% -10%, rgba(0,0,0,0.05), transparent 60%), radial-gradient(50% 40% at 100% 120%, rgba(0,0,0,0.05), transparent 60%)'
        }} />
        <div className="relative max-w-[1120px] mx-auto px-4 sm:px-5 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-6 sm:gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[28px] sm:text-[36px] lg:text-[56px] font-light leading-[1.08] tracking-tight" style={displayFont}>
                Before & After
              </h1>
              <p className="mt-3 sm:mt-4 max-w-xl text-[13px] sm:text-[14px] text-neutral-700">
                Explore our portfolio of luxury restoration work. Each piece tells a story of transformation, 
                craftsmanship, and renewed elegance.
              </p>

              {/* Category Filter - Matching Services tab style */}
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] rounded-full border transition ${
                      selectedCategory === category.id
                        ? 'bg-black text-white border-black shadow-[0_10px_25px_rgba(0,0,0,0.15)]'
                        : 'bg-white text-black border-black/20 hover:border-black'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] text-neutral-600">
                {selectedCategory === 'all' ? 'All our restoration work' : 
                 `Showcasing ${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} restoration`}
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
                <div className="relative h-[220px] sm:h-[280px] lg:h-[420px] w-full">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative">
                      <img
                        src={filteredImages[0]?.beforeImage || 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'}
                        alt="Before restoration"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img
                        src={filteredImages[0]?.afterImage || 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80'}
                        alt="After restoration"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="max-w-[1120px] mx-auto px-4 sm:px-5 lg:px-8 pb-12 sm:pb-16 lg:pb-24">
        <section className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

        {/* Gallery Cards - Matching Services page style */}
        {filteredImages.map((item) => (
          <div 
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            {/* Before/After Image */}
            <div className="relative h-56 sm:h-64 lg:h-72 w-full">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 relative">
                  <img
                    src={item.beforeImage}
                    alt={`Before - ${item.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    Before
                  </div>
                </div>
                <div className="w-1/2 relative">
                  <img
                    src={item.afterImage}
                    alt={`After - ${item.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    After
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            </div>
            
            {/* Content - Matching Services card style */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
              <div className="text-[11px] sm:text-[12px] opacity-90">{item.category}</div>
              <div className="text-lg sm:text-xl font-medium mt-1 tracking-wide">{item.title}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] sm:text-[11px] px-2 py-1 bg-white/10 rounded-full backdrop-blur border border-white/15">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Hover Effect - Matching Services style */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -inset-[1px] rounded-2xl" style={{
                background: 'radial-gradient(1200px 300px at 0% 100%, rgba(0,0,0,0.15), transparent 60%)'
              }} />
            </div>
          </div>
        ))}

        </section>

        {/* CTA strip - Matching Services page style */}
        <section className="mt-12 sm:mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-black">
            <div className="absolute inset-0 w-full h-full opacity-20">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 relative">
                  <img
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
                    alt="Before restoration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 relative">
                  <img
                    src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80"
                    alt="After restoration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="relative px-5 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 text-white">
              <h3 className="text-[20px] sm:text-[24px] lg:text-[32px] font-light" style={displayFont}>Transformation through craftsmanship</h3>
              <p className="mt-2 text-[12px] sm:text-[13px] max-w-2xl opacity-90">
                Every restoration tells a story of renewal—from vintage treasures to modern masterpieces, we bring new life to your cherished items.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal - Matching Services page style */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          />
          
          {/* Modal */}
          <div className="relative w-full max-w-4xl h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 backdrop-blur hover:bg-black/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Before/After Images */}
              <div className="w-full lg:w-1/2 h-full min-h-[300px]">
                <div className="relative h-full">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative">
                      <img
                        src={selectedImage.beforeImage}
                        alt={`Before - ${selectedImage.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img
                        src={selectedImage.afterImage}
                        alt={`After - ${selectedImage.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
                <div className="text-xs text-neutral-500 mb-2">{selectedImage.category}</div>
                <h2 className="text-xl lg:text-2xl font-light mb-2" style={displayFont}>
                  {selectedImage.title}
                </h2>
                <p className="text-sm text-neutral-600 mb-4">{selectedImage.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-3">Project Details:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-black text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        ⏱
                      </span>
                      <div className="text-sm text-neutral-700">Duration: {selectedImage.duration}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-black text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        ⭐
                      </span>
                      <div className="text-sm text-neutral-700">Service Level: {selectedImage.price}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-black text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        ✓
                      </span>
                      <div className="text-sm text-neutral-700">Quality Guarantee: 100% Satisfaction</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-3">Services Applied:</h3>
                  <div className="space-y-2">
                    {selectedImage.tags.map((tag, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-green-500">✓</span>
                        <div className="text-sm text-neutral-700">{tag}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="text-sm text-neutral-700">
                    Ready to transform your items? Contact us to start your restoration project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
