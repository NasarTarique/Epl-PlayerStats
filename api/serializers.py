from rest_framework import serializers
from .models import Players , Gameweeks , Prevseason


class FilterPlayerSerializer(serializers.Serializer):
    pos = serializers.CharField(max_length=20)
    team = serializers.CharField(max_length=20)
    name = serializers.CharField(max_length=100)
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
    goals = serializers.SerializerMethodField()
    assists = serializers.SerializerMethodField()
    clean_sheet = serializers.SerializerMethodField()
    own_goals = serializers.SerializerMethodField()
    saves = serializers.SerializerMethodField()
    total_goals = serializers.SerializerMethodField()
    total_assists = serializers.SerializerMethodField()
    total_cleansheet = serializers.SerializerMethodField()
    total_saves = serializers.SerializerMethodField()
    yc = serializers.SerializerMethodField()
    rc = serializers.SerializerMethodField()
    minsplayed = serializers.SerializerMethodField()
    total_minsplayed = serializers.SerializerMethodField()
    influence = serializers.SerializerMethodField()
    creativity = serializers.SerializerMethodField()
    threat = serializers.SerializerMethodField()
    
    def get_influence(self, obj):
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        inf = 0
        for gw in gameweeks:
            inf+=gw.influence
        return inf

    def get_creativity(self, obj):
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        cr = 0
        for gw in gameweeks:
            cr+=gw.creativity
        return cr

    def get_threat(self, obj):
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        th = 0
        for gw in gameweeks:
            th+=gw.threat
        return th 

    def get_yc(self, obj):
        prevseason  = Prevseason.objects.filter(playerprev=obj.id)
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        yc = 0
        for pv in prevseason:
            yc += pv.yc
        for gw in gameweeks:
            yc += gw.yc
        return yc

    def get_rc(self, obj):
        prevseason  = Prevseason.objects.filter(playerprev=obj.id)
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        rc = 0
        for pv in prevseason:
            rc += pv.rc
        for gw in gameweeks:
            rc += gw.rc
        return rc

    def get_total_goals(self, obj):
        prevseason  = Prevseason.objects.filter(playerprev=obj.id)
        goals = self.get_goals(obj)
        for pv in prevseason:
            goals += pv.goalscored
        return goals

    def get_total_assists(self, obj):
        prevseason  = Prevseason.objects.filter(playerprev=obj.id)
        assists = self.get_assists(obj)
        for pv in prevseason:
            assists += pv.assists
        return assists

    def get_total_cleansheet(self, obj):
        prevseason  = Prevseason.objects.filter(playerprev=obj.id)
        cs = self.get_clean_sheet(obj)
        for pv in prevseason:
            cs += pv.clean_sheet
        return cs

    def get_total_saves(self, obj):
        prevseason  = Prevseason.objects.filter(playerprev=obj.id)
        saves = self.get_saves(obj)
        for pv in prevseason:
            saves += pv.saves
        return saves

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

    def get_own_goals(self, obj):
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        og = 0
        for gw in gameweeks:
            og += gw.own_goals
        return og

    def get_clean_sheet(self, obj):
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        cs = 0
        for gw in gameweeks:
            cs += gw.clean_sheet
        return cs

    def get_minsplayed(self, obj):
        gameweeks = Gameweeks.objects.filter(player=obj.id)
        minsplayed = 0
        for gw in gameweeks:
            minsplayed += gw.minplayed
        return minsplayed

    def get_total_minsplayed(self, obj):
        prevseason = Prevseason.objects.filter(playerprev=obj.id)
        minsplayed = self.get_minsplayed(obj)
        for pv in prevseason:
            minsplayed += pv.minplayed
        return minsplayed
    class Meta:
        model = Players
        fields = ('__all__')


class UpdatePlayerSerializer(serializers.Serializer):
    playersjson = serializers.FileField()
