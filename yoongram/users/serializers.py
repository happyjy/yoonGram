from rest_framework import serializers
from . import models
from yoongram.images import serializers as images_serializers
  
class UserProfileSerializer(serializers.ModelSerializer):
    images = images_serializers.CountImageSerializer(many=True)
    class Meta:
      model = models.User
      fields = (
        'username',
        'name',
        'bio',
        'website',
        'post_count',
        'followers_count',
        'following_count',
        'images'
      )

class ListUsersSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.User
    fields = (
      'id',
      'profile_image',
      'username',
      'name'
    )
  