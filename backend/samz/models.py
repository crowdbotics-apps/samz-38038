from django.conf import settings
from django.db import models
class Buyer(models.Model):
    'Generated Model'
    userProfile = models.ForeignKey("users.User",on_delete=models.PROTECT,related_name="buyer_userProfile",)
    billingHistory = models.TextField(null=True,blank=True,)
    reviewHistory = models.TextField(null=True,blank=True,)
    aboutMe = models.TextField(null=True,blank=True,)
class Artist(models.Model):
    'Generated Model'
    userProfile = models.ForeignKey("users.User",on_delete=models.PROTECT,related_name="artist_userProfile",)
    billingHistory = models.TextField()
    reviewHistory = models.TextField()
    portfolioVideoClip = models.BinaryField()
    skillLevel = models.IntegerField()
    status = models.IntegerField()
    defaultPrice = models.BigIntegerField()
    dateTimeConstraints = models.BigIntegerField()
class Event(models.Model):
    'Generated Model'
    startDateTime = models.DateTimeField()
    endDateTime = models.DateTimeField()
    buyer = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="event_buyer",)
    artist = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="event_artist",)
    price = models.FloatField(null=True,blank=True,)

# Create your models here.
