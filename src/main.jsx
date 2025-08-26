import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import CompanyInfo from './pages/CompanyInfo.jsx'
import RouteLoader from './components/RouteLoader.jsx'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import FloatingContact from './components/FloatingContact.jsx'
import { HelmetProvider } from '@dr.pogodin/react-helmet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RouteLoader>
          <FloatingContact />
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
          </Routes>
        </AnimatePresence>
      </RouteLoader>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
