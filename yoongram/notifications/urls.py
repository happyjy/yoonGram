from django.urls import path
from . import views

app_name = "notifications"
urlpatterns = [
    path("", view=views.Notifications.as_view(), name="notifications")
    # path("<int:image_id>/like/", view=views.Notifications.as_view(), name="like_image")
]