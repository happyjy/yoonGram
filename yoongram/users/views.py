from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from . import models, serializers


class ExploreUsers(APIView):
  def get(self, request, format=None):
    last_five = models.User.objects.all()[:5]
    serializer = serializers.ExploreUsersSerializer(last_five, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)
