from django.contrib import admin
from .models import MainBanner

# Register your models here.
@admin.register(MainBanner)
class CloudComputingAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'description',
        'image'
    )

