import base64
from django.shortcuts import render
import tensorflow as tf
import matplotlib.pyplot as plt
import keras_cv
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
# Create your views here.

class GenerateImage(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        model = keras_cv.models.StableDiffusion(img_width=512, img_height=512)
        image = model.text_to_image(request.data['text'], batch_size=1)
        encoded_image = base64.b64encode(image)
        return Response(encoded_image)