from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
import json


# Signup View
@csrf_exempt  # Disable CSRF protection for this view
def signup(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        # Check if user already exists
        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already exists'}, status=400)
        
        # Create user
        user = User.objects.create_user(username=username, email=email, password=password)
        return JsonResponse({'message': 'User created successfully', 'username': user.username, 'email': user.email}, status=201)
    

@csrf_exempt  # Disable CSRF protection for this view
def login_view(request):
    if request.method == 'POST':
        # Get username and password from request body
        body = request.body.decode('utf-8')
        body_data = json.loads(body)
        
        username = body_data.get('username')
        password = body_data.get('password')
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful', 'username': user.username}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=401)
    
def show_all_users(request):
    if request.method == 'GET':
        users = User.objects.all().values('username', 'email')
        return JsonResponse(list(users), safe=False, status=200)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)