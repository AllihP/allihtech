from django.db import models
import bleach


class ContactMessage(models.Model):
    SERVICE_CHOICES = [
        ('digital', 'Transformation Digitale'),
        ('dev', 'Développement Logiciel'),
        ('training', 'Formations'),
        ('consulting', 'Conseil Stratégique'),
        ('cloud', 'Infrastructure Cloud'),
        ('other', 'Autre'),
    ]

    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    organization = models.CharField(max_length=200, blank=True)
    service = models.CharField(max_length=50, choices=SERVICE_CHOICES, default='other')
    message = models.TextField(max_length=5000)
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    ip_address = models.GenericIPAddressField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Message de Contact'
        verbose_name_plural = 'Messages de Contact'

    def save(self, *args, **kwargs):
        self.name = bleach.clean(self.name, strip=True)
        self.message = bleach.clean(self.message, strip=True)
        self.organization = bleach.clean(self.organization, strip=True)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} <{self.email}> — {self.created_at:%Y-%m-%d}"
