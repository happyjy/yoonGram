from django.urls import path, re_path
from . import views

# from yoongram.users.views import (
#     user_list_view,
#     user_redirect_view,
#     user_update_view,
#     user_detail_view,
# )

app_name = "users"
urlpatterns = [
    path("explore/", view=views.ExploreUsers.as_view(), name="explore_users"),
    path("<int:user_id>/follow/", view=views.FollowUser.as_view(), name="follow_user"),
    path("<int:user_id>/unfollow/", view=views.UnFollowUser.as_view(), name="unfollow_user"),
    path("<slug:username>/", view=views.UserProfile.as_view(), name="user_profile"),
    path("<slug:username>/followers/", view=views.UserFollowerUser.as_view(), name="user_profile"),
    path("<slug:username>/following/", view=views.UserFollowingUser.as_view(), name="user_profile")
    # re_path(r"^(?P<username>[\w-]+)/$/", view=views.UserProfile.as_view(), name="user_profile")

    # #1-47 삭제 예정
    # path("", view=user_list_view, name="list"),
    # path("~redirect/", view=user_redirect_view, name="redirect"),
    # path("~update/", view=user_update_view, name="update"),
    # path("<str:username>/", view=user_detail_view, name="detail"),
]
