from django.urls import path
from . import views

### jyoon study
# urls.py 파일은 url입력을 통해서 view 접근을 도와주는 기능을 하는 파일 입니다~ 
# 

app_name = "images"
urlpatterns = [
    path("all/", view=views.ListAllImages.as_view(), name="all_images"),
    path("comments/", view=views.ListAllComments.as_view(), name="all_comments"),
    path("likes/", view=views.ListAllLikes.as_view(), name="all_likes"),
]