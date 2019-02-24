from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from . import models, serializers


class ExploreUsers(APIView):
  def get(self, request, format=None):
    last_five = models.User.objects.all()[:5]
    serializer = serializers.ListUsersSerializer(last_five, many=True)

    return Response(data=serializer.data, status=status.HTTP_200_OK)


class FollowUser(APIView):
  def post(self, request, user_id, format=None):
    user = request.user

    try:
      user_to_follow = models.User.objects.get(id=user_id)
    except models.User.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    
    #1-49 Associate user_to_follow with User
    #https://docs.djangoproject.com/en/1.11/ref/models/relations/#django.db.models.fields.related.RelatedManager.add
    user.following.add(user_to_follow)
    user.save()

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
  def get(self, request, username, format=None):
    try:
      found_user = models.User.objects.get(username=username)
    except models.User.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = serializers.UserProfileSerializer(found_user)

    print(serializer.data)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFollowerUser(APIView):
  def get(self, request, username, format=None):
    try:
      found_user = models.User.objects.get(username=username)
      print(username)
      print(found_user)
    except models.User.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

    user_followers = found_user.followers.all()
    serializer = serializers.ListUsersSerializer(user_followers, many=True)

    return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFollowingUser(APIView):
  def get(self, request, username, format=None):
    try:
      found_user = models.User.objects.get(username=username)
    except models.User.DeosNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

    user_following = found_user.following.all()
    serializer = serializers.ListUsersSerializer(user_following, many=True)

    return Response(data=serializer.data, status=status.HTTP_200_OK)