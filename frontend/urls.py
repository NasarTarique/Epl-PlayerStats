from django.urls import path
from  . import views

urlpatterns = [
    path('', views.index),
    path('fantasy/', views.index),
    path('about/', views.index),
    path('stats/', views.index),
    path('stats/<int:id>/', views.index),
    path('compare/', views.index)
]
