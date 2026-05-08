import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Phone } from '@phosphor-icons/react'

export default function CTASection() {
  const { t } = useTranslation()

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #040404 0%, #0c54ab 60%, #4169E1 100%)',
        padding: '5rem 1rem',
      }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2
            className="font-heading font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
          >
            {t('cta.title')}
          </h2>
          <p className="text-white/70 text-base mb-8 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-pill-white">
              {t('cta.btn_contact')}
            </Link>
            <a
              href="tel:+23560928748"
              className="btn-pill-outline"
            >
              <Phone size={16} weight="bold" />
              {t('cta.phone')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
