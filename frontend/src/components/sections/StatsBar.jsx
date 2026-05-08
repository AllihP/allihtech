import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const inc = target / steps
    let cur = 0
    const t = setInterval(() => {
      cur += inc
      if (cur >= target) { setCount(target); clearInterval(t) }
      else setCount(Math.floor(cur))
    }, 1800 / steps)
    return () => clearInterval(t)
  }, [started, target])

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>
}

export default function StatsBar() {
  const { t } = useTranslation()
  const stats = [
    { value: 50, suffix: '+', label: t('stats.projects') },
    { value: 30, suffix: '+', label: t('stats.clients') },
    { value: 5,  suffix: '+', label: t('stats.years') },
    { value: 20, suffix: '+', label: t('stats.experts') },
  ]

  return (
    <section className="bg-brand-blue py-10">
      <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ value, suffix, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center text-white"
          >
            <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-1">
              <Counter target={value} suffix={suffix} />
            </div>
            <p className="text-blue-100 text-sm font-body">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
