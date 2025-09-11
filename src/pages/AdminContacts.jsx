import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
 

export default function AdminContacts() {
  const token = useSelector((s) => s.adminAuth.token)
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [statusFilter, setStatusFilter] = useState('')
  const [selected, setSelected] = useState(null)
  const [query, setQuery] = useState('')
  const limit = 20

  const statuses = useMemo(() => ['new','read','replied','archived'], [])

  async function load() {
    try {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams({ page: String(page), limit: String(limit) })
      if (statusFilter) params.set('status', statusFilter)
      const res = await fetch(`/api/admin/contacts?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!res.ok) throw new Error('Failed to load messages')
      const data = await res.json()
      setItems(data.items || [])
      setTotal(data.total || 0)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { if (token) load() }, [token, page, statusFilter])

  async function updateStatus(id, status) {
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status })
      })
      if (!res.ok) throw new Error('Update failed')
      setItems((prev) => prev.map((i) => i._id === id ? { ...i, status } : i))
      if (selected && selected._id === id) setSelected({ ...selected, status })
    } catch (e) {
      alert(e.message)
    }
  }

  async function saveNotes(id, notes) {
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ notes })
      })
      if (!res.ok) throw new Error('Save notes failed')
      setItems((prev) => prev.map((i) => i._id === id ? { ...i, notes } : i))
      if (selected && selected._id === id) setSelected({ ...selected, notes })
    } catch (e) {
      alert(e.message)
    }
  }

  async function remove(id) {
    if (!confirm('Delete this message?')) return
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!res.ok) throw new Error('Delete failed')
      setItems((prev) => prev.filter((i) => i._id !== id))
      if (selected && selected._id === id) setSelected(null)
    } catch (e) {
      alert(e.message)
    }
  }

  const filteredItems = items.filter((it) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (
      (it.firstName + ' ' + it.lastName).toLowerCase().includes(q) ||
      (it.email || '').toLowerCase().includes(q) ||
      (it.phone || '').toLowerCase().includes(q) ||
      (it.message || '').toLowerCase().includes(q)
    )
  })
  const totalPages = Math.max(1, Math.ceil(total / limit))

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <main className="max-w-[1120px] mx-auto px-4 sm:px-5 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-light">Admin Contacts</h1>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name, email, phone, message…"
                className="w-full sm:w-72 border border-neutral-700 rounded px-3 py-2 bg-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:border-[#D89F30] caret-white"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" viewBox="0 0 20 20" fill="currentColor"><path d="M12.9 14.32a8 8 0 111.41-1.41l3.4 3.4-1.42 1.41-3.39-3.4zM8 14a6 6 0 100-12 6 6 0 000 12z"/></svg>
            </div>
            <select value={statusFilter} onChange={(e) => { setPage(1); setStatusFilter(e.target.value) }} className="border border-[#734918]/40 bg-neutral-800 text-white rounded px-2 py-2 focus:outline-none focus:border-[#D89F30]">
              <option value="">All</option>
              {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {error && <div className="mb-4 p-3 rounded border border-red-500/30 text-red-400">{error}</div>}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="border border-[#734918]/40 rounded-2xl overflow-hidden bg-neutral-900/40">
              <div className="divide-y divide-neutral-800">
                {loading && items.length === 0 && (
                  <div className="p-4 text-sm text-neutral-400">Loading…</div>
                )}
                {(filteredItems.length === 0 && !loading) && (
                  <div className="p-6 text-sm text-neutral-400">No messages match your search.</div>
                )}
                {filteredItems.map((item) => (
                  <button key={item._id} className={`w-full text-left p-4 transition-colors border-l-2 ${selected?._id === item._id ? 'bg-neutral-900/60 border-[#D89F30]' : 'hover:bg-neutral-900/40 border-transparent'}`} onClick={() => setSelected(item)}>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">{item.firstName} {item.lastName}</div>
                      <span className={`text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border ${item.status === 'new' ? 'bg-gradient-to-r from-[#D89F30] to-[#734918] text-black border-transparent' : 'bg-neutral-900/60 text-neutral-300 border-neutral-700'}`}>{item.status}</span>
                    </div>
                    <div className="text-xs text-neutral-400 flex flex-wrap gap-x-2"><span>{item.email}</span> <span>·</span> <span>{item.phone || '—'}</span></div>
                    <div className="text-sm text-neutral-200 line-clamp-2 mt-1">{item.message}</div>
                    <div className="text-[11px] text-neutral-500 mt-1">{new Date(item.createdAt).toLocaleString()}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 text-sm text-neutral-300">
              <button disabled={page<=1} className="px-3 py-1 rounded border border-[#734918]/40 disabled:opacity-60" onClick={() => setPage((p) => Math.max(1, p-1))}>Prev</button>
              <div>Page {page} / {totalPages}</div>
              <button disabled={page>=totalPages} className="px-3 py-1 rounded border border-[#734918]/40 disabled:opacity-60" onClick={() => setPage((p) => Math.min(totalPages, p+1))}>Next</button>
            </div>
          </div>

          <div className="lg:sticky lg:top-6 self-start">
            {selected ? (
              <div className="border border-[#734918]/40 rounded-2xl p-4 bg-neutral-900/60 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-medium">{selected.firstName} {selected.lastName}</h2>
                  <div className="flex gap-2">
                    {statuses.map((s) => (
                      <button key={s} className={`text-xs px-2 py-1 rounded-full border border-[#734918]/40 ${selected.status === s ? 'bg-gradient-to-r from-[#D89F30] to-[#734918] text-black' : 'text-neutral-300 hover:bg-neutral-900/60'}`} onClick={() => updateStatus(selected._id, s)}>{s}</button>
                    ))}
                    <button className="text-xs px-2 py-1 rounded bg-red-600 text-white" onClick={() => remove(selected._id)}>Delete</button>
                  </div>
                </div>
                <div className="text-sm text-neutral-300">
                  <div><span className="text-neutral-400">Email:</span> {selected.email}</div>
                  <div><span className="text-neutral-400">Phone:</span> {selected.phone || '—'}</div>
                  <div className="mt-2 whitespace-pre-wrap">{selected.message}</div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm mb-1 text-neutral-300">Internal Notes</label>
                  <textarea className="w-full border border-neutral-700 rounded px-3 py-2 bg-neutral-800 text-white placeholder-neutral-400 focus:outline-none focus:border-[#D89F30] caret-white" rows={4} value={selected.notes || ''} onChange={(e) => setSelected({ ...selected, notes: e.target.value })} />
                  <div className="mt-2">
                    <button className="px-3 py-1 rounded bg-gradient-to-r from-[#D89F30] to-[#734918] text-black" onClick={() => saveNotes(selected._id, selected.notes || '')}>Save Notes</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-sm text-neutral-400">Select a message to view details</div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
