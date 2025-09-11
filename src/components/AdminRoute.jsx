import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function AdminRoute({ children }) {
  const token = useSelector((s) => s.adminAuth.token)
  if (!token) return <Navigate to="/admin/login" replace />
  return children
}


