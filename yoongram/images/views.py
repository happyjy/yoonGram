# from django.shortcuts import render
from pkg_resources import require
from rest_framework.response import Response
from rest_framework.views import APIView

from yoongram.images.models import Like

from . import models, serializers


# Jyoon 설명
# 여기에서 뷰를 만들었다면 !
# url에서 이곳(뷰)을 접근할 수 있는 방법이 필요하다!
# 그것은! => urls.py파일에서 url, views를 추가해야한다!11

# Create your views here.
class ListAllImages(APIView):
  def get(self, request, format=None):
    all_images = models.Image.objects.all()
    serializer = serializers.ImageSerializer(all_images, many=True)
    return Response(data=serializer.data) # finish function

class ListAllComments(APIView):
  def get(self, request,format=None):
    # 로그인한 유저가 생선한 댓글만 보기작업
    # user_id = request.user.id
    # all_comments = models.Comment.objects.filter(creator=user_id)

    # #1-38 query
    # all_comments = models.Comment.objects.filter(creator=1)
    # all_comments = models.Comment.objects.filter(id=2)
    
    all_comments = models.Comment.objects.all()
    serializer = serializers.CommentSerializer(all_comments, many=True)
    return Response(data=serializer.data)

class ListAllLikes(APIView):
  def get(self, request, format=None):

    # check request value 
    print(request.scheme)

    all_Like = models.Like.objects.all()
    serializer = serializers.LikeSerializer(all_Like, many=True)
    return Response(data=serializer.data)