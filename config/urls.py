from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views import defaults as default_views
from django.views.generic import TemplateView
from rest_framework_jwt.views import obtain_jwt_token

from yoongram import views
from yoongram.views import ReactAppView

urlpatterns = [

    # Django Admin, use {% url 'admin:index' %}
    path(settings.ADMIN_URL, admin.site.urls),
    
    # User management
    # #1-72 Signing Up Loggin In
    re_path(r'^rest-auth/', include('rest_auth.urls')),
    re_path(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    # url(r'^rest-auth/', include('rest_auth.urls')),
    
    # #1-70 Setting up JWT token 
    # path("api-token-auth/", obtain_jwt_token),
    path(
      "users/",
      include("yoongram.users.urls", namespace="users"),
    ),

    path(
      "images/", 
      include("yoongram.images.urls", namespace="images"),
    ),

    path(
      "notifications/", 
      include("yoongram.notifications.urls", namespace="notifications"),
    ),

    path("accounts/", include("allauth.urls")),

    # Your stuff: custom urls includes go here
    # django에서 react 작업한것으로 front를 호출하는 장소 
    # re_path("", views.ReactAppView.as_view()),
] + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        path(
            "400/",
            default_views.bad_request,
            kwargs={"exception": Exception("Bad Request!")},
        ),
        path(
            "403/",
            default_views.permission_denied,
            kwargs={"exception": Exception("Permission Denied")},
        ),
        path(
            "404/",
            default_views.page_not_found,
            kwargs={"exception": Exception("Page not Found")},
        ),
        path("500/", default_views.server_error),
    ]
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
