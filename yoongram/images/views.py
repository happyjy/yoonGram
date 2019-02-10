# from django.shortcuts import render
from pkg_resources import require
from rest_framework.response import Response
from rest_framework.views import APIView

from yoongram.images.models import Like
from yoongram.users.views import user_detail_view

from . import models, serializers


class Feed(APIView):
  def get(self, request, format=None):
    #1-39 follow하는 사람의 최근 사진이 보이도록 코딩!
    user = request.user
    # 로그인하는 유저의 follwing을 조회
    following_users = user.following.all()
    # print(following_users)

    image_list = []

    for following_user in following_users:

      # print(following_user)
      # jyoon study : iterator(for), 갯수제한... 와놀라움. 
      # print(following_user.images.all()[:1])
      user_images = following_user.images.all()[:2]

      for image in user_images:
          image_list.append(image)

  
    # print(image_list)
    # image_list : following을 기준으로 image가 있다.
    # 해결하기 위해 python sorted 기능으로 image_list 데이터를 등록한 날짜 기준으로 정렬!
    # sorted_list = sorted(image_list, key=get_key, reverse=True )
    sorted_list = sorted(image_list, key=lambda img: img.created_at , reverse=True)
    print(sorted_list)

    serializer = serializers.ImageSerializer(sorted_list, many=True)
    
    # return Response(status=200)
    return Response(serializer.data)
def get_key(image):
    return image.created_at


# urls, views 개념 익히기 위한 테스트성 코드 / #1-39 단계에서 언급
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

# 1-41/step0. create the url and the view
class LikeImage(APIView):
  def get(self, request, format=None):
    
    # print(image_id)

    return Response(status=200)