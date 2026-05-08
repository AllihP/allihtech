import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from '@phosphor-icons/react'
import SEO from '@/components/ui/SEO'

export default function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title="404" description="Page introuvable" path="/404" />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <p className="font-heading font-extrabold text-8xl text-brand-blue/20 mb-4">404</p>
          <h1 className="font-heading font-bold text-3xl text-brand-black mb-4">{t('common.error_404')}</h1>
          <p className="text-gray-500 mb-8">La page que vous cherchez n'existe pas ou a été déplacée.</p>
          <Link to="/" className="btn-primary mx-auto">
            <ArrowLeft size={18} weight="bold" />
            {t('common.back_home')}
          </Link>
        </div>
      </div>
    </>
  )
}
