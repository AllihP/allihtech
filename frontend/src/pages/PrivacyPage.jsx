import { useTranslation } from 'react-i18next'
import SEO from '@/components/ui/SEO'
import PageHero from '@/components/ui/PageHero'

export default function PrivacyPage() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('privacy_page.title')} description="Politique de confidentialité AllihTech" path="/confidentialite" />
      <PageHero tag="Légal" title={t('privacy_page.title')} />
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-gray-400 text-sm mb-8">{t('privacy_page.last_updated')}</p>
          {[
            { title: '1. Collecte des données', content: 'Nous collectons uniquement les données nécessaires au traitement de vos demandes : nom, email, téléphone et message transmis via notre formulaire de contact. Ces données ne sont jamais vendues à des tiers.' },
            { title: '2. Utilisation des données', content: 'Vos données sont utilisées exclusivement pour répondre à vos demandes, améliorer nos services et vous envoyer des informations pertinentes si vous y avez consenti.' },
            { title: '3. Protection des données', content: 'Toutes les données sont stockées de manière sécurisée sur des serveurs protégés. Nous appliquons des mesures techniques et organisationnelles conformes aux meilleures pratiques de sécurité.' },
            { title: '4. Durée de conservation', content: 'Les données de contact sont conservées pendant 3 ans à compter de votre dernière interaction avec nous, puis supprimées conformément à notre politique de rétention.' },
            { title: '5. Vos droits', content: 'Vous disposez d\'un droit d\'accès, de rectification, d\'effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous à contact@allihtech.com.' },
            { title: '6. Cookies', content: 'Notre site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie de tracking tiers n\'est utilisé sans votre consentement explicite.' },
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
