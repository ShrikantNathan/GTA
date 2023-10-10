from django.shortcuts import render
import tensorflow as tf
import matplotlib.pyplot as plt
import keras_cv
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from PIL import Image
import io
import base64

# Create your views here.

class GenerateImage(APIView):
    permission_classes = (AllowAny,)
    parser_classes = (JSONParser,)

    def post(self, request, format=None):
        print(request.data)
        model = keras_cv.models.StableDiffusion(img_width=512, img_height=512)
        images = model.text_to_image(request.data['text'], batch_size=1)
        bytesio_object = io.BytesIO()
        image= Image.fromarray(images[0])
        image.save(bytesio_object, 'PNG')
        encoded_image = base64.b64encode(bytesio_object.getbuffer()).decode('utf-8')
        print(encoded_image)
        return Response(encoded_image)
