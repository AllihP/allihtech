import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const BASE_URL = 'https://allihtech.com'
const DEFAULT_IMAGE = `${BASE_URL}/images/logo.png`

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AllihTech',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description: 'Solutions technologiques innovantes pour la transformation digitale en Afrique — AllihTech, N\'Djamena, Tchad.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: "N'Djamena",
    addressCountry: 'TD',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+235-60-92-87-48',
    contactType: 'customer support',
    email: 'contact@allihtech.com',
    availableLanguage: ['French', 'English', 'Arabic'],
  },
  sameAs: [
    'https://facebook.com/allihtech',
    'https://twitter.com/allihtech',
    'https://linkedin.com/company/allihtech',
    'https://instagram.com/allihtech',
  ],
}

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  structuredData,
}) {
  const { i18n } = useTranslation()
  const lang = i18n.language || 'fr'
  const fullTitle = title ? `${title} | AllihTech` : 'AllihTech — Innovation Numérique au Tchad'
  const url = `${BASE_URL}${path}`
  const ogLocale = lang === 'ar' ? 'ar_TD' : lang === 'en' ? 'en_US' : 'fr_TD'

  return (
    <Helmet>
      <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* hreflang — multilingue */}
      <link rel="alternate" hrefLang="fr" href={`${BASE_URL}/fr${path}`} />
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en${path}`} />
      <link rel="alternate" hrefLang="ar" href={`${BASE_URL}/ar${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${path}`} />

      {/* Open Graph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={url} />
      <meta property="og:type"        content={type} />
      <meta property="og:image"       content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name"   content="AllihTech" />
      <meta property="og:locale"      content={ogLocale} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content="@allihtech" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* JSON-LD Organisation (présent sur toutes les pages) */}
      <script type="application/ld+json">
        {JSON.stringify(ORG_SCHEMA)}
      </script>

      {/* JSON-LD spécifique à la page (optionnel) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
