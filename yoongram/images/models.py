from django.db import models
from yoongram.users import models as user_model
from django.utils.encoding import python_2_unicode_compatible
from taggit.managers import TaggableManager

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
  # "related_name"을 한이유는 뭘까?
  # -> 유저에 해당하는 사진을 select 하기 위한 설정이다
  # -> 헷갈리다면 아래 Comment, Like에도 image 필드 역시 related_name설정을 해뒀는데 이것은
  # => rleated_name 설정으로 유저가 생성한 모든 이미지들은 이제 필드 이름 images안에 있다 !!!
  creator = models.ForeignKey(
    user_model.User, on_delete=models.PROTECT, null=True, related_name='images')
  tags = TaggableManager()
    
  # property 설정으로 디비에는 존재하지 않지만 모델에 존재하는 필드를 설정할 수 있다.
  # #1-39: hidden field
  # jyoon 다시 공부해봐야 할 필요가 있음. 
  @property
  def like_count(self):
    return self.likes.all().count()

  # #1-51 Getting User Profile
  # circular dependency 때문에 설정
  @property
  def comment_count(self):
    return self.comments.all().count()

  def __str__(self):
    return '### THIS IS IMAGE STRING VALUE : {} - {}'.format(self.location, self.caption)
  
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
  image = models.ForeignKey(Image, on_delete=models.PROTECT, related_name="comments")

  def __str__(self):
    return '메세지 입니다. : {}'.format(self.message)

@python_2_unicode_compatible
class Like(TimeStampedModel):

  """ Like Model """

  creator = models.ForeignKey(user_model.User, on_delete=models.PROTECT, null=True)
  # jyoon Study : Hidden Model Fields setting -> rlated_name="likes" property
  image = models.ForeignKey(Image, on_delete=models.PROTECT, related_name='likes')

  def __str__(self):
    return 'User: {} - Image caption: {}'.format(self.creator.username, self.image.caption)