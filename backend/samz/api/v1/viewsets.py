from rest_framework import authentication
from samz.models import Artist,Buyer,Event
from .serializers import ArtistSerializer,BuyerSerializer,EventSerializer
from rest_framework import viewsets

class BuyerViewSet(viewsets.ModelViewSet):
    serializer_class = BuyerSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Buyer.objects.all()

class ArtistViewSet(viewsets.ModelViewSet):
    serializer_class = ArtistSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Artist.objects.all()

class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Event.objects.all()