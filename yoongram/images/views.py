# from django.shortcuts import render
from pkg_resources import require
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

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
class LikeOnImage(APIView):
  def get(self, request, image_id, format=None):
    
    print('### LikeOnImage APIView')
    print(image_id)
    print(request)

    user = request.user
    # #1-44 Restricting Likes 
    # #1-44 step1 이미지 있나 확인!
    try:
      found_image = models.Image.objects.get(id=image_id)
      print(found_image)  # models.py > Image class > __str__ 포멧 형식

    except models.Image.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

    # #1-44 step2 이미지가 있다면 삭제!
    try:
      preexisiting_like = models.Like.objects.get(
        creator=user,
        image=found_image
      )
      preexisiting_like.delete()
      
      return Response(status=status.HTTP_204_NO_CONTENT)

    except models.Like.DoesNotExist:
      # #1-44 step3 이미지가 없다면 저장~
        new_like = models.Like.objects.create(
          creator=user,
          image=found_image
        )

        new_like.save()
        
    return Response(status=status.HTTP_201_CREATED)


class CommentOnImage(APIView):
  def post(self, request, image_id, format=None):
    print('### CommentOnImage APIView')
    print(request.data) #[local host address]/images/6/comment/ 페이지에서 입력한 메세지의 내용

    user = request.user

    try: 
      found_image = models.Image.objects.get(id=image_id)
    except models.Image.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = serializers.CommentSerializer(data=request.data)

    # 1-45 [#study] 댓글저장 시 font-end에서 받아 저장할 filed는 message가 유일!
    # 그래서 font-end에서 넘어온 data가 json type filed중 message가 있는지 
    # serializer를 통해 python object data type으로 변경한 뒤  
    # is_valid()로 확인한뒤 저장하는 로직 생성!
    if serializer.is_valid():
      # print('### I am valid')
      serializer.save(creator=user, image=found_image)
      return Response(data=serializer.data, status=status.HTTP_201_CREATED)
    else:
      return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQEST)

    return Response(status=status.HTTP_201_CREATED)