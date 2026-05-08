from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.throttling import AnonRateThrottle
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from .serializers import ContactMessageSerializer
from .models import ContactMessage


class ContactRateThrottle(AnonRateThrottle):
    rate = '5/hour'
    scope = 'contact'


class ContactView(APIView):
    throttle_classes = [ContactRateThrottle]

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {'success': False, 'errors': serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )

        ip = self._get_client_ip(request)
        msg = serializer.save(ip_address=ip)

        self._send_notification_email(msg)

        return Response(
            {'success': True, 'message': 'Votre message a bien été envoyé.'},
            status=status.HTTP_201_CREATED
        )

    def _get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            return x_forwarded_for.split(',')[0].strip()
        return request.META.get('REMOTE_ADDR')

    def _send_notification_email(self, msg):
        subject = f"[AllihTech] Nouveau contact : {msg.name}"
        body = (
            f"Nom : {msg.name}\n"
            f"Email : {msg.email}\n"
            f"Téléphone : {msg.phone or 'N/A'}\n"
            f"Organisation : {msg.organization or 'N/A'}\n"
            f"Service : {msg.get_service_display()}\n\n"
            f"Message :\n{msg.message}"
        )
        try:
            send_mail(
                subject,
                body,
                settings.EMAIL_HOST_USER,
                [settings.CONTACT_EMAIL_RECIPIENT],
                fail_silently=False,
            )
        except Exception:
            pass


class HealthView(APIView):
    def get(self, request):
        return Response({'status': 'ok'})
