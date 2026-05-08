from django.contrib import admin
from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'service', 'created_at', 'is_read']
    list_filter = ['service', 'is_read', 'created_at']
    search_fields = ['name', 'email', 'message']
    readonly_fields = ['created_at', 'ip_address']
    ordering = ['-created_at']

    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)
    mark_as_read.short_description = "Marquer comme lu"

    actions = ['mark_as_read']
