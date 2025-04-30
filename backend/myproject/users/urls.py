from django.urls import path
from . import views

urlpatterns = [
    # Define your URL patterns here
    path('signup/', views.signup, name='signup'),
    path('login/', views.login_view, name='login'),
    path('', views.show_all_users, name='show_all_users'),
    
]