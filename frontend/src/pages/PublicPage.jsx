import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  MagnifyingGlass, Pencil, Rocket, Headset,
  ShieldCheck, ChartBar, Users, Globe,
  Buildings, CheckCircle,
} from '@phosphor-icons/react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import CTASection from '@/components/sections/CTASection'

// NO TEAM SECTION — équipe uniquement sur la HomePage

const PHASES = [
  { key: 'audit',  Icon: MagnifyingGlass, color: 'bg-blue-50 text-brand-blue',    number: '01' },
  { key: 'design', Icon: Pencil,          color: 'bg-cyan-50 text-brand-cyan',     number: '02' },
  { key: 'deploy', Icon: Rocket,          color: 'bg-green-50 text-green-600',     number: '03' },
  { key: 'support',Icon: Headset,         color: 'bg-purple-50 text-purple-600',   number: '04' },
]

const VISION_CARDS = [
  { Icon: ShieldCheck, title: 'Sécurité & Conformité', desc: 'Solutions conformes aux normes ISO et réglementations locales.' },
  { Icon: ChartBar,    title: 'Performance Mesurable', desc: 'KPIs définis dès le début, reporting transparent à chaque étape.' },
  { Icon: Users,       title: 'Transfert de Compétences', desc: 'Formation des équipes internes pour une autonomie durable.' },
  { Icon: Globe,       title: 'Interopérabilité', desc: "Intégration avec les systèmes existants de l'État et des partenaires." },
]

const IMPACT_CARDS = [
  { stat: '40%', label: 'Réduction des coûts opérationnels' },
  { stat: '3×',  label: 'Rapidité de traitement des dossiers' },
  { stat: '95%', label: 'Satisfaction des agents utilisateurs' },
  { stat: '0',   label: 'Incident de sécurité majeur' },
]

export default function PublicPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('public_page.hero_title')}
        description={t('public_page.hero_subtitle')}
        path="/public"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AllihTech — Institution Publique',
          provider: { '@type': 'Organization', name: 'AllihTech' },
          description: t('public_page.hero_subtitle'),
        }}
      />

      <PageHero
        tag={<><Buildings size={14} weight="bold" className="inline me-1" />{t('nav.public')}</>}
        title={t('public_page.hero_title')}
        dark
      >
        <p className="text-white/70 text-lg leading-relaxed">
          {t('public_page.hero_subtitle')}
        </p>

        {/* Stats banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {IMPACT_CARDS.map(({ stat, label }) => (
            <div key={label} className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm border border-white/10">
              <p className="font-heading font-extrabold text-3xl text-brand-cyan">{stat}</p>
              <p className="text-white/60 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ── VISION & POSITIONNEMENT ── */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionTitle
            tag={t('public_page.vision_tag')}
            title={t('public_page.vision_title')}
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VISION_CARDS.map(({ Icon, title, desc }, i) => (
              <Card key={title} delay={i * 0.1}>
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                  <Icon size={22} weight="duotone" className="text-brand-blue" />
                </div>
                <h3 className="font-heading font-bold text-brand-black text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PUBLICS ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            tag="Services"
            title="Solutions pour le secteur public"
            subtitle="Des outils numériques adaptés aux spécificités et contraintes des administrations publiques tchadiennes."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'E-Gouvernement',         desc: "Portails citoyens, dématérialisation des démarches administratives et guichets uniques en ligne.", icon: Buildings },
              { title: 'Gestion des RH Publiques', desc: "Systèmes de gestion intégrés pour la paie, les congés et les carrières des fonctionnaires.", icon: Users },
              { title: 'Données & Statistiques',  desc: "Tableaux de bord décisionnels pour piloter les politiques publiques avec des données fiables.", icon: ChartBar },
              { title: 'Sécurité & Cyberdéfense', desc: "Protection des infrastructures critiques, audits de sécurité et formation aux bonnes pratiques.", icon: ShieldCheck },
              { title: 'Connectivité & Réseaux',  desc: "Déploiement d'infrastructures réseau sécurisées pour connecter les administrations.", icon: Globe },
              { title: 'Formation des Agents',    desc: "Programmes de montée en compétences numériques adaptés au secteur public.", icon: CheckCircle },
            ].map(({ title, desc, icon: Icon }, i) => (
              <Card key={title} delay={i * 0.08}>
                <div className="w-11 h-11 rounded-xl bg-brand-deep/10 flex items-center justify-center mb-4">
                  <Icon size={22} weight="duotone" className="text-brand-deep" />
                </div>
                <h3 className="font-heading font-bold text-brand-black text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTHODOLOGIE ── */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <SectionTitle
            tag={t('public_page.methodology_tag')}
            title={t('public_page.methodology_title')}
            center
            className="mb-12"
          />

          {/* Timeline bar */}
          <div className="hidden lg:flex items-center justify-center mb-10 gap-0">
            {PHASES.map(({ number }, i) => (
              <div key={number} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center
                                font-heading font-bold text-sm">{number}</div>
                {i < PHASES.length - 1 && (
                  <div className="w-32 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan" />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHASES.map(({ key, Icon, color, number }, i) => (
              <Card key={key} delay={i * 0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
                    <Icon size={22} weight="duotone" />
                  </div>
                  <span className="font-heading font-extrabold text-3xl text-gray-100">{number}</span>
                </div>
                <h3 className="font-heading font-bold text-brand-black text-base mb-2">
                  {t(`public_page.phases.${key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`public_page.phases.${key}.desc`)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODÈLE FINANCIER ── */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            tag={t('public_page.financial_tag')}
            title={t('public_page.financial_title')}
            center
            className="mb-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Budget Type — Projet Moyen',
                items: [
                  { label: 'Audit & Conception',       value: '15%' },
                  { label: 'Développement',             value: '50%' },
                  { label: 'Formation & Déploiement',   value: '20%' },
                  { label: 'Maintenance annuelle',      value: '15%' },
                ],
              },
              {
                title: 'Conditions de Paiement',
                items: [
                  { label: 'Acompte à la signature',    value: '30%' },
                  { label: 'Jalons intermédiaires',     value: '40%' },
                  { label: 'Livraison finale',          value: '20%' },
                  { label: 'Garantie & Recette',        value: '10%' },
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-bold text-brand-black text-lg mb-5">{title}</h3>
                <div className="space-y-3">
                  {items.map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">{label}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"
                            style={{ width: value }}
                          />
                        </div>
                        <span className="font-heading font-bold text-brand-blue text-sm w-8 text-end">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            * Toutes les offres incluent une garantie de résultat et peuvent être adaptées selon le budget disponible.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
