
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ArtistViewSet,BuyerViewSet,EventViewSet
router = DefaultRouter()
router.register('buyer', BuyerViewSet )
router.register('artist', ArtistViewSet )
router.register('event', EventViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
