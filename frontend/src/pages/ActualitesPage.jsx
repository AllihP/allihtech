import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from '@phosphor-icons/react'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'
import CTASection from '@/components/sections/CTASection'

const NEWS = [
  {
    id: 1,
    date: "2024-07-01",
    title: "AllihTech signe un partenariat stratégique avec une institution publique tchadienne",
    excerpt: "Accord de collaboration pour la modernisation des systèmes d'information d'une administration centrale.",
    category: "Partenariat",
  },
  {
    id: 2,
    date: "2024-06-20",
    title: "Lancement de notre programme de formation certifiant en développement web",
    excerpt: "AllihTech lance la première cohorte de son programme Full Stack intensif de 3 mois à N'Djamena.",
    category: "Formation",
  },
  {
    id: 3,
    date: "2024-05-15",
    title: "AllihTech représente le Tchad au Forum Africain sur la Transformation Digitale",
    excerpt: "Notre équipe a présenté les solutions AllihTech lors du plus grand rassemblement tech d'Afrique centrale.",
    category: "Événement",
  },
  {
    id: 4,
    date: "2024-04-08",
    title: "Déploiement réussi d'un portail citoyen pour une mairie tchadienne",
    excerpt: "Retour sur le projet de dématérialisation des services administratifs livré en 4 mois.",
    category: "Projet",
  },
]

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Actualités AllihTech",
  "itemListElement": NEWS.map((n, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "NewsArticle",
      "headline": n.title,
      "datePublished": n.date,
      "publisher": { "@type": "Organization", "name": "AllihTech", "url": "https://allihtech.com" },
    },
  })),
}

function formatDay(dateStr) {
  return new Date(dateStr).getDate()
}
function formatMonth(dateStr) {
  return new Date(dateStr).toLocaleString("fr-FR", { month: "short" })
}
function formatFull(dateStr) {
  return new Date(dateStr).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })
}

export default function ActualitesPage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={t("actualites_page.title")}
        description={t("actualites_page.subtitle")}
        path="/actualites"
        structuredData={ORG_SCHEMA}
      />
      <PageHero
        tag={t("actualites_page.tag")}
        title={t("actualites_page.title")}
        subtitle={t("actualites_page.subtitle")}
      />

      <main>
        <section className="section-pad bg-white">
          <div className="container-custom space-y-5 max-w-3xl mx-auto">
            {NEWS.map((n, i) => (
              <motion.article
                key={n.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                aria-label={n.title}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm
                           hover:shadow-md transition-all duration-300"
              >
                {/* Date badge */}
                <div
                  className="flex-shrink-0 text-center bg-gray-900 text-white rounded-xl p-3 w-14"
                  aria-hidden="true"
                >
                  <p className="font-heading font-bold text-lg leading-none">{formatDay(n.date)}</p>
                  <p className="text-xs text-gray-300 mt-0.5 uppercase">{formatMonth(n.date)}</p>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {n.category}
                    </span>
                    <span className="text-gray-300" aria-hidden="true">·</span>
                    <time dateTime={n.date} className="text-xs text-gray-400">
                      {formatFull(n.date)}
                    </time>
                  </div>
                  <h2 className="font-heading font-bold text-gray-900 text-base leading-snug mb-2">
                    {n.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{n.excerpt}</p>
                  <button
                    className="inline-flex items-center gap-1.5 text-gray-700 text-xs font-semibold
                               hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400
                               focus:ring-offset-2 rounded transition-colors"
                    aria-label={`${t("actualites_page.read_more")} : ${n.title}`}
                  >
                    {t("actualites_page.read_more")} <ArrowRight size={12} weight="bold" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <CTASection />
    </>
  )
}
