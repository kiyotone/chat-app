from django.urls import path
from .views import previous_chats

urlpatterns = [
    
    path('previous_chats/', previous_chats, name='previous_chats'),
]