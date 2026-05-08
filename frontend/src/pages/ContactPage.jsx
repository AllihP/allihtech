import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Phone, Envelope, MapPin, Clock, PaperPlaneTilt, CheckCircle, Warning } from '@phosphor-icons/react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import { submitContact } from '@/utils/api'

const schema = z.object({
  name:         z.string().min(2),
  email:        z.string().email(),
  phone:        z.string().optional(),
  organization: z.string().optional(),
  service:      z.string().default('other'),
  message:      z.string().min(10),
})

export default function ContactPage() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const {
    register, handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) })

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

  const INFO = [
    { Icon: MapPin,   label: t('contact_page.info.address'), href: null },
    { Icon: Phone,    label: t('contact_page.info.phone'),   href: 'tel:+23560928748' },
    { Icon: Envelope, label: t('contact_page.info.email'),   href: 'mailto:contact@allihtech.com' },
    { Icon: Clock,    label: t('contact_page.info.hours'),   href: null },
  ]

  const SERVICE_OPTIONS = [
    { value: 'digital',    label: t('services.digital.title') },
    { value: 'dev',        label: t('services.dev.title') },
    { value: 'training',   label: t('services.training.title') },
    { value: 'consulting', label: t('services.consulting.title') },
    { value: 'cloud',      label: t('services.cloud.title') },
    { value: 'other',      label: 'Autre' },
  ]

  return (
    <>
      <SEO
        title={t('contact_page.title')}
        description={t('contact_page.subtitle')}
        path="/contact"
      />

      <PageHero
        tag={t('contact_page.tag')}
        title={t('contact_page.title')}
        subtitle={t('contact_page.subtitle')}
      />

      <section className="section-pad bg-white">
        <div className="container-custom grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-heading font-semibold text-gray-700 mb-1.5">
                    {t('contact_page.form.name')} *
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-body
                               transition-colors duration-150 outline-none
                               focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                               ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                    placeholder="Hilla Prince BAMBE"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-gray-700 mb-1.5">
                    {t('contact_page.form.email')} *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-body
                               transition-colors duration-150 outline-none
                               focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                               ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                    placeholder="contact@allihtech.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-heading font-semibold text-gray-700 mb-1.5">
                    {t('contact_page.form.phone')}
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm font-body
                               outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    placeholder="+235 60 00 00 00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-gray-700 mb-1.5">
                    {t('contact_page.form.organization')}
                  </label>
                  <input
                    type="text"
                    {...register('organization')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm font-body
                               outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    placeholder="Ministère / Entreprise"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-gray-700 mb-1.5">
                  {t('contact_page.form.service')}
                </label>
                <select
                  {...register('service')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm font-body
                             outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                >
                  {SERVICE_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-heading font-semibold text-gray-700 mb-1.5">
                  {t('contact_page.form.message')} *
                </label>
                <textarea
                  rows={5}
                  {...register('message')}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-body resize-none
                             transition-colors duration-150 outline-none
                             focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                             ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                  placeholder="Décrivez votre projet ou besoin…"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <CheckCircle size={20} weight="fill" className="text-green-500" />
                  <p className="text-green-700 text-sm font-body">{t('contact_page.form.success')}</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <Warning size={20} weight="fill" className="text-red-500" />
                  <p className="text-red-700 text-sm font-body">{t('contact_page.form.error')}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t('contact_page.form.sending')}</>
                ) : (
                  <><PaperPlaneTilt size={18} weight="bold" />
                  {t('contact_page.form.submit')}</>
                )}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-brand-black text-lg mb-5">Coordonnées</h3>
              <ul className="space-y-4">
                {INFO.map(({ Icon, label, href }) => (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="flex items-start gap-3 hover:text-brand-blue transition-colors">
                        <div className="w-9 h-9 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={18} weight="bold" className="text-brand-blue" />
                        </div>
                        <span className="text-gray-700 text-sm pt-1.5">{label}</span>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={18} weight="bold" className="text-brand-blue" />
                        </div>
                        <span className="text-gray-700 text-sm pt-1.5">{label}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-brand-deep to-brand-blue h-52 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin size={36} weight="fill" className="mx-auto mb-2 text-brand-cyan" />
                <p className="font-heading font-semibold text-sm">N'Djamena, Tchad</p>
                <p className="text-white/60 text-xs mt-1">République du Tchad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
