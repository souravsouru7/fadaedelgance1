import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAdmin } from '../slices/adminAuthSlice.js'

export default function AdminDashboard() {
  const token = useSelector((s) => s.adminAuth.token)
  const dispatch = useDispatch()
  const [stats, setStats] = useState(null)
  const [error, setError] = useState(null)

  // Match Admin Login / Contact typography
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Manrope:wght@400;500;600&display=swap'
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  const pageFont = { fontFamily: 'Manrope, system-ui, Arial, sans-serif' }
  const displayFont = { fontFamily: 'Cormorant Garamond, serif' }

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/admin/stats', {
          headers: { Authorization: `Bearer ${token}` }
        })
        if (!res.ok) throw new Error('Failed to load stats')
        const data = await res.json()
        setStats(data)
      } catch (e) {
        setError(e.message)
      }
    }
    if (token) load()
  }, [token])

  return (
    <div className="min-h-screen text-black relative overflow-hidden" style={pageFont}>
      {/* Background image and subtle gradients (match Admin Login) */}
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

      <div className="max-w-[1120px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-light" style={displayFont}>Admin Dashboard</h1>
            <p className="text-sm text-black/60 mt-1">Overview of your content and activity</p>
          </div>
          <button
            onClick={() => dispatch(logoutAdmin())}
            className="text-sm text-black/70 hover:text-black"
          >Logout</button>
        </div>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        {!stats ? (
          <div className="text-black/70">Loading…</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl p-5 border border-black/10 bg-white/80 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-black/60">Gallery Items</div>
                    <div className="text-3xl font-semibold">{stats.totals.galleryItems}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14l4-4h12a2 2 0 002 2z"/></svg>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-5 border border-black/10 bg-white/80 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-black/60">Published</div>
                    <div className="text-3xl font-semibold">{stats.totals.publishedItems}</div>
                    <div className="mt-3 h-2 w-full rounded-full bg-black/10 overflow-hidden">
                      <div className="h-full rounded-full bg-black" style={{ width: `${Math.min(100, Math.round(((stats.totals.publishedItems || 0) / Math.max(1, stats.totals.galleryItems || 0)) * 100))}%` }} />
                    </div>
                    <div className="mt-1 text-[11px] text-black/60">
                      {Math.min(100, Math.round(((stats.totals.publishedItems || 0) / Math.max(1, stats.totals.galleryItems || 0)) * 100))}% published
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center ml-3 bg-black text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 21H7a2 2 0 01-2-2v-2h4v4zm10-4v2a2 2 0 01-2 2h-2v-4h4zM3 7h18v6H3V7zm2-4h14a2 2 0 012 2v2H3V5a2 2 0 012-2z"/></svg>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-5 border border-black/10 bg-white/80 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-black/60">Admin Users</div>
                    <div className="text-3xl font-semibold">{stats.totals.adminUsers}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                <a
                  href="/admin/gallery"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:scale-[1.02] transition-all shadow-lg hover:shadow-black/25"
                >
                  Manage Gallery
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 5l6 5-6 5"/></svg>
                </a>
                <a
                  href="/admin/contacts"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-black text-black hover:bg-black hover:text-white transition-all"
                >
                  View Contacts
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 5l6 5-6 5"/></svg>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}


