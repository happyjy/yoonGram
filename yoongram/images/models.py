from django.db import models
from yoongram.users import models as user_model
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.
@python_2_unicode_compatible
class TimeStampedModel(models.Model):

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta: 
    abstract = True
@python_2_unicode_compatible
class Image(TimeStampedModel):
  
  """ Image Model """

  file = models.ImageField()
  location = models.CharField(max_length=140)
  caption = models.TextField()
  # related_name을 한이유는 뭘까? -> 
  # -> 유저에 해당하는 사진을 select 하기 위한 설정이다
  # -> 헷갈리다면 아래 Comment, Like에도 image 필드 역시 related_name설정을 해뒀는데 이것은
  # => rleated_name 설정으로 유저가 생성한 모든 이미지들은 이제 필드 이름 images안에 있다 !!!
  creator = models.ForeignKey(
    user_model.User, on_delete=models.PROTECT, null=True, related_name='images')
    
  def __str__(self):
    return '{} - {}'.format(self.location, self.caption)
  
  # meta 설정으로 모델설정한다 
  # - ordering:정렬(생선한 날짜 역순)
  class Meta:
    ordering = ['-created_at']

@python_2_unicode_compatible
class Comment(TimeStampedModel):
  
  """ Comment Model """

  message = models.TextField()
  creator = models.ForeignKey(user_model.User, on_delete=models.PROTECT, null=True)
  # jyoon Study : related_name은 serializers.py에서 사용하는 name임.
  # jyoon Study : Hidden Model Fields setting -> rlated_name="comments" property
  image = models.ForeignKey(Image, on_delete=models.PROTECT, related_name="commentsInImage")

  def __str__(self):
    return '메세지 압니다. : {}'.format(self.message)

@python_2_unicode_compatible
class Like(TimeStampedModel):

  """ Like Model """

  creator = models.ForeignKey(user_model.User, on_delete=models.PROTECT, null=True)
  # jyoon Study : Hidden Model Fields setting -> rlated_name="likes" property
  image = models.ForeignKey(Image, on_delete=models.PROTECT, related_name='likes')

  def __str__(self):
    return 'User: {} - Image caption: {}'.format(self.creator.username, self.image.caption)