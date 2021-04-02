from rest_framework import routers
from django.urls import path
from .views import AddPlayersViews, GetPlayersViewset, FilterPlayerViews , GetTeamsViews

router =  routers.DefaultRouter()
router.register(r'players', GetPlayersViewset, basename='player')
urlpatterns = [
    path('upload/', AddPlayersViews.as_view()),
    path('filter/', FilterPlayerViews.as_view()),
    path('teams/', GetTeamsViews.as_view())
]
urlpatterns += router.urls

