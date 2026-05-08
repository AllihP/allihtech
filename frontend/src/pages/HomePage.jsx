import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PaperPlaneTilt, CheckCircle, Warning } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SEO from '@/components/ui/SEO'
import TeamSection from '@/components/sections/TeamSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { submitContact } from '@/utils/api'

/* ── FEATURES cards ──────────────────────────────────── */
const FEATURES = [
  { img: '/images/dynamique.jpg',       titleKey: 'feature_dynamic' },
  { img: '/images/organisation.jpg',    titleKey: 'feature_org' },
  { img: '/images/professionnalisme.jpg', titleKey: 'feature_pro' },
]
const FEATURE_TITLES = {
  fr: ['Une équipe dynamique', 'Avoir une meilleure organisation', 'Du professionnalisme'],
  en: ['A dynamic team',       'Better organisation',             'Professionalism'],
  ar: ['فريق ديناميكي',        'تنظيم أفضل',                    'الاحترافية'],
}

/* ── Contact form schema ─────────────────────────────── */
const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  message: z.string().min(10),
})

/* ─────────────────────────────────────────────────────── */
export default function HomePage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'fr'
  const ftitles = FEATURE_TITLES[lang] ?? FEATURE_TITLES.fr
  const [status, setStatus] = useState('idle')

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    setStatus('sending')
    try {
      await submitContact(data)
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AllihTech',
    url: 'https://allihtech.com',
    logo: 'https://allihtech.com/images/logo.png',
    description: t('hero.subtitle'),
    telephone: '+235-60-92-87-48',
    email: 'contact@allihtech.com',
    address: { '@type': 'PostalAddress', addressLocality: "N'Djamena", addressCountry: 'TD' },
  }

  return (
    <>
      <SEO
        title="Digitalisation Institutionnelle"
        description={t('hero.subtitle')}
        path="/"
        structuredData={structuredData}
      />

      {/* ══════════════════════════════════════════════════
          HERO — entete.svg background (identique V1)
      ══════════════════════════════════════════════════ */}
      <section
        className="relative flex items-center justify-center text-center overflow-hidden"
        style={{
          minHeight: '60vh',
          maxHeight: '800px',
          background: "url('/images/entete.svg') center/cover no-repeat",
          paddingTop: 'calc(64px + 2rem)',   /* compense la top-bar + navbar */
          paddingBottom: '3rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl w-full px-4"
          style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}
        >
          <h1
            className="font-heading font-extrabold text-white leading-snug mb-6"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}
          >
            {t('hero.title')}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link to="/public" className="btn-pill-white">
              {t('hero.cta_public')}
            </Link>
            <Link to="/private" className="btn-pill-blue">
              {t('hero.cta_private')}
            </Link>
          </div>
        </motion.div>
      </section>


      {/* ══════════════════════════════════════════════════
          CONTACT / ABOUT — photo circulaire + liste V1
      ══════════════════════════════════════════════════ */}
      <section id="contact" className="py-16 sm:py-20">
        <div
          className="container-custom flex flex-col md:flex-row items-center gap-12"
        >
          {/* Photo circulaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <img
              src="/images/equipe.jpg"
              alt="Équipe AllihTech en réunion de travail"
              loading="lazy"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover object-center shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-start"
          >
            <h2
              className="font-heading font-extrabold text-brand-black leading-snug mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
            >
              {t('contact_page.subtitle')
                ? t('hero.cta_contact') // fallback
                : null}
              Contactez notre service client{' '}
              <span className="text-brand-blue">24h/24</span> 7j/7
            </h2>

            <ul className="space-y-4 mb-8">
              {['Faire un devis', 'Demander conseils', 'Prendre un rendez-vous'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-base font-medium">
                  <span className="bar-bullet" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link to="/public"  className="btn-pill-blue">Accompagnement et mentorat</Link>
              <Link to="/private" className="btn-pill-blue">Services Innovants</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURES — 3 cartes photo identiques V1
      ══════════════════════════════════════════════════ */}
      <section id="features" className="py-16 bg-[#f4f4f9]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6">
            {FEATURES.map(({ img }, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="feature-card flex-1"
                style={{ minWidth: 280, maxWidth: 300 }}
              >
                <img
                  src={img}
                  alt={ftitles[i]}
                  loading="lazy"
                  onError={(e) => { e.target.src = '/images/logo.png' }}
                />
                <div className="feature-card__caption">
                  <h3>{ftitles[i]}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TEAM SECTION — fidèle V1 (3 niveaux + profils)
      ══════════════════════════════════════════════════ */}
      <TeamSection />

      {/* ══════════════════════════════════════════════════
          PARTENAIRES PREVIEW
      ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            tag={t('partners.tag')}
            title={t('partners.title')}
            subtitle={t('partners.subtitle')}
            center
            className="mb-12"
          />
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-50 grayscale">
            {[1,2,3,4,5,6].map(n => (
              <div key={n} className="w-28 h-12 bg-gray-200 rounded-xl" />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/partenaires" className="btn-pill-blue">
              {t('partners.view_all')}
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FORMULAIRE DE CONTACT — floating labels V1
      ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Contactez-Nous"
            subtitle="Nous sommes là pour vous aider. Contactez-nous pour toute question."
            center
            className="mb-10"
          />

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="max-w-2xl mx-auto bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#E0E0E0] p-8 sm:p-10"
          >
            {/* Nom + Email */}
            <div className="flex flex-col sm:flex-row gap-5 mb-5">
              <div className="float-group">
                <input type="text" {...register('name')} required placeholder=" "
                  className={errors.name ? 'border-red-400 bg-red-50' : ''} />
                <label>Votre nom complet</label>
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div className="float-group">
                <input type="email" {...register('email')} required placeholder=" "
                  className={errors.email ? 'border-red-400 bg-red-50' : ''} />
                <label>Votre adresse email</label>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="float-group mb-5">
              <textarea rows={5} {...register('message')} required placeholder=" "
                className={errors.message ? 'border-red-400 bg-red-50' : ''} />
              <label>Comment pouvons-nous vous aider ?</label>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            {/* Feedback */}
            {status === 'success' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-green-600 text-sm mb-4">
                <CheckCircle size={18} weight="fill" />
                {t('contact_page.form.success')}
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-red-500 text-sm mb-4">
                <Warning size={18} weight="fill" />
                {t('contact_page.form.error')}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-pill-blue w-full py-3 text-base disabled:opacity-60"
            >
              {status === 'sending'
                ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                : <PaperPlaneTilt size={18} weight="bold" />}
              {status === 'sending' ? t('contact_page.form.sending') : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
