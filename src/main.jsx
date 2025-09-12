import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { adminStore } from './store/adminStore.js'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import CompanyInfo from './pages/CompanyInfo.jsx'
import Gallery from './pages/Gallery.jsx'
import RouteLoader from './components/RouteLoader.jsx'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import FloatingContact from './components/FloatingContact.jsx'
import Watermark from './components/Watermark.jsx'
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import SEOOptimizer from './components/SEOOptimizer.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminRoute from './components/AdminRoute.jsx'
import AdminGallery from './pages/AdminGallery.jsx'
import AdminContacts from './pages/AdminContacts.jsx'

function CommonOverlays() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')
  return (
    <>
      {!isAdmin && <SEOOptimizer />}
      {!isAdmin && <FloatingContact />}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={adminStore}>
      <BrowserRouter>
        <RouteLoader>
          <Watermark />
          <CommonOverlays />
          <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <Motion.div
                  key="home"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <App />
                </Motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <Motion.div
                  key="about"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <About />
                </Motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <Motion.div
                  key="services"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Services />
                </Motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <Motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Contact />
                </Motion.div>
              }
            />
            <Route
              path="/gallery"
              element={
                <Motion.div
                  key="gallery"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Gallery />
                </Motion.div>
              }
            />
            {/* Admin routes */}
            <Route
              path="/admin/login"
              element={
                <Motion.div
                  key="admin-login"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AdminLogin />
                </Motion.div>
              }
            />
            <Route
              path="/admin"
              element={
                <Motion.div
                  key="admin"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                </Motion.div>
              }
            />
            <Route
              path="/admin/contacts"
              element={
                <Motion.div
                  key="admin-contacts"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AdminRoute>
                    <AdminContacts />
                  </AdminRoute>
                </Motion.div>
              }
            />
            <Route
              path="/admin/gallery"
              element={
                <Motion.div
                  key="admin-gallery"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AdminRoute>
                    <AdminGallery />
                  </AdminRoute>
                </Motion.div>
              }
            />
            <Route
              path="/company-info"
              element={
                <Motion.div
                  key="company-info"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CompanyInfo />
                </Motion.div>
              }
            />
            <Route
              path="*"
              element={
                <Motion.div
                  key="not-found"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="min-h-screen bg-black text-white flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                      <p className="text-xl mb-8">The page you're looking for doesn't exist.</p>
                      <a 
                        href="/" 
                        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                </Motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </RouteLoader>
    </BrowserRouter>
    </Provider>
    </HelmetProvider>
  </StrictMode>,
)
