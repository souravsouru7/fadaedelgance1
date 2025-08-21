import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion as Motion } from 'framer-motion'

export default function RouteLoader({ children }) {
  const location = useLocation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && (
          <Motion.div
            key="route-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center"
          >
            <Motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#D89F30] luxury-nav text-xl"
            >
              Loading…
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  )}


