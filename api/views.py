from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics , status, viewsets
from rest_framework.response import Response

from .models import Players , Gameweeks , Prevseason 
from .serializers import PlayerSerializer, ListPlayerSerializer ,UpdatePlayerSerializer , FilterPlayerSerializer

import json
import math


class FilterPlayerViews(APIView):
    serializer_class = FilterPlayerSerializer
    def post(self,request, format=None):
        pos = request.data.get('pos')
        team = request.data.get('team')
        page = request.data.get('page')
        if(page==''):
            page=1
        else:
            page = int(float(page))
        if pos=="Any Position":
            playerobj = Players.objects.filter(team=team)
        elif team=="All Teams":
            playerobj = Players.objects.filter(position=pos)
        else:
            playerobj = Players.objects.filter(position=pos).filter(team=team)
        serializer = ListPlayerSerializer(playerobj, many=True)
        pg = math.floor(len(playerobj)/30)
        if page>pg+1 and page<1:
            return Response({"detail":"Invalid page."},status=status.HTTP_400_NOT_FOUND)
        else:
            res = serializer.data[(page-1)*30:(page*30)]

        prevlink = ''
        nextlink = ''
        if page+1 < pg:
            prevlink = "http://localhost:8000/api/filter"
        if page>1:
            nextlink = "http://localhost:8000/api/filter"

        data = {
            "count":len(playerobj),
            "next":nextlink,
            "previous":prevlink,
            "results":res
        } 
        return Response(data, status=status.HTTP_200_OK)


class GetTeamsViews(APIView):
    def get(self, request, format=None):
        teams = list(set(Players.objects.values_list('team', flat=True)))
        res = {"teams":teams}
        return Response(res, status=status.HTTP_200_OK)


class GetPlayersViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Players.objects.all()
    def get_serializer_class(self):
        if self.action == 'list':
            return ListPlayerSerializer
        else:
            return PlayerSerializer

        
class AddPlayersViews(APIView):
    serializer_class  = UpdatePlayerSerializer
    def post(self, request, format=None):
        jfile = request.data.get('playersjson')
        playersdata = json.load(jfile)
        for playerone in playersdata:
            try:
                player = Players(name=playerone["name"],team=playerone["team"],
                                 position=playerone["position"],img_url=playerone["image_urls"][0],
                                 price=playerone["price"],form=float(playerone["form"]),
                                 totalpoints=playerone["totalpoints"],ictrank=float(playerone["ictrank"]),
                                 ictindexpos=float(playerone["ictindexpos"]))
                player.save()
            except Exception as e:
                print("exception occured during creation of player data" + e)
            try:
                for gameweek in playerone["gameweekdata"][:-1]:
                    gamewk  = Gameweeks(
                        gw = int(gameweek["gw"]),
                        pts = int(gameweek["pts"]),
                        minplayed = int(gameweek["min played"]),
                        goalscored = int(gameweek["goalscored"]),
                        assists = int(gameweek["assists"]),
                        clean_sheet =int(gameweek["clean sheet"]),
                        goals_conceded = int(gameweek["goals conceded"]),
                        own_goals = int(gameweek["own goals"]),
                        penalties_saved = int(gameweek["penalties saved"]),
                        penalties_missed = int(gameweek["penalties missed"]),
                        yc = int(gameweek["yellow cards"]),
                        rc = int(gameweek["red cards"]),
                        saves = int(gameweek["saves"]),
                        bonus = float(gameweek["bonus"]),
                        bps = float(gameweek["bps"]),
                        influence = float(gameweek["influence"]),
                        creativity = float(gameweek["creativity"]),
                        threat = float(gameweek["threat"]),
                        ictindex = float(gameweek["ictindex"]),
                        player = player
                    )
                    gamewk.save()
            except Exception as e:
                print("Exception error in gameweeks" + e)
            try:
                for prev in playerone["prevseason"]:
                    prevseason = Prevseason(
                        season = prev["season"],
                        pts = prev["pts"],
                        minplayed =int(prev["min played"]),
                        goalscored =int(prev["goalscored"]),
                        assists =int(prev["assists"]),
                        clean_sheet =int(prev["clean sheet"]),
                        goals_conceded =int(prev["goals conceded"]),
                        own_goals =int(prev["own goals"]),
                        penalties_saved =int(prev["penalties saved"]),
                        penalties_missed =int(prev["penalties missed"]),
                        yc =int(prev["yellow cards"]),
                        rc =int(prev["red cards"]),
                        saves =int(prev["saves"]),
                        bonus =int(prev["bonus"]),
                        bps =int(prev["bps"]),
                        influence =float(prev["influence"]),
                        creativity =float(prev["creativity"]),
                        threat =float(prev["threat"]),
                        ictindex =float(prev["ictindex"]),
                        playerprev = player
                    )
                    prevseason.save()
            except KeyError:
                print("no prevseason")
        return Response({"message":"Players Detail added succesfully"}, status=status.HTTP_200_OK)
