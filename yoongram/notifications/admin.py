from django.contrib import admin
from . import models

# #1-58 admin > Imageadmin 패널에 템플릿을 설정해주기 위해서 

@admin.register(models.Notification)
class NotificationAdmin(admin.ModelAdmin):

  list_display = (
      'creator',
      'to',
      'notification_type'
  )
