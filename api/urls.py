from rest_framework import routers
#from .views import LeadViewset

router = routers.DefaultRouter()
#router.register('api/players', LeadViewset, basename='lead')


urlpatterns = router.urls
