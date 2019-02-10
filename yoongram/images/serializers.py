from rest_framework import serializers
from . import models
from yoongram.users import models as user_model



class FeedUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = user_model.User
    fields = (
      'username',
      'profile_image'
    ) 

class CommentSerializer(serializers.ModelSerializer):
  
  creator = FeedUserSerializer()

  # image = ImageSerializer()
  class Meta:
    model = models.Comment
    # fields = '__all__' # 모든필드를 가지고온다!
    fields = (
      'id',
      'message',
      'creator'
    )


class LikeSerializer(serializers.ModelSerializer):

  # jyoonStudy#1-34 : nested Serializer!
  # image filed는 foreign key value 로 하지 말고
  # Serializer value로 설정(nested Serializer설정을 통해서)
  # image = ImageSerializer()

  class Meta:
    model = models.Like
    fields = '__all__'



class ImageSerializer(serializers.ModelSerializer):

  #jyoonStudy: nested Serailizer
  commentsInImage = CommentSerializer(many=True)
  likes = LikeSerializer(many=True)
  creator = FeedUserSerializer();

  class Meta:
    model = models.Image
    # fields = '__all__'
    fields = (
      'id', 
      'file', 
      'location',
      'caption', 
      'commentsInImage', 
      'likes',
      'like_count',
      'creator'
    )

