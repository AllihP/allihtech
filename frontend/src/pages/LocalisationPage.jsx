import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Envelope, Clock } from '@phosphor-icons/react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import CTASection from '@/components/sections/CTASection'

export default function LocalisationPage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('location_page.title')} description={t('location_page.subtitle')} path="/localisation" />
      <PageHero tag={t('location_page.tag')} title={t('location_page.title')} subtitle={t('location_page.subtitle')} />
      <section className="section-pad bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-brand-black text-2xl">Nos coordonnées</h2>
            {[
              { Icon: MapPin,   text: "N'Djamena, République du Tchad" },
              { Icon: Phone,    text: '+235 60 92 87 48',          href: 'tel:+23560928748' },
              { Icon: Envelope, text: 'contact@allihtech.com',    href: 'mailto:contact@allihtech.com' },
              { Icon: Clock,    text: 'Lundi–Vendredi · 8h–18h' },
            ].map(({ Icon, text, href }) => (
              <div key={text} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} weight="bold" className="text-brand-blue" />
                </div>
                {href ? (
                  <a href={href} className="text-gray-700 hover:text-brand-blue transition-colors font-body">{text}</a>
                ) : (
                  <span className="text-gray-700 font-body">{text}</span>
                )}
              </div>
            ))}
          </div>
          {/* Map embed placeholder */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-brand-deep to-brand-blue aspect-video flex items-center justify-center">
            <div className="text-center text-white p-8">
              <MapPin size={48} weight="fill" className="mx-auto mb-4 text-brand-cyan" />
              <p className="font-heading font-bold text-xl mb-1">{t('location_page.address')}</p>
              <p className="text-white/60 text-sm">+235 60 92 87 48</p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
