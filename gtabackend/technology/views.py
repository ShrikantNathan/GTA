from django.shortcuts import render
from rest_framework.serializers import ModelSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from .models import *

# Create your views here.
class MainBannerSerializer(ModelSerializer):
    
    class Meta:
        model = MainBanner
        fields = '__all__'

class TechnologyMainBannerViewset(ModelViewSet):
    queryset = MainBanner.objects.all()
    http_method_names = ['get']
    serializer_class = MainBannerSerializer
    permission_classes = (AllowAny,)

class CardSectionSerializer(ModelSerializer):
    
    class Meta:
        model = CardSections
        fields = '__all__'

class CardSectionViewset(ModelViewSet):
    queryset = CardSections.objects.all()
    http_method_names = ['get']
    serializer_class = CardSectionSerializer
    permission_classes = (AllowAny,)
    # lookup_field = 'route'  

# action = {
#     'get': 'retrieve',
# }

class StatisticsSerializer(ModelSerializer):
    
    class Meta:
        model = Statistics
        fields = '__all__'

class StatisticsViewset(ModelViewSet):
    queryset = Statistics.objects.all()
    http_method_names = ['get']
    serializer_class = StatisticsSerializer
    permission_classes = (AllowAny,)

class ClientFeedbackSerializer(ModelSerializer):
    
    class Meta:
        model = ClientFeedback
        fields = '__all__'

class ClientFeedbackViewset(ModelViewSet):
    queryset = ClientFeedback.objects.all()
    http_method_names = ['get']
    serializer_class = ClientFeedbackSerializer
    permission_classes = (AllowAny,)


class RaiseQuerySerializer(ModelSerializer):
    
    class Meta:
        model = RaiseQuery
        fields = '__all__'

class RaiseQueryViewset(ModelViewSet):
    queryset = RaiseQuery.objects.all()
    http_method_names = ['post']
    serializer_class = RaiseQuerySerializer
    permission_classes = (AllowAny,)