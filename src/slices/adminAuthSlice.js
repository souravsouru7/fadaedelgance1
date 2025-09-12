import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiFetch } from '../lib/api.js'

const tokenKey = 'fe_admin_token'

export const loginAdmin = createAsyncThunk('adminAuth/login', async ({ email, password }) => {
  const res = await apiFetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Login failed' }))
    throw new Error(err.error || 'Login failed')
  }
  const data = await res.json()
  localStorage.setItem(tokenKey, data.token)
  return data.token
})

export const logoutAdmin = createAsyncThunk('adminAuth/logout', async () => {
  localStorage.removeItem(tokenKey)
})

const initialState = {
  token: typeof window !== 'undefined' ? localStorage.getItem(tokenKey) : null,
  status: 'idle',
  error: null,
}

const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Login failed'
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.token = null
        state.status = 'idle'
      })
  }
})

export default adminAuthSlice.reducer


