import { motion } from 'framer-motion'
import { clsx } from 'clsx'

/**
 * V1-faithful section title:
 * - Gradient text (cyan→deep-blue) option
 * - Animated underline bar (bleu, 60% width)
 * - Subtitle below
 */
export default function SectionTitle({
  tag,
  title,
  highlight,
  subtitle,
  center = false,
  light = false,
  gradient = false,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={clsx(center && 'text-center', className)}
    >
      {tag && (
        <span className={clsx(
          'inline-block px-3 py-1 rounded-full text-xs font-heading font-semibold uppercase tracking-wider mb-4',
          light ? 'bg-white/15 text-white' : 'bg-brand-blue/10 text-brand-blue'
        )}>
          {tag}
        </span>
      )}

      <h2 className={clsx(
        'font-heading font-extrabold text-3xl sm:text-4xl leading-tight mb-2',
        gradient
          ? 'text-gradient-brand'
          : light
          ? 'text-white'
          : 'text-brand-black'
      )}>
        {title}
        {highlight && (
          <span className={light ? ' text-brand-cyan' : ' text-gradient-brand'}>
            {' '}{highlight}
          </span>
        )}
      </h2>

      {/* Animated underline — signature V1 */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: center ? '4rem' : '3.5rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className={clsx(
          'h-1 rounded-full bg-brand-blue mb-4',
          center && 'mx-auto'
        )}
      />

      {subtitle && (
        <p className={clsx(
          'text-base sm:text-lg leading-relaxed max-w-2xl',
          center && 'mx-auto',
          light ? 'text-white/70' : 'text-gray-500'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
