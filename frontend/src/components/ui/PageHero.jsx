import { motion } from 'framer-motion'
import { clsx } from 'clsx'

/**
 * Hero de page interne — style V1 :
 * background sombre #040404 avec radial gradient bleu/cyan
 * titre blanc + underline animée + badge pill
 */
export default function PageHero({ tag, title, highlight, subtitle, children }) {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: '#040404',
        paddingTop: 'calc(56px + 3.5rem)',  /* top-bar (28px) + navbar (44px) + spacing */
        paddingBottom: '4rem',
      }}
    >
      {/* Radial glow — marque de fabrique V1 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(65,105,225,0.18) 0%, transparent 55%),
            radial-gradient(circle at 80% 20%, rgba(6,189,239,0.12) 0%, transparent 40%)
          `,
          animation: 'rotateGradient 20s linear infinite',
        }}
      />

      <style>{`
        @keyframes rotateGradient {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {tag && (
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold
                             uppercase tracking-wider mb-5 bg-white/10 border border-white/20 backdrop-blur-sm">
              {tag}
            </span>
          )}

          <h1
            className="font-heading font-extrabold text-white leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
          >
            {title}
            {highlight && (
              <span className="text-brand-cyan"> {highlight}</span>
            )}
          </h1>

          {/* Underline animée bleue — V1 */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '3.5rem' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="h-1 rounded-full mb-5"
            style={{ background: '#4169E1' }}
          />

          {subtitle && (
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
