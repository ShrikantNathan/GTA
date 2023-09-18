from django.contrib import admin
from .models import MainBanner,CardSections,Statistics,ClientFeedback,RaiseQuery

# Register your models here.
@admin.register(MainBanner)
class CloudComputingAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'description',
        'image'
    )

@admin.register(CardSections)
class CardsAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'description',
        'image'
    )

@admin.register(Statistics)
class StatisticsAdmin(admin.ModelAdmin):
    list_display = (
        'years_in_life_science',
        'countries_reached',
        'companies_onboarded',
        'satisfied_reach',
        'experienced',
    )

@admin.register(ClientFeedback)
class ClientFeedbackAdmin(admin.ModelAdmin):
    list_display = (
        'client_avatar',
        'client_designation',
        'feedback',
    )

@admin.register(RaiseQuery)
class ClientFeedbackAdmin(admin.ModelAdmin):
    list_display = (
        'first_name',
        'email',
        'enquiry',
    )