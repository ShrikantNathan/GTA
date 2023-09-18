from django.db import models

# Create your models here.
class MainBanner(models.Model):
    title = models.CharField(max_length=50)
    subtitle = models.CharField(max_length=20)
    description= models.TextField()
    image = models.ImageField(upload_to='main_section_banner_image')
    icon = models.ImageField(upload_to='main_section_icon_image')

class CardSections(models.Model):
    image = models.ImageField(upload_to='technology_card_image')
    title = models.CharField(max_length=50)
    description= models.TextField()
    link = models.CharField(max_length=50) 
    # link = models.URLField(max_length=200)


class Statistics(models.Model):
    years_in_life_science = models.PositiveIntegerField()
    countries_reached = models.PositiveIntegerField()
    companies_onboarded = models.PositiveIntegerField()
    satisfied_reach = models.PositiveIntegerField()
    experienced = models.PositiveIntegerField()

class ClientFeedback(models.Model):
    client_avatar = models.ImageField(upload_to='client_avatar')
    client_designation = models.CharField(max_length=30)
    feedback = models.TextField()

class RaiseQuery(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    company = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=40)
    service = models.CharField(max_length=50)
    enquiry = models.TextField()