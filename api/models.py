from django.db import models

# Create your models here.

class Players(models.Model):
    name = models.CharField(max_length=100)
    team = models.CharField(max_length=30)
    position = models.CharField(max_length=15)
    playerimg = models.ImageField()
    price = models.CharField(max_length=10)
    form = models.DecimalField(max_digits=10, decimal_places=2)
    totalpoints = models.CharField(max_length=15)
    ictrank = models.DecimalField(max_digits=10, decimal_places=2)
    ictindexpos = models.DecimalField(max_digits=10, decimal_places=2)

    def get_gameweeks(self):
        gameweek = Gameweeks.objects.filter(player=self)
        return gameweek

    def get_prevseason(self):
        prev = Prevseason.objects.filter(playerprev=self)
        return prev


class Gameweeks(models.Model):
    gw = models.IntegerField()
    pts = models.IntegerField()
    minplayed = models.IntegerField()
    goalscored = models.IntegerField()
    assists = models.IntegerField()
    clean_sheet = models.IntegerField()
    goals_conceded = models.IntegerField()
    own_goals = models.IntegerField()
    penalties_saved = models.IntegerField()
    penalties_missed = models.IntegerField()
    yc = models.IntegerField()
    rc = models.IntegerField()
    saves = models.IntegerField()
    bonus = models.IntegerField()
    bps = models.IntegerField()
    influence = models.DecimalField(max_digits=6,decimal_places=2)
    creativity = models.DecimalField(max_digits=6,decimal_places=2)
    threat = models.DecimalField(max_digits=6,decimal_places=2)
    ictindex = models.DecimalField(max_digits=6,decimal_places=2)
    player = models.ForeignKey(Players, null=True, on_delete=models.SET_NULL)


class Prevseason(models.Model):
    season = models.CharField(max_length=15)
    pts = models.IntegerField()
    minplayed = models.IntegerField()
    goalscored = models.IntegerField()
    assists = models.IntegerField()
    clean_sheet = models.IntegerField()
    goals_conceded = models.IntegerField()
    own_goals = models.IntegerField()
    penalties_saved = models.IntegerField()
    penalties_missed = models.IntegerField()
    yc = models.IntegerField()
    rc = models.IntegerField()
    saves = models.IntegerField()
    bonus = models.IntegerField()
    bps = models.IntegerField()
    influence = models.DecimalField(max_digits=6, decimal_places=2)
    creativity = models.DecimalField(max_digits=6, decimal_places=2)
    threat = models.DecimalField(max_digits=6, decimal_places=2)
    ictindex = models.DecimalField(max_digits=6, decimal_places=2)
    playerprev = models.ForeignKey(Players, null=True, on_delete=models.SET_NULL)
