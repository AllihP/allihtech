import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Preloader from '@/components/layout/Preloader'
import PageLoader from '@/components/ui/PageLoader'

const HomePage         = lazy(() => import('@/pages/HomePage'))
const ServicesPage     = lazy(() => import('@/pages/ServicesPage'))
const PublicPage       = lazy(() => import('@/pages/PublicPage'))
const PrivatePage      = lazy(() => import('@/pages/PrivatePage'))
const FormationsPage   = lazy(() => import('@/pages/FormationsPage'))
const BlogPage         = lazy(() => import('@/pages/BlogPage'))
const ActualitesPage   = lazy(() => import('@/pages/ActualitesPage'))
const ContactPage      = lazy(() => import('@/pages/ContactPage'))
const PartenairesPage  = lazy(() => import('@/pages/PartenairesPage'))
const PrivacyPage      = lazy(() => import('@/pages/PrivacyPage'))
const TermsPage        = lazy(() => import('@/pages/TermsPage'))
const LocalisationPage = lazy(() => import('@/pages/LocalisationPage'))
const NotFoundPage     = lazy(() => import('@/pages/NotFoundPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function DirectionManager() {
  const { i18n } = useTranslation()
  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dir = dir
    document.documentElement.lang = i18n.language
  }, [i18n.language])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <DirectionManager />
      <Preloader />
      <Navbar />
      <ScrollToTop />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                element={<HomePage />} />
            <Route path="/services"        element={<ServicesPage />} />
            <Route path="/public"          element={<PublicPage />} />
            <Route path="/private"         element={<PrivatePage />} />
            <Route path="/formations"      element={<FormationsPage />} />
            <Route path="/blog"            element={<BlogPage />} />
            <Route path="/actualites"      element={<ActualitesPage />} />
            <Route path="/contact"         element={<ContactPage />} />
            <Route path="/partenaires"     element={<PartenairesPage />} />
            <Route path="/confidentialite" element={<PrivacyPage />} />
            <Route path="/conditions"      element={<TermsPage />} />
            <Route path="/localisation"    element={<LocalisationPage />} />
            <Route path="*"               element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
