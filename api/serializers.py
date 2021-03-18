from rest_framework import serializers
from .models import Players , Gameweeks , Prevseason



class GameweekSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gameweeks
        fields = ('__all__')

class PrevSeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prevseason
        fields = ('__all__')

class ListPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = ('id', 'name', 'position', 'playerimg', 'team')

class PlayerSerializer(serializers.ModelSerializer):
    gameweeks =  GameweekSerializer(source='get_gameweeks', many=True)
    prevseasondata  = PrevSeasonSerializer(source='get_prevseason', many=True)
    class Meta:
        model = Players
        fields = ('__all__')


class UpdatePlayerSerializer(serializers.Serializer):
    playersjson = serializers.FileField()
