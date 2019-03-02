from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from . import models, serializers



# Create your views here.
class Notifications(APIView):
  def get(self, request, format=None):
      user = request.user
      notifications = models.Notification.objects.filter(to=user)
      serializer = serializers.NotificationSerializer(notifications, many=True)
      return Response(data=serializer.data, status=status.HTTP_200_OK)


# #1-60
def create_notification(creator, to, type, image=None, comment=None):
  print('### This is create_notifications')
  print(creator, to, type, image, comment)
  
  notifications = models.Notification.objects.create(
    creator=creator,
    to=to,
    notification_type=type,
    image=image,
    comment=comment
  )

  notifications.save()