from rest_framework import serializers
from samz.models import Artist,Buyer,Event

class BuyerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Buyer
        fields = "__all__"

class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = "__all__"

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = "__all__"