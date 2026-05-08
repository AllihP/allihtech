import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Code, Brain, Cloud, ChartBar, ArrowRight,
  Check, Star, Briefcase,
} from '@phosphor-icons/react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import CTASection from '@/components/sections/CTASection'

// NO TEAM SECTION — équipe uniquement sur la HomePage

const TECH_STACK = [
  { name: 'React',       color: '#61DAFB', bg: '#e8f8fd' },
  { name: 'Django',      color: '#0c4b33', bg: '#e8f5ef' },
  { name: 'Flutter',     color: '#02569B', bg: '#e6f0fb' },
  { name: 'PostgreSQL',  color: '#336791', bg: '#e8edf5' },
  { name: 'Docker',      color: '#2496ED', bg: '#e6f2fc' },
  { name: 'Cloud',       color: '#FF9900', bg: '#fff5e6' },
  { name: 'CI/CD',       color: '#CE1126', bg: '#fce8ea' },
  { name: 'AI / ML',     color: '#7E22CE', bg: '#f3e8ff' },
]

const PROCESS_STEPS = [
  { n: '01', title: 'Découverte',    desc: 'Atelier de cadrage pour comprendre vos objectifs, contraintes et KPIs.' },
  { n: '02', title: 'Proposition',   desc: 'Architecture technique, planning détaillé et devis transparent.' },
  { n: '03', title: 'Développement', desc: 'Sprints de 2 semaines avec démos régulières et feedback continu.' },
  { n: '04', title: 'Déploiement',   desc: 'Mise en production progressive avec tests de charge et rollback automatique.' },
  { n: '05', title: 'Croissance',    desc: 'Optimisation continue basée sur vos données et retours utilisateurs.' },
]

const RESULTS = [
  { stat: '3×',    label: 'Accélération moyenne time-to-market' },
  { stat: '60%',   label: 'Réduction des bugs en production' },
  { stat: '98%',   label: 'Uptime garanti contractuellement' },
  { stat: '4.9/5', label: 'Satisfaction client moyenne' },
]

