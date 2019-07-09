from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from . import models, serializers
from yoongram.notifications import views as notifications_views

class ExploreUsers(APIView):
  def get(self, request, format=None):
    last_five = models.User.objects.all()[:5]
    serializer = serializers.ListUsersSerializer(last_five, many=True, context={"request": request})

    return Response(data=serializer.data, status=status.HTTP_200_OK)


class FollowUser(APIView):
  def post(self, request, user_id, format=None):
    user = request.user

    try:
      user_to_follow = models.User.objects.get(id=user_id)
    except models.User.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
    #https://docs.djangoproject.com/en/1.11/ref/models/relations/#django.db.models.fields.related.RelatedManager.add
    user.following.add(user_to_follow)
    user.save()

    #1-49 Associate user_to_follow with User
    notifications_views.create_notification(user, user_to_follow, 'follow')

    return Response(status=status.HTTP_200_OK)


class UnFollowUser(APIView):
  def delete(self, request, user_id, format=None):
    user = request.user

    try:
      user_to_unfollow = models.User.objects.get(id=user_id)
    except models.User.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
    user.following.remove(user_to_unfollow)
    user.save()
    return Response(status=status.HTTP_200_OK)


class UserProfile(APIView):
  def get_user(self, username):
    
    try:
      found_user = models.User.objects.get(username=username)
      return found_user
    except models.User.DoesNotExist:
      return None
  
  def get(self, request, username, format=None):
    print(username)
    found_user = self.get_user(username)

    print("### UserProfile get ###")
    print(found_user)
    if found_user is None:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = serializers.UserProfileSerializer(found_user)

    print(serializer.data)
    return Response(data=serializer.data, status=status.HTTP_200_OK)

  def put(self, request, username, format=None):
    user = request.user

    print("### user DATA")
    print(request)
    print(user) #yjy
    print(user.username) #yjy

    found_user = self.get_user(username)

    if found_user is None:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
    elif found_user.username != user.username:
      return Response(status=status.HTTP_400_BAD_REQUEST)

    else:
      serializer = serializers.UserProfileSerializer(
        found_user, data=request.data, partial=True)

      print("### serializer : ", serializer)
    #     UserProfileSerializer(<User: yjy>, data={'bio': 'abd'}, partial=True):
    #     profile_image = ImageField(allow_null=True, max_length=100, required=False)
    #     username = CharField(help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, validators=[<django.contrib.auth.validators.UnicodeUsernameValidator object>, <UniqueValidator(queryset=User.objects.all())>])
    #     name = CharField(allow_blank=True, label='Name of User', max_length=255, required=False)
    #     bio = CharField(allow_null=True, required=False, style={'base_template': 'textarea.html'})
    #     website = URLField(allow_null=True, max_length=200, required=False)
    #     post_count = ReadOnlyField()
    #     followers_count = ReadOnlyField()
    #     following_count = ReadOnlyField()
    #     images = CountImageSerializer(many=True):
    #     id = IntegerField(label='ID', read_only=True)
    #     file = ImageField(max_length=100)
    #     comment_count = ReadOnlyField()
    #     like_count = ReadOnlyField()
      print("### found_user : ", found_user) #yjy
      print("### request.data : ", request.data) #변경data eg {"bio": "abc"}

      if serializer.is_valid():
        serializer.save()
        return Response(data=serializer.data, status=status.HTTP_200_OK)
      else:
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserFollowerUser(APIView):
  def get(self, request, username, format=None):
    try:
      found_user = models.User.objects.get(username=username)
      print(username)
      print(found_user)

    except models.User.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

    user_followers = found_user.followers.all()
    serializer = serializers.ListUsersSerializer(user_followers, many=True, context={"request": request})

    return Response(data=serializer.data, status=status.HTTP_200_OK)


# class Based Viwes
class UserFollowingUser(APIView):
  def get(self, request, username, format=None):
    try:
      found_user = models.User.objects.get(username=username)
    except models.User.DeosNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

    user_following = found_user.following.all()
    serializer = serializers.ListUsersSerializer(user_following, many=True, context={"request": request})

    return Response(data=serializer.data, status=status.HTTP_200_OK)


# function Based Views 
# views: path("<slug:username>/following/", view=views.UserFollowingUserFBV, name="user_profile")
# def UserFollowingFBV(request, username):
#   if request.method == 'GET':
#     try:
#       found_user = models.User.objects.get(username=username)
#     except models.User.DeosNotExist:
#       return Response(status=status.HTTP_404_NOT_FOUND)

#     user_following = found_user.following.all()
#     serializer = serializers.ListUsersSerializer(user_following, many=True)

#     return Response(data=serializer.data, status=status.HTTP_200_OK)

class Search(APIView):
  def get(self, request, format=None):
    # http://127.0.0.1:8000/users/search/?username=y
    username = request.query_params.get('username', None)
    
    print("### SEARCH ###")
    print(username)
    if username is not None:
      users = models.User.objects.filter(username__istartswith=username)
      serializer = serializers.ListUsersSerializer(users, many=True, context={"request": request})
      return Response(data=serializer.data, status=status.HTTP_200_OK)
    else:
      return Response(status=status.HTTP_400_BAD_REQUEST)

class ChangePassword(APIView):

  def put(self, request, username, format=None):

      user = request.user
      # step1 로그인한 유저 확인
      if user.username == username:
        # step2 현재 비밀번호(DB)와 입력한 비밀번호가 같은지 확인 
        current_password = request.data.get('current_password', None)
        # step3 입력한 새 비번을 받아 저장한다.
        if current_password is not None:
          passwords_match = user.check_password(current_password)
          if passwords_match:
            new_password = request.data.get('new_password', None)
            if new_password is not None:
              user.set_password(new_password)
              user.save()
              return Response(status=status.HTTP_200_OK)
            else:
              return Response(status=status.HTTP_400_BAD_REQUEST)
          else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
          return Response(status=status.HTTP_400_BAD_REQUEST)
      else:
        return Response(status=status.HTTP_400_BAD_REQUEST)