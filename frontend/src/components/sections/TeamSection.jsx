import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SectionTitle from '@/components/ui/SectionTitle'

/* ── Données équipe ── */
const MEMBERS = [
  { key: 'feli',       img: '/images/team/feli.png',       job: 'Communicante | Community Manager' },
  { key: 'alexandre',  img: '/images/team/Alexandre.png',  job: 'Économiste | Sales Manager' },
  { key: 'dieuleveut', img: '/images/team/dieuleveut.png', job: 'Économiste | Junior Comptable' },
  { key: 'ziakraba',   img: '/images/team/ziakraba.png',   job: 'Ingénieur BioTech | R&D Manager' },
  { key: 'emmanuel',   img: '/images/team/emmanuel.png',   job: 'Leadership & Motivational Speaker' },
  { key: 'gloire',     img: '/images/team/gloire.png',     job: "Expert en Technologies de l'Information" },
]

const BIOS = {
  feli:       'Félicité Ndob est une communicante passionnée et une experte en community management. Elle a rejoint AllihTech pour renforcer la présence en ligne de l\'entreprise.',
  alexandre:  'Alexandre Ndeyina Djogoye est un économiste chevronné et un sales manager talentueux. Il dirige le pôle vente avec expertise.',
  dieuleveut: 'Aldodé Dieu Le Veut BEKOUTOU supervise les finances de l\'entreprise avec rigueur et professionnalisme.',
  ziakraba:   'Ignagali Ziakraba Kazilki dirige le pôle recherche et développement avec une vision innovante.',
  emmanuel:   'Emmanuel Hégire NZOBANTOU renforce les relations avec les partenaires stratégiques.',
  gloire:     'Bélem Gloire Bekoutou supervise le développement de produits innovants et garantit leur excellence.',
}

function ProfileCard({ member, delay = 0 }) {
  const { t } = useTranslation()
  const info = t(`team.members.${member.key}`, { returnObjects: true })
  const bio  = BIOS[member.key] || ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className="profile-card"
    >
      {/* Zone image */}
      <div className="profile-card__img-area">
        <img
          src={member.img}
          alt={info.name}
          loading="lazy"
          className="profile-card__avatar"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(info.name)}&background=4169E1&color=fff&size=200`
          }}
        />
      </div>

      {/* Zone rôle */}
      <div className="profile-card__role-area">
        <h3 className="profile-card__role">{info.role}</h3>
        <p className="profile-card__name">{info.name}</p>
        <p className="profile-card__job">{member.job}</p>
        <div className="profile-card__stars" aria-label="5 étoiles">★★★★★</div>
      </div>

      {/* Zone description */}
      <div className="profile-card__desc-area">
        <p className="profile-card__bio">{bio}</p>
      </div>
    </motion.div>
  )
}

export default function TeamSection() {
  const { t } = useTranslation()

  return (
    <>
      {/* ── Niveau 1 : titre gradient V1 ── */}
      <section className="section-pad bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-heading font-extrabold text-4xl sm:text-5xl text-gradient-brand mb-3"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {t('team.title')}
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto mb-10">
              {t('team.subtitle')}
            </p>
          </motion.div>

          {/* ── Niveau 2 : CEO card ── */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="ceo-card"
            >
              <div className="ceo-card__inner">
                <img
                  src="/images/team/Prince.jpeg"
                  alt={t('team.members.hilla.name')}
                  className="ceo-card__avatar"
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Hilla+Prince&background=4169E1&color=fff&size=200'
                  }}
                />
                <h3 className="font-heading font-bold text-lg text-brand-black mb-1">
                  {t('team.members.hilla.name')}
                </h3>
                <p className="text-brand-blue font-semibold text-sm mb-1">
                  {t('team.members.hilla.role')}
                </p>
                <p className="text-gray-500 text-xs">
                  Ingénieur des Technologies de l'Information
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Niveau 3 : citation pulsante ── */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-brand-blue font-heading font-medium text-base italic max-w-2xl mx-auto"
            style={{ animation: 'pulse-glow 2s infinite' }}
          >
            "{t('ceo.quote')}"
          </motion.p>
        </div>
      </section>

      {/* ── Section titre Experts ── */}
      <section className="pt-2 pb-4 bg-[#F9F9F9] text-center">
        <div className="container-custom">
          <SectionTitle
            title="Rencontrez Nos Experts"
            subtitle={t('team.subtitle')}
            center
          />
        </div>
      </section>

      {/* ── Grille des profils ── */}
      <section className="pb-20 bg-[#F9F9F9]">
        <div
          className="grid gap-8 px-4"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 1rem',
          }}
        >
          {MEMBERS.map((m, i) => (
            <ProfileCard key={m.key} member={m} delay={i * 0.1} />
          ))}
        </div>
      </section>
    </>
  )
}