export default function PrivatePage() {
  const { t } = useTranslation()

  const plans = [
    { key: 'starter',    featured: false },
    { key: 'pro',        featured: true  },
    { key: 'enterprise', featured: false },
  ]

  return (
    <>
      <SEO
        title={t('private_page.hero_title')}
        description={t('private_page.hero_subtitle')}
        path="/private"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AllihTech — Institution Privée',
          provider: { '@type': 'Organization', name: 'AllihTech' },
          description: t('private_page.hero_subtitle'),
        }}
      />

      <PageHero
        tag={<><Briefcase size={14} weight="bold" className="inline me-1" />{t('nav.private')}</>}
        title={t('private_page.hero_title')}
        dark
      >
        <p className="text-white/70 text-lg">{t('private_page.hero_subtitle')}</p>
        {/* ROI ticker */}
        <div className="mt-8 overflow-hidden rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
          <div className="flex animate-[scroll_20s_linear_infinite] gap-8 py-3 px-6 whitespace-nowrap">
            {['ROI moyen +180%', 'Délai réduit 3×', 'Maintenance 24/7', 'Équipe dédiée', '0 downtime garanti'].map((t) => (
              <span key={t} className="text-brand-cyan font-heading font-semibold text-sm">✦ {t}</span>
            ))}
            {['ROI moyen +180%', 'Délai réduit 3×', 'Maintenance 24/7', 'Équipe dédiée', '0 downtime garanti'].map((t) => (
              <span key={`dup-${t}`} className="text-brand-cyan font-heading font-semibold text-sm">✦ {t}</span>
            ))}
          </div>
        </div>
      </PageHero>

      {/* ── SOLUTIONS ── */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionTitle
            tag={t('private_page.solutions_tag')}
            title={t('private_page.solutions_title')}
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { bg: 'bg-brand-black text-white', Icon: Code,    title: 'Développement Logiciel', desc: 'Apps web/mobile sur mesure avec architecture scalable.' },
              { bg: 'bg-brand-blue  text-white', Icon: Brain,   title: 'Intelligence Artificielle', desc: 'Chatbots, prédictions et automatisation IA pour votre métier.' },
              { bg: 'bg-gray-50',                Icon: Cloud,   title: 'Infrastructure Cloud', desc: 'DevOps, conteneurisation et déploiements CI/CD sécurisés.' },
              { bg: 'bg-gray-50',                Icon: ChartBar,title: 'Analytics & Data', desc: 'Tableaux de bord temps réel et rapports décisionnels.' },
            ].map(({ bg, Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${bg} rounded-2xl p-6`}
              >
                <Icon size={28} weight="duotone" className="mb-4 opacity-90" />
                <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm leading-relaxed opacity-70">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            tag={t('private_page.process_tag')}
            title={t('private_page.process_title')}
            center
            className="mb-14"
          />
          <div className="relative">
            {/* Connecting line desktop */}
            <div className="hidden lg:block absolute top-8 start-0 end-0 h-0.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue mx-24" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {PROCESS_STEPS.map(({ n, title, desc }, i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-blue
                                  flex items-center justify-center mx-auto mb-4 shadow-sm z-10 relative">
                    <span className="font-heading font-extrabold text-brand-blue">{n}</span>
                  </div>
                  <h3 className="font-heading font-bold text-brand-black text-base mb-2">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionTitle
            tag={t('private_page.pricing_tag')}
            title={t('private_page.pricing_title')}
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map(({ key, featured }) => {
              const plan = t(`private_page.pricing_plans.${key}`, { returnObjects: true })
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: plans.findIndex(p => p.key === key) * 0.1 }}
                  className={`relative rounded-2xl p-6 border-2 flex flex-col ${
                    featured
                      ? 'border-brand-blue bg-brand-blue text-white shadow-xl scale-105'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {featured && plan.badge && (
                    <span className="absolute -top-3 start-1/2 -translate-x-1/2 px-4 py-1 bg-brand-cyan
                                     text-white text-xs font-heading font-bold rounded-full shadow">
                      <Star size={12} weight="fill" className="inline me-1" />
                      {plan.badge}
                    </span>
                  )}
                  <div className="mb-6">
                    <h3 className={`font-heading font-bold text-2xl mb-2 ${featured ? 'text-white' : 'text-brand-black'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm font-semibold ${featured ? 'text-white/80' : 'text-brand-blue'}`}>
                      {plan.price}
                    </p>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check
                          size={16}
                          weight="bold"
                          className={`mt-0.5 flex-shrink-0 ${featured ? 'text-brand-cyan' : 'text-brand-blue'}`}
                        />
                        <span className={featured ? 'text-white/90' : 'text-gray-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 px-6 rounded-xl font-heading font-semibold text-sm transition-all duration-200 ${
                      featured
                        ? 'bg-white text-brand-blue hover:bg-gray-50'
                        : 'bg-brand-blue text-white hover:bg-brand-deep'
                    }`}
                  >
                    {t('cta.btn_contact')}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            tag={t('private_page.tech_tag')}
            title={t('private_page.tech_title')}
            center
            className="mb-12"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {TECH_STACK.map(({ name, color, bg }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-white
                           hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                style={{ borderTopColor: color, borderTopWidth: 2 }}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center`} style={{ background: bg }}>
                  <span className="font-heading font-bold text-xs" style={{ color }}>{name.slice(0,2)}</span>
                </div>
                <span className="font-body text-xs text-gray-600 text-center">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉSULTATS ── */}
      <section className="section-pad bg-brand-blue">
        <div className="container-custom">
          <SectionTitle
            tag={t('private_page.results_tag')}
            title={t('private_page.results_title')}
            light
            center
            className="mb-12"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map(({ stat, label }) => (
              <div key={label} className="bg-white/10 rounded-2xl p-6 text-center text-white">
                <p className="font-heading font-extrabold text-4xl text-brand-cyan mb-2">{stat}</p>
                <p className="text-white/70 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTENARIATS ── */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionTitle
            tag={t('private_page.partnership_tag')}
            title={t('private_page.partnership_title')}
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Agence Partenaire',  color: 'border-brand-blue', desc: "Revendez nos solutions à vos clients et bénéficiez de marges attractives et d'un support dédié." },
              { title: 'Partenaire Tech',    color: 'border-brand-cyan', desc: "Intégrez nos API et technologies dans vos produits pour enrichir votre offre." },
              { title: 'Partenaire Stratégique', color: 'border-brand-red', desc: "Alliance long terme pour co-construire des solutions innovantes pour le marché africain." },
            ].map(({ title, color, desc }) => (
              <Card key={title} className={`border-t-4 ${color}`}>
                <h3 className="font-heading font-bold text-brand-black text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <Link to="/contact" className="btn-primary text-sm py-2">
                  {t('common.contact_us')} <ArrowRight size={14} weight="bold" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
