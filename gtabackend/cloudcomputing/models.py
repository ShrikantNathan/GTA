from django.db import models

class MainBanner(models.Model):
    title = models.CharField(max_length=50)
    description= models.TextField()
    image = models.ImageField(upload_to='main_section_banner_image')