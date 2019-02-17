from django.urls import path
from . import views

### jyoon study
# urls.py 파일은 url입력을 통해서 view 접근을 도와주는 기능을 하는 파일 입니다~ 
# 

app_name = "images"
urlpatterns = [
    path("", view=views.Feed.as_view(), name="feed"),
    # 1-41/step1. take the id from the url
    path("<int:image_id>/like/", view=views.LikeOnImage.as_view(), name="like_image"),
    path("<int:image_id>/comment/", view=views.CommentOnImage.as_view(), name="like_comment"),

    # urls, views 개념 익히기 위한 테스트성 코드 / #1-39 단계에서 언급
    path("all/", view=views.ListAllImages.as_view(), name="all_images"),
    path("comments/", view=views.ListAllComments.as_view(), name="all_comments"),
    path("likes/", view=views.ListAllLikes.as_view(), name="all_likes"),
]