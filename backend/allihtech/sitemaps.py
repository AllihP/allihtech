from django.contrib.sitemaps import Sitemap
from django.urls import reverse


class StaticViewSitemap(Sitemap):
    priority = 0.8
    changefreq = 'monthly'
    protocol = 'https'
    i18n = True
    languages = ['fr', 'en', 'ar']

    def items(self):
        return [
            'home', 'services', 'public', 'private',
            'formations', 'blog', 'actualites', 'contact',
            'partenaires', 'localisation',
        ]

    def location(self, item):
        routes = {
            'home': '/',
            'services': '/services/',
            'public': '/public/',
            'private': '/private/',
            'formations': '/formations/',
            'blog': '/blog/',
            'actualites': '/actualites/',
            'contact': '/contact/',
            'partenaires': '/partenaires/',
            'localisation': '/localisation/',
        }
        return routes.get(item, '/')
