from django.urls import path
from . import views

### jyoon study
# urls.py 파일은 url입력을 통해서 view 접근을 도와주는 기능을 하는 파일 입니다~ 
# 

app_name = "images"
urlpatterns = [
    path("", view=views.Feed.as_view(), name="feed"),
    path("<int:image_id>/", view=views.ImageDetail.as_view(), name="imageDetail"),
    # 1-41/step1. take the id from the url
    path("<int:image_id>/likes/", view=views.LIkeImage.as_view(), name="like_image"),
    path("<int:image_id>/unlikes/", view=views.UnLIkeImage.as_view(), name="unlike_image"),
    path("<int:image_id>/comment/", view=views.CommentImage.as_view(), name="comment_image"),
    path("<int:image_id>/comment/<int:comment_id>", view=views.ModerateComments.as_view(), name="moderateComments_image"),
    path("comment/<int:comment_id>", view=views.Comment.as_view(), name="comment"),
    path("search/", view=views.Search.as_view(), name="search"),

    # urls, views 개념 익히기 위한 테스트성 코드 / #1-39 단계에서 언급
    path("all/", view=views.ListAllImages.as_view(), name="all_images"),
    path("comments/", view=views.ListAllComments.as_view(), name="all_comments"),
    path("likes/", view=views.ListAllLikes.as_view(), name="all_likes"),
]