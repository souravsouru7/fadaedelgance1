import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const servicesData = [
  {
    title: 'Women’s Shoes',
    items: [
      'Cleaning & Conditioning',
      'Stitching',
      'Color Restoration',
      'Shoe Stretching',
      'Heel & Sole Repair',
      'Sole Guard & Heel Tips',
      'Shoe Shine',
      'Custom Coloring & Patterns',
      'Customized Artwork'
    ]
  },
  {
    title: 'Men’s Shoes',
    items: [
      'Cleaning & Conditioning',
      'Stitching',
      'Color Restoration',
      'Shoe Stretching',
      'Heel & Sole Repair',
      'Sole Guard & Heel Tips',
      'Shoe Shine',
      'Custom Coloring & Patterns',
      'Customized Artwork'
    ]
  },
  {
    title: 'Bags & Wallets',
    items: [
      'Cleaning & Conditioning',
      'Color Restoration',
      'Stitching & Edging',
      'Zipper Repair & Replacement',
      'Hardware Repair & Replacement',
      'Custom Coloring & Patterns',
      'Customized Artwork'
    ]
  },
  {
    title: 'Kids’ Shoes & Bags',
    items: [
      'Custom Coloring & Patterns',
      'Customized Artwork'
    ]
  },
  {
    title: 'Sneakers',
    items: [
      'Cleaning',
      'Color Restoration'
    ]
  }
]

function AccordionItem({ title, items, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className="rounded-2xl border border-[rgba(216,159,48,0.25)] bg-[rgba(255,255,255,0.02)]"
      style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 lg:px-6 py-4 lg:py-5"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#D89F30]"></span>
          <span className="luxury-nav text-[#D89F30] text-lg lg:text-xl font-semibold tracking-wide">{title}</span>
        </div>
        <span
          className={`transition-transform duration-300 text-[#D89F30] ${open ? 'rotate-45' : ''}`}
          aria-hidden
        >
          {/* plus icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <ul className="px-6 pb-5 pt-0 grid gap-2 lg:gap-3">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/85">
                <span className="mt-1 text-[#F4B942]">•</span>
                <span className="luxury-subtitle">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative overflow-hidden">
        {/* Ambient background accents */}
        <div className="absolute inset-0 overflow-hidden opacity-80">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-[#D89F30]/10 to-[#734918]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-tr from-[#734918]/10 to-[#F4B942]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 right-1/4 w-60 h-60 bg-gradient-to-bl from-[#D89F30]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <main className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-10 lg:mb-14">
            <span className="luxury-nav text-[#D89F30] text-sm tracking-[0.3em] uppercase">Services</span>
            <h1 className="luxury-title text-4xl lg:text-7xl mt-4 leading-tight">Care. Restore. Customize.</h1>
            <div className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-[#D89F30] to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:gap-6">
            {servicesData.map((cat, i) => (
              <AccordionItem key={cat.title} title={cat.title} items={cat.items} defaultOpen={i === 0} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}


