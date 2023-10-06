from django.urls import path
from .views import *
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', main),
    path('get', get),
    path('post', csrf_exempt(post)),
    
]
