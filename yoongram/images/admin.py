from django.contrib import admin
from . import models
# Register your models here.

@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
  # admin > Imageadmin 패널에 템플릿을 설정해주기 위해서 
  # pass를 주석 처리하고 아래와 같은 설정을 함. 
  # pass 

  # Move to Link to modifiy comtents
  list_display_links = (
    'location',
    'caption',
  )

  search_fields = (
    'location',
    'created_at',
    'updated_at',
  )

  list_filter = (
    'location',
    'creator',

  )

  # Create table list Image admin page 
  list_display = (
    'file',
    'location',
    'caption',
    'creator',
    'created_at',
    'updated_at',
  )
@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
  # pass
  list_display = (
    'creator',
    'image',
    'created_at',
    'updated_at',
  )

@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
  # pass
  list_display = (
    'message',
    'creator',
    'image',
    'created_at',
    'updated_at',
  )

