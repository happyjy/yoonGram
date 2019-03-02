from rest_framework import serializers

from yoongram.images import serializers as image_serializers
from yoongram.users import serializers as user_serializers

from . import models


class NotificationSerializer(serializers.ModelSerializer):
  creator = user_serializers.ListUsersSerializer()
  image = image_serializers.SmallImageserializer()
  class Meta:
    model = models.Notification
    fields = '__all__'