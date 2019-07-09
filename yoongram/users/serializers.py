from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer

from yoongram.images import serializers as images_serializers
from yoongram.users.admin import User
from yoongram.users.forms import User

from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email

from . import models


class UserProfileSerializer(serializers.ModelSerializer):
  images = images_serializers.CountImageSerializer(many=True)

  # ReadOnlyField()
  # : 이 serialize를 만들때 자동으로 만드는 필드 
  # : 예로 readonly해준 필드는 수정 불가능 한 필드로 수정 불가능한 필드로 인식하게 한다.
  # https://www.django-rest-framework.org/api-guide/fields/#readonlyfield
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

  following = serializers.SerializerMethodField()
  print("################# follwoing")
  print(following)
  class Meta:
    model = models.User
    fields = (
      'id',
      'profile_image',
      'username',
      'name',
      'following'
    )
  
  def get_following(self, obj):
    if 'rqeust' in self.context:
      request = self.context['request']
      print("######################################")
      print(request)
      if obj in request.user.following.all():
        return True
    return False

class SignUpSerializer(RegisterSerializer):

    name = serializers.CharField(required=True, write_only=True)

    def get_cleaned_data(self):
        return {
            'name': self.validated_data.get('name', ''),
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', '')
        }
    
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        user.save()
        return user