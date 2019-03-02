from django.db import models
# #1-58 jyoon Sutdy encoding은 python2에서 사용하는거라고하는 ref address
# https://consideratecode.com/2017/08/25/what-does-python_2_unicode_compatible-do/
from django.utils.encoding import python_2_unicode_compatible

from yoongram.users import models as user_models
from yoongram.images import models as image_models


# Create your models here.
@python_2_unicode_compatible
# class Notification(image_models.TimeStampedModel):
class Notification(models.Model):

  # ### #1-58 안에 있는 중괄호 
  # 첫번째 param: 장고 패널을 위한 필드 
  # 두번째 param: DB를 위한 필드 
  TYPE_CHOICES = (
      ('like', 'Like'),
      ('comment', 'Comment'),
      ('follow', 'Follow')
  )

  # ### #1-58 jyoon Study 한 모델에 같은 모델을 Foreign키로 잡으면 에러!
  # - 다음과 같은 에러 내용을 볼 수 있다. reverse accessor for 'Notifications.to'... blah blah blah
  # - 그래서 related_name을 다르게 주어준다. 

  # ### #1-58 jyoon Study on_delete를 지정하라고 나왔다.
  # - 아래 django project api 참고 
  # https://docs.djangoproject.com/en/2.1/ref/models/fields/#django.db.models.ForeignKey
  creator = models.ForeignKey(user_models.User, on_delete=models.PROTECT, related_name='creator')
  to = models.ForeignKey(user_models.User, on_delete=models.PROTECT, related_name='to')
  notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
  image = models.ForeignKey(image_models.Image, on_delete=models.PROTECT, null=True, blank=True)
