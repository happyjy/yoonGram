from rest_framework import serializers
from . import models

class CommentSerializer(serializers.ModelSerializer):

  # image = ImageSerializer()
  class Meta:
    model = models.Comment
    fields = '__all__' # 모든필드를 가지고온다!


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
  class Meta:
    model = models.Image
    # fields = '__all__'
    fields = (
      'id', 
      'file', 
      'location',
      'caption', 
      'commentsInImage', 
      'likes'
    )

