import { useTranslation } from 'react-i18next'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import CTASection from '@/components/sections/CTASection'

export default function ServicesPage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('nav.services')} description={t('services.subtitle')} path="/services" />
      <PageHero tag={t('services.tag')} title={t('services.title')} subtitle={t('services.subtitle')} />
      <ServicesGrid />
      <CTASection />
    </>
  )
}
