from rest_framework.routers import DefaultRouter
from technology.views import *
router = DefaultRouter()

# B2C social feed routes
router.register('technology-main-banner', TechnologyMainBannerViewset, basename='technology-main-banner')
router.register('cards', CardSectionViewset, basename='cards')
router.register('statistics',StatisticsViewset,basename='statistics')
router.register('feedback',ClientFeedbackViewset,basename='feedback')
router.register('raise-query',RaiseQueryViewset,basename='raise-query')
