from rest_framework import serializers
from .models import Players , Gameweeks , Prevseason


class FilterPlayerSerializer(serializers.Serializer):
    pos = serializers.CharField(max_length=20)
    team = serializers.CharField(max_length=20)
    page = serializers.CharField(max_length=20, allow_blank=True, default="1")


class GameweekSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gameweeks
        fields = ('__all__')

class PrevSeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prevseason
        fields = ('__all__')

class ListPlayerSerializer(serializers.ModelSerializer):
    goals = serializers.SerializerMethodField()
    assists = serializers.SerializerMethodField()
    clean_sheet = serializers.SerializerMethodField()
    saves = serializers.SerializerMethodField()

    def get_goals(self, obj):
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        goals = 0
        for gw in gameweeks:
            goals += gw.goalscored
        return goals

    def get_assists(self, obj):
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        assists = 0
        for gw in gameweeks:
            assists += gw.assists
        return assists

    def get_saves(self, obj):
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        saves = 0
        for gw in gameweeks:
            saves += gw.saves
        return saves

    def get_clean_sheet(self, obj):
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        cs = 0
        for gw in gameweeks:
            cs += gw.clean_sheet
        return cs

    class Meta:
        model = Players
        fields = ('id', 'name', 'position', 'img_url', 'team', 'goals', 'assists' ,'saves', 'clean_sheet')

class PlayerSerializer(serializers.ModelSerializer):
    gameweeks =  GameweekSerializer(source='get_gameweeks', many=True)
    prevseasondata  = PrevSeasonSerializer(source='get_prevseason', many=True)
    class Meta:
        model = Players
        fields = ('__all__')


class UpdatePlayerSerializer(serializers.Serializer):
    playersjson = serializers.FileField()
