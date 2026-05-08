import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from '@phosphor-icons/react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import CTASection from '@/components/sections/CTASection'

const PARTNER_TYPES = ['tech', 'institutional', 'academic', 'strategic']

export default function PartenairesPage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('partenaires_page.title')} description={t('partenaires_page.subtitle')} path="/partenaires" />
      <PageHero tag={t('partenaires_page.tag')} title={t('partenaires_page.title')} subtitle={t('partenaires_page.subtitle')} />
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {PARTNER_TYPES.map((type, i) => {
              const info = t(`partenaires_page.types.${type}`, { returnObjects: true })
              return (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-base"
                >
                  <h3 className="font-heading font-bold text-brand-black text-xl mb-3">{info.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{info.desc}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map(n => (
                      <div key={n} className="h-14 bg-gray-100 rounded-xl animate-pulse" />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-brand-deep to-brand-blue rounded-2xl p-8 text-center text-white">
            <h2 className="font-heading font-bold text-2xl mb-3">{t('partenaires_page.become_partner')}</h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto text-sm">
              Rejoignez l'écosystème AllihTech et co-construisons ensemble des solutions innovantes pour l'Afrique.
            </p>
            <Link to="/contact" className="btn-white mx-auto">
              {t('cta.btn_contact')} <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
