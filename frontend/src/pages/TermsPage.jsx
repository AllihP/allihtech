import { useTranslation } from 'react-i18next'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'

export default function TermsPage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('terms_page.title')} description="Conditions générales d'utilisation AllihTech" path="/conditions" />
      <PageHero tag="Légal" title={t('terms_page.title')} />
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-gray-400 text-sm mb-8">{t('terms_page.last_updated')}</p>
          {[
            { title: '1. Objet', content: 'Les présentes conditions générales régissent l\'utilisation du site web allihtech.com et des services proposés par AllihTech, entreprise technologique tchadienne.' },
            { title: '2. Utilisation du site', content: 'L\'utilisation de ce site implique l\'acceptation des présentes conditions. Toute utilisation frauduleuse, abusive ou illégale est strictement interdite.' },
            { title: '3. Propriété intellectuelle', content: 'L\'ensemble du contenu de ce site (textes, images, logos, code) est la propriété exclusive d\'AllihTech et est protégé par les lois sur la propriété intellectuelle.' },
            { title: '4. Limitation de responsabilité', content: 'AllihTech ne saurait être tenu responsable des dommages directs ou indirects résultant de l\'utilisation du site ou des informations qu\'il contient.' },
            { title: '5. Droit applicable', content: 'Les présentes conditions sont régies par le droit tchadien. Tout litige sera soumis à la juridiction compétente de N\'Djamena, République du Tchad.' },
          ].map(({ title, content }) => (
            <div key={title} className="mb-8">
              <h2 className="font-heading font-bold text-brand-black text-xl mb-3">{title}</h2>
              <p className="text-gray-600 leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
