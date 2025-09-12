import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiFetch } from '../lib/api.js'
 

export default function AdminGallery() {
  const token = useSelector((s) => s.adminAuth.token)

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [uploading, setUploading] = useState(false)

  const emptyForm = useMemo(() => ({
    title: '',
    description: '',
    beforeImageUrl: '',
    afterImageUrl: '',
    isPublished: true,
    displayOrder: 0,
  }), [])

  const [form, setForm] = useState(emptyForm)

  async function loadItems() {
    try {
      setLoading(true)
      setError(null)
      const res = await apiFetch('/api/gallery?page=1&limit=200')
      if (!res.ok) throw new Error('Failed to load gallery')
      const data = await res.json()
      setItems(Array.isArray(data.items) ? data.items : [])
    } catch (e) {
      setError(e.message || 'Failed to load gallery')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadItems()
  }, [])

  function onEdit(item) {
    setEditingId(item._id)
    setForm({
      title: item.title || '',
      description: item.description || '',
      beforeImageUrl: item.beforeImageUrl || '',
      afterImageUrl: item.afterImageUrl || '',
      isPublished: Boolean(item.isPublished),
      displayOrder: typeof item.displayOrder === 'number' ? item.displayOrder : 0,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function onCancelEdit() {
    setEditingId(null)
    setForm(emptyForm)
  }

  async function onSubmit(e) {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      const method = editingId ? 'PATCH' : 'POST'
      const url = editingId ? `/api/gallery/${editingId}` : '/api/gallery'
      const res = await apiFetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: form.title.trim(),
          description: form.description.trim(),
          beforeImageUrl: form.beforeImageUrl.trim(),
          afterImageUrl: form.afterImageUrl.trim(),
          isPublished: Boolean(form.isPublished),
          displayOrder: Number(form.displayOrder) || 0,
        })
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || 'Save failed')
      }
      await loadItems()
      onCancelEdit()
      alert('Saved successfully')
    } catch (e) {
      setError(e.message || 'Save failed')
    } finally {
      setLoading(false)
    }
  }

  async function requestCloudinarySignature() {
    const res = await apiFetch('/api/uploads/sign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ folder: 'faded-elegance/gallery' })
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.error || 'Failed to get upload signature')
    }
    return res.json()
  }

  async function uploadToCloudinary(file, onUrl) {
    try {
      setUploading(true)
      const { cloudName, apiKey, timestamp, signature, folder } = await requestCloudinarySignature()
      const formData = new FormData()
      formData.append('file', file)
      formData.append('api_key', apiKey)
      formData.append('timestamp', String(timestamp))
      formData.append('signature', signature)
      formData.append('folder', folder)
      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
      })
      if (!uploadRes.ok) {
        const err = await uploadRes.json().catch(() => ({}))
        throw new Error(err.error?.message || 'Cloudinary upload failed')
      }
      const data = await uploadRes.json()
      onUrl(data.secure_url)
    } catch (e) {
      setError(e.message || 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  async function onDelete(id) {
    if (!confirm('Delete this item?')) return
    try {
      setLoading(true)
      setError(null)
      const res = await apiFetch(`/api/gallery/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || 'Delete failed')
      }
      setItems((prev) => prev.filter((x) => x._id !== id))
    } catch (e) {
      setError(e.message || 'Delete failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen text-black relative overflow-hidden">
      {/* Background image and subtle gradients (align with Admin Dashboard/Login) */}
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

      <main className="max-w-[1120px] mx-auto px-4 sm:px-5 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-light mb-6">Admin Gallery</h1>

        {error && (
          <div className="mb-4 p-3 rounded border border-red-500/30 text-red-700 bg-white/80 backdrop-blur">{error}</div>
        )}

        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-black/10 rounded-2xl p-4 mb-8 bg-white/80 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="md:col-span-2">
            <label className="block text-sm mb-1 text-black/80">Title</label>
            <input
              className="w-full px-3 py-2 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1 text-black/80">Description</label>
            <textarea
              className="w-full px-3 py-2 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all"
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-black/80">Before Image URL</label>
            <div className="flex gap-2">
              <input
                className="flex-1 px-3 py-2 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all"
                value={form.beforeImageUrl}
                onChange={(e) => setForm({ ...form, beforeImageUrl: e.target.value })}
                placeholder="https://..."
                required
              />
              <label className="px-3 py-2 rounded-lg cursor-pointer border border-black text-black hover:bg-black hover:text-white transition-all">
                <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) uploadToCloudinary(file, (url) => setForm((f) => ({ ...f, beforeImageUrl: url })))
                }} />
                {uploading ? 'Uploading…' : 'Upload'}
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 text-black/80">After Image URL</label>
            <div className="flex gap-2">
              <input
                className="flex-1 px-3 py-2 bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all"
                value={form.afterImageUrl}
                onChange={(e) => setForm({ ...form, afterImageUrl: e.target.value })}
                placeholder="https://..."
                required
              />
              <label className="px-3 py-2 rounded-lg cursor-pointer border border-black text-black hover:bg:black hover:bg-black hover:text-white transition-all">
                <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) uploadToCloudinary(file, (url) => setForm((f) => ({ ...f, afterImageUrl: url })))
                }} />
                {uploading ? 'Uploading…' : 'Upload'}
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 text-black/80">Display Order</label>
            <input
              type="number"
              className="w-full px-3 py-2 bg:white bg-white border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black focus:bg-white transition-all"
              value={form.displayOrder}
              onChange={(e) => setForm({ ...form, displayOrder: e.target.value })}
              min={0}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              id="isPublished"
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) => setForm({ ...form, isPublished: e.target.checked })}
            />
            <label htmlFor="isPublished" className="text-sm text-black/80">Published</label>
          </div>
          <div className="md:col-span-2 flex gap-3">
            <button disabled={loading} className="px-4 py-2 rounded-xl bg-black text-white hover:scale-[1.02] transition-all shadow-md disabled:opacity-70">
              {editingId ? (loading ? 'Saving…' : 'Update Item') : (loading ? 'Saving…' : 'Create Item')}
            </button>
            {editingId && (
              <button type="button" className="px-4 py-2 rounded-xl border border-black text-black hover:bg-black hover:text-white transition-all" onClick={onCancelEdit} disabled={loading}>
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading && items.length === 0 && (
            <div className="text-sm text-black/60">Loading…</div>
          )}
          {items.map((item) => (
            <div key={item._id} className="rounded-2xl border border-black/10 overflow-hidden bg-white/80 backdrop-blur shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative">
                    <img src={item.beforeImageUrl} alt="Before" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">Before</div>
                  </div>
                  <div className="w-1/2 relative">
                    <img src={item.afterImageUrl} alt="After" className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">After</div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-black/60 mb-1">Order: {item.displayOrder ?? 0} · {item.isPublished ? 'Published' : 'Hidden'}</div>
                <div className="text-lg font-medium">{item.title}</div>
                <div className="text-sm text-black/70 line-clamp-2 mb-3">{item.description}</div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-lg border border-black text-black hover:bg-black hover:text-white transition-all" onClick={() => onEdit(item)}>
                    Edit
                  </button>
                  <button className="px-3 py-1 rounded-lg bg-red-600 text-white hover:opacity-90" onClick={() => onDelete(item._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}


