import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAdmin } from '../slices/adminAuthSlice.js'
import { Navigate } from 'react-router-dom'

export default function AdminLogin() {
  const dispatch = useDispatch()
  const { token, status, error } = useSelector((s) => s.adminAuth)
  const [email, setEmail] = useState('admin@faded.local')
  const [password, setPassword] = useState('Admin#12345')

  // Match Contact page typography
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600&display=swap'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  const pageFont = { fontFamily: 'Manrope, system-ui, Arial, sans-serif' }
  const displayFont = { fontFamily: 'Cormorant Garamond, serif' }

  if (token) return <Navigate to="/admin" replace />

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(loginAdmin({ email, password }))
  }

  return (
    <div className="min-h-screen text-black flex items-center justify-center px-4 relative overflow-hidden" style={pageFont}>
      {/* Background image + subtle gradient accents (match Contact aesthetic) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/modern-3d-white-paper-style-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.98)'
        }}
      />
      <div className="absolute inset-0 -z-10 opacity-80 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 50% at 20% -10%, rgba(0,0,0,0.05), transparent 60%), radial-gradient(50% 40% at 100% 120%, rgba(0,0,0,0.05), transparent 60%)'
          }}
        />
      </div>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl p-8 bg-white/80 backdrop-blur border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
      >
        <div className="text-center mb-6">
          <img
            src="/Faded Elegance Logo Final-07.png"
            alt="Faded Elegance"
            className="mx-auto h-12 w-auto mb-3"
          />
          <h1 className="text-3xl font-light" style={displayFont}>Admin Sign In</h1>
          <div className="mx-auto mt-3 h-px w-32 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
        </div>

        <label className="block text-sm mb-2 text-black">Email</label>
        <input
          className="w-full px-4 py-3 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter admin email"
        />

        <label className="block text-sm mb-2 text-black">Password</label>
        <input
          type="password"
          className="w-full px-4 py-3 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        {error && <div className="text-red-600 text-sm mb-3">{error}</div>}

        <button
          disabled={status==='loading'}
          className="w-full bg-black text-white px-6 py-3 rounded-xl font-semibold text-base hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-black/25 disabled:opacity-70"
        >
          {status==='loading' ? 'Signing in…' : 'Sign In'}
        </button>

        <p className="text-center text-xs text-black/60 mt-4">Protected Area • Authorized Personnel Only</p>
      </form>
    </div>
  )
}


