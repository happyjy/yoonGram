from rest_framework import serializers

from yoongram.images import serializers as images_serializers
from yoongram.users.admin import User
from yoongram.users.forms import User

from . import models


class UserProfileSerializer(serializers.ModelSerializer):
  images = images_serializers.CountImageSerializer(many=True)

  # ReadOnlyField()
  # : 이 serialize를 만들때 자동으로 만드는 필드 
  # : 예로 readonly해준 필드는 수정 불가능 한 필드로 수정 불가능한 필드로 인식하게 한다.
  # https://www.django-rest-framework.org/api-guide/fields/#readonlyfield
  #
  post_count = serializers.ReadOnlyField()
  followers_count = serializers.ReadOnlyField()
  following_count = serializers.ReadOnlyField()
  class Meta:
    model = models.User
    fields = (
      'profile_image',
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