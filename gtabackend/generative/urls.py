from django.urls import path
from .views import GenerateImage
# from rest_framework_simplejwt.views import TokenBlacklistView

urlpatterns = [
    path('generate-image/',GenerateImage.as_view(),name='generate-image'),
]