import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAdmin } from '../slices/adminAuthSlice.js'

export default function AdminDashboard() {
  const token = useSelector((s) => s.adminAuth.token)
  const dispatch = useDispatch()
  const [stats, setStats] = useState(null)
  const [error, setError] = useState(null)

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
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <div className="max-w-[1120px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-light">Admin Dashboard</h1>
            <p className="text-sm text-neutral-400 mt-1">Overview of your content and activity</p>
          </div>
          <button onClick={() => dispatch(logoutAdmin())} className="text-sm text-neutral-300 hover:text-white">Logout</button>
        </div>
        {error && <div className="text-red-400 mb-4">{error}</div>}
        {!stats ? (
          <div className="text-neutral-300">Loading…</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl p-5 border border-[#734918]/40 bg-neutral-900/60 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-neutral-400">Gallery Items</div>
                    <div className="text-3xl font-semibold">{stats.totals.galleryItems}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #D89F30, #734918)' }}>
                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14l4-4h12a2 2 0 002 2z"/></svg>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-5 border border-[#734918]/40 bg-neutral-900/60 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-neutral-400">Published</div>
                    <div className="text-3xl font-semibold">{stats.totals.publishedItems}</div>
                    <div className="mt-3 h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${Math.min(100, Math.round(((stats.totals.publishedItems || 0) / Math.max(1, stats.totals.galleryItems || 0)) * 100))}%`, background: 'linear-gradient(90deg, #D89F30, #734918)' }} />
                    </div>
                    <div className="mt-1 text-[11px] text-neutral-400">
                      {Math.min(100, Math.round(((stats.totals.publishedItems || 0) / Math.max(1, stats.totals.galleryItems || 0)) * 100))}% published
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center ml-3" style={{ background: 'linear-gradient(135deg, #D89F30, #734918)' }}>
                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M9 21H7a2 2 0 01-2-2v-2h4v4zm10-4v2a2 2 0 01-2 2h-2v-4h4zM3 7h18v6H3V7zm2-4h14a2 2 0 012 2v2H3V5a2 2 0 012-2z"/></svg>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-5 border border-[#734918]/40 bg-neutral-900/60 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-neutral-400">Admin Users</div>
                    <div className="text-3xl font-semibold">{stats.totals.adminUsers}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #D89F30, #734918)' }}>
                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-7 9a7 7 0 0114 0H5z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                <a
                  href="/admin/gallery"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#D89F30] to-[#734918] text-black hover:opacity-90 transition"
                >
                  Manage Gallery
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 5l6 5-6 5"/></svg>
                </a>
                <a
                  href="/admin/contacts"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#734918]/40 text-white hover:bg-neutral-900/60 transition"
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


