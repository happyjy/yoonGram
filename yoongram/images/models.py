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
  creator = models.ForeignKey(user_model.User, on_delete=models.PROTECT, null=True)

  def __str__(self):
    return '{} - {}'.format(self.location, self.caption)
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