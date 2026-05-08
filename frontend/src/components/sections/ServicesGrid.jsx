import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  ArrowsClockwise, Code, GraduationCap,
  ChartLineUp, Cloud, Brain, ArrowRight,
} from '@phosphor-icons/react'
import SectionTitle from '@/components/ui/SectionTitle'

const SERVICES = [
  { key: 'digital',    Icon: ArrowsClockwise, color: 'bg-blue-50 text-brand-blue' },
  { key: 'dev',        Icon: Code,            color: 'bg-cyan-50 text-brand-cyan' },
  { key: 'training',   Icon: GraduationCap,   color: 'bg-green-50 text-green-600' },
  { key: 'consulting', Icon: ChartLineUp,     color: 'bg-purple-50 text-purple-600' },
  { key: 'cloud',      Icon: Cloud,           color: 'bg-orange-50 text-orange-600' },
  { key: 'ai',         Icon: Brain,           color: 'bg-pink-50 text-pink-600' },
]

export default function ServicesGrid({ preview = false }) {
  const { t } = useTranslation()
  const items = preview ? SERVICES.slice(0, 3) : SERVICES

  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <SectionTitle
          tag={t('services.tag')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          center
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ key, Icon, color }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-base group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon size={24} weight="duotone" />
              </div>
              <h3 className="font-heading font-bold text-brand-black text-lg mb-2">
                {t(`services.${key}.title`)}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(`services.${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
        {preview && (
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              {t('services.view_all')}
              <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
