import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export default function Card({ children, className = '', delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={clsx('card-base', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
