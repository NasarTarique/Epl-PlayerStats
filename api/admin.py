from django.contrib import admin
from .models import Players, Gameweeks, Prevseason

# Register your models here.
admin.site.register(Players)
admin.site.register(Gameweeks)
admin.site.register(Prevseason)
