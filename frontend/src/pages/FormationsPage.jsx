import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Clock, GraduationCap, ArrowRight } from '@phosphor-icons/react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import CTASection from '@/components/sections/CTASection'

const COURSE_KEYS = ['web', 'mobile', 'data', 'cloud', 'digital', 'management']
const LEVEL_COLORS = {
  'Débutant à Avancé': 'bg-green-50 text-green-700',
  'Beginner to Advanced': 'bg-green-50 text-green-700',
  'Intermédiaire': 'bg-blue-50 text-blue-700',
  'Intermediate': 'bg-blue-50 text-blue-700',
  'Avancé': 'bg-purple-50 text-purple-700',
  'Advanced': 'bg-purple-50 text-purple-700',
  'Tous niveaux': 'bg-gray-50 text-gray-700',
  'All levels': 'bg-gray-50 text-gray-700',
}

export default function FormationsPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('formations_page.hero_title')}
        description={t('formations_page.hero_subtitle')}
        path="/formations"
      />
      <PageHero
        tag={t('formations_page.tag')}
        title={t('formations_page.hero_title')}
        subtitle={t('formations_page.hero_subtitle')}
      />

      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionTitle
            tag={t('formations_page.tag')}
            title={t('formations_page.title')}
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSE_KEYS.map((key, i) => {
              const course = t(`formations_page.courses.${key}`, { returnObjects: true })
              const levelColor = LEVEL_COLORS[course.level] || 'bg-gray-50 text-gray-700'
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-base group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                      <GraduationCap size={22} weight="duotone" className="text-brand-blue" />
                    </div>
                    <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${levelColor}`}>
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-brand-black text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{course.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Clock size={14} weight="bold" />
                      {course.duration}
                    </div>
                    <Link
                      to="/contact"
                      className="flex items-center gap-1.5 text-brand-blue text-xs font-heading font-semibold
                                 hover:text-brand-deep transition-colors"
                    >
                      S'inscrire <ArrowRight size={13} weight="bold" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
