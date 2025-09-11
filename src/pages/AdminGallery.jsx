import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
 

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
      const res = await fetch('/api/gallery?page=1&limit=200')
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
      const res = await fetch(url, {
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
    const res = await fetch('/api/uploads/sign', {
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
      const res = await fetch(`/api/gallery/${id}`, {
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
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <main className="max-w-[1120px] mx-auto px-4 sm:px-5 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-light mb-6">Admin Gallery</h1>

        {error && (
          <div className="mb-4 p-3 rounded border border-red-500/30 text-red-400">{error}</div>
        )}

        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#734918]/40 rounded-2xl p-4 mb-8 bg-neutral-900/60">
          <div className="md:col-span-2">
            <label className="block text-sm mb-1 text-neutral-300">Title</label>
            <input
              className="w-full border rounded px-3 py-2 bg-neutral-800 text-white placeholder-neutral-400 border-neutral-700 focus:border-[#D89F30] focus:outline-none caret-white"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1 text-neutral-300">Description</label>
            <textarea
              className="w-full border rounded px-3 py-2 bg-neutral-800 text-white placeholder-neutral-400 border-neutral-700 focus:border-[#D89F30] focus:outline-none caret-white"
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-neutral-300">Before Image URL</label>
            <div className="flex gap-2">
              <input
                className="flex-1 border rounded px-3 py-2 bg-neutral-800 text-white placeholder-neutral-400 border-neutral-700 focus:border-[#D89F30] focus:outline-none caret-white"
                value={form.beforeImageUrl}
                onChange={(e) => setForm({ ...form, beforeImageUrl: e.target.value })}
                placeholder="https://..."
                required
              />
              <label className="px-3 py-2 rounded cursor-pointer border border-[#734918]/40 bg-neutral-900/60 hover:bg-neutral-900">
                <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) uploadToCloudinary(file, (url) => setForm((f) => ({ ...f, beforeImageUrl: url })))
                }} />
                {uploading ? 'Uploading…' : 'Upload'}
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 text-neutral-300">After Image URL</label>
            <div className="flex gap-2">
              <input
                className="flex-1 border rounded px-3 py-2 bg-neutral-800 text-white placeholder-neutral-400 border-neutral-700 focus:border-[#D89F30] focus:outline-none caret-white"
                value={form.afterImageUrl}
                onChange={(e) => setForm({ ...form, afterImageUrl: e.target.value })}
                placeholder="https://..."
                required
              />
              <label className="px-3 py-2 rounded cursor-pointer border border-[#734918]/40 bg-neutral-900/60 hover:bg-neutral-900">
                <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) uploadToCloudinary(file, (url) => setForm((f) => ({ ...f, afterImageUrl: url })))
                }} />
                {uploading ? 'Uploading…' : 'Upload'}
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 text-neutral-300">Display Order</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2 bg-neutral-800 text-white placeholder-neutral-400 border-neutral-700 focus:border-[#D89F30] focus:outline-none caret-white"
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
            <label htmlFor="isPublished" className="text-sm text-neutral-300">Published</label>
          </div>
          <div className="md:col-span-2 flex gap-3">
            <button disabled={loading} className="px-4 py-2 rounded bg-gradient-to-r from-[#D89F30] to-[#734918] text-black disabled:opacity-70">
              {editingId ? (loading ? 'Saving…' : 'Update Item') : (loading ? 'Saving…' : 'Create Item')}
            </button>
            {editingId && (
              <button type="button" className="px-4 py-2 rounded border border-[#734918]/40 text-white hover:bg-neutral-900/60" onClick={onCancelEdit} disabled={loading}>
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading && items.length === 0 && (
            <div className="text-sm text-neutral-400">Loading…</div>
          )}
          {items.map((item) => (
            <div key={item._id} className="rounded-2xl border border-[#734918]/40 overflow-hidden bg-neutral-900/60">
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
                <div className="text-xs text-neutral-400 mb-1">Order: {item.displayOrder ?? 0} · {item.isPublished ? 'Published' : 'Hidden'}</div>
                <div className="text-lg font-medium">{item.title}</div>
                <div className="text-sm text-neutral-300 line-clamp-2 mb-3">{item.description}</div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded border border-[#734918]/40 text-white hover:bg-neutral-900/60" onClick={() => onEdit(item)}>
                    Edit
                  </button>
                  <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => onDelete(item._id)}>
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


