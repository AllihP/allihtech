import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CalendarBlank, ArrowRight } from '@phosphor-icons/react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import CTASection from '@/components/sections/CTASection'

const POSTS = [
  { id: 1, cat: 'tech',      img: '/images/dynamique.jpg',       title: 'Comment Django et React révolutionnent le développement web en Afrique', date: '2024-06-15', excerpt: "L'adoption des frameworks modernes transforme la manière dont nous construisons des applications pour le continent africain." },
  { id: 2, cat: 'strategy',  img: '/images/organisation.jpg',    title: 'Transformation digitale : les 5 erreurs à éviter pour les administrations', date: '2024-05-28', excerpt: "Retour d'expérience sur les obstacles les plus fréquents lors de projets de digitalisation du secteur public." },
  { id: 3, cat: 'case_study',img: '/images/professionnalisme.jpg',title: 'Cas client : comment nous avons réduit de 60% le délai de traitement des dossiers', date: '2024-04-10', excerpt: "Étude de cas complète d'un projet de transformation pour une institution publique tchadienne." },
  { id: 4, cat: 'tech',      img: '/images/equipe.jpg',          title: "L'IA au service des entreprises africaines : opportunités et défis", date: '2024-03-22', excerpt: "Panorama des cas d'usage de l'intelligence artificielle adaptés aux réalités du marché africain." },
  { id: 5, cat: 'strategy',  img: '/images/formations_hero.png', title: 'Pourquoi investir dans la formation numérique de vos équipes en 2024', date: '2024-02-14', excerpt: "Le capital humain numérique, facteur clé de succès pour les organisations qui veulent se transformer." },
  { id: 6, cat: 'case_study',img: '/images/services_hero.png',   title: "Infrastructure cloud en Afrique : notre retour d'expérience", date: '2024-01-30', excerpt: "Défis et solutions pour déployer des infrastructures cloud performantes dans des contextes à connectivité variable." },
]

export default function BlogPage() {
  const { t } = useTranslation()
  const [active, setActive] = useState('all')

  const cats = [
    { key: 'all',        label: t('blog_page.categories.all') },
    { key: 'tech',       label: t('blog_page.categories.tech') },
    { key: 'strategy',   label: t('blog_page.categories.strategy') },
    { key: 'case_study', label: t('blog_page.categories.case_study') },
  ]

  const filtered = active === 'all' ? POSTS : POSTS.filter(p => p.cat === active)

  return (
    <>
      <SEO title={t('blog_page.title')} description={t('blog_page.subtitle')} path="/blog" />
      <PageHero tag={t('blog_page.tag')} title={t('blog_page.title')} subtitle={t('blog_page.subtitle')} />

      <section className="section-pad bg-white">
        <div className="container-custom">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-4 py-2 rounded-full text-sm font-heading font-semibold transition-colors ${
                  active === key
                    ? 'bg-brand-blue text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">{t(`blog_page.categories.${post.cat}`)}</span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <CalendarBlank size={12} weight="bold" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-brand-black text-base leading-snug mb-2 flex-1">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <button className="flex items-center gap-1.5 text-gray-700 text-sm font-heading font-semibold hover:text-gray-900 transition-colors self-start">
                  {t('blog_page.read_more')} <ArrowRight size={14} weight="bold" />
                </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
