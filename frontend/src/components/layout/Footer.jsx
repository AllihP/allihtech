import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, Envelope, MapPin } from '@phosphor-icons/react'

const SOCIALS = [
  { label: 'Facebook',  href: '#', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'Instagram', href: '#', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z' },
  { label: 'LinkedIn',  href: '#', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { label: 'Twitter',   href: '#', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
  { label: 'YouTube',   href: '#', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z M9.75 15.02l5.75-3.02-5.75-3.02v6.04z' },
]

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#040404', color: '#F0F0F0' }}>
      {/* Main */}
      <div
        className="flex flex-wrap justify-between gap-8"
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '3.5rem 1rem 2rem',
        }}
      >
        {/* Colonne gauche */}
        <div className="flex flex-col" style={{ flex: '1 1 280px', maxWidth: 320 }}>
          {/* Contact rapide */}
          <ul className="space-y-2 mb-6 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-brand-cyan" />
              <a href="tel:+23560928748" className="hover:text-white transition-colors">+235 60 92 87 48</a>
            </li>
            <li className="flex items-center gap-2">
              <Envelope size={14} className="text-brand-cyan" />
              <a href="mailto:contact@allihtech.com" className="hover:text-white transition-colors">contact@allihtech.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-cyan" />
              <span>N'Djamena, Tchad</span>
            </li>
          </ul>

          {/* Réseaux sociaux — style V1 */}
          <div className="flex gap-3 flex-wrap">
            {SOCIALS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                onMouseEnter={e => e.currentTarget.style.background = '#4169E1'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Colonne droite — liens */}
        <div style={{ flex: '2 1 560px', paddingLeft: '1.5rem' }}>
          <h3 className="text-white font-heading font-bold text-base mb-4">
            {t('footer.company')}
          </h3>
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}
          >
            {[
              { to: '/services',      label: t('nav.services') },
              { to: '/public',        label: t('nav.public') },
              { to: '/private',       label: t('nav.private') },
              { to: '/formations',    label: t('nav.formations') },
              { to: '/partenaires',   label: t('nav.partenaires') },
              { to: '/blog',          label: t('nav.blog') },
              { to: '/actualites',    label: t('nav.actualites') },
              { to: '/contact',       label: t('nav.contact') },
              { to: '/confidentialite', label: t('footer.privacy') },
              { to: '/conditions',    label: t('footer.terms') },
              { to: '/localisation',  label: t('location_page.title') },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-gray-400 hover:text-brand-red transition-colors duration-200 block py-1"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="text-center text-xs py-4 px-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
      >
        © {year} AllihTech. {t('footer.rights')} · allihtech.com
      </div>
    </footer>
  )
}
