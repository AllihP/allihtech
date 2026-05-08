import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, Globe, Phone } from '@phosphor-icons/react'
import { clsx } from 'clsx'

const LANGS = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
]

const SOCIALS = [
  { label: 'Facebook',  href: '#', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'LinkedIn',  href: '#', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { label: 'Twitter',   href: '#', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
  { label: 'Instagram', href: '#', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const isActive = (p) => p === '/' ? location.pathname === '/' : location.pathname.startsWith(p)

  const links = [
    { to: '/',           label: t('nav.home') },
    { to: '/services',   label: t('nav.services') },
    { to: '/public',     label: t('nav.public') },
    { to: '/private',    label: t('nav.private') },
    { to: '/formations', label: t('nav.formations') },
    { to: '/blog',       label: t('nav.blog') },
    { to: '/actualites', label: t('nav.actualites') },
    { to: '/contact',    label: t('nav.contact') },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* ── TOP BAR ── */}
      <div className="top-bar hidden sm:flex">
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <Phone size={13} weight="fill" className="text-brand-cyan" />
          <a href="tel:+23560928748" className="hover:text-white transition-colors">
            +235 60 92 87 48
          </a>
          <span className="text-white/20 mx-1">·</span>
          <a href="mailto:contact@allihtech.com" className="hover:text-white transition-colors">
            contact@allihtech.com
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-gray-300 hover:text-white text-xs transition-colors"
            >
              <Globe size={13} />
              {LANGS.find(l => l.code === i18n.language)?.label ?? 'Français'}
              <span className="text-[10px] opacity-60">▼</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute end-0 top-full mt-1 w-28 bg-white rounded-xl shadow-lg overflow-hidden z-50"
                >
                  {LANGS.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => { i18n.changeLanguage(code); setLangOpen(false); navigate('/') }}
                      className={clsx(
                        'w-full text-start px-3 py-2 text-xs transition-colors',
                        i18n.language === code
                          ? 'bg-brand-blue text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-cyan transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className={clsx(
        'bg-white flex items-center justify-between px-4 lg:px-8 transition-shadow duration-300',
        scrolled ? 'shadow-[0_4px_15px_rgba(0,0,0,0.1)] py-2.5' : 'shadow-sm py-3'
      )}>
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="AllihTech"
            className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.insertAdjacentHTML('afterend',
                '<span class="font-heading font-bold text-xl text-brand-black">AllihTech</span>')
            }}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={clsx(
                  'relative text-sm font-semibold transition-colors duration-200 py-2',
                  'after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-0.5',
                  'after:bg-brand-blue after:transition-all after:duration-300',
                  isActive(to)
                    ? 'text-brand-blue after:w-full bg-brand-blue/8 px-3 rounded-md'
                    : 'text-gray-700 hover:text-brand-blue after:w-0 hover:after:w-full'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-brand-black hover:text-brand-blue transition-colors"
          aria-label={t('nav.menu')}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={clsx(
                    'px-4 py-3 rounded-xl text-sm font-semibold transition-colors',
                    isActive(to)
                      ? 'bg-brand-blue text-white'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue'
                  )}
                >
                  {label}
                </Link>
              ))}
              {/* Mobile lang switcher */}
              <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                {LANGS.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => { i18n.changeLanguage(code); navigate('/') }}
                    className={clsx(
                      'px-3 py-1.5 rounded-full text-xs font-semibold transition-colors',
                      i18n.language === code
                        ? 'bg-brand-blue text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
