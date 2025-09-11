import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAdmin } from '../slices/adminAuthSlice.js'
import { Navigate } from 'react-router-dom'

export default function AdminLogin() {
  const dispatch = useDispatch()
  const { token, status, error } = useSelector((s) => s.adminAuth)
  const [email, setEmail] = useState('admin@faded.local')
  const [password, setPassword] = useState('Admin#12345')

  if (token) return <Navigate to="/admin" replace />

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(loginAdmin({ email, password }))
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-[#734918]/40 bg-neutral-900/60 backdrop-blur">
        <h1 className="text-2xl font-light mb-4">Admin Login</h1>
        <label className="block text-sm mb-2 text-neutral-300">Email</label>
        <input className="w-full border rounded px-3 py-2 mb-4 bg-neutral-900 text-white placeholder-neutral-400 border-neutral-700 focus:border-[#D89F30] focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="block text-sm mb-2 text-neutral-300">Password</label>
        <input type="password" className="w-full border rounded px-3 py-2 mb-4 bg-neutral-900 text-white placeholder-neutral-400 border-neutral-700 focus:border-[#D89F30] focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <div className="text-red-400 text-sm mb-3">{error}</div>}
        <button disabled={status==='loading'} className="w-full rounded py-2 bg-gradient-to-r from-[#D89F30] to-[#734918] text-white disabled:opacity-70">
          {status==='loading' ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}


