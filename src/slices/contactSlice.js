import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const submitContact = createAsyncThunk('contact/submit', async (payload) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || 'Failed to send message')
  }
  return await res.json()
})

const initialState = {
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContactState(state) {
      state.status = 'idle'
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.status = 'succeeded'
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to send message'
      })
  }
})

export const { resetContactState } = contactSlice.actions
export default contactSlice.reducer


