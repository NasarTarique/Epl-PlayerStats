from django.shortcuts import render

# Create your views here.

def index(request , id=0):
    return render(request, 'frontend/index.html')
